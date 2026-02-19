// import React from "react";
// import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

// const ContactSection = () => {
//   return (
//     <div className="bg-white text-gray-800 font-sans py-12 px-6 md:px-20">
//       <div className="max-w-4xl bg-transparent">
//         <div className="bg-transparent mb-6 md:mb-0 flex items-center justify-between ">
//           <div >
//             <h2 className="font-semibold tracking-wide text-lg mb-1 text-black bg-transparent">
//               MKDC STUDIO
//             </h2>
//             <p className="mb-6 leading-relaxed bg-transparent max-w-md">
//               Parle Product compound 3rd floor, Silo Bldg., V S Khendekar Marg,
//               Near Vile Parle Station North Line level crossing, Vile Parle
//               East, Mumbai-400 057
//             </p>
//           </div>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1609.647441251863!2d75.903149!3d22.758175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d53a2174d4f%3A0xd5e3f5dc9cf6d37c!2sManish%20Kumat%20Design%20Cell!5e1!3m2!1sen!2sin!4v1771508234757!5m2!1sen!2sin"
//             width="600"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>

//         <div className="bg-transparent mb-6 md:mb-0">
//           <h2 className="font-semibold tracking-wide text-lg mb-1 text-black bg-transparent">
//             MKDC STUDIO
//           </h2>
//           <p className="mb-6 leading-relaxed bg-transparent max-w-md">
//             Parle Product compound 3rd floor, Silo Bldg., V S Khendekar Marg,
//             Near Vile Parle Station North Line level crossing, Vile Parle East,
//             Mumbai-400 057
//           </p>
//         </div>

//         {/* Contact */}
//         <h2 className="font-semibold tracking-wide text-lg mb-1 text-black bg-transparent">
//           CONTACT
//         </h2>
//         <p className="mb-2 bg-transparent">+9122-46168796</p>
//         <p className="mb-6 bg-transparent">+9122-26855983-4-5-6</p>

//         {/* Enquiries */}
//         <h2 className="font-semibold tracking-wide text-lg mb-1 text-black bg-transparent">
//           Enquiries
//         </h2>
//         <p className="mb-6 bg-transparent">work@dnd.in</p>

//         {/* Media */}
//         <h2 className="font-semibold tracking-wide text-lg mb-1 text-black bg-transparent">
//           Media
//         </h2>
//         <p className="mb-6 bg-transparent">news@dnd.in</p>

//         {/* Work With Us */}
//         <h2 className="font-semibold tracking-wide text-lg mb-1 text-black bg-transparent">
//           Work With Us
//         </h2>
//         <p className="mb-6 bg-transparent">jobs@dnd.in</p>

//         {/* Social Icons */}
//         <div className="flex gap-4 mt-4 bg-transparent">
//           <a
//             href="#"
//             className="p-2 bg-white text-black  bg-transparent rounded hover:bg-gray-300 transition"
//             aria-label="Instagram"
//           >
//             <FaInstagram size={18} />
//           </a>
//           <a
//             href="#"
//             className="p-2 bg-white text-black bg-transparent rounded hover:bg-gray-300 transition"
//             aria-label="Facebook"
//           >
//             <FaFacebookF size={18} />
//           </a>
//           <a
//             href="#"
//             className="p-2 bg-white text-black bg-transparent rounded hover:bg-gray-300 transition"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedinIn size={18} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      file: null,
    });
  };

  return (
    <div className="w-full bg-white text-gray-800 font-sans py-12 px-4 sm:px-6 md:px-16 lg:px-24">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 bg-transparent">

        {/* Office Details */}
        <div className="w-full lg:w-1/2 bg-transparent">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 tracking-wide text-black bg-transparent">
            OUR OFFICE
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-6 text-gray-700 bg-transparent">
            MANISH KUMAT DESIGN CELL <br />
            145/C BASANT VIHAR COLONY <br />
            INDORE (M.P.) <br />
            Email: a4094141@gmail.com <br />
            Landline: +91-0731-4094141 <br />
            +91-0731-4074290
          </p>

          <p className="text-sm md:text-base text-gray-600 bg-transparent">
            For career related queries, send an email to <br />
            a4094141@gmail.com, manishkumat18@gmail.com
          </p>
        </div>

        {/* Google Map */}
        <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] rounded overflow-hidden shadow-md bg-transparent">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1609.647441251863!2d75.903149!3d22.758175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d53a2174d4f%3A0xd5e3f5dc9cf6d37c!2sManish%20Kumat%20Design%20Cell!5e1!3m2!1sen!2sin!4v1771508234757!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto mt-14 text-center px-2 bg-transparent">
        <hr className="border-gray-300 mb-4" />
        <p className="text-sm md:text-base text-gray-600 mb-4 bg-transparent">
          Simply fill out the form with details of your query, and we'll get back in touch with you
        </p>
        <hr className="border-gray-300" />
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto mt-10 space-y-8 bg-transparent"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="YOUR NAME"
          required
          className="w-full bg-transparent border-b border-gray-400 py-3 text-sm md:text-base outline-none placeholder-gray-500 focus:border-black transition"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="YOUR EMAIL"
          required
          className="w-full bg-transparent border-b border-gray-400 py-3 text-sm md:text-base outline-none placeholder-gray-500 focus:border-black transition"
        />

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="SUBJECT"
          required
          className="w-full bg-transparent border-b border-gray-400 py-3 text-sm md:text-base outline-none placeholder-gray-500 focus:border-black transition"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="YOUR MESSAGE"
          rows="4"
          required
          className="w-full bg-transparent border border-gray-400 py-3 px-3 text-sm md:text-base outline-none placeholder-gray-500 focus:border-black transition"
        ></textarea>

        <div className="bg-transparent">
          <label className="text-sm text-gray-600 block mb-2 bg-transparent">
            UPLOAD CV (PDF ONLY | MAX.2 MB)
          </label>
          <input
            type="file"
            name="file"
            accept="application/pdf"
            onChange={handleChange}
            className="text-sm text-gray-600 bg-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full border bg-transparent border-black py-3 tracking-wide text-sm md:text-base hover:bg-black hover:text-white transition duration-300"
        >
          SEND
        </button>
      </form>

      {/* Footer */}
      <div className="text-center mt-14 text-xs text-gray-500 bg-transparent">
        COPYRIGHT © 2021. WEBSITE BY{" "}
        <span className="text-black font-medium bg-transparent">WEBSITEDADA</span>
      </div>
    </div>
  );
};

export default ContactSection;


