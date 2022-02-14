'use strict';

class Navigation extends React.Component {

  render() {
    return (
      <div>
          <nav id="navholder" className="navbar">
            <ul id="navitems">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="practice.html">Practice</a></li>
                <li><a href="fees.html">Fees</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
          <nav id="mobile-menu-holder" className="navbar">
            <div>
              <button id="mobile-menu-button" onClick="showMenu()"> &#9776; </button>
                <ul id="mobile-navitems">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="practice.html">Practice</a></li>
                  <li><a href="fees.html">Fees</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
      </div>
    );
  }
}

ReactDOM.render(
  <Navigation />,
  document.getElementById("navbar-container")
);