import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212121",
        color: "white",
        padding: "20px 0",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Container>
        <Typography variant="body2" align="center">
          ©{new Date().getFullYear()} <span className="text-main-color1">NEXO</span>SPORT. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;