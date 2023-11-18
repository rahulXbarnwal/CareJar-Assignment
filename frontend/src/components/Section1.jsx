import "./Section1.css";

import React, { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/doctors/${category}`);
  };

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://carejar-link.onrender.com/api/doctor/categories"
        );
        if (res) {
          setCategories(res.data.categories);
          setIsLoading(false);
        }
      } catch (error) {
        alert("Error while fetching the categories!");
        setIsLoading(false);
      }
    };

    getCategories();
  }, []);
  return (
    <div className="container">
      <h2>Book an appointment for an in-clinic consultation!</h2>
      <h3>Find experienced doctors across all specialties</h3>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
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
      )}
    </div>
  );
};

export default Section1;
