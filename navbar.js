'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { id: "navholder", className: "navbar" },
          React.createElement(
            "ul",
            { id: "navitems" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "index.html" },
                "Home"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "about.html" },
                "About"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "practice.html" },
                "Practice"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "fees.html" },
                "Fees"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "contact.html" },
                "Contact"
              )
            )
          )
        ),
        React.createElement(
          "nav",
          { id: "mobile-menu-holder", className: "navbar" },
          React.createElement(
            "div",
            null,
            React.createElement(
              "button",
              { id: "mobile-menu-button", onClick: "showMenu()" },
              " \u2630 "
            ),
            React.createElement(
              "ul",
              { id: "mobile-navitems" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "index.html" },
                  "Home"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "about.html" },
                  "About"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "practice.html" },
                  "Practice"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "fees.html" },
                  "Fees"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "contact.html" },
                  "Contact"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(React.Component);

ReactDOM.render(React.createElement(Navigation, null), document.getElementById("navbar-container"));