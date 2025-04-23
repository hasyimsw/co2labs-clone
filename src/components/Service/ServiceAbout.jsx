import React from "react";

export default function ServiceAbout({ saimg, title, desc, text }) {
  return (
    <section class="lg:mx-28 mx-10 md:h-screen flex items-center md:my-0 my-20">
      <div class="md:flex items-center">
        <div class="lg:h-96 bg-gray-200 lg:mr-14 mr-10 lg:w-5"></div>
        <div class="lg:flex md:flex-row rounded-xl shadow-xl flex flex-col items-center">
          <img
            src={saimg}
            alt="ctaimg"
            class="object-cover md:w-96 h-96 w-full md:rounded-s-xl md:rounded-e-none rounded-t-xl"
          />
          <div class="flex flex-col gap-5 xl:px-20 lg:px-10 md::p-0 p-10">
            <h3 className="text-3xl font-bold">{title}</h3>
            <h6 class="lg:text-md text-lg">{desc}</h6>
            <button class="flex items-center self-start cursor-pointer bg-yellow-300 text-sm text-black rounded-md py-2 px-4 font-medium shadow-custom-drop">
              <a href="https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0">
                {text}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 mt-1 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
