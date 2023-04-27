import { Paper, Box, Typography } from "@mui/material";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";

const items = [
  {
    title: "Software Developer",
    company: "OtherWhy LLC",
    dates: "Mar 2022 - Present",
    duties: [
      "Built the scaffolding for a new web app using React, TypeScript, GraphQL Apollo, AWS Amplify, AWS Cognito, MUI, and Github",
      "Helped design and implement cloud infrastructure with Amazon services such as AWS Amplify and AWS Cognito",
      "Set up content management using a headless CMS with API calls",
      "Configured Google Cloud Platform to allow Cognito to authenticate users using Google Sign In",
      "Created login and registration pages using React, MUI, AWS Cognito, and GraphQL",
      "Deployed assets using a Content Delivery Network (CDN)",
      "Setup end to end testing as well as unit testing using different test frameworks",
      "Worked on an agile team using agile ceremonies such as standup, retro, grooming and commitment meetings",
      "Utilized Jira, Confluence, Slack, Figma, Miro and google workspace to collaborate cross-team with Technical Project Managers, Scrum Master, Architect, Product Managers, Designers and business stakeholders",
    ],
  },
  {
    title: "Sales Development Representative",
    company: "Procore Technologies",
    dates: "Nov 2021 - Feb 2022",
    duties: [
      "Created new business opportunities to fuel Procore’s growth",
      "Engaged construction professionals through phone, email, and other channels to understand their challenges and identify opportunities to solve them",
      "Partnered with Account Executives to achieve mutually aligned sales quotas each month",
      "Autonomously operated beyond the role to help the team improve processes, training, use of technology, and any other aspects of business",
      "Worked cross-team with sales management to develop targeted lists, call strategies, and messaging to create opportunities for new business",
    ],
  },
  {
    title: "Sales Development Representative",
    company: "Advanced Systems Concepts, Inc.",
    dates: "Mar 2020 - May 2021",
    duties: [
      "Helped pioneer the Sales Development team for ASCI’s workload automation software, ActiveBatch",
      "Assessed, identified and implemented novel approaches and techniques to quickly identify high potential clients for ActiveBatch Workload Automation",
      "Engaged IT professionals through phone, email, and other channels to understand their challenges and identify opportunities to solve them",
      "Collaborated with Account Executives to organize discovery calls and product demos with a high rate of conversion and attendance",
      "Connected with current clients to discover new business opportunities",
      "Worked cross functionally to refine SDR procedures and maximize the effectiveness of the sales team",
    ],
  },
];

const ExpList = ({ width }) => {
  return items.map(({ title, company, dates, duties }) => {
    return (
      <Box key={randomKeyGenerator()}>
        <Box
          display={width < 600 ? null : "flex"}
          marginTop={4}
          marginBottom={1}
          textAlign={width < 600 ? "center" : null}
        >
          <Box flex={1}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6" gutterBottom fontStyle="italic">
              {company}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">{dates}</Typography>
            <hr />
          </Box>
        </Box>
        {duties.map((curr) => {
          return (
            <Box
              display="flex"
              marginBottom={1}
              textAlign="justify"
              marginLeft={3}
              marginRight={3}
              key={randomKeyGenerator()}
            >
              {width <= 631 ? null : (
                <SubdirectoryArrowRightIcon style={{ marginRight: 10 }} />
              )}

              <Typography alignContent="center" gutterBottom>
                {curr}
              </Typography>
            </Box>
          );
        })}
      </Box>
    );
  });
};

const Experience = ({ width }) => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center">
            Experience
          </Typography>
          <hr />
          <ExpList width={width} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Experience;
