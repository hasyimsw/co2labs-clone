import React from "react";
import Navbar from "../../Navbar";
import Header from "../../Header";
import img2 from "../../../assets/2.png";
import Co2Labs from "../Co2Labs";
import cta2 from "../../../assets/cta2.png";
import Advantages from "../Advantages";
import ServiceAbout from "../ServiceAbout";
import uiux from "../../../assets/uiux.png";
import Footer from "../../Footer";

export default function WebDev() {
  const advantagesData = [
    {
      title: "Website Design & Development",
      desc: "Our holistic approach to web development ensures a seamless blend of aesthetics and functionality, creating a powerful online presence for your brand.",
    },
    {
      title: "Mobile App Development",
      desc: "We develop mobile apps that offer excellent performance, intuitive user interfaces, and robust functionality, available for both iOS and Android platforms.",
    },
    {
      title: "E-commerce Solutions",
      desc: "We build scalable e-commerce platforms that provide a seamless shopping experience, boosting your online sales and customer satisfaction.",
    },
    {
      title: "UX/UI Design",
      desc: "Our user-centric design process focuses on creating intuitive and engaging interfaces that enhance user satisfaction and loyalty.",
    },
    {
      title: "Integration Services",
      desc: "We seamlessly integrate third-party services and APIs to enhance the functionality of your website or app.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* header */}
      <Header
        heroimg={img2}
        title={"Website & App Development"}
        description={'"Innovative Website & App Development Solutions"'}
        showButton={false}
        isService={true}
      />
      {/* end header */}

      {/* co2 labs */}
      <Co2Labs
        co2img={uiux}
        co2text={
          "CO2 Labs provides innovative website and app development solutions tailored to help your business thrive in the digital age. Our experienced team leverages the latest technologies to create dynamic and engaging digital experiences."
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
        saimg={cta2}
        title={"We're Here For You"}
        desc={
          "Let CO2 Labs transform your digital presence with our top-tier website and app development services. Contact us to start your project today."
        }
        text={"Kick Start Your Project"}
      />
      {/* service about */}

      {/* footer */}
      <Footer />
      {/* end footer */}
    </div>
  );
}
