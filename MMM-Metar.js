Module.register("MMM-Metar", {

    defaults: {
        icaoList: ['YBAF', 'YBBN', 'YAMB', 'YBCG', 'YBOK','YBNA', 'YSTW'],
        fontSize: 30
    },
    start: function() {
        this.results = [];
        this.getResults();
    },
    getResults: function() {
        var self = this;
        this.config.icaoList.forEach(function(icao) {
            var url = 'http://metar.online/metar/' + icao + "/*";
            self.sendSocketNotification('MMM_METAR', url);
        });
    },
    getDom: function() {
        var wrapper = document.createElement('div');
        this.results.forEach(function(entry) {
            var entryDiv = document.createElement('div');
            entryDiv.innerHTML = entry;
            entryDiv.setAttribute('font-size', this.config.fontSize +'px');
            wrapper.appendChild(entryDiv);
        });
        return wrapper;
    },
    socketNotificationReceived: function(notification, payload) {
        this.results.push(payload);
        this.updateDom();
    }
});