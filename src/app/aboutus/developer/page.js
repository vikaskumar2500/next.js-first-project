import Link from "next/link";
import React from "react";

const DeveloperPage = () => {
  return (
    <div>
      <h3>Vikas Kumar</h3>

      <Link
        href="/aboutus"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        Back to About Us
      </Link>
    </div>
  );
};

export default DeveloperPage;
