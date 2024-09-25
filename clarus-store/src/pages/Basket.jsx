import { Container, Grid, Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasketCard from "../components/BasketCard";
import { useDispatch, useSelector } from "react-redux";
import basketPng from "../assets/sepet-bos.png";
import { clear } from "../redux/action/basketAction";

const Basket = () => {
  const { basket } = useSelector((state) => state.basket);

  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(basket.reduce((acc, { price, quantity }) => acc + price*quantity, 0).toFixed(2));
  }, [basket]);

  const handleClear = () => {
    if (
      window.confirm("Sepetindeki ürünleri silmek istediğinden emin misin?")
    ) {
      dispatch(clear());
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {total !== "0.00" ? (
        <>
          <Grid
            container
            justifyContent="center"
            gap={5}
            spacing={2}
            mt={15}
            mb={10}
          >
            {basket.map((product) => (
              <Grid key={product.id}>
                <BasketCard product={product} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }} mb={2}>
            <Typography
              sx={{
                boxShadow: "0 0 10px 5px lightyellow",
                padding: "1rem",
                borderRadius: 2,
                fontWeight: "bold",
              }}
            >
              Total :{total}
            </Typography>
            <Button onClick={handleClear} variant="contained" color="error">
              CLEAR
            </Button>
          </Box>
        </>
      ) : (
        <img
          className="basketImage"
          src={basketPng}
          style={{ marginTop: "5rem" }}
          alt=""
        />
      )}
    </Container>
  );
};

export default Basket;
