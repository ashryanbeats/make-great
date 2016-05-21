const request = require('request-promise');

module.exports = {
  index: _index 
}

function _index(req, res, next) {
  let options = {
    uri: 'https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=0&grnlimit=10&format=json'
  }

  request(options)
    .then(function(data) {
      data = JSON.parse(data);
      let pages = data.query.pages;

      res.send(pages);
    });
}