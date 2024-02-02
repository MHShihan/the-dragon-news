import { Box, Button, Container, IconButton, Typography } from "@mui/material";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import Link from "next/link";

const Footer = () => {
  const navItems = [
    { route: "Home", pathname: "/" },
    { route: "Pages", pathname: "/pages" },
    { route: "Category", pathname: "/category" },
    { route: "News", pathname: "/news" },
    { route: "About", pathname: "/about" },
    { route: "Contact", pathname: "/contact" },
  ];

  return (
    <Box className="bg-black py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
        </Box>
        <Box className="w-full  flex justify-center">
          {navItems.map((item) => (
            <Button key={item} sx={{ my: 2, color: "white", display: "block" }}>
              <Link href={item.pathname}>{item.route}</Link>
            </Button>
          ))}
        </Box>
        <Typography variant="body2" color="gray" textAlign="center">
          @2024 The Dragon News. Designed By Mahmudul Hasan Shihan
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
