var checkPassive = require('passive-voice')

module.exports = function (form, options) {
  return checkPassive(form['content'][0], options)
}
