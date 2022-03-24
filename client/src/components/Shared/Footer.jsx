import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import icons
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ReactComponent as DiscordMiniLogo } from "../../assets/icons/discord_mini_logo.svg";

const Item = styled(Typography)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  boxShadow: "none",
  color: theme.palette.textCol.white1,
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  },
}));

const Footer = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      sx={{
        padding: "min(6vw,24px)",
        paddingTop: "48px",
        backgroundColor: "bgCol.black2",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexFlow: `${matchesMd ? "column" : "row"} nowrap`,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: matchesMd ? "75%" : "40%" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="textCol.purple1"
            paddingY="16px"
          >
            IMAGINE A PLACE
          </Typography>
          <Box>
            <Typography
              variant="body2"
              color="initial"
              sx={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "32px", marginRight: "16px" }}
                src="./assets/images/america_flag.png"
                alt="america flag"
              />
              <span style={{ color: "#fff" }}>English,USA</span>
              <KeyboardArrowDownIcon sx={{ color: "bgCol.white1" }} />
            </Typography>
          </Box>
          <Box
            sx={{
              paddingY: "16px",
              display: "inline-flex",
              justifyContent: "space-between",
              width: "50%",
              color: "bgCol.white1",
            }}
          >
            <TwitterIcon />
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
          </Box>
        </Box>
        <Grid container spacing={6} sx={{ paddingY: "24px" }}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Item sx={{ color: "textCol.purple1" }}>Product</Item>
            <Item>Download</Item>
            <Item>Nitro</Item>
            <Item>Status</Item>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Item sx={{ color: "textCol.purple1" }}>Company</Item>
            <Item>About</Item>
            <Item>Jobs</Item>
            <Item>Branding</Item>
            <Item>Newsroom</Item>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Item sx={{ color: "textCol.purple1" }}>Resources</Item>
            <Item>College</Item>
            <Item>Support</Item>
            <Item>Saftey</Item>
            <Item>Blog</Item>
            <Item>Feedback</Item>
            <Item>Devlopers</Item>
            <Item>Streamkit</Item>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Item sx={{ color: "textCol.purple1" }}>Policies</Item>
            <Item>Terms</Item>
            <Item>Privacy</Item>
            <Item>Cookie Settings</Item>
            <Item>Guidelines</Item>
            <Item>Acknowledgements</Item>
            <Item>Licenses</Item>
            <Item>Moderation</Item>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Divider
          sx={{
            marginY: "24px",
            backgroundColor: "bgCol.purple1",
          }}
        />
        <Box display="flex" justifyContent="space-between">
          <div style={{ display: "flex", alignItems: "center" }}>
            <DiscordMiniLogo
              style={{ width: "40px", paddingX: "16px", color: "white" }}
            />
            <Typography
              variant="h5"
              fontWeight="bold"
              paddingX="clamp(8px,3vw,16px)"
              sx={{ color: "textCol.white1" }}
            >
              Discord
            </Typography>
          </div>
          <Button
            variant="contained"
            sx={{ borderRadius: "24px", backgroundColor: "bgCol.purple1" }}
          >
            Sign up
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
