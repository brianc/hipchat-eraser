module.exports = function inject(page, vars) {
    var js = "function() {window.vars = " + JSON.stringify(vars) + "}"
    page.evaluateJavaScript(js)
}
