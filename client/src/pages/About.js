import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";


function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <div className="about-main__text">
           
              <h2>About our adventure </h2>
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
