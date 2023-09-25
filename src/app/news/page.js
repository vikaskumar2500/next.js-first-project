import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return (
    <div>
      This is news page.
      <Link href="/" className="font-medium text-blue-800 underline">
        Home page
      </Link>
    </div>
  );
};

export default NewsPage;
