import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center py-8">
      <div className="flex gap-12 m-auto">
        <a className="footer-icons" href="https://www.linkedin.com/in/rpdev/">
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a className="footer-icons" href="https://github.com/rodrigoperezdev">
          <img src="/icons/github.svg" alt="Git Hub" />
        </a>
        <a
          className="footer-icons"
          href="https://api.whatsapp.com/send?phone=5213316279986"
        >
          <img src="/icons/whatsapp.svg" alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
};
