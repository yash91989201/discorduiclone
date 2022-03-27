import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";

// import custom icon
import AddFriend from "./AddFriend";
import ActiveUsers from "./ActiveUsers";

// import icons
import { ReactComponent as FriendsIcon } from "../../assets/icons/friends_icon.svg";

const Friends = () => {
  return (
    <Box sx={{ flex: 1, display: "flex", flexFlow: "column nowrap" }}>
      {/* top bar */}
      <Box
        sx={{
          backgroundColor: "bgCol.grey2",
          borderBottom: "1.25px solid black",
          display: "flex",
        }}
      >
        <Button
          variant="text"
          href="/dashboard/friends"
          // check this later
          startIcon={<FriendsIcon sx={{ color: "textCol.grey3" }} />}
          sx={{
            marginY: "4px",
            paddingX: "24px",
            justifyContent: "flex-start",
            borderRadius: "0",
            boxShadow: "none",
            fontSize: "18px",
            textTransform: "none",
            color: "textCol.white1",
            "&:hover": {
              color: "textCol.grey1",
            },
            "& .MuiButton-startIcon": {
              width: "22px",
            },
          }}
        >
          Friends
        </Button>
        <Box>
          {["Online", "All", "Pending", "Blocked"].map((item, index) => (
            <Button
              key={index}
              variant="text"
              href={`/dashboard/friends/${item.toLowerCase()}`}
              sx={{
                marginY: "4px",
                paddingX: "24px",
                justifyContent: "flex-start",
                borderRadius: "0",
                boxShadow: "none",
                fontSize: "16px",
                textTransform: "none",
                color: "textCol.grey3",
                "&:hover": {
                  color: "textCol.grey1",
                },
                "& .MuiButton-startIcon": {
                  width: "22px",
                },
              }}
            >
              {item}
            </Button>
          ))}
          <Button
            variant="text"
            href="/dashboard/friends/addFriend"
            sx={{
              marginY: "4px",
              paddingX: "24px",
              justifyContent: "flex-start",
              boxShadow: "none",
              fontSize: "16px",
              textTransform: "none",
              color: "textCol.green1",
              "&:hover": {
                color: "textCol.grey1",
              },
              "& .MuiButton-startIcon": {
                width: "22px",
              },
            }}
          >
            Add Friend
          </Button>
        </Box>
      </Box>
      {/* section for online/all/pending/blocked/addfriend */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          backgroundColor: "bgCol.grey2",
          "&.MuiContainer-root": {
            paddingRight: "0px",
          },
        }}
      >
        <Outlet />
        <ActiveUsers />
      </Box>
    </Box>
  );
};

export default Friends;
