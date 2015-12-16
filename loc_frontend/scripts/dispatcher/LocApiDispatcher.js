var LocApiConstants = require('../constants/LocApiConstants.js');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PayloadSources = LocApiConstants.PayloadSources;

var LocApiDispatcher = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
   var payload = {
     source: PayloadSources.VIEW_ACTION,
     action: action
   };
   this.dispatch(payload);
 }
});

module.exports = LocApiDispatcher;
