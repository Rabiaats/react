import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";

export default function Navbar() {
  const navigate = useNavigate();

  const { count } = useSelector((state) => state.basket);

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1}
      sx={{
        flexGrow: 1,
        width: "100%",
        boxShadow: "0 0 10px 5px lightyellow",
        backgroundColor: "transparent",
      }}
    >
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "white",
              display: {
                sm: "block",
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/")}
          >
            CLARUS SHOPPING
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="white"
              onClick={() => navigate("/basket")}
            >
              <Badge badgeContent={count} color="error">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
