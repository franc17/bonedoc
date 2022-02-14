'use strict';

class Footer extends React.Component {

  render() {
    return (
    <div className="footer">
        <div className="footer-div">
            <p>
                For private patient enquiries please contact Joanne Dobson
            </p>
            <p>
                020 8527 0977 | jawdobson@gmail.com
            </p>

        </div>
        <div className="footer-div">
            <p>
                BLRS logo reproduced by kind permission of the BLRS Secretary.
            </p>
            <p>
                Site designed and developed by <a href="https://www.francesjacksonbarry.com/" target="__blank">Frances Jackson-Barry</a>.
            </p>
        </div>
    </div>
    );
  }
}

ReactDOM.render(
  <Footer />,
  document.getElementById("footer-container")
);