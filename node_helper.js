const NodeHelper = require('node_helper');
const request = require('request');

module.exports = NodeHelper.create({
    getMetar: function(site) {
        var self = this;
        request({
            url: site,
            method: 'GET',
        }, function(error, response, body) {
            self.sendSocketNotification('MMM_METAR_RESULT', body);
        });

        setTimeout(this.getMetar(), 15000);
    },
    socketNotificationReceived: function(notification, payload) {
        this.getMetar(payload);
    },
});
