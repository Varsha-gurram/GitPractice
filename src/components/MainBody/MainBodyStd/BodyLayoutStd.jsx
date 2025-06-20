import React from "react";
import { Grid, Paper, styled } from "@mui/material";
import CardOne from "../../MainBody/MainBodyStd/cardOne";
import { classList } from "./CardData";
import StatCard from "../../MainBody/MainBodyStd/StatCard";
import ClassStd from "./ClassStd";
//import SpecialButton from "./SpecialButton";
import ClassCarousel from "./ClassCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccordionStd from "./AccordionStd";
import Schedule from "./Schedule";
import Submit from "./Submit";
import CourseList from "./CourseList";
//import QuizCard from "./QuizCard";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
 // padding: theme.spacing(0.2),
  textAlign: "left",
  margin: "5px",
  padding: "10px",
  lineHeight: "0.5",
  borderRadius: "8px",
  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
  color: theme.palette.text.secondary,
}));
const BodyLayoutStd = () => {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12} md={8}>
        <Item>
          <ClassCarousel />
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Item>
          <CardOne value={52} />
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Item>
          <StatCard/>
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Item>
          <StatCard/>
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Item>
          {classList.map((cls, index) => (
            <ClassStd key={index} {...cls} />
          ))}
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Item>
          <Schedule />
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Item>
          <CourseList />
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Item>
          <Submit />
        </Item>
      </Grid>
      {/* <Grid size={{ xs: 12, md: 8 }}>
        <Item>
          <SpecialButton />
        </Item>
      </Grid> */}

      <Grid size={{ xs: 12, md: 12 }}>
        <Item>
          <AccordionStd />
        </Item>
      </Grid>
    </Grid>
  );
};
export default BodyLayoutStd;
