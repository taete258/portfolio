import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";
import profile from "@images/profile-self.jpg";

export default function Page() {
  return (
    <div className="w-full h-full flex  flex-col justify-center space-y-4">
      <div className="flex md:flex-row flex-col gap-6 w-full space-x-4 rounded-2xl px-4 py-2 sm:p-10 items-center justify-center">
        <h1 className="text-5xl font-bold">Contacts</h1>

        <div className="avatar min-w-[150px]">
          <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              alt="profile-image"
              className="mask mask-circle"
              src={profile}
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="py-6 space-y-4 min-w-[250px]">
          <Link
            className="flex flex-row flex-wrap gap-4"
            href={"mailto:Ratchanon.tpta@gmail.com"}
          >
            <FaEnvelope size={24} /> <p>Ratchanon.tpta@gmail.com</p>
          </Link>
          <Link
            className="flex flex-row flex-wrap gap-4"
            href={"tel:0648482380"}
          >
            <FaPhone size={24} /> <p>0648482380</p>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ratchanon-pheungta-6846a9229/"}
            target="_blank"
            className="flex flex-row flex-wrap gap-4"
          >
            <FaLinkedin size={24} /> Ratchanon Pheungta
          </Link>
        </div>
      </div>
    </div>
  );
}
