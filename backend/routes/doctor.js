const express = require("express");
const router = express.Router();
const { faker } = require("@faker-js/faker");

router.get("/categories", (req, res, next) => {
  const doctorJobTypes = [
    "Gynecologist",
    "Cardiologist",
    "Dermatologist",
    "Orthopedic Surgeon",
    "Pediatrician",
    "Neurologist",
    "Oncologist",
    "Psychiatrist",
    "Urologist",
    "ENT Specialist",
    "Dentist",
  ];
  console.log(doctorJobTypes);
  res.status(200).json({ categories: doctorJobTypes });
});

router.get("/:category", (req, res, next) => {
  const { category } = req.params;
  const numberOfDoctors = 10;

  const doctors = Array.from({ length: numberOfDoctors }, () => {
    const sex = faker.person.sex();
    return {
      name: faker.person.fullName({ sex: sex }),
      image: faker.image.avatar(),
      type: category,
      experience: faker.number.int({ min: 1, max: 30 }),
      address: faker.location.city(),
      clinicName: faker.company.name(),
      consultationFee: faker.number.int({ min: 300, max: 2000 }),
      rating: faker.number.int({ min: 1, max: 100 }),
      patientStories: faker.number.int({ min: 1, max: 100 }),
    };
  });
  res.status(200).json({ doctors: doctors });
});

module.exports = router;
