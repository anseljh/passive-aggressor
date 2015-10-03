var irregulars = require('english-irregular-verbs');

// Extract all past participles.
var irregularParticiples = [];
irregulars.forEach(function(verb) {
  verb.participles.forEach(function(participle) {
    irregularParticiples.push(participle);
  });
});

var toBe = [ 'am', 'are', 'were', 'being', 'is', 'been', 'was', 'be' ];

// Write a Node module that exports a regular expression to standard output.
process.stdout.write(
  'module.exports = ' +
  'new RegExp("(\\\\b(' +
  toBe.join('|') +
  ')\\\\b\\\\s*([\\\\w]+ed|' +
  irregularParticiples.join('|') +
  ')\\\\b)", "gi")\n'
);
