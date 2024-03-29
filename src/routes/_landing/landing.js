import React from "react";
import { Box, CircularProgress } from "@mui/material";

import AppBarCustom from "../../components/appbar";
import FooterCustom from "../../components/footer";

import useWindowSize from "../../utils/useWindowSize";

import Summary from "./components/summary";
import Experience from "./components/experience";
import Education from "./components/education";
import {
  Certifications,
  ContactInfo,
  Skills,
  Hobbies,
  Projects,
} from "./components/smallBoxes";

import { randomColor } from "../../utils/randomColor";

const Landing = () => {
  const { width } = useWindowSize();

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
          <Projects />
          <Certifications />
          <Hobbies />
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
      <Box marginTop={4} marginLeft={2} marginRight={2}>
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

  return width ? (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${randomColor()}, rgb(255, 255, 255))`,
      }}
    >
      <AppBarCustom />
      {/* #30377B */}
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
};

export default Landing;
