import { Paper, Box, Typography } from "@mui/material";

const Experience = ({ width }) => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center">
            Experience
          </Typography>
          <hr />
          <Box
            display={width < 600 ? null : "flex"}
            marginTop={4}
            textAlign={width < 600 ? "center" : null}
          >
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
              Built the scaffolding for a new web app using React, TypeScript,
              GraphQL Apollo, AWS Amplify, AWS Cognito, MUI, and Github
            </li>
            <li>
              Helped design and implement cloud infrastructure with Amazon
              services such as AWS Amplify and AWS Cognito
            </li>
            <li>
              Set up content management using a headless CMS with API calls
            </li>
            <li>
              Configured Google Cloud Platform to allow Cognito to authenticate
              users using Google Sign In
            </li>
            <li>
              Created login and registration pages using React, MUI, AWS
              Cognito, and GraphQL
            </li>
            <li>Deployed assets using a Content Delivery Network (CDN)</li>
            <li>
              Setup end to end testing as well as unit testing using different
              test frameworks
            </li>
            <li>
              Worked on an agile team using agile ceremonies such as standup,
              retro, grooming and commitment meetings
            </li>
            <li>
              Utilized Jira, Confluence, Slack, Figma, Miro and google workspace
              to collaborate cross-team with Technical Project Managers, Scrum
              Master, Architect, Product Managers, Designers and business
              stakeholders
            </li>
          </ul>
          <Box
            display={width < 600 ? null : "flex"}
            marginTop={4}
            textAlign={width < 600 ? "center" : null}
          >
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
            <li>Created new business opportunities to fuel Procore’s growth</li>
            <li>
              Engaged construction professionals through phone, email, and other
              channels to understand their challenges and identify opportunities
              to solve them
            </li>
            <li>
              Partnered with Account Executives to achieve mutually aligned
              sales quotas each month
            </li>
            <li>
              Autonomously operated beyond the role to help the team improve
              processes, training, use of technology, and any other aspects of
              business
            </li>
            <li>
              {" "}
              Worked cross-team with sales management to develop targeted lists,
              call strategies, and messaging to create opportunities for new
              business
            </li>
          </ul>
          <Box
            display={width < 600 ? null : "flex"}
            marginTop={4}
            textAlign={width < 600 ? "center" : null}
          >
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
              Helped pioneer the Sales Development team for ASCI’s workload
              automation software, ActiveBatch
            </li>
            <li>
              Assessed, identified and implemented novel approaches and
              techniques to quickly identify high potential clients for
              ActiveBatch Workload Automation
            </li>
            <li>
              Engaged IT professionals through phone, email, and other channels
              to understand their challenges and identify opportunities to solve
              them
            </li>
            <li>
              Collaborated with Account Executives to organize discovery calls
              and product demos with a high rate of conversion and attendance
            </li>
            <li>
              Connected with current clients to discover new business
              opportunities
            </li>
            <li>
              Worked cross functionally to refine SDR procedures and maximize
              the effectiveness of the sales team
            </li>
          </ul>
        </Box>
      </Paper>
    </Box>
  );
};

export default Experience;
