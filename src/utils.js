const core = require('@actions/core')

module.exports = {
  fail (error) {
    core.setFailed(error.message)
  }
}
