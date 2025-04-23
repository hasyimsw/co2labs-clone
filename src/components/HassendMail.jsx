import { Link, useLocation } from "react-router";

export default function HasSendMail() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center lg:mx-28 mx-10">
      <h3 className="text-center text-3xl font-bold">Thank you for asking</h3>
      <div className="bg-white rounded-3xl flex flex-col items-center md:w-1/2 p-10 shadow-lg my-5">
        <div className="rounded-md bg-primary-100 p-3 mb-5">
          <svg
            width={41}
            height={33}
            viewBox="0 0 41 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.9 0H4.1C1.8368 0 0 1.8368 0 4.1V28.7C0 30.9632 1.8368 32.8 4.1 32.8H36.9C39.1632 32.8 41 30.9632 41 28.7V4.1C41 1.8368 39.1632 0 36.9 0ZM36.9 9.635L20.5 20.5697L4.1 9.635V4.70885L20.5 15.6415L36.9 4.70885V9.635Z"
              fill="#153147"
            />
          </svg>
        </div>
        <h6 className="text-center md:text-xl text-base font-semibold">
          Hi <strong>{name}</strong>,<br />
          <br />
          Thank you for leaving your contact details with CO2 Labs! We all be in
          touch soon with more information. If you have any questions, feel free
          to reach out to us! Best regards. <br />
          <br />
          The CO2 Collective
        </h6>
      </div>
      <button className="bg-secondary rounded-lg text-base font-semibold px-4 py-2 flex items-center cursor-pointer text-white">
        <Link to="/">Bring me back</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4 mt-1 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
    </section>
  );
}
