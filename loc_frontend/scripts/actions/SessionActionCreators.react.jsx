var LocApiDispatcher = require('../dispatcher/LocApiDispatcher.js');
var LocApiConstants = require('../constants/LocApiConstants.js');
var WebApiUtils = require('../utils/WebApiUtils.js');

var ActionTypes = LocApiConstants.ActionTypes;

module.exports = {

  signup: function(email, username, password, passwordConfirmation) {
    LocApiDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      email: email,
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation
    });
    WebApiUtils.signup(email, username, password, passwordConfirmation);
  },

  login: function(email, password) {
    LocApiDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebApiUtils.login(email, password);
  },

  logout: function() {
    LocApiDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
  }

};
