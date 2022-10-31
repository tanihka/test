import "../index.css";
import { BsPlayFill} from "react-icons/bs";
// import Player from "./Player/videoModal";

const Hero = () => {
  return (
    <>
      <div className="hero-color">
        <div id="home" className="hero">
          <div className="content">
            <h1>
              Learn English Speaking The Fastest Way
            </h1>
            <div className="text">
              <div className="icon"></div>
              <div className="heading">
                <p>
                  {" "}
                  Practice English With ARYA - The Smartest A.I. English Tutor
                </p>
              </div>
            </div>


            <div className="playStoteBtn">
              <div className="playStoteBtn-first">
              <a
                href="https://play.google.com/store/apps/details?id=com.practice.ninja_study&utm_source=Website"
                target="_blanck"
                className="playstore"
              >
                <img src={require("../images/googleplayyer.png")} alt="" />
              </a>
              </div>
              <div className="playStoteBtn-second">
              <a href="https://youtu.be/eDX-ZXpqJMs" target="blank" className="youtubevideo">
              <BsPlayFill/> <span className="playStoteBtn-second-botton">Play Video</span>
              </a>
              {/* <videoModal/> */}
              </div>
            </div>

          </div>
          <div className="image">
            {/* <video src={home} autoPlay loop muted /> */}

<img src={require("../videos/home.gif")} alt="" />
            {/* <div className="video">
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
