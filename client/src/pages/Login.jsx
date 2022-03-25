import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { ReactComponent as DiscordMiniLogo } from "../assets/icons/discord_mini_logo.svg";
import RegisterBg from "../assets/images/register_bg.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import QrCodeImg from "../assets/images/qr_code.png";

const Login = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const moreThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "9",
          padding: "32px",
          display: matchesMd ? "none" : "flex",
          alignItems: "center",
        }}
      >
        <DiscordMiniLogo
          style={{ height: "32px", marginRight: "16px", color: "#fff" }}
        />
        <span style={{ fontSize: "24px", fontWeight: "600", color: "#fff" }}>
          Discord
        </span>
      </p>
      <div
        style={{
          position: "absolute",
          display: matchesSm ? "none" : "",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src={RegisterBg}
          style={{ width: "100%", height: "100%" }}
          alt="background for register page"
        />
      </div>
      <Box
        sx={{
          zIndex: "9",
          width: matchesMd ? "100%" : "min(640px,60vw)",
          backgroundColor: "bgCol.grey2",
          display: "flex",
          flexFlow: "row nowrap",
          flex: moreThanMd ? "" : "1",
          borderRadius: matchesMd ? "0px" : "6px",
        }}
      >
        <Box style={{ flex: 1 }}>
          <Typography
            variant={matchesSm ? "h5" : "h4"}
            padding="16px"
            color="textCol.grey1"
          >
            Welcome Back!
          </Typography>
          <Typography variant="body2" paddingX="16px" color="textCol.grey1">
            We are so glad to see you again.
          </Typography>
          <Container maxWidth>
            <FormLabel
              htmlFor="email"
              sx={{
                marginY: "16px",
                "& .MuiFilledInput-input": {
                  padding: "16px",
                  height: "16px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-root": {},
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  paddingTop: "16px",
                  paddingBottom: "4px",
                  color: "textCol.grey1",
                }}
              >
                EMAIL
              </Typography>
              <TextField
                fullWidth
                id="filled-basic"
                variant="filled"
                type="email"
                name="email"
                sx={{}}
              />
            </FormLabel>
            <FormLabel
              htmlFor="email"
              sx={{
                marginY: "16px",
                "& .MuiFilledInput-input": {
                  padding: "16px",
                  height: "16px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-root": {},
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  paddingTop: "16px",
                  paddingBottom: "4px",
                  color: "textCol.grey1",
                }}
              >
                PASSWORD
              </Typography>
              <TextField
                fullWidth
                id="filled-basic"
                variant="filled"
                type="email"
                name="email"
                sx={{}}
              />
            </FormLabel>
            <Typography
              variant="h6"
              color="textCol.blue1"
              sx={{ cursor: "pointer" }}
            >
              Forgot your password?
            </Typography>
            <Button
              variant="contained"
              textTransform="none"
              sx={{
                marginY: "32px",
                padding: "14px",
                width: "100%",
                backgroundColor: "bgCol.purple2",
                borderRadius: "0px",
              }}
            >
              Login
            </Button>
            <Typography
              variant="h6"
              color="textCol.grey2"
              sx={{ cursor: "pointer" }}
            >
              Need an account?{" "}
              <span style={{ color: "#00b0f4" }}>
                <Link to="/register">Register</Link>
              </span>
            </Typography>
          </Container>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: matchesMd ? "none" : "flex",
            flexFlow: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <img style={{ width: "75%" }} src={QrCodeImg} alt="qr code img" />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" color="textCol.grey1" paddingY="16px">
              Log in with QR Code
            </Typography>
            <Typography
              variant="body1"
              color="textCol.grey1"
              textAlign="center"
            >
              Scan this with the
              <span style={{ color: "#8e9297", cursor: "pointer" }}>
                &nbsp;Discord Mobile app&nbsp;
              </span>
              to log in instantly
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
