import "./Section1.css";

import React, { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/doctors/${category}`);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          "https://carejar-link/api/doctor/categories"
        );
        if (res) setCategories(res.data.categories);
      } catch (error) {
        alert("Error while fetching the categories!");
      }
    };

    getCategories();
  }, []);
  return (
    <div className="container">
      <h2>Book an appointment for an in-clinic consultation!</h2>
      <h3>Find experienced doctors across all specialties</h3>
      <div className="row justify-content-center">
        {categories.map((item, index) => (
          <div
            className="col-md-4 col-sm-6"
            key={index}
            onClick={() => handleClick(item.category)}
          >
            <CategoryCard
              category={item.category}
              image={item.image}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
