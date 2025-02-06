"use client";

import React from "react";
import Logo from "./ui/movielogo";
import { MailIcon } from "lucide-react";
import PhoneIcon from "./ui/phone";

const Footer = () => {
  return (
    <div>
      <div className="">
        <div className="space-y-3">
          <div className="flex items-center gap-x-2">
            <Logo />
          </div>
          <p>© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="flex gap-x-12 lg:gap-x-24">
          <div className="space-y-3">
            <h4>Contact Information</h4>
            <div>
              <div className="flex items-center gap-x-3">
                <MailIcon />
                <div>
                  <h5 className="font-medium">Email</h5>
                  <p>skiple@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <PhoneIcon />
                <h5 className="font-medium">Phone</h5>
                <p>+976 9999erhiihuruuchigchiihuruu</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4>Follow us</h4>
            <div className="flex flex-col gap-3 lg:flex-row">
                <span>Insta</span>
                <span>Peesuuk</span>
                <span>Twater</span>
                <span>Metube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;