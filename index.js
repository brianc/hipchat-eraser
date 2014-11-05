var prompt = require('prompt')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path
var path = require('path')
var spawn = require('child_process').spawn

prompt.start()

var options = {
  properties: {
    email: {
      description: 'hipchat email address',
      required: true
    },
    password: {
      description: 'hipchat password (hidden)',
      required: true,
      hidden: true
    },
    member: {
      description: 'Name of hipchat user to delete history. You do not need to supply the entire name. e.g. "carlson" will match "Brian Carlson"',
      required: true
    }
  }
}

prompt.get(options, function(err, res) {
  console.log('spawning phantomjs and nuking history for you &', res.member)
  var args = [
    path.join(__dirname, 'phantom/run.js'),
    res.email,
    res.password,
    res.member
  ]
  var proc = spawn(binPath, args)
  proc.stdout.pipe(process.stdout)
  proc.stderr.pipe(process.stderr)
})
