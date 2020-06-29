module.exports = {
  getNextHeadingLevel(currentLevel) {
    return parseInt(currentLevel, 10) + 1;
  },
  getReadingTime(text) {
    const wordsPerMinute = 200;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  },
  getImageInfo(fileName) {
  	const probe = require('probe-image-size');
  	fileName = __dirname + '/..' + fileName.replace(/^\/?/, '/');
  	let data = require('fs').readFileSync(fileName);
  	let info = probe.sync(data);
  	return info;
  }
};
