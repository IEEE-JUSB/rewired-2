import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapLocationDot,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-black text-red-500 w-full p-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around text-xl space-y-10 md:space-y-0">



        
        <div className="w-auto mb-20">
          <div className="font-extrabold text-center mb-2">About JUSB</div>
          <div className="w-80">
            The Jadavpur University Student Branch, founded in 2010, belongs to the Kolkata section. We are a group of enthusiastic students promoting innovative ideas within and outside the campus.
          </div>
        </div>

       
        <div className="w-auto ">
          <div className="font-extrabold mb-2 pl-2">Quick Links</div>
          <div className="text-center">
            <a href="/" className="hover:text-red-400 transition">Home</a><br />
            
            <a href="/timeline" className="hover:text-red-400 transition">Timeline</a><br />
            <a href="/faqs" className="hover:text-red-400 transition">FAQs</a>
          </div>
        </div>

        
        <div className="w-auto px-6 ">
          <div className="font-extrabold mb-2 text-center">Contact Us</div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:jaduniv.ieee@gmail.com">jaduniv.ieee@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+91 72789 72359</span>
          </div>
          <div className="flex items-start gap-2">
            <FaMapLocationDot className="mt-1" />
            <span>
              188, Raja S.C. Mallick Rd, <br />
              Kolkata-700032, India
            </span>
          </div>
        </div>

        
        <div className="w-auto ml-5">
          <div className="font-extrabold mb-2">Follow us on Socials</div>
          <div className="flex gap-4 items-center text-2xl">
            <a
              href="https://www.instagram.com/_ieeeju/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/IeeeJadavpur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.facebook.com/ieeejusb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-ju/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      
      <div className=" border-t  flex w-full justify-center border-red-500 px-7 bg-black">
        <div className="flex flex-col items-center space-y-1">
          <p className="text-red-500 text-lg font-Poppins p-3">
            Made with &#10084; by IEEE JUSB
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
