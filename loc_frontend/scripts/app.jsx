var React = require('react')
var router = require('./stores/RouterStore.react.jsx').getRoute();
window.React = React;

router.run(function(Handler, state) :return_type {
  React.render(<Handler/>, document.getElementById('content'))
});
