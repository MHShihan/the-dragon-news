import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerLogo from "@/assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box>
      <Container className="w-full flex flex-col justify-center items-center my-10 space-y-3">
        <Image
          src={headerLogo}
          width={500}
          height={500}
          className="mx-auto"
          alt="Header logo"
        />
        <Typography variant="body2" color="gray" textAlign="center">
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
