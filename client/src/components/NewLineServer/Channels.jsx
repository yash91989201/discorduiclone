import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// import AddIcon from "@mui/icons-material/Add";
import TagIcon from "@mui/icons-material/Tag";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";

const Channels = () => {
  return (
    <Box
      sx={{
        width: "18vw",
        backgroundColor: "bgCol.grey3",
      }}
    >
      <Container>
        <Typography
          variant="h6"
          sx={{
            paddingY: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "textCol.white1",
          }}
        >
          newLine
          <CloseIcon />
        </Typography>
        <Typography
          variant="body1"
          sx={{
            paddingY: "8px",
            display: "flex",
            alignItems: "center",
            color: "textCol.grey3",
          }}
        >
          <TagIcon sx={{ marginRight: "8px" }} />
          rules
        </Typography>
        <Typography
          variant="body1"
          sx={{
            paddingY: "8px",
            display: "flex",
            alignItems: "center",
            color: "textCol.grey3",
          }}
        >
          <KeyboardArrowDownIcon />
          TEXT-CHANNELS
        </Typography>
        <Container>
          {[
            "algorithms",
            "announcements",
            "blogging",
            "collaborators",
            "course-ideas",
            "machine-learning",
            "machine-learning",
            "machine-learning",
            "machine-learning",
            "machine-learning",
          ].map((item) => (
            <Typography
              variant="body1"
              sx={{
                marginY: "16px",
                paddingY: "8px",
                display: "flex",
                alignItems: "center",
                color: "textCol.white1",
              }}
            >
              <TagIcon sx={{ marginRight: "8px", color: "textCol.grey3" }} />
              {item}
            </Typography>
          ))}
        </Container>
      </Container>
    </Box>
  );
};

export default Channels;
