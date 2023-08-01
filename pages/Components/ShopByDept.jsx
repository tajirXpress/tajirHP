import Link from "next/link";
import React, { useState } from "react";

const ShopByDept = () => {
  let depts = [
    "Groceries & Food",
    "Kitchen",
    "Mobile & Tablets",
    "Home & Appliances",
    "Home Improvement",
    "Health & Wellnes",
    "Baby & Kids",
    "Toys & Games",
    "Pet Supplies",
    "Electronics",
    "Automotive & Tools",
    "Fashion & Apparel",
    "Fragrances",
    "Beauty & Personal Care",
    "Sports & Fitness",
    "Computers & Accessories",
    "Books & Stationary",
    "Jewelry & Watches",
    "Gifts & Occasions",
    "Art, Crafts & Tailoring",
    "Travel & Outdoor",
  ];

  const [activeDept, setActiveDept] = useState(null);

  const handleDeptHover = (deptIndex) => {
    setActiveDept(deptIndex);
  };

  const handleDeptLeave = () => {
    setActiveDept(null);
  };

  return (
    <div className="shopDept">
      <h4>Shop by Department</h4>
      <div className="subdept">
        {depts.map((e, index) => (
          <div
            key={index}
            className={`dept ${activeDept === index ? "active" : ""}`}
            onMouseEnter={() => handleDeptHover(index)}
            onMouseLeave={handleDeptLeave}
          >
            <Link href={"/" + e} className="deptlinks">
              {" "}
              <h5>{e}</h5>
            </Link>
          </div>
        ))}
      </div>
      <h6>DAILY DEALS 00:00:00</h6>
    </div>
  );
};

export default ShopByDept;
