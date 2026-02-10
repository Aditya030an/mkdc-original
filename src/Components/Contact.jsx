import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-[#0a0a0a] text-gray-300 font-sans py-12 px-6 md:px-20">
      <div className="max-w-4xl bg-transparent">
        <div className="bg-transparent mb-6 md:mb-0">
          <h2 className="font-semibold tracking-wide text-lg mb-1 text-white bg-transparent">
            MKDC STUDIO
          </h2>
          <p className="mb-6 leading-relaxed bg-transparent max-w-md">
            Parle Product compound 3rd floor, Silo Bldg., V S Khendekar Marg,
            Near Vile Parle Station North Line level crossing, Vile Parle East,
            Mumbai-400 057
          </p>
        </div>

        <div className="bg-transparent mb-6 md:mb-0">
          <h2 className="font-semibold tracking-wide text-lg mb-1 text-white bg-transparent">
            KDND STUDIO
          </h2>
          <p className="mb-6 leading-relaxed bg-transparent max-w-md">
            Parle Product compound 3rd floor, Silo Bldg., V S Khendekar Marg,
            Near Vile Parle Station North Line level crossing, Vile Parle East,
            Mumbai-400 057
          </p>
        </div>

        {/* Contact */}
        <h2 className="font-semibold tracking-wide text-lg mb-1 text-white bg-transparent">
          CONTACT
        </h2>
        <p className="mb-2 bg-transparent">+9122-46168796</p>
        <p className="mb-6 bg-transparent">+9122-26855983-4-5-6</p>

        {/* Enquiries */}
        <h2 className="font-semibold tracking-wide text-lg mb-1 text-white bg-transparent">
          Enquiries
        </h2>
        <p className="mb-6 bg-transparent">work@dnd.in</p>

        {/* Media */}
        <h2 className="font-semibold tracking-wide text-lg mb-1 text-white bg-transparent">
          Media
        </h2>
        <p className="mb-6 bg-transparent">news@dnd.in</p>

        {/* Work With Us */}
        <h2 className="font-semibold tracking-wide text-lg mb-1 text-white bg-transparent">
          Work With Us
        </h2>
        <p className="mb-6 bg-transparent">jobs@dnd.in</p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 bg-transparent">
          <a
            href="#"
            className="p-2 bg-white text-black  bg-transparent rounded hover:bg-gray-300 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="p-2 bg-white text-black bg-transparent rounded hover:bg-gray-300 transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="p-2 bg-white text-black bg-transparent rounded hover:bg-gray-300 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
