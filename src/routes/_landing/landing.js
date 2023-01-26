import React from "react";
import { Paper, Box, Typography } from "@mui/material";

import AppBarCustom from "../../components/appbar";
import useWindowSize from "../../utils/useWindowSize";

import ContactInfo from "./components/contactInfo";
import Skills from "./components/skills";
import Certifications from "./components/certifications";
import Projects from "./components/projects";
import Summary from "./components/summary";
import Experience from "./components/experience";

const Education = () => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Education
          </Typography>
          <hr />
          <Box display="flex" marginTop={4}>
            <Box flex={1}>
              <Typography variant="h5">
                Bachelor of Science - Psychology
              </Typography>
              <Typography variant="h6" gutterBottom fontStyle="italic">
                Rowan University
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                <span
                  style={{
                    fontSize: 12,
                    fontStyle: "italic",
                    marginRight: 5,
                  }}
                >
                  Degree Received{" "}
                </span>
                December 2019
              </Typography>
            </Box>
          </Box>
          <ul>
            <li>
              Conducted research to determine correlations between academic
              stress, parental pressure, procrastination, and stimulant use in
              undergraduate students
            </li>
            <li>
              Using Latent Class Analysis and self-report questionnaires from
              over two-hundred students, research concluded that
              procrastination, parental pressure, and academic stress were
              possible predictors of licit stimulant use
            </li>
          </ul>
        </Box>
      </Paper>
    </Box>
  );
};

const Landing = () => {
  const { width } = useWindowSize();
  return (
    <div>
      <AppBarCustom />
      <Box
        display={width < 900 ? "" : "flex"}
        marginTop={4}
        marginLeft={15}
        marginRight={15}
      >
        {/* LEFT COLUMN */}
        <Box flex={2} margin={2}>
          <ContactInfo />
          <Skills />
          <Certifications />
          <Projects />
        </Box>

        {/* RIGHT COLUMN */}
        <Box flex={5} margin={2}>
          <Summary />
          <Experience />
          <Education />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography>Brandon McHugh 2023</Typography>
      </Box>
    </div>
  );
};

export default Landing;
