var inject = require('./inject')
var time = require('./time')

module.exports = function member() {
  inject(page, {time: time()})

  page.evaluate(function() {

    //a cheap version of async.map
    var each = function(items, action, done) {
      var results = []

      var run = function() {
        if(!items.length) return done(null, results)

          action(items.shift(), function(err, res) {
            if(err) return done(err)
              results.push(res)
            run()
          })
      }

      run()
    }

    //remove a single message
    //by submitting a form element
    //and calling back when the ajax is done
    var rm = function(formEl, done) {
      $(formEl).submit(function(event) {
        event.preventDefault()

        var form = $(this)
        var method = form.attr('method')
        var action = form.attr('action')
        var data = form.serialize()
        console.log('delete', data)
        $.ajax({
          type: method,
          url: action,
          data: data,
          complete: function() {
            done()
          }
        })
      }).submit()
    }

    var total = $('.delete form').length
    console.log('deleting ', total, 'messages')

    var formEls = $.makeArray($('.delete form'))

    //navigate to previous page in history
    var navigateToYesterday = function() {
      //the date for the next page navigation
      var date = new Date(window.vars.time)

      var parts = window.location.pathname.split('/')

      var pad = function(val) {
        return val < 10 ? ('0' + val) : val
      }

      var month = function() {
        return pad(date.getMonth() + 1)
      }

      var day = function() {
        return pad(date.getDate())
      }

      var stamp = '/' + date.getFullYear() + '/' + month() + '/' + day()
      var target = window.location.origin + parts.slice(0, 4).join('/') + stamp

      //do not traverse into 2013
      if(date.getFullYear() < 2014) return console.log('2014 deleted. Script complete.');
      window.location = target
    }

    return each(formEls, rm, navigateToYesterday)

    setTimeout(navigateToYesterday, 5000)
  })
}
