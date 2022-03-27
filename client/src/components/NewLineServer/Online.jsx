import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

// import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as QuestionIcon } from "../../assets/icons/question_icon.svg";
import { ReactComponent as InboxIcon } from "../../assets/icons/inbox_icon.svg";
import { ReactComponent as DiscordLogo } from "../../assets/icons/discord_logo.svg";
import Typography from "@mui/material/Typography";

const Online = () => {
  return (
    <Container
      sx={{
        width: "20vw",
        display: "flex",
        flexFlow: "column nowrap",
        "&.MuiContainer-root": {
          padding: "8px",
          paddingBottom: "0px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginBottom: "8px",
        }}
      >
        <TextField
          id=""
          label=""
          variant="filled"
          placeholder="Search"
          fullWidth
          sx={{
            "& .MuiFilledInput-input": {
              padding: "12px",
              height: "16px",
              backgroundColor: "bgCol.black1",
              fontSize: "16px",
              color: "textCol.grey3",
            },
            "& .MuiFilledInput-root::before , .MuiFilledInput-root::after": {
              display: "none",
            },
          }}
        />
        <QuestionIcon
          style={{ width: "40px", margin: "0 8px", color: "#f6f6f6" }}
        />
        <InboxIcon
          style={{ width: "40px", margin: "0 8px", color: "#f6f6f6" }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body1"
          sx={{ color: "textCol.grey3", marginTop: "24px" }}
        >
          ONLINE-3
        </Typography>
        <Box sx={{ paddingX: "8px" }}>
          {[
            "Milad",
            "batman",
            "joker",
            "batgirl",
            "wonder woman",
            "flash",
            "aquaman",
            "thanos",
            "iron man",
          ].map((item) => (
            <Box sx={{ marginY: "8px", display: "flex", alignItems: "center" }}>
              <DiscordLogo
                style={{
                  marginRight: "16px",
                  width: "56px",
                  borderRadius: "50%",
                }}
              />
              <Typography variant="body2" sx={{ color: "textCol.grey3" }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Online;
