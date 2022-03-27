import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ReactComponent as AddFriendIcon } from "../../assets/icons/add_friend.svg";

const AddFriend = () => {
  return (
    <Container
      sx={{
        paddingTop: "16px",
        flex: 1,
        display: "flex",
        flexFlow: "column nowrap",
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ color: "textCol.white1" }}>
          ADD FRIEND
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ paddingY: "12px", color: "textCol.white1" }}
        >
          You can add a friend with their Discord Tag. It's cAsE sEnSitivE!
        </Typography>
        <Box
          sx={{
            display: "flex",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <TextField
            id="username"
            placeholder="Enter a Username#0000"
            sx={{
              flex: 1,
              backgroundColor: "bgCol.grey3",
              "& .MuiOutlinedInput-input": {
                color: "textCol.grey3",
              },
            }}
          />
          <Box
            sx={{
              width: "16vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "bgCol.grey3",
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "bgCol.purple1", textTransform: "none" }}
            >
              Send Friend Request
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddFriendIcon style={{ width: "55%" }} />
        <Typography
          variant="body2"
          sx={{ paddingY: "24px", color: "textCol.grey3" }}
        >
          Wumpus is waiting on friends. You don't have to though!
        </Typography>
      </Box>
    </Container>
  );
};

export default AddFriend;
