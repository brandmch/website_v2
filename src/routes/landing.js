import { Paper, Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import CodeIcon from "@mui/icons-material/Code";
import React from "react";
import AppBarCustom from "../components/appbar";

const Landing = () => {
  return (
    <div>
      <AppBarCustom />
      <Box display={"flex"} marginTop={2} marginLeft={15} marginRight={15}>
        {/*  */}
        {/* LEFT COLUMN */}
        {/*  */}

        <Box flex={2} margin={2}>
          {/* CONTACT INFO */}
          <Box marginBottom={4}>
            <Paper elevation={4}>
              <Box padding={2.5}>
                <Typography variant="h4" align="center" gutterBottom>
                  Brandon McHugh
                </Typography>
                <hr />
                <Typography gutterBottom>
                  <WorkIcon />
                  Software Developer
                </Typography>
                <Typography gutterBottom>
                  <SchoolIcon />
                  Bachelor of Science
                </Typography>
                <Typography gutterBottom>
                  <HomeIcon />
                  Rockaway, New Jersey
                </Typography>
                <Typography gutterBottom>
                  <CallIcon />
                  Contact me
                </Typography>
              </Box>
            </Paper>
          </Box>

          {/* SKILLS */}
          <Box marginBottom={4} marginTop={4}>
            <Paper elevation={4}>
              <Box padding={2.5}>
                <Typography variant="h4" align="center" gutterBottom>
                  Languages and Frameworks
                </Typography>
                <hr />
                <Typography>
                  <JavascriptIcon fontSize="medium" />
                  JavaScript
                </Typography>
                <Typography>
                  <CodeIcon fontSize="medium" />
                  React
                </Typography>
                <Typography>
                  <CodeIcon fontSize="medium" />
                  React Native
                </Typography>
                <Typography>
                  <HtmlIcon fontSize="medium" />
                  HTML
                </Typography>
                <Typography>
                  <CssIcon fontSize="medium" />
                  CSS
                </Typography>
                <Typography>
                  <CodeIcon fontSize="medium" />
                  Node.js
                </Typography>
                <Typography>
                  <CodeIcon fontSize="medium" />
                  VS Code
                </Typography>
              </Box>
            </Paper>
          </Box>

          {/* CERTIFICATIONS? */}
          <Box marginBottom={4} marginTop={4}>
            <Paper elevation={4}>
              <Box padding={2.5}>
                <Typography variant="h4" align="center" gutterBottom>
                  Certifications?
                </Typography>
                <hr />
                <Typography gutterBottom>
                  Back End Development and APIs
                </Typography>
                <Typography gutterBottom>
                  Front End Development Libraries
                </Typography>
                <Typography gutterBottom>Responsive Web Design</Typography>
                <Typography gutterBottom>
                  JavaScript Algorithms and Data Structures
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
        {/*  */}
        {/* RIGHT COLUMN */}
        {/*  */}

        <Box flex={5} margin={2}>
          {/* SUMMARY */}
          <Box marginBottom={4}>
            <Paper elevation={4}>
              <Box padding={2.5}>
                <Typography variant="h4" align="center" gutterBottom>
                  Summary
                </Typography>
                <hr />
              </Box>
            </Paper>
          </Box>

          {/* EXPERIENCE */}
          <Box marginBottom={4} marginTop={4}>
            <Paper elevation={4}>
              <Box padding={2.5}>
                <Typography variant="h4" align="center">
                  Experience
                </Typography>
                <hr />
                <Typography variant="h5" gutterBottom>
                  Software Developer
                </Typography>
                <Typography variant="h6" gutterBottom>
                  OtherWhy LLC
                </Typography>
                <Typography>March 2022 - Present</Typography>
                <ul>
                  <li>
                    Built the scaffolding for a new web app using React,
                    TypeScript, GraphQL Apollo, AWS Amplify, AWS Cognito, MUI,
                    and Github
                  </li>
                  <li>
                    Helped design and implement cloud infrastructure with Amazon
                    services such as AWS Amplify and AWS Cognito
                  </li>
                  <li>
                    Set up content management using a headless CMS with API
                    calls
                  </li>
                  <li>
                    Configured Google Cloud Platform to allow Cognito to
                    authenticate users using Google Sign In
                  </li>
                  <li>
                    Created login and registration pages using React, MUI, AWS
                    Cognito, and GraphQL
                  </li>
                  <li>
                    Deployed assets using a Content Delivery Network (CDN)
                  </li>
                  <li>
                    Setup end to end testing as well as unit testing using
                    different test frameworks
                  </li>
                  <li>
                    Worked on an agile team using agile ceremonies such as
                    standup, retro, grooming and commitment meetings
                  </li>
                  <li>
                    Utilized Jira, Confluence, Slack, Figma, Miro and google
                    workspace to collaborate cross-team with Technical Project
                    Managers, Scrum Master, Architect, Product Managers,
                    Designers and business stakeholders
                  </li>
                </ul>
                <Typography variant="h5" gutterBottom>
                  Sales Development Representative
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Procore Technologies
                </Typography>
                <Typography>November 2021 - February 2022</Typography>
                <ul>
                  <li>
                    Created new business opportunities to fuel Procore’s growth
                  </li>
                  <li>
                    Engaged construction professionals through phone, email, and
                    other channels to understand their challenges and identify
                    opportunities to solve them
                  </li>
                  <li>
                    Partnered with Account Executives to achieve mutually
                    aligned sales quotas each month
                  </li>
                  <li>
                    Autonomously operated beyond the role to help the team
                    improve processes, training, use of technology, and any
                    other aspects of business
                  </li>
                  <li>
                    {" "}
                    Worked cross-team with sales management to develop targeted
                    lists, call strategies, and messaging to create
                    opportunities for new business
                  </li>
                </ul>
                <Typography variant="h5" gutterBottom>
                  Sales Development Representative
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Advanced Systems Concepts
                </Typography>
                <Typography>March 2020 - May 2021</Typography>
              </Box>
            </Paper>
          </Box>

          {/* EDUCATION */}
          <Box marginBottom={4} marginTop={4}>
            <Paper elevation={4}>
              <Box padding={2.5}>
                <Typography variant="h4" align="center" gutterBottom>
                  Education
                </Typography>
                <hr />
                <Typography>Rowan University</Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography>Brandon McHugh 2023</Typography>
      </Box>
    </div>
  );
};

export default Landing;
