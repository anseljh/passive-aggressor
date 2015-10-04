var annotator = require('commonform-regexp-annotator');
var re = require('./re');

function makeAnnotation(form, path, expression, match) {
  var phrase = match[1];
  return {
    level: 'info',
    message: 'The phrase "' + phrase + '" is passive voice.',
    path: path,
    source: 'passive-aggressor',
    url: null
  };
}

module.exports = annotator([re], makeAnnotation);
