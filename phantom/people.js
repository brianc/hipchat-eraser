var inject = require('./inject')

module.exports = function people(page) {
    inject(page, {name: name})

    page.evaluate(function () {
        var getMemberId = function ($link) {
            var href = $link.attr('href')
            var parts = href.split('/')
            return parts[parts.length - 1]
        }

        var $nameLinks = $('a.name')
        var wantedName = window.vars.name

        var found = false
        var names = []

        $nameLinks.each(function () {
            var $link = $(this)

            var linkName = $link.text().toLowerCase()
            names.push(linkName)

            if (linkName.indexOf(wantedName.toLowerCase()) > -1) {
                var id = getMemberId($link)
                console.log("found member id: ", id)
                var target = window.location.origin + '/history/member/' + id
                found = true
                window.location = target
            }
        })

        if (!found) {
            console.log('Could not find', wantedName.toLowerCase(), 'in names', names)
            console.log('script cannot continue')
        }
    })
}
