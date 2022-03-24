import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
// import icons
import { ReactComponent as DiscordMiniLogo } from "../../assets/icons/discord_mini_logo.svg";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import MenuIcon from "@mui/icons-material/Menu";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Item = styled(Button)(({ theme }) => ({
  margin: "0 8px",
  padding: "8px 12px",
  fontSize: "16px",
  fontWeight: "500",
  textAlign: "center",
  color: theme.palette.textCol.white1,
  textTransform: "none",
  ":hover": {
    textDecoration: "underline",
  },
}));

const NavItem = styled(Button)(({ theme }) => ({
  marginTop: "2px",
  marginBottom: "2px",
  padding: "8px",
  width: "100%",
  borderRadius: "4px",
  justifyContent: "flex-start",
  letterSpacing: "1.0125px",
  fontWeight: "300",
  textTransform: "none",
  color: theme.palette.bgCol.black1,
  ":hover": {
    textDecoration: "underline",
  },
}));

const HeroSection = () => {
  const [menu, toggleMenu] = useState(false);
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexFlow: "column nowrap",
        backgroundColor: "bgCol.purple3",
      }}
    >
      {/* Header */}
      <Container
        sx={{
          zIndex: "9",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center",
          "&.MuiContainer-root": {
            padding: "clamp(8px,4vw,16px)",
          },
        }}
      >
        {/* header logo */}
        <Box display="flex">
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
        </Box>
        {/* header links */}
        <Box>
          <Stack direction="row" sx={{ display: matchesMd ? "none" : "" }}>
            <Item>Download</Item>
            <Item>Nitro</Item>
            <Item>Saftey</Item>
            <Item>Support</Item>
            <Item>Blog</Item>
            <Item>Careers</Item>
          </Stack>
        </Box>
        {/* header button */}
        <Box>
          <Button
            variant="contained"
            size="medium"
            sx={{
              padding: "6px min(4vw,24px)",
              borderRadius: "24px",
              backgroundColor: "bgCol.white2",
              textTransform: "none",
              color: "textCol.black1",
              "&.MuiButton-root": {
                ":hover": {
                  bgcolor: "bgCol.white1",
                  color: "textCol.black2",
                },
              },
            }}
          >
            Login
          </Button>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{
              margin: "0 8px",
              display: matchesMd ? "" : "none",
            }}
            onClick={() => toggleMenu(true)}
          >
            <MenuIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </Box>
      </Container>
      {/* nav drawer*/}
      <Drawer
        anchor="right"
        open={menu}
        sx={{
          display: matchesMd ? "" : "none",
          "& .MuiPaper-root": {
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "space-between",
            alignItems: "center",
          },
        }}
        onClose={() => {
          toggleMenu(false);
        }}
      >
        <Container
          sx={{
            width: "min(300px,80vw)",
          }}
        >
          <Box
            sx={{
              paddingY: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="text"
              startIcon={<DiscordMiniLogo width="32px" />}
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                textTransform: "none",
                color: "textCol.black1",
              }}
            >
              Discord
            </Button>
            <IconButton
              sx={{
                color: "textCol.black2",
              }}
              onClick={() => {
                toggleMenu(false);
              }}
            >
              <ClearOutlinedIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box component="nav" sx={{ paddingY: "12px" }}>
            <NavItem
              sx={{ backgroundColor: "whitesmoke", color: "textCol.blue1" }}
            >
              Home
            </NavItem>
            <NavItem>Download</NavItem>
            <NavItem>Nitro</NavItem>
            <NavItem endIcon={<KeyboardArrowRightIcon />}>Saftey</NavItem>
            <NavItem endIcon={<KeyboardArrowRightIcon />}>Mod Academy</NavItem>
            <NavItem>Support</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Careers</NavItem>
          </Box>
        </Container>
        <Button
          variant="contained"
          startIcon={<FileDownloadIcon />}
          sx={{
            marginBottom: "32px",
            width: "90%",
            borderRadius: "24px",
            backgroundColor: "bgCol.purple1",
            textTransform: "none",
          }}
        >
          Download for windows
        </Button>
      </Drawer>
      {/* value proposition */}
      <Container
        sx={{
          zIndex: "9",
          flexGrow: "1",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: matchesMd ? "flex-start" : "center",
        }}
      >
        <Typography
          variant="h2"
          paddingTop="80px"
          textTransform="uppercase"
          textAlign={matchesMd ? "left" : "center"}
          fontWeight="800"
          color="textCol.white1"
          sx={{
            fontSize: "clamp(2.75rem,4.5vw,5rem)",
          }}
        >
          Imagine a place...
        </Typography>
        <Typography
          variant="body2"
          width="min(575px,70vw)"
          paddingY="32px"
          textAlign={matchesMd ? "left" : "center"}
          textTransform="none"
          letterSpacing="1.125px"
          color="textCol.white1"
        >
          ...where you can belong to a school club a gaming group or a worldwide
          art community. Where just you and a handful can spend time together. A
          place that makes it easy to talk very day and hand our more often
        </Typography>
        {/* button group */}
        <Box
          sx={{
            width: "min(70vw,80%)",
            display: "flex",
            flexFlow: matchesMd ? "column nowrap" : "row nowrap",
            justifyContent: matchesMd ? "center" : "space-between",
            alignItems: matchesMd ? "flex-start" : "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              marginBottom: matchesMd ? "24px" : "0px",
              paddingY: "10px",
              width: "max(275px,48%)",
              borderRadius: "24px",
              backgroundColor: "bgCol.white1",
              textTransform: "none",
              letterSpacing: "1.25px",
              color: "textCol.black1",
              "&:hover": {
                backgroundColor: "bgCol.white1",
                color: "textCol.purple1",
              },
            }}
            startIcon={<FileDownloadIcon />}
          >
            Download for Mac
          </Button>
          <Button
            variant="contained"
            sx={{
              paddingY: "10px",
              width: "max(275px,48%)",
              borderRadius: "24px",
              backgroundColor: "bgCol.black2",
              textTransform: "none",
              letterSpacing: "1.25px",
              color: "textCol.white1",
              "&:hover": {
                backgroundColor: "bgCol.grey3",
              },
            }}
          >
            Open Discord in your browser
          </Button>
        </Box>
      </Container>
      {/* background images */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            position: "absolute",
            bottom: "0",
          }}
          src="./assets/center_bg_landing_header.svg"
          alt=""
        />
        <img
          style={{
            position: "absolute",
            bottom: "0",
            left: matchesLg ? "30%" : "0",
            width: "min(600px,85vw)",
          }}
          src="./assets/left_bg_landing_header.svg"
          alt=""
        />
        <img
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "675px",
            display: matchesLg ? "none" : "",
          }}
          src="./assets/right_bg_landing_header.svg"
          alt=""
        />
      </div>
    </Box>
  );
};

export default HeroSection;
