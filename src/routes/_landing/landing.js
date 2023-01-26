import React from "react";
import { Box, Typography } from "@mui/material";

import AppBarCustom from "../../components/appbar";
import useWindowSize from "../../utils/useWindowSize";

import ContactInfo from "./components/contactInfo";
import Skills from "./components/skills";
import Certifications from "./components/certifications";
import Projects from "./components/projects";
import Summary from "./components/summary";
import Experience from "./components/experience";
import Education from "./components/education";

const Landing = () => {
  const { width } = useWindowSize();

  const Desktop = () => {
    return (
      <Box display={"flex"} marginTop={4} marginLeft={15} marginRight={15}>
        <Box flex={2} margin={2}>
          <ContactInfo />
          <Skills />
          <Certifications />
          <Projects />
        </Box>

        <Box flex={5} margin={2}>
          <Summary />
          <Experience />
          <Education />
        </Box>
      </Box>
    );
  };

  const Mobile = () => {
    return (
      <Box marginTop={4} marginLeft={15} marginRight={15}>
        <Box flex={2} margin={2}>
          <ContactInfo />
          <Skills />
          <Certifications />
          <Projects />
        </Box>

        <Box flex={5} margin={2}>
          <Summary />
          <Experience />
          <Education />
        </Box>
      </Box>
    );
  };

  return (
    <div>
      <AppBarCustom />

      {width > 900 ? <Desktop /> : <Mobile />}

      <Box display="flex" justifyContent="center">
        <Typography>Brandon McHugh 2023</Typography>
      </Box>
    </div>
  );
};

export default Landing;
