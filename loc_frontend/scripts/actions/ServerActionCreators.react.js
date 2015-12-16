var LocApiConstants = require('../constants/LocApiConstants.js');

var ActionTypes = LocApiConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    LocApiDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  }
};