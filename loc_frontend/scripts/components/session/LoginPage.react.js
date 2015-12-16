var SessionActionCreators = require('../../actions/SessionActionCreators.react.jsx');
var SessionStore = require('../../stores/SessionStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');

var LoginPage = React.createClass({displayName: "LoginPage",

  getInitialState: function() {
    return { errors: [] };
  },

  componentDidMount: function() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ errors: SessionStore.getErrors() });
  },

  _onSubmit: function(e) {
    e.preventDefault();
    this.setState({ errors: [] });
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    SessionActionCreators.login(email, password);
  },

  render: function() {
    var errors = (this.state.errors.length > 0) ? React.createElement(ErrorNotice, {errors: this.state.errors}) : React.createElement("div", null);
    return (
      React.createElement("div", null, 
        errors, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "card card--login small-10 medium-6 large-4 columns small-centered"}, 
            React.createElement("form", {onSubmit: this._onSubmit}, 
              React.createElement("div", {className: "card--login__field"}, 
                React.createElement("label", {name: "email"}, "Email"), 
                React.createElement("input", {type: "text", name: "email", ref: "email"})
              ), 
              React.createElement("div", {className: "card--login__field"}, 
                React.createElement("label", {name: "password"}, "Password"), 
                React.createElement("input", {type: "password", name: "password", ref: "password"})
              ), 
              React.createElement("button", {type: "submit", className: "card--login__submit"}, "Login")
            )
          )
        )
      )
    );
  }
});

module.exports = LoginPage;