/*
 * Serve content over a socket
 */
var _ = require('lodash');
var sleep = require('sleep');

module.exports = function (socket) {
  socket.on('send:url', function(data, fn) {
    var startingUrl = data.url;
    var scrapedUrls = [];
    var i = 0;

    console.log('starting crawler:', startingUrl);

    while (i < 20) {
      var newUrl = startingUrl + '/' + Math.random().toString(36).substring(7);
      scrapedUrls.push(newUrl);
      console.log('scraped', newUrl);

      // send scraped url to front end
      socket.emit('get:url', {
        url: newUrl
      });

      sleep.sleep(1);

      i++;
    }
  });
};
