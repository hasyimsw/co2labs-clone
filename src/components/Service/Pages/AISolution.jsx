import React from "react";
import Navbar from "../../Navbar";
import Header from "../../Header";
import img4 from "../../../assets/4.png";
import Co2Labs from "../Co2Labs";
import cta4 from "../../../assets/cta4.png";
import Advantages from "../Advantages";
import ServiceAbout from "../ServiceAbout";
import robot from "../../../assets/robot.png";
import Footer from "../../Footer";

export default function AISolution() {
  const advantagesData = [
    {
      title: "AI-Powered Insights",
      desc: "Gain actionable insights through AI-powered data analysis and visualization tools.",
    },
    {
      title: "Machine Learning Models",
      desc: "Implement machine learning models to predict outcomes, optimize processes, and improve decision-making.",
    },
    {
      title: "Natural Language Processing",
      desc: "Utilize NLP tools to enhance customer interactions, automate content generation, and improve communication.",
    },
    {
      title: "AI for Marketing",
      desc: "Boost your marketing efforts with AI-driven personalization, customer segmentation, and predictive analytics.",
    },
    {
      title: "Automation",
      desc: "Leverage AI to automate routine tasks, freeing up valuable time and resources for more strategic activities.",
    },
    {
      title: "Data Analysis",
      desc: "Use advanced AI algorithms to analyze large datasets, uncovering valuable insights and trends.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* header */}
      <Header
        heroimg={img4}
        title={"Third Party AI Tools"}
        description={'"Harness the Power of Third-Party AI Tools"'}
        showButton={false}
        isService={true}
      />
      {/* end header */}

      {/* co2 labs */}
      <Co2Labs
        co2img={robot}
        co2text={
          "CO2 Labs helps you harness the power of third-party AI tools to enhance your business operations and drive innovation. Our team is skilled in integrating and customizing AI solutions to meet your specific needs."
        }
      />
      {/* end co2 labs */}

      {/* advantages */}
      <section className="mt-20 mb-10 lg:mx-28 mx-10">
        <div className="m-auto">
          <div className="grid lg:grid-cols-2">
            <div className="lg:block hidden col col-left">
              <h2 className="text-3xl font-bold">
                OUR
                <br />
                ADVANTAGES
              </h2>
            </div>
            <div className="w-full">
              <div className="mb-10 flex gap-2 lg:hidden">
                <div className="bg-primary-500 w-2"></div>
                <h2 className="text-xl font-bold">OUR ADVANTAGES</h2>
              </div>
              {advantagesData.map((item, index) => (
                <Advantages key={index} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* end advantages */}

      {/*service about */}
      <ServiceAbout
        saimg={cta4}
        title={"We're Here For You"}
        desc={
          "Unlock new possibilities with third-party AI tools integrated by CO2 Labs. Contact us to explore how AI can transform your business."
        }
        text={"Learn More About AI Integration"}
      />
      {/* service about */}

      {/* footer */}
      <Footer />
      {/* end footer */}
    </div>
  );
}
