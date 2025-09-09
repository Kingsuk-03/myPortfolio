import React from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a1796df-86d2-4eb1-aaa7-d49b94a8e707");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success",
      });
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <form
        className="h-full flex flex-col justify-between bg-transparent border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition"
        onSubmit={onSubmit}>
        <h2 className="text-2xl font-bold text-white mb-3 text-center bg-gradient-to-r from-[#c137ff] via-[#07c6ff] to-[#97ccf7] bg-clip-text">
          Get in Touch
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-white/80 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b7daf6]"
            name="name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-white/80 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b7daf6]"
            name="email"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6 flex-1">
          <label className="block text-lg font-medium text-white/80 mb-1">
            Message
          </label>
          <textarea
            rows={1}
            placeholder="Your message..."
            className="w-full h-full min-h-[120px] px-4 py-2 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#b7daf6]"
            name="message"
            required></textarea>
        </div>
        <button className="text-[17px] px-[25px] py-[10px] rounded-xl bg-gradient-to-b from-[#d6cafe] to-[#9e81fe] border-2 border-neutral-800 border-b-[5px] border-b-neutral-800 shadow-[0px_1px_6px_0px_#9e81fe] cursor-pointer transition-all duration-200 ease-linear active:translate-y-[3px] active:border-b-[2px] active:border-b-neutral-800">
          Click Me
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
