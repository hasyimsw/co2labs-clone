import React, { useEffect } from "react";
import Navbar from "../Navbar";
import heroimg from "../../assets/heroimg.png";
import aboutimg from "../../assets/about-img.png";
import profile1 from "../../assets/profile1.jpeg";
import profile2 from "../../assets/profile2.jpeg";
import profile3 from "../../assets/profile3.jpeg";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import Footer from "../Footer";
import Header from "../Header";
import EmailForm from "../EmailForm";
import { Link, useLocation } from "react-router";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div id="home">
      <Navbar />

      {/* header */}
      <Header
        isHome={true}
        title={"Where Code Meets"}
        description={
          "Harnessing the power of our Coding Collective to build solutions for your business needs."
        }
        heroimg={heroimg}
        isService={false}
      />
      {/* end header */}

      {/* section our service  */}
      <section
        className="bg-secondary flex items-center justify-center py-40"
        id="service"
      >
        <div className="flex flex-col gap-5">
          <h1 className="sm:text-center xl:text-left text-primary text-5xl sm:mx-0 mx-10">
            Our Services
          </h1>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="card rounded-xl shadow-custom-drop bg-white h-96 w-72 p-7 flex flex-col items-center justify-center card-animation">
              <div className="bg-gray-200 w-20 h-20 flex justify-center items-center rounded-full mb-5">
                <svg
                  width={31}
                  height={31}
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6091 0.00537109C18.4433 0.00537109 16.4237 1.42673 15.7935 3.42548L1.81746 3.42204C0.873952 3.42204 0.109131 4.18737 0.109131 5.13037C0.109131 6.07337 0.873952 6.8387 1.81746 6.8387L15.7935 6.83704C16.559 8.92974 18.4433 10.2554 20.6091 10.2554C22.775 10.2554 24.6786 8.92634 25.4574 6.82338L29.1508 6.8387C30.0943 6.8387 30.8591 6.07337 30.8591 5.13037C30.8591 4.18737 30.0943 3.42204 29.1508 3.42204H25.4429C24.6203 1.33958 22.775 0.00537109 20.6091 0.00537109ZM20.6091 3.42204C21.5526 3.42204 22.3175 4.18737 22.3175 5.13037C22.3175 6.07337 21.5526 6.8387 20.6091 6.8387C19.6656 6.8387 18.9008 6.07337 18.9008 5.13037C18.9008 4.18737 19.6656 3.42204 20.6091 3.42204ZM10.3591 10.2554C8.10755 10.2554 6.22292 11.6562 5.5348 13.6755C5.29461 13.6909 1.81746 13.672 1.81746 13.672C0.873952 13.672 0.109131 14.4374 0.109131 15.3804C0.109131 16.3234 0.873952 17.0887 1.81746 17.0887C1.81746 17.0887 5.32365 17.0528 5.54214 17.075C6.23026 19.0943 8.10755 20.5054 10.3591 20.5054C12.525 20.5054 14.3809 19.178 15.1927 17.0938L29.1508 17.0887C30.0943 17.0887 30.8591 16.3234 30.8591 15.3804C30.8591 14.4374 30.0943 13.672 29.1508 13.672L15.1838 13.6567C14.435 11.6187 12.525 10.2554 10.3591 10.2554ZM10.3591 13.672C11.3026 13.672 12.0675 14.4374 12.0675 15.3804C12.0675 16.3234 11.3026 17.0887 10.3591 17.0887C9.41562 17.0887 8.6508 16.3234 8.6508 15.3804C8.6508 14.4374 9.41562 13.672 10.3591 13.672ZM20.6091 20.5054C18.4433 20.5054 16.4622 21.9318 15.7923 23.9049L1.81746 23.922C0.873952 23.922 0.109131 24.6874 0.109131 25.6304C0.109131 26.5734 0.873952 27.3387 1.81746 27.3387L15.767 27.3404C16.4758 29.3647 18.4433 30.7554 20.6091 30.7554C22.775 30.7554 24.6423 29.4006 25.4651 27.3404L29.1508 27.3387C30.0943 27.3387 30.8591 26.5734 30.8591 25.6304C30.8591 24.6874 30.0943 23.922 29.1508 23.922L25.4495 23.9118C24.712 21.8909 22.775 20.5054 20.6091 20.5054ZM20.6091 23.922C21.5526 23.922 22.3175 24.6874 22.3175 25.6304C22.3175 26.5734 21.5526 27.3387 20.6091 27.3387C19.6656 27.3387 18.9008 26.5734 18.9008 25.6304C18.9008 24.6874 19.6656 23.922 20.6091 23.922Z"
                    fill="#153147"
                  />
                </svg>
              </div>
              <h5 className="text-center text-xl font-bold">
                Website Maintenance
              </h5>
              <span className="text-center my-5">
                Keep your website running smoothly and securely with our
                comprehensive maintenance services. Prevent downtime,..
              </span>
              <Link
                to="/service/web-main"
                className="font-semibold text-base hover:text-blue-900 underline text-black"
              >
                View More
              </Link>
            </div>
            <div className="card rounded-xl shadow-custom-drop bg-white h-96 w-72 p-7 flex flex-col items-center justify-center card-animation">
              <div className="bg-gray-200 w-20 h-20 flex justify-center items-center rounded-full mb-5">
                <svg
                  width={35}
                  height={29}
                  viewBox="0 0 35 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4414 0.882221C20.5342 0.624263 19.5653 1.1487 19.306 2.05753L12.4726 25.9742C12.2135 26.8813 12.74 27.8499 13.6473 28.1096C14.5544 28.3676 15.5234 27.8431 15.7827 26.9343L22.616 3.01764C22.8752 2.11051 22.3487 1.14189 21.4414 0.882221ZM8.68235 2.59055C8.25356 2.67597 7.82289 2.8929 7.56117 3.28582L0.727838 13.5358C0.38788 14.0449 0.347049 14.6958 0.621237 15.2441L5.74624 25.4941C6.16802 26.3364 7.19781 26.7156 8.04172 26.2937C8.88564 25.8717 9.26438 24.8416 8.84242 23.9977L4.1445 14.6565L10.4441 5.20602C10.9674 4.4219 10.7486 3.32855 9.9636 2.8041C9.57102 2.54272 9.11114 2.50514 8.68235 2.59055ZM28.3282 2.64352C27.9134 2.50686 27.4689 2.48633 27.0469 2.69816C26.203 3.12012 25.8243 4.15023 26.2462 4.99415L30.9442 14.3353L24.6445 23.7858C24.1212 24.5699 24.3401 25.6633 25.1251 26.1877C25.91 26.7105 27.0041 26.4918 27.5275 25.706L34.3608 15.456C34.7008 14.9469 34.7416 14.2961 34.4674 13.7477L29.3424 3.49769C29.1316 3.07744 28.743 2.78361 28.3282 2.64352Z"
                    fill="#153147"
                  />
                </svg>
              </div>
              <h5 className="text-center text-xl font-bold">
                Website &amp; App Development
              </h5>
              <span className="text-center my-5">
                Transform your online presence with our custom website design
                solutions. From stunning visuals to seamless..
              </span>
              <Link
                to="/service/web-dev"
                className="font-semibold text-base hover:text-blue-900 underline text-black"
              >
                View More
              </Link>
            </div>
            <div className="card rounded-xl shadow-custom-drop bg-white h-96 w-72 p-7 flex flex-col items-center justify-center card-animation">
              <div className="bg-gray-200 w-20 h-20 flex justify-center items-center rounded-full mb-5">
                <svg
                  width={38}
                  height={40}
                  viewBox="0 0 38 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33 2C30.242 2 28 4.242 28 7C28 7.714 28.156 8.392 28.428 9.01L24.518 13.408C23.23 12.524 21.678 12 20 12C18.52 12 17.152 12.432 15.962 13.132L11.414 8.586L11.368 8.632C11.76 7.836 12 6.95 12 6C12 2.686 9.314 0 6 0C2.686 0 0 2.686 0 6C0 9.314 2.686 12 6 12C6.95 12 7.834 11.76 8.632 11.368L8.586 11.414L13.134 15.96C12.43 17.152 12 18.522 12 20C12 21.994 12.76 23.798 13.97 25.202L8.816 30.354C8.252 30.132 7.642 30 7 30C4.244 30 2 32.242 2 35C2 37.758 4.244 40 7 40C9.756 40 12 37.758 12 35C12 34.358 11.868 33.748 11.646 33.182L17.322 27.506C18.164 27.806 19.056 28 20 28C24.412 28 28 24.412 28 20C28 18.728 27.674 17.542 27.144 16.472L31.378 11.706C31.89 11.882 32.43 12 33 12C35.758 12 38 9.758 38 7C38 4.242 35.758 2 33 2ZM20 24C17.794 24 16 22.206 16 20C16 17.794 17.794 16 20 16C22.206 16 24 17.794 24 20C24 22.206 22.206 24 20 24Z"
                    fill="#153147"
                  />
                </svg>
              </div>
              <h5 className="text-center text-xl font-bold">IT Support</h5>
              <span className="text-center my-5">
                Experience peace of mind with our reliable IT support services.
                From troubleshooting to server maintenance..
              </span>
              <Link
                to="/service/it-support"
                className="font-semibold text-base hover:text-blue-900 underline text-black"
              >
                View More
              </Link>
            </div>
            <div className="card rounded-xl shadow-custom-drop bg-white h-96 w-72 p-7 flex flex-col items-center justify-center card-animation">
              <div className="bg-gray-200 w-20 h-20 flex justify-center items-center rounded-full mb-5">
                <svg
                  width={29}
                  height={35}
                  viewBox="0 0 29 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4741 0.33667C13.0459 0.33667 11.6246 1.0183 10.5774 2.36618L2.24922 13.0962C0.35638 15.5289 0.35638 19.3111 2.24922 21.7438L10.5774 32.4738C12.6735 35.1696 16.2747 35.1696 18.3708 32.4738L26.699 21.7438C28.5918 19.3111 28.5918 15.5289 26.699 13.0962L18.3708 2.36618C17.3236 1.0183 15.9023 0.33667 14.4741 0.33667Z"
                    fill="#153147"
                  />
                </svg>
              </div>
              <h5 className="text-center text-xl font-bold">
                3rd Party AI Solution
              </h5>
              <span className="text-center my-5">
                Leverage our expertise to find the best third-party services for
                your business. From hosting to plugins, we provid..
              </span>
              <Link
                to="/service/ai-solution"
                className="font-semibold text-base hover:text-blue-900 underline text-black"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* end section our service */}

      {/* section ace */}
      <section
        className="xl:h-screen h-full flex flex-col items-center gap-10 mt-20"
        id="approach"
      >
        <h1 className="text-5xl font-bold">ACE</h1>
        <h4 className="-mt-10 text-center text-2xl font-semibold">
          Methodology for Strategic Consulting
        </h4>
        <div className="w-full">
          <div className="parent cursor-pointer lg:inline-block lg:w-1/3 bg-[#edeae4] p-10 group align-top transition duration-300 ease-in-out">
            <h3 className="text-3xl font-bold">Assessment</h3>
            <h6 className="text-xl font-semibold">&amp; Insight Gathering</h6>
            <div className="group-hover:block text-xl font-semibold mt-2 hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="my-5">
                <span>
                  Our process begins with an initial consultation to gather
                  insights into your business needs and challenges. We work
                  closely with your team to understand your objectives and
                  gather all necessary information.
                </span>
              </div>
              <ul className="list-disc ml-5 leading-8">
                <li>Initial consultation meetings</li>
                <li>Gathering business and technical requirements</li>
                <li>Conducting stakeholder interviews</li>
                <li>Understanding long-term business goals</li>
              </ul>
            </div>
            <div className="flex justify-center mt-5">
              <svg
                className="transform transition-transform duration-300 ease-in-out group-hover:rotate-0 rotate-180 arrow-icon"
                width="59"
                height="23"
                viewBox="0 0 59 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56 20L29.5 3L3 20"
                  stroke="#ADB8BA"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="parent cursor-pointer lg:inline-block lg:w-1/3 bg-[#adb8ba] p-10 group align-top transition duration-300 ease-in-out">
            <h3 className="text-3xl font-bold">Customization</h3>
            <h6 className="text-xl font-semibold">&amp; Strategic Planning</h6>
            <div className="group-hover:block text-xl font-semibold mt-2 hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="my-5">
                <span>
                  We then develop a strategic plan and design tailored solutions
                  that address your specific needs. This involves detailed
                  planning, resource allocation, and design of bespoke solutions
                  that align with your goals.
                </span>
              </div>
              <ul className="list-disc ml-5 leading-8">
                <li>Strategic planning sessions</li>
                <li>Solution design and prototyping</li>
                <li>Resource and timeline planning</li>
                <li>Risk assessment and mitigation planning</li>
              </ul>
            </div>
            <div className="flex justify-center mt-5">
              <svg
                className="transform transition-transform duration-300 ease-in-out group-hover:rotate-0 rotate-180 arrow-icon"
                width="59"
                height="23"
                viewBox="0 0 59 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56 20L29.5 3L3 20"
                  stroke="#EDEAE3"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="parent cursor-pointer lg:inline-block lg:w-1/3 bg-[#edeae4] p-10 group align-top transition duration-300 ease-in-out">
            <h3 className="text-3xl font-bold">Execution</h3>
            <h6 className="text-xl font-semibold">
              &amp; Lifecycle Management
            </h6>
            <div className="group-hover:block text-xl font-semibold mt-2 hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="my-5">
                <span>
                  We execute the strategic plan and manage the entire solution
                  lifecycle, from implementation to optimization. This ensures
                  the solutions are effectively integrated and continuously
                  deliver value.
                </span>
              </div>
              <ul className="list-disc ml-5 leading-8">
                <li>Implementation of the strategic plan</li>
                <li>Solution deployment and integration</li>
                <li>Lifecycle management and support</li>
                <li>Continuous performance evaluation and optimization</li>
              </ul>
            </div>
            <div className="flex justify-center mt-5">
              <svg
                className="transform transition-transform duration-300 ease-in-out group-hover:rotate-0 rotate-180 arrow-icon"
                width="59"
                height="23"
                viewBox="0 0 59 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56 20L29.5 3L3 20"
                  stroke="#ADB8BA"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* end section ace */}

      {/* section about us */}
      <section className="lg:h-screen flex items-center mb-10" id="about">
        <div className="lg:flex lg:mx-28 mx-10 gap-20 lg:mt-0 mt-20">
          <div className="lg:text-right flex flex-col lg:items-end items-center justify-center lg:w-1/2 lg:gap-11 gap-5">
            <h1 className="text-5xl font-bold">About Us</h1>
            <h6 className="text-xl font-semibold">
              At CO2 Labs, we strive to provide simple yet powerful software
              solutions and expert consultation to help your business thrive in
              the digital world.
            </h6>
            <div>
              <svg
                className="xl:w-[600px] w-full"
                height={81}
                viewBox="0 0 710 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 71C105.403 30.6415 216.971 18.3204 319.353 25.5889C340.732 27.1067 361.503 31.7555 382.443 36.2074C415.148 43.1605 446.712 48.5625 480.309 48.2568C556.077 47.5674 627.671 31.4361 700 10"
                  stroke="#EDEAE3"
                  strokeWidth={20}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-1/2">
            <img src={aboutimg} alt="About img" className="rounded-xl" />
          </div>
        </div>
      </section>
      {/* end section about us */}

      {/* section our team */}
      <section
        className="lg:mx-28 my-20 flex flex-col justify-center"
        id="team"
      >
        <div className="flex justify-between lg:mb-32 mb-20 lg:mx-0 mx-10">
          <h1 className="text-5xl font-bold">Our Team</h1>
        </div>
        <div className="lg:flex gap-5">
          <div className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-10 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all">
            <div className="flex flex-col items-center">
              <div className="lg:-mt-24">
                <img
                  src={profile1}
                  alt="person photo"
                  className="shadow-lg rounded-full w-48"
                />
              </div>
              <h4 className="text-2xl font-bold">Jay Chen</h4>
              <span className="font-semibold text-center text-lg">CEO</span>
              <div className="italic text-center mt-2 text-xs">
                Jay began his career in the banking and finance sector, where he
                honed his skills and developed a deep understanding of the
                industry. Leveraging this foundation, he expanded into HR
                operations and outsourcing, successfully growing his businesses
                by delivering exceptional service to renowned international
                brands like Huawei, Coca-Cola, and GlaxoSmithKline. CO2 Labs
                provides a solutions based approach to champion human resource
                and outsourcing through strategic consultation and meticulously
                planned placements.
              </div>
            </div>
          </div>
          <div className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-10 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all">
            <div className="flex flex-col items-center">
              <div className="lg:-mt-24">
                <img
                  src={profile2}
                  alt="person photo"
                  className="shadow-lg rounded-full w-48"
                />
              </div>
              <h4 className="text-2xl font-bold">Alune</h4>
              <span className="font-semibold text-center text-lg">
                Development Project Manager
              </span>
              <div className="italic text-center mt-2 text-xs">
                With a background in IT software development, quality testing
                and web design, she brings a deep understanding of the technical
                and strategic aspects of project management. Known for her
                meticulous planning, effective communication, and ability to
                navigate challenges, she has consistently delivered high-quality
                software solutions on time and within budget. Alune excels at
                fostering collaboration across cross-functional teams, ensuring
                that projects align with client objectives and business goals.
                Her dedication to excellence and passion for innovation make her
                a driving force behind the success of every project she leads.
              </div>
            </div>
          </div>
          <div className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-10 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all">
            <div className="flex flex-col items-center">
              <div className="lg:-mt-24">
                <img
                  src={profile3}
                  alt="person photo"
                  className="shadow-lg rounded-full w-48"
                />
              </div>
              <h4 className="text-2xl font-bold">Ron</h4>
              <span className="font-semibold text-center text-lg">
                Business Development Lead
              </span>
              <div className="italic text-center mt-2 text-xs">
                With a strong background in business development for finance,
                logistics and real estate industries, Ron has successfully led
                initiatives that have expanded market reach and increased
                revenue for both emerging and established companies. Known for
                his ability to identify new opportunities and forge lasting
                relationships, Ron excels in creating tailored solutions that
                meet client needs and align with business goals through
                thoughtful solutioning.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section our team */}

      {/* section our portfolio */}
      <section
        className="bg-secondary lg:px-28 px-10 py-20 mt-20 text-primary"
        id="portfolio"
      >
        <h1 className="mb-10 text-5xl font-bold">Our Portfolio</h1>
        <div className="flex flex-wrap  justify-center gap-8">
          <div className="md:w-64 w-96">
            <Link
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              to="https://aotc.sg/"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={portfolio1}
                  alt=""
                />
              </div>
              <h5 className="mt-3 text-xl font-semibold">AOTC Cosmetics</h5>
            </Link>
          </div>
          <div className="md:w-64 w-96">
            <Link
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              to="https://noshkitchen.com.sg"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={portfolio2}
                  alt=""
                />
              </div>
              <h5 className="mt-3 text-xl font-semibold">
                Nosh kitchen Website
              </h5>
            </Link>
          </div>
          <div className="md:w-64 w-96">
            <Link
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              to="https://micelah.com"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={portfolio3}
                  alt=""
                />
              </div>
              <h5 className="mt-3 text-xl font-semibold">
                Michelah Event Organizer Singapore
              </h5>
            </Link>
          </div>
          <div className="md:w-64 w-96">
            <Link
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              to="https://pianistprodigy.com/"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={portfolio4}
                  alt=""
                />
              </div>
              <h5 className="mt-3 text-xl font-semibold">
                Joywaltzstudio Academy
              </h5>
            </Link>
          </div>
          <div className="md:w-64 w-96">
            <Link
              className="group relative block rounded-xl overflow-hidden focus:outline-none"
              to="https://octopay.asia/"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={portfolio5}
                  alt=""
                />
              </div>
              <h5 className="mt-3 text-xl font-semibold">Octopay Payment</h5>
            </Link>
          </div>
        </div>
      </section>
      {/* end section our portfolio */}

      {/* section contact us */}
      <section
        className="lg:mx-28 mx-10 flex flex-col gap-16 py-24"
        id="contact"
      >
        <div className="md:flex justify-between">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <div className="flex sm:gap-20 gap-10 justify-center items-center md:mt-0 mt-10">
            <Link to="https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A">
              <svg
                width={41}
                height={40}
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3978 0.824707C25.8785 0.824707 25.3445 1.09594 24.9694 1.4549C21.9368 4.35872 21.0081 6.78705 22.1169 10.1135C19.5298 12.0965 17.8957 12.5831 14.6661 12.5831C10.251 12.5831 7.36832 13.1154 5.40685 15.0755V15.1366C3.5715 16.9712 3.5715 19.9087 5.40685 21.7417L10.8906 27.2681L1.54717 36.6074C0.782441 37.3711 0.725457 38.6538 1.49019 39.4176C2.25511 40.1833 3.54056 40.1833 4.30549 39.4176L13.6836 30.0372L19.1765 35.5029C21.012 37.3378 23.9503 37.3378 25.7859 35.5029H25.8472C27.8094 33.5426 28.3562 31.03 28.3562 26.2674C28.3562 23.2398 28.9776 21.1033 30.8589 18.8551C34.4797 19.9165 36.5863 18.9001 39.5555 15.9319C39.9227 15.5647 40.1062 15.0442 40.1062 14.525C40.1062 13.8363 39.9323 12.7805 39.4942 11.4669C38.7886 9.35169 37.5739 7.22356 35.6388 5.28951C33.7036 3.35566 31.5741 2.14149 29.4577 1.4363C28.1433 0.998414 27.087 0.824707 26.3978 0.824707Z"
                  fill="black"
                />
              </svg>
            </Link>
            <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=info@co2labs.com">
              <svg
                width={41}
                height={33}
                viewBox="0 0 41 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.65624 0.829102C4.67299 0.829102 1.55535 1.83567 1.00506 5.66421C0.828806 6.89013 1.21653 8.09648 2.10758 8.96794C2.55016 9.40073 3.01821 9.91577 3.63705 10.4367C5.19001 11.7468 7.16989 13.2195 9.02247 14.5374C14.12 18.1603 18.1444 20.4124 20.5277 20.4124C22.911 20.4124 26.9354 18.1603 32.0329 14.5374C33.8875 13.2195 35.8673 11.7449 37.4183 10.4367C38.0372 9.91577 38.5052 9.40269 38.9478 8.96794C39.8389 8.09648 40.2266 6.89013 40.0503 5.66421C39.5 1.83567 36.3824 0.829102 32.3992 0.829102H8.65624ZM0.944336 12.8846V24.3291C0.944336 28.655 4.45172 32.1624 8.77768 32.1624H32.2777C36.6037 32.1624 40.1111 28.655 40.1111 24.3291V12.8846C38.5052 14.4101 36.7114 15.9846 34.1753 17.7804C28.6215 21.7128 23.6336 24.3291 20.5277 24.3291C17.4218 24.3291 12.4339 21.7128 6.88006 17.7804C4.34206 15.9846 2.55017 14.4101 0.944336 12.8846Z"
                  fill="black"
                />
              </svg>
            </Link>
            <button>
              <svg
                width={47}
                height={47}
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.53711 1.50107C6.05109 0.987852 6.66828 0.589732 7.34777 0.333087C8.02726 0.0764429 8.75354 -0.0328644 9.47847 0.012409C10.2034 0.0576823 10.9104 0.256503 11.5527 0.595694C12.195 0.934886 12.7578 1.4067 13.204 1.97988L18.4768 8.75375C19.4432 9.99632 19.784 11.6149 19.4021 13.1424L17.7953 19.5755C17.7128 19.9087 17.7176 20.2576 17.8092 20.5884C17.9007 20.9193 18.0761 21.2209 18.3182 21.4643L25.5356 28.6818C25.7793 28.9244 26.0814 29.1 26.4128 29.1916C26.7442 29.2832 27.0937 29.2877 27.4274 29.2046L33.8575 27.5978C34.6114 27.4104 35.398 27.3963 36.1581 27.5566C36.9182 27.7169 37.6321 28.0473 38.2462 28.5231L45.02 33.793C47.4552 35.6877 47.6785 39.2861 45.4989 41.4628L42.4615 44.5002C40.2877 46.6739 37.0389 47.6286 34.0103 46.5623C26.2573 43.838 19.2186 39.4 13.4184 33.5786C7.59739 27.7792 3.15935 20.7416 0.434668 12.9896C-0.628706 9.964 0.325981 6.71219 2.49973 4.53844L5.53711 1.50107Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:flex xl:gap-24 gap-5 lg:justify-between">
          <EmailForm />
          <div className="lg:w-1/2">
            <iframe
              className="w-full h-full rounded-xl lg:mt-0 mt-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.4776136128512!2d103.8008668418283!3d1.274634948208806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e0!3m2!1sen!2sen!4v1721874615960!5m2!1sen!2sen&hl=en"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      {/* end section contact us */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}
