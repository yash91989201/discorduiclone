import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ExploreIcon from "@mui/icons-material/Explore";
import FileDownload from "@mui/icons-material/FileDownload";
import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as DiscordLogo } from "../../assets/icons/discord_mini_logo.svg";

import NewLineIcon from "../../assets/images/new_line.png";

const Servers = () => {
  return (
    <Box
      sx={{
        paddingTop: "14px",
        paddingX: "8px",
        width: "6vw",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        backgroundColor: "#202225",
      }}
    >
      {/* discord logo */}
      <Button
        sx={{
          marginBottom: "12px",
          padding: "18px",
          borderRadius: "12px",
          backgroundColor: "bgCol.purple1",
        }}
      >
        <DiscordLogo
          style={{ width: "32px", aspectRatio: "1/1", color: "white" }}
        />
      </Button>
      <Button
        sx={{
          width: "95%",
          borderRadius: "",
          overflow: "hidden",
        }}
      >
        <img
          width="100%"
          style={{ borderRadius: "8px" }}
          src={NewLineIcon}
          alt="new line icon"
        />
      </Button>
      {/* user action btn group */}
      <Box
        sx={{
          width: "85%",
        }}
      >
        <Button
          sx={{
            marginY: "6px",
            width: "100%",
            aspectRatio: "1/1",
            backgroundColor: "bgCol.grey2",
            borderRadius: "50%",
            color: "#52e2a1",
            "&:hover": {
              backgroundColor: "bgCol.grey3",
            },
          }}
        >
          <AddIcon />
        </Button>
        <Button
          sx={{
            marginY: "6px",
            width: "100%",
            aspectRatio: "1/1",
            backgroundColor: "bgCol.grey2",
            borderRadius: "50%",
            color: "#52e2a1",
            "&:hover": {
              backgroundColor: "bgCol.grey3",
            },
          }}
        >
          <ExploreIcon />
        </Button>
        <Button
          sx={{
            marginY: "6px",
            width: "100%",
            aspectRatio: "1/1",
            backgroundColor: "bgCol.grey2",
            borderRadius: "50%",
            color: "#52e2a1",
            "&:hover": {
              backgroundColor: "bgCol.grey3",
            },
          }}
        >
          <FileDownload />
        </Button>
      </Box>
    </Box>
  );
};

export default Servers;
