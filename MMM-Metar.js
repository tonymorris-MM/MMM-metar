Module.register("MMM-Metar", {

    defaults: {
        icaoList: ['YBAF', 'YBBN', 'YAMB', 'YBCG', 'YBOK','YBNA', 'YSTW']
    },
    start: function() {
        this.result = null;
        this.sendSocketNotification('MMM_METAR', 'http://google.com')
    },
    getDom: function() {
        var wrapper = document.createElement('div');
        // this.config.icaoList.forEach(function(icao) {
        //     var url = "http://metar.online/metar/" + icao + "/1";
        //     // var entry = document.createElement("div");
        //     // entry.innerHTML = this.getMetar(url);
        //     // wrapper.appendChild(entry);
        //     Log.log(this.getMetar(url));
        // });
        if (this.result) {
            wrapper.innerHTML = this.result;
        }

        return wrapper;
    },
    socketNotificationReceived: function(notification, payload) {
        this.result = payload;
        this.updateDom();
    }
});