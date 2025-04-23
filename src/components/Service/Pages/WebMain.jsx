import React from "react";
import Navbar from "../../Navbar";
import Header from "../../Header";
import img1 from "../../../assets/1.png";
import Co2Labs from "../Co2Labs";
import toolbox from "../../../assets/toolbox.png";
import Advantages from "../Advantages";
import ServiceAbout from "../ServiceAbout";
import cta1 from "../../../assets/cta1.png";
import Footer from "../../Footer";
export default function WebMain() {
  const advantagesData = [
    {
      title: "Regular Updates",
      desc: "We keep your website up to date with the latest software and plugin updates to ensure compatibility and security.",
    },
    {
      title: "Security Monitoring",
      desc: "Our team monitors your site 24/7 to detect and prevent any security threats, protecting your data and reputation.",
    },
    {
      title: "Performance Optimization",
      desc: "We regularly analyze and optimize your site's performance to ensure fast loading times and a seamless user experience.",
    },
    {
      title: "Content Management",
      desc: "Need to update content or add new features? Our team is here to help with timely content updates and enhancements.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* header */}
      <Header
        heroimg={img1}
        title={"Website Maintenance"}
        description={'"Comprehensive Website Maintenance Services (WAMS)"'}
        showButton={false}
        isService={true}
      />
      {/* end header */}

      {/* co2 labs */}
      <Co2Labs
        co2img={toolbox}
        co2text={
          "Your website is a vital part of your business, and keeping it in top shape is essential. CO2 Labs offers reliable website maintenance solutions to ensure your site remains secure, up-to-date, and performing at its best."
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
        saimg={cta1}
        title={"We're Here For You"}
        desc={
          "Partner with CO2 Labs for reliable website maintenance and enjoy peace of mind knowing your site is in expert hands. Contact us today to learn more about our services."
        }
        text={"Get a Free Quote"}
      />
      {/* service about */}

      {/* footer */}
      <Footer />
      {/* end footer */}
    </div>
  );
}
