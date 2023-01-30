import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

import AppBarCustom from "../../components/appbar";
import FooterCustom from "../../components/footer";
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
  console.log(width);

  const Desktop = ({ width }) => {
    return (
      <Box
        display={"flex"}
        marginTop={4}
        marginLeft="auto"
        marginRight="auto"
        maxWidth={1100}
      >
        <Box flex={2} margin={2}>
          <ContactInfo />
          <Skills />
          <Certifications />
          <Projects />
        </Box>

        <Box flex={5} margin={2}>
          <Summary width={width} />
          <Experience />
          <Education />
        </Box>
      </Box>
    );
  };

  const InBetween = ({ width }) => {
    return (
      <Box marginTop={4} marginLeft={6} marginRight={6}>
        <Summary width={width} />
        <Box display="flex" flex={1} margin={2}>
          <Box flex={1} margin={2} marginLeft={-2}>
            <ContactInfo />
            <Skills />
          </Box>
          <Box flex={1} margin={2} marginRight={-2}>
            <Certifications />
            <Projects />
          </Box>
        </Box>

        <Box marginTop={-5}>
          <Experience />
          <Education />
        </Box>
      </Box>
    );
  };

  const Mobile = ({ width }) => {
    return (
      <Box marginTop={4} marginLeft={6} marginRight={6}>
        <Summary width={width} />

        <ContactInfo />
        <Skills />

        <Certifications />
        <Projects />

        <Experience width={width} />
        <Education width={width} />
      </Box>
    );
  };

  {
    return width ? (
      <div>
        <AppBarCustom />

        {width > 900 ? (
          <Desktop width={width} />
        ) : width > 631 ? (
          <InBetween width={width} />
        ) : (
          <Mobile width={width} />
        )}

        <FooterCustom url="https://github.com/brandmch/website_v2" />
      </div>
    ) : (
      <CircularProgress />
    );
  }
};

export default Landing;
