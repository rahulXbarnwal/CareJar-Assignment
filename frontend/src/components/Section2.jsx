import "./Section2.css";

import React, { useEffect, useState } from "react";

import DoctorCard from "./DoctorCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const Section2 = () => {
  const [doctors, setDoctors] = useState([]);
  let { category } = useParams();

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const res = await axios.get(
          `https://carejar-link/api/doctor/${category}`
        );
        if (res) setDoctors(res.data.doctors);
      } catch (error) {
        alert("Error while loading doctors data!");
      }
    };
    getDoctors();
  }, [category]);

  return (
    <div className="container">
      {doctors.map((item, index) => (
        <DoctorCard
          key={index}
          name={item.name}
          image={item.image}
          type={item.type}
          experience={item.experience}
          address={item.address}
          clinicName={item.clinicName}
          consultationFee={item.consultationFee}
          rating={item.rating}
          patientStories={item.patientStories}
        />
      ))}
    </div>
  );
};

export default Section2;
