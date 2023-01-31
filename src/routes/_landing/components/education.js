import { Paper, Box, Typography } from "@mui/material";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

const bullets = [
  "Conducted research to determine correlations between academic stress, parental pressure, procrastination, and stimulant use in undergraduate students",
  "Using Latent Class Analysis and self-report questionnaires from over two-hundred students, research concluded that procrastination, parental pressure, and academic stress were possible predictors of licit stimulant use",
];

const List = () => {
  return bullets.map((curr) => {
    return (
      <Box
        display="flex"
        marginBottom={1}
        textAlign="justify"
        marginLeft={3}
        marginRight={3}
      >
        <SubdirectoryArrowRightIcon style={{ marginRight: 10 }} />
        <Typography alignContent="center" gutterBottom>
          {curr}
        </Typography>
      </Box>
    );
  });
};

const Education = ({ width }) => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Education
          </Typography>
          <hr />
          <Box
            display={width < 600 ? null : "flex"}
            marginTop={4}
            textAlign={width < 600 ? "center" : null}
          >
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

          <List />
        </Box>
      </Paper>
    </Box>
  );
};

export default Education;
