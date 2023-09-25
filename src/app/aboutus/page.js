"use client";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Link
        href="/aboutus/developer"
        className="font-medium text-blue-800 underline"
      >
        Go to the Developer page
      </Link>
      <br />
      <Link href="/" className="font-medium text-blue-800 underline">
        Home page
      </Link>
    </div>
  );
};

export default AboutPage;
