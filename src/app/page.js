import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      This is Home Page.
      <br />
      <Link
        href="/aboutus"
        className="font-medium text-blue-800 underline"
      >
        About Us
      </Link>
      <br />
      <Link href="/news" className="font-medium text-blue-800 underline">
        News Page
      </Link>
    </div>
  );
};

export default Home;
