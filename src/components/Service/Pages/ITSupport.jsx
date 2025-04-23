import React from "react";
import Navbar from "../../Navbar";
import Header from "../../Header";
import img3 from "../../../assets/3.png";
import Co2Labs from "../Co2Labs";
import cta3 from "../../../assets/cta3.png";
import Advantages from "../Advantages";
import ServiceAbout from "../ServiceAbout";
import itsup from "../../../assets/itsup.png";
import Footer from "../../Footer";

export default function ITSupport() {
  const advantagesData = [
    {
      title: "24/7 Support",
      desc: "Round-the-clock IT support to address any technical issues whenever they arise.",
    },
    {
      title: "Proactive Maintenance",
      desc: "Regular maintenance and updates to prevent problems and ensure your systems run smoothly.",
    },
    {
      title: "IT Consulting",
      desc: "Expert advice and strategic planning to help you make informed decisions about your IT infrastructure.",
    },
    {
      title: "Cybersecurity Services",
      desc: "Protect your business from cyber threats with our partner third party security solutions, including firewalls, antivirus, and threat detection.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* header */}
      <Header
        heroimg={img3}
        title={"IT Support Services"}
        description={'"Comprehensive IT Support Solutions"'}
        showButton={false}
        isService={true}
      />
      {/* end header */}

      {/* co2 labs */}
      <Co2Labs
        co2img={itsup}
        co2text={
          "At CO2 Labs, we understand that effective IT support is crucial for your business success. Our comprehensive IT support solutions are tailored to meet the unique needs of your organization, providing you with peace of mind."
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
        saimg={cta3}
        title={"We're Here For You"}
        desc={
          "Trust CO2 Labs for dependable IT support that empowers your business. Reach out to us today to discover how we can support your IT needs."
        }
        text={"Get IT Support"}
      />
      {/* service about */}

      {/* footer */}
      <Footer />
      {/* end footer */}
    </div>
  );
}
