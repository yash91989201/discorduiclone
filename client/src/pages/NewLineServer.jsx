import React from "react";
import { Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";

import Servers from "../components/Dashboard/Servers";
import Channels from "../components/NewLineServer/Channels";

const Dashboard = () => {
  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "bgCol.grey2",
      }}
    >
      <Servers />
    </Stack>
  );
};

export default Dashboard;
