import { useState } from "react";
import { useNavigate } from "react-router";

export default function ContactPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/hassendmail?name=${encodeURIComponent(name)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex flex-col justify-center md:p-14 p-5 lg:w-1/2 gap-5 rounded-xl shadow-xl"
    >
      <h4 className="text-xl font-bold">Hi there, how can we help?</h4>
      <input
        type="text"
        className="px-8 py-3 rounded-lg bg-gray-200 w-full"
        placeholder="Your Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        className="px-8 py-3 rounded-lg bg-gray-200 w-full"
        placeholder="Yourmail@example.com"
        required
      />
      <textarea
        className="px-8 py-3 rounded-lg bg-gray-200 w-full h-24"
        placeholder="Ask Our About Services"
        required
      />
      <h5 className="text-xl font-bold">Where Did You Hear About Us?</h5>
      <div className="flex flex-wrap gap-4">
        {[
          "Linkedin",
          "Instagram",
          "Job Ads",
          "Events and Seminars",
          "Other",
        ].map((option) => (
          <div key={option} className="flex items-center gap-2">
            <input type="radio" id={option} name="source" value={option} />
            <label className="text-lg" htmlFor={option}>
              {option}
            </label>
          </div>
        ))}
      </div>
      <button className="bg-secondary rounded-md py-2 px-4 font-medium shadow-custom-drop text-bgbase text-primary cursor-pointer block self-start">
        Send
      </button>
    </form>
  );
}
