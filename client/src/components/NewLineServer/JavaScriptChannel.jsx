import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PushPinIcon from "@mui/icons-material/PushPin";

import { ReactComponent as GiftIcon } from "../../assets/icons/gift_icon.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus_icon.svg";
import GifBoxIcon from "@mui/icons-material/GifBox";
import { ReactComponent as SmileyIcon } from "../../assets/icons/smiling_emoji.svg";
import DiscordWumpusGif from "../../assets/icons/discord-wumpus.gif";

const JavaScriptChannel = () => {
  return (
    <Container
      sx={{
        flex: 1,
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        backgroundColor: "#313139",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            paddingY: "8px",
            display: "flex",
            alignItems: "center",
            color: "textCol.white1",
          }}
        >
          <TagIcon sx={{ marginRight: "8px", color: "textCol.grey3" }} />
          JavaScript
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "textCol.white1",
          }}
        >
          <NotificationsIcon sx={{ marginX: "8px" }} />
          <PeopleAltIcon sx={{ marginX: "8px" }} />
          <PushPinIcon sx={{ marginX: "8px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "flex-end",
            width: "35%",
          }}
        >
          <img src={DiscordWumpusGif} alt="" />
          <Button variant="contained" sx={{ backgroundColor: "bgCol.purple1" }}>
            Wave to
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          marginY: "16px",
          display: "flex",
          backgroundColor: "bgCol.black1",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <TextField
          id=""
          label=""
          variant="filled"
          placeholder="Message #undefined"
          sx={{
            flex: 1,
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
        <Box
          sx={{
            color: "textCol.white1",
            display: "flex",
            alignItems: "center",
          }}
        >
          <GiftIcon style={{ width: "24px", margin: "0 8px" }} />
          <GifBoxIcon sx={{ width: "48px", margin: "0 8px" }} />
          <SmileyIcon style={{ width: "24px", margin: "0 8px" }} />
        </Box>
      </Box>
    </Container>
  );
};

export default JavaScriptChannel;
