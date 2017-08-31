var m = require("mithril")

var Registrations = {
    total: 0,
    update_total: function() {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        })
        .then(function(result) {
            Registrations.total = result.data
        })
    },
}
