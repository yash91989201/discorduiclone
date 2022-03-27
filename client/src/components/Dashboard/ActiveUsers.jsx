import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ActiveSection = () => {
  return (
    <Container
      sx={{
        width: "24vw",
        height: "100%",
        borderLeft: "1.75px solid #4f545c",
        "&.MuiContainer-root": {
          padding: "12px",
        },
      }}
    >
      <Typography
        variant="h5"
        fontWeight="700"
        sx={{ color: "textCol.white1" }}
      >
        Active Now
      </Typography>
      <Box
        sx={{ paddingY: "32px", textAlign: "center", color: "textCol.white1" }}
      >
        <Typography variant="h6" fontWeight="600">
          It's quite for now ...
        </Typography>
        <Typography variant="body1" paddingY="8px" color="textCol.grey3">
          When a friend starts an activity - like playing a game or hanging out
          on voice - we'll how it here!
        </Typography>
      </Box>
    </Container>
  );
};

export default ActiveSection;
