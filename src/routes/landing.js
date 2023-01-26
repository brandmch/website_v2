import { Paper, Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import CodeIcon from "@mui/icons-material/Code";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import AppBarCustom from "../components/appbar";

const Landing = () => {
  return (
    <div>
      <AppBarCustom />
      <Box display={"flex"} marginTop={4} marginLeft={15} marginRight={15}>
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
                <Typography
                  gutterBottom
                  display="flex"
                  alignItems="start"
                  marginTop={3}
                >
                  <Box marginRight={1}>
                    <WorkIcon />
                  </Box>
                  Software Developer
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <SchoolIcon />
                  </Box>
                  Bachelor of Science
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <HomeIcon />
                  </Box>
                  Rockaway, New Jersey
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <LinkedInIcon />
                  </Box>
                  LinkedIn
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <GitHubIcon />
                  </Box>
                  GitHub
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <CallIcon />
                  </Box>
                  Contact me!
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
                <Typography
                  gutterBottom
                  display="flex"
                  alignItems="start"
                  marginTop={3}
                >
                  <Box marginRight={1}>
                    <JavascriptIcon fontSize="medium" />
                  </Box>
                  JavaScript
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <CodeIcon fontSize="medium" />
                  </Box>
                  React
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <CodeIcon fontSize="medium" />
                  </Box>
                  React Native
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <HtmlIcon fontSize="medium" />
                  </Box>
                  HTML
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <CssIcon fontSize="medium" />
                  </Box>
                  CSS
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <CodeIcon fontSize="medium" />
                  </Box>
                  Node.js
                </Typography>
                <Typography gutterBottom display="flex" alignItems="start">
                  <Box marginRight={1}>
                    <CodeIcon fontSize="medium" />
                  </Box>
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
                  Certifications
                </Typography>
                <hr />
                <Typography gutterBottom marginTop={3}>
                  Back End Development and APIs{" "}
                  <a
                    href="https://www.freecodecamp.org/certification/brandmch/back-end-development-and-apis"
                    target="_blank"
                  >
                    (FCC)
                  </a>
                </Typography>
                <Typography gutterBottom>
                  Front End Development Libraries{" "}
                  <a
                    href="https://www.freecodecamp.org/certification/brandmch/front-end-development-libraries"
                    target="_blank"
                  >
                    (FCC)
                  </a>
                </Typography>
                <Typography gutterBottom>
                  Responsive Web Design{" "}
                  <a
                    href="https://www.freecodecamp.org/certification/brandmch/responsive-web-design"
                    target="_blank"
                  >
                    (FCC)
                  </a>
                </Typography>
                <Typography gutterBottom>
                  JavaScript Algorithms and Data Structures{" "}
                  <a
                    href="https://www.freecodecamp.org/certification/brandmch/javascript-algorithms-and-data-structures"
                    target="_blank"
                  >
                    (FCC)
                  </a>
                </Typography>
              </Box>
            </Paper>
          </Box>

          {/* PROJECTS */}
          <Box marginBottom={4} marginTop={4}>
            <Paper elevation={4}>
              <Box padding={2.5}>
                <Typography variant="h4" align="center" gutterBottom>
                  Projects
                </Typography>
                <hr />
                <Typography gutterBottom marginTop={3}>
                  <a href="/drummachine">Drum Machine</a>
                </Typography>
                <Typography gutterBottom>
                  <a href="/javascriptcalulator">JavaScript Calculator</a>
                </Typography>
                <Typography gutterBottom>
                  <a href="/markdownpreviewer">Markdown Previewer</a>
                </Typography>
                <Typography gutterBottom>
                  <a href="/randomquotemachine">Random Quote Machine</a>
                </Typography>
                <Typography gutterBottom>
                  <a href="/timer">Timer</a>
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
            <Paper elevation={4} sx={{ backgroundColor: "#044A07" }}>
              <Box padding={2.5}>
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  color="#FFFFFF"
                >
                  Welcome!
                </Typography>
                <hr />
                <Box display="flex" alignItems="center">
                  <Box flex={10}>
                    <Typography marginTop={3} color="white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Typography>
                  </Box>
                  <Box flex={1}></Box>
                  <Box
                    flex={10}
                    height={200}
                    width={200}
                    borderRadius={100}
                    backgroundColor="white"
                  ></Box>
                </Box>
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
                <Box display="flex" marginTop={4}>
                  <Box flex={1}>
                    <Typography variant="h5">Software Developer</Typography>
                    <Typography variant="h6" gutterBottom fontStyle="italic">
                      OtherWhy LLC
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">Mar 2022 - Present</Typography>
                    <hr />
                  </Box>
                </Box>
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
                <Box display="flex" marginTop={4}>
                  <Box flex={1}>
                    <Typography variant="h5">
                      Sales Development Representative
                    </Typography>
                    <Typography variant="h6" gutterBottom fontStyle="italic">
                      Procore Technologies
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">Nov 2021 - Feb 2022</Typography>
                    <hr />
                  </Box>
                </Box>
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
                <Box display="flex" marginTop={4}>
                  <Box flex={1}>
                    <Typography variant="h5">
                      Sales Development Representative
                    </Typography>
                    <Typography variant="h6" gutterBottom fontStyle="italic">
                      Advanced Systems Concepts, Inc.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">Mar 2020 - May 2021</Typography>
                    <hr />
                  </Box>
                </Box>
                <ul>
                  <li>
                    Helped pioneer the Sales Development team for ASCI’s
                    workload automation software, ActiveBatch
                  </li>
                  <li>
                    Assessed, identified and implemented novel approaches and
                    techniques to quickly identify high potential clients for
                    ActiveBatch Workload Automation
                  </li>
                  <li>
                    Engaged IT professionals through phone, email, and other
                    channels to understand their challenges and identify
                    opportunities to solve them
                  </li>
                  <li>
                    Collaborated with Account Executives to organize discovery
                    calls and product demos with a high rate of conversion and
                    attendance
                  </li>
                  <li>
                    Connected with current clients to discover new business
                    opportunities
                  </li>
                  <li>
                    Worked cross functionally to refine SDR procedures and
                    maximize the effectiveness of the sales team
                  </li>
                </ul>
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
                    Conducted research to determine correlations between
                    academic stress, parental pressure, procrastination, and
                    stimulant use in undergraduate students
                  </li>
                  <li>
                    Using Latent Class Analysis and self-report questionnaires
                    from over two-hundred students, research concluded that
                    procrastination, parental pressure, and academic stress were
                    possible predictors of licit stimulant use
                  </li>
                </ul>
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
