import React from "react";
import "./footer.styles.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div style={{ paddingRight: `1000px` }}>
          <img
            src="https://gelish.com/images/footer-gelish-logo.jpg"
            style={{ width: `130px`, height: `auto` }}
            alt="Gelish"
          ></img>
          <p>
            As Nail Artists ourselves, we understand that nothing is more
            important than the tools of our craft and nothing is more
            challenging than product inconsistencies. It has been and always
            will be that quality is our #1 priority.
            <br />
            We are proud to identify as a PETA certified cruelty-free brand.
            <br />
            <br />
          </p>
        </div>

        <div style={{ paddingLeft: `1000px`, float: `right` }}>
          <h1>
            <span>Contact Us</span>
          </h1>
          <table cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <th>Email:</th>
                <td>
                  <a href="mailto:information@nailharmony.com">
                    information@nailharmony.com
                  </a>
                </td>
              </tr>
              <tr>
                <th>Tel:</th>
                <td>
                  <span class="phone">714. 773. 9758</span>
                </td>
              </tr>
              <tr>
                <th>Fax:</th>
                <td>714.773. 9767</td>
              </tr>
            </tbody>
          </table>
          {/* <p>
          <span>Nail Alliance - North America, Inc.</span><br> 1545 Moonstone<br> Brea, CA 92821<br> United States of America
        </p> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}
export default Footer;
