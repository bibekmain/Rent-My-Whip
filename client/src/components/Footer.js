function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>G 10</span>
              </li>
              <li>
                Contact us for any car rental needs
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; TEL: (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                RentmyWhip@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp;EMAIL: RentmyWhip@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Questions</li>
              <li>
              <i className="fa-solid fa-envelope">For any questions contact us at </i>
              </li>
              <li>
              <a class ="fab fa-github" href="https://github.com/bibekmain/Rent-my-Whip" >
              &nbsp;GITHUB
                  </a>
                  </li>
              
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
