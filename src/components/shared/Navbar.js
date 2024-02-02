"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Header from "./Header";

const navItems = [
  { route: "Home", pathname: "/" },
  { route: "Pages", pathname: "/pages" },
  { route: "Category", pathname: "/category" },
  { route: "News", pathname: "/news" },
  { route: "About", pathname: "/about" },
  { route: "Contact", pathname: "/contact" },
];

const Navbar = () => {
  return (
    <>
      <Header></Header>
      <AppBar position="static" className="bg-black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} width={100} height={100} alt="logo"></Image>
            <Box className="w-full  flex justify-center">
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link href={item.pathname}>{item.route}</Link>
                </Button>
              ))}
            </Box>
            <Box>
              <Stack
                direction="row"
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
