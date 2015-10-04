var irregularVerbs = require('english-irregular-verbs');

// Extract all past participles.
var irregularParticiples = [];
Object.keys(irregularVerbs).forEach(function(infinitive) {
  var verb = irregularVerbs[infinitive];
  verb.participles.forEach(function(participle) {
    irregularParticiples.push(participle);
  });
});

var toBe = [ 'am', 'are', 'were', 'being', 'is', 'been', 'was', 'be' ];

// Write to standard output ...
process.stdout.write(
  // a Node module that exports ...
  'module.exports = ' +
  // a regular expression ...
  'new RegExp("' +
    // entirely enclosed in a capture group ...
    '(' +
      // that matches a form of "to be" ...
      '\\\\b' +
      '(' + toBe.join('|') + ')' +
      '\\\\b' +
      // followed by space ...
      '\\\\s*' +
      '(' +
        // and a word that ends in "-ed" ...
        '[\\\\w]+ed' +
        // or ...
        '|' +
        // an irregular past participle ...
        irregularParticiples.join('|') +
      ')' +
      '\\\\b' +
    ')' +
  '",' +
  // that one or more case-insensitive substrings.
  ' "gi")\n'
);
