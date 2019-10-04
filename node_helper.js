const NodeHelper = require('node_helper');
const request = require('request');

module.exports = NodeHelper.create({
    getMetar: function(site) {
        request({
            url: site,
            method: 'GET',
        }, function(error, response, body) {
            // if (!error && response.statuscode == 200) {
                this.sendSocketNotification('MMM_METAR_RESULT', 'test');
            // }
        });
    },
    socketNotificationReceived: function(notification, payload) {
        this.getMetar(payload);
    },
});
