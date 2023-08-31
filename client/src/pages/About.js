import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
// import AboutMain from "../images/about/newlogo.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            {/* <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            /> */}
            <div className="about-main__text">
           
              <h2>You start the engine and your adventure begins</h2>
              <p>
              Rent-My-Whip Car Rental was founded in 2023 in Berkley, CA. Today, We operates our rental only online. Our Car Rental serves price-conscious leisure and business travelers and operates with a hybrid model of corporately operated locations along with locations operated by franchisees. We promise to put you first, with exceptional customer service and vehicles that are maintained and cleaned to our high-quality standards. Everything we do, we do with our Standard of Care.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <Footer />
    </>
  );
}

export default About;
