import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ReactComponent as NoFriendOnline } from "../../assets/images/no_friend_online.svg";

const Online = () => {
  return (
    <Container
      sx={{
        paddingTop: "16px",
        flex: 1,
        display: "flex",
        flexFlow: "column nowrap",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NoFriendOnline style={{ width: "55%" }} />
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

export default Online;
