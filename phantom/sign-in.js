var inject = require('./inject')

var signedIn = false

module.exports = function signin(page) {
  inject(page, {email: email, password: password})
  if(signedIn) {
    console.log('sign in failed - check your credentials and try again')
    phantom.exit()
  }
  signedIn = true

  page.evaluate(function() {
    var email = window.vars.email
    var password = window.vars.password

    $('#email').val(email)
    $('#password').val(password)

    $('form').submit()
  })
}
