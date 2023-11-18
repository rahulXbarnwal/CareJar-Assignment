import * as React from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Typography from "@mui/material/Typography";

const DoctorCard = ({
  name,
  image,
  type,
  experience,
  address,
  clinicName,
  consultationFee,
  rating,
  patientStories,
}) => {
  return (
    <Card
      sx={{
        height: 240,
        width: 900,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100, borderRadius: 50, marginLeft: "5%" }}
        image={image}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "5%",
          maxWidth: 390,
          minWidth: 390,
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {name}
          </Typography>
          <Typography color="text.secondary" component="div">
            {type}
          </Typography>
          <Typography color="text.secondary" component="div">
            {experience} years experience overall
          </Typography>
          <Typography component="div">
            {address}
            <span style={{ color: "gray" }}> • {clinicName} clinic</span>
          </Typography>
          <Typography color="text.secondary" component="div">
            ₹{consultationFee} consultation fee at clinic
          </Typography>
          <Typography
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: 0,
              marginTop: "7%",
            }}
          >
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",

                backgroundColor: "#03AC13",
                color: "white",
                width: "80px",
                height: "30px",
                borderRadius: "10px",
              }}
            >
              <ThumbUpIcon sx={{ height: "50%", width: "30%" }} />
              <span>{rating}%</span>
            </Typography>
            <Typography component="div" sx={{ marginLeft: "5%", width: "82%" }}>
              <u>{patientStories} patients stories</u>
            </Typography>
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 300,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            content="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#03AC13",
            }}
          >
            <InsertInvitationOutlinedIcon />
            <span
              style={{
                marginLeft: "5px",
                fontSize: "14px",
              }}
            >
              <b>Available Today</b>
            </span>
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "10%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textTransform: "none",
              width: 150,
              height: 45,
            }}
          >
            <span style={{ fontSize: "12px" }}> Book Appointment</span>
            <span style={{ fontSize: "10px" }}> No Booking Fee</span>
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default DoctorCard;
