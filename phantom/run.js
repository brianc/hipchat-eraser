var page = require('webpage').create()
var url = 'http://www.hipchat.com/sign_in'
var system = require('system')

var email = system.args[1]
var password = system.args[2]
var name = system.args[3]

if(system.args.length < 4) {
  console.log('usage: phantomjs index.js <hipchat-email> <hipchat-password> <fuzzy-name-of-person-to-delete>')
  phantom.exit()
}

page.open(url, function(status) {
  if(status != 'success') {
    console.log(status)
    throw new Error('Unable to request ' + url)
  }
})

var actions = {
  '/sign_in': require('./sign-in'),
  '/home': function() {
    page.evaluate(function() {
      var loc = window.location.origin + '/people'
      window.location = loc
    })
  },
  '/people': require('./people'),
  '/history/member': require('./member')
}

page.onUrlChanged = function(target) {
  console.log('New URL:', target)
  var dispatch = function(key) {
    page.onLoadFinished = function() {
      console.log('executing action for', key)
      actions[key](page)
    }
  }
  for(var key in actions) {
    if(target.indexOf(key) > -1) {
      return dispatch(key)
    }
  }
}

page.onConsoleMessage = function(msg) {
  console.log('from page:', msg)
}
