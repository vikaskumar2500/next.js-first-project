"use client";
import Link from "next/link";
import React from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const AboutPage = () => {
  return (
    <div>
      <ul>
        {details.map((item) => (
          <li key={item.id}>
            <Link
              href={`aboutus/${item.id}`}
              className="font-medium text-blue-800 underline"
            >
              {item.name}
            </Link>
            <br />
          </li>
        ))}
      </ul>
      <br />
      <Link href="/" className="font-medium text-blue-800 underline">
        Home page
      </Link>
    </div>
  );
};

export default AboutPage;
