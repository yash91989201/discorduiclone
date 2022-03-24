import React from "react";
import Fade from "react-reveal/Fade";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import FileDownloadIcon from "@mui/icons-material/FileDownload";

const valueProposition = [
  {
    header: "Create an invite-only place where you belong",
    text: " ...where you can belong to a school club a gaming group or a worldwide art community. Where just you and a handful can spend time together. A place that makes it easy to talk very day and hand our more often",
    imageLink: "./assets/images/hanging_out_easy_landing.svg",
  },
  {
    header: "Where hanging out is easy",
    text: "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.",
    imageLink: "./assets/images/invite_only_landing.svg",
  },
  {
    header: " From few to a fandom",
    text: "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
    imageLink: "./assets/images/fandom_landing.svg",
  },
];

const ValueProposition = () => {
  const theme = useTheme();
  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      {valueProposition.map((propItem, index) => (
        <Fade bottom>
          <Box
            sx={{
              padding: "clamp(12px,5vw,32px)",
              paddingY: "min(18vw,100px)",
              display: "flex",
              flexFlow: matchesLg
                ? "column nowrap"
                : `${index === 1 ? "row-reverse" : "row"} nowrap`,
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: index === 1 ? "bgCol.white2" : "bgCol.white1",
            }}
          >
            {/* icon */}
            <img
              src={propItem.imageLink}
              alt="invite_only_landing"
              style={{ width: "min(675px,100%)" }}
            />
            {/* value proposition text*/}
            <Box
              sx={{
                width: matchesLg ? "95%" : "30%",
                paddingY: "8px",
              }}
            >
              <Typography
                variant="h3"
                fontWeight="700"
                sx={{
                  paddingY: "min(24px,3vw)",
                  width: "100%",
                  fontSize: "clamp(18px,8vw,48px)",
                  color: "textCol.black1",
                }}
              >
                {propItem.header}
              </Typography>
              <Typography
                variant="body1"
                sx={{ paddingY: "8px", color: "textCol.black1" }}
              >
                {propItem.text}
              </Typography>
            </Box>
          </Box>
        </Fade>
      ))}
      <Fade>
        <Box
          sx={{
            padding: "clamp(12px,5vw,32px)",
            paddingY: "min(18vw,100px)",
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "bgCol.white2",
          }}
        >
          {/* value proposition text*/}
          <Box
            sx={{
              width: matchesLg ? "95%" : "65%",
              paddingY: "8px",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="1.0125px"
              textAlign={matchesLg ? "" : "center"}
              sx={{
                paddingBottom: "min(16px,3vw)",
                width: "100%",
                fontSize: "clamp(18px,8vw,48px)",
                color: "textCol.black1",
              }}
            >
              Reliable tech for staying close
            </Typography>
            <Typography
              variant="body1"
              textAlign={matchesLg ? "" : "center"}
              sx={{
                paddingY: "8px",
                color: "textCol.black1",
              }}
            >
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share. Stylized image
              showing friends video talking with each other on desktop and
              mobile.
            </Typography>
          </Box>
          {/* icon */}
          <img
            src="./assets/images/just_chilling_landing.svg"
            alt="invite_only_landing"
            style={{ width: "min(90%,77vw)" }}
          />
          <Box
            sx={{
              position: "relative",
              width: "100%",
              backgroundImage: "url('./assets/images/tiny_stars_landing.svg')",
              backgroundPosition: "center",
              backgroundFit: "contain",
              backgroundSize: matchesLg ? "75%" : "50%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="700"
              paddingY="40px"
              textAlign="center"
            >
              Ready to start your journey?
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<FileDownloadIcon />}
            sx={{
              paddingY: "min(10px,9vw)",
              width: "max(275px,20vw)",
              borderRadius: "32px",
              backgroundColor: "bgCol.purple1",
              fontSize: "18px",
              textTransform: "none",
              letterSpacing: "1.25px",
              color: "textCol.white1",
              "&:hover": {
                backgroundColor: "bgCol.purple2",
              },
            }}
          >
            Download for Windows
          </Button>
        </Box>
      </Fade>
    </>
  );
};

export default ValueProposition;
