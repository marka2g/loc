var Router = require('react-router');
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../actions/SessionActionCreators.react.jsx');

var Header = React.createClass({displayName: "Header",

  propTypes: {
    isLoggedIn: ReactPropTypes.bool,
    email: ReactPropTypes.string
  },
  logout: function(e) {
    e.preventDefault();
    SessionActionCreators.logout();
  },
  render: function() {
    var rightNav = this.props.isLoggedIn ? (
      React.createElement("ul", {className: "right"}, 
        React.createElement("li", {className: "has-dropdown"}, 
          React.createElement("a", {href: "#"}, this.props.email), 
          React.createElement("ul", {className: "dropdown"}, 
            React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.logout}, "Logout"))
          )
        )
      )
    ) : (
      React.createElement("ul", {className: "right"}, 
        React.createElement("li", null, React.createElement(Link, {to: "login"}, "Login")), 
        React.createElement("li", null, React.createElement(Link, {to: "signup"}, "Sign up"))
      )
    );

    var leftNav = this.props.isLoggedIn ? (
      React.createElement("ul", {className: "left"}, 
        /*<li><Link to="my-account">My Account</Link></li>*/
        React.createElement("li", null, "My Account HERE")
      )
    ) : (
      React.createElement("div", null)
    );

    return (
      React.createElement("nav", {className: "top-bar", "data-topbar": true, role: "navigation"}, 
        React.createElement("ul", {className: "title-area"}, 
          React.createElement("li", {className: "name"}, 
            React.createElement("h1", null, React.createElement("a", {href: "#"}, React.createElement("strong", null, "S")))
          ), 
          React.createElement("li", {className: "toggle-topbar menu-icon"}, React.createElement("a", {href: "#"}, React.createElement("span", null, "Menu")))
        ), 

        React.createElement("section", {className: "top-bar-section"}, 
          rightNav, 
          leftNav
        )
      )
    );
  }
});

module.exports = Header;