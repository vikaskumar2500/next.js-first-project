"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const DeveloperPage = () => {
  const { developerId } = useParams();

  const itemDetails = details.find((item) => item.id == developerId);
  console.log(itemDetails);
  return (
    <div>
      {itemDetails ? (
        <h3>
          {itemDetails.name} {itemDetails.role}
        </h3>
      ) : (
        <div>Developer doesn't exist</div>
      )}

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
