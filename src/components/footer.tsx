"use client";

import React from "react";
import PhoneIcon from "./ui/phone";
import MailIcon from "./ui/email";
import MoviezDark from "./ui/moviez-dark";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-indigo-700 py-10 px-5 text-sm text-[#fafafa]">
      <div className="mx-auto flex flex-col justify-between gap-y-7 lg:flex-row max-w-screen-xl ">
        <div className="space-y-3">
          <div className="flex items-center gap-x-2">
          <Link href={"/"}>
            <MoviezDark/>
            </Link>
          </div>
          <p>© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="flex gap-x-12 lg:gap-x-24">
          <div className="space-y-3">
            <h4>Contact Information</h4>
            <div>
              <div className="flex items-center gap-x-3">
                <MailIcon/>
                <div>
                  <h5 className="font-bold">Email</h5>
                  <p>skiple@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <PhoneIcon />
                <h5 className="font-bold">Phone</h5>
                <p>+976 99999999</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4>Follow us</h4>
            <div className="flex flex-col gap-3 lg:flex-row font-bold">
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