var passiveVoice = require('passive-voice')

var annotate = function(content) {
  /*
    return a function to make a Common Form annotation for content
    See: https://github.com/commonform/commonform-annotations

    for content = 'Bob was hit by a bus.'
    match will be = { index: 4, offset: 7 }
  */
  return function(match) {
    var substring = content.substring(match.index, match.index + match.offset);
    return {
      "message": "The phrase \"" + substring + "\" is passive voice.",
      "level": "info",
      "path": ["content", 0],
      "source": "passive-aggressor",
      "url": null
    }
  }
}

var checkPassive = function(form) {
  //TODO: handle subforms
  var content = form['content'][0];

  return passiveVoice(content).map(annotate(content));
}

module.exports = checkPassive;
