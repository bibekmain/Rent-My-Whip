import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          {/* <img className="bg-shape" src={BgShape} alt="bg-shape" /> */}
          <div className="hero-content">
            <div className="hero-content__text">
              <h1 className="text" >
                RENT MY  WHIP
                
              </h1>

              <h4>Adventure is out there!
                No road is long with a good car rental company.
                Do you have the spirit of adventure, too?</h4>

              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="animated-button1"
                  to="/"
                >
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                  <span></span>
  <span></span>
  <span></span>
  <span></span>
                </Link>
            
              </div>
            </div>
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
