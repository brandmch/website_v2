import { Paper, Box, Typography } from "@mui/material";

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

export default Education;
