import "./footer.css";

const footer = () => {
  return (
    <>

      <footer>
        <div className="footer">
          <div className="office">
            <img src={require("../../images/logos.png")} alt="" />
            <p className="office-content">
              NinjaStudy is a personal AI English tutor App, focused on
              improving your speaking skills. You can think of it as Siri/Alexa
              for English learners.
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/ninjastudy/?viewAsMember=true"
                target="_blanck"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/tryninjastudy" target="_blanck">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/tryninjastudy/"
                target="_blanck"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCLWFj6R_ZL5V8XhSK5fc_hg/featured"
                target="_blanck"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="second-item">
          <div className="company">
            {" "}
            <h2 className="footer-heading">Privacy and terms</h2>
            <a href="/">Community Guidelines</a>
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
          </div>
          <div className="company">
            {" "}
            <h2 className="footer-heading">Help and Support</h2>
            <a href="/">FAQs</a>
            <a href="/">Blog</a>
          </div>
          </div>

         <div className="third-item">
         <div className="company">
            {" "}
            <h2 className="footer-heading">About Us</h2>
            <a href="/">Mission</a>
            <a href="/">Careers</a>
            <a href="/">Press</a>
            <a href="/">Contact Us</a>
            <a href="/">Investors</a>
          </div>
          <div className="mobile-privacy">
              <div>
                <a href="mailto:contact@tryninjastudy.com"> Term & Condition</a>
              </div>
              <div>
                <a href="mailto:contact@tryninjastudy.com"> Privacy & Policy </a>
              </div>

          </div>
         </div>

        </div>
        <div className="bottom-footer">
          <div className="mobile-icons">
          <a
                href="https://www.linkedin.com/company/ninjastudy/?viewAsMember=true"
                target="_blanck"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/tryninjastudy" target="_blanck">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/tryninjastudy/"
                target="_blanck"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCLWFj6R_ZL5V8XhSK5fc_hg/featured"
                target="_blanck"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
          </div>
          <hr />
          <div className="bottom-text">
            <div className="privacy">
              <div>
                <a href="mailto:contact@tryninjastudy.com"> Term & Condition</a>
              </div>
              <div>
                <a href="mailto:contact@tryninjastudy.com"> Privacy & Policy </a>
              </div>
            </div>
            <a className="rights" href="mailto:contact@tryninjastudy.com"> © 2022 All rights reserved</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
