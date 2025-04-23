import React from "react";
import { Link, useLocation, useNavigate } from "react-router";

export default function Footer() {
  const scrollToSection = (id, navigate, location) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
    scrollToSection(id, navigate, location);
  };

  return (
    <footer className="bg-black/90 lg:px-28 px-10 text-white pt-20 pb-10">
      <div className="lg:flex lg:justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Let's Grow With CO2 Labs</h2>
          <div className="flex flex-col gap-5">
            <p className="text-lg font-bold">Get Exclusive Updates From Us</p>
            <form className="flex">
              <input
                type="email"
                name="user_email"
                placeholder="Yourmail@example.com"
                className="py-2 px-5 rounded-l-full text-black bg-primary sm:w-72 w-full"
                required=""
                defaultValue=""
              />
              <button
                type="submit"
                className="bg-yellow-500 py-2 px-5 rounded-r-full font-bold text-black cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex xl:ml-0 lg:ml-10 flex-wrap gap-8 lg:mt-0 mt-20">
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Services</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>
                <Link to="/service/web-main">Web Maintenance</Link>
              </li>
              <li>
                <Link to="/service/web-dev">Web &amp; App Development</Link>
              </li>
              <li>
                <Link to="/service/it-support">IT Service</Link>
              </li>
              <li>
                <Link to="/service/ai-solution">3rd Party AI Solution</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">About</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>
                <button
                  onClick={() => handleClick("approach")}
                  className="cursor-pointer"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("team")}
                  className="cursor-pointer"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("portfolio")}
                  className="cursor-pointer"
                >
                  Our Portfolio
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Contact</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <Link to="https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0">
                  <span>+65-8118-1595</span>
                </Link>
              </li>
              <li className="flex items-start gap-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <Link to="/">info@co2labs.com</Link>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                  />
                </svg>
                <Link to="https://maps.app.goo.gl/fEJffSK99a3r2ac26">
                  <span>100D Pasir Panjang Road</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse justify-between mt-10 text-gray-400 font-semibold">
        <span>©2024 CO2 Labs. All Right Reserved</span>
        <div className="flex gap-10 sm:mb-0 mb-5">
          <Link to="/faq">FAQ</Link>
          <Link to="/termspolicy">Terms &amp; Policy</Link>
        </div>
      </div>
    </footer>
  );
}
