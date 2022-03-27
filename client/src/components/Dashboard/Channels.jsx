import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as FriendsIcon } from "../../assets/icons/friends_icon.svg";
import { ReactComponent as StageDiscovery } from "../../assets/icons/stage_discovery.svg";
import { ReactComponent as NitroIcon } from "../../assets/icons/nitro_icon.svg";
import { ReactComponent as EmptyDmList } from "../../assets/images/empty_dm_list.svg";
import Typography from "@mui/material/Typography";

const Channels = () => {
  return (
    <Box
      sx={{
        width: "18vw",
        backgroundColor: "bgCol.grey3",
      }}
    >
      <Container sx={{ padding: "24px" }}>
        <TextField
          id=""
          label=""
          variant="filled"
          placeholder="Find or start a converstaion"
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
      </Container>
      <Container>
        <Button
          variant="contained"
          href="/dashboard/friends"
          startIcon={<FriendsIcon />}
          sx={{
            marginY: "4px",
            width: "100%",
            justifyContent: "flex-start",
            backgroundColor: "bgCol.grey1",
            borderRadius: "0",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "bgCol.grey1",
            },
            "& .MuiButton-startIcon": {
              width: "22px",
            },
          }}
        >
          Friends
        </Button>
        <Button
          variant="contained"
          href="/dashboard/stageDiscovery"
          startIcon={<StageDiscovery />}
          sx={{
            marginY: "4px",
            width: "100%",
            justifyContent: "flex-start",
            borderRadius: "0",
            backgroundColor: "transparent",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "bgCol.grey1",
            },
            "& .MuiButton-startIcon": {
              width: "22px",
            },
          }}
        >
          Stage Discovery
        </Button>
        <Button
          variant="contained"
          href="/dashboard/nitro"
          startIcon={<NitroIcon />}
          sx={{
            marginY: "4px",
            width: "100%",
            justifyContent: "flex-start",
            borderRadius: "0",
            backgroundColor: "transparent",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "bgCol.grey1",
            },
            "& .MuiButton-startIcon": {
              width: "22px",
            },
          }}
        >
          Nitro
        </Button>
      </Container>
      <Container sx={{ marginTop: "16px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" color="textCol.white1">
            DIRECT MESSAGES
          </Typography>
          <AddIcon sx={{ color: "textCol.grey1" }} />
        </Box>
        <Box sx={{ padding: "8px" }}>
          <EmptyDmList sx={{ backgroundColor: "bgCol.grey3" }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Channels;
