import React, { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import Loading from "../components/Loading";

const Home = () => {
  const [selected, setSelected] = useState("all");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async (url = "") => {
    const baseUrl = "https://fakestoreapi.com/products";
    setLoading(true);
    try {
      const { data } = await axios(baseUrl + url);
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Grid container mt={10} justifyContent="center" spacing={3}>
        <CategoryBar
          loading={loading}
          getProducts={getProducts}
          selected={selected}
          setSelected={setSelected}
        />
        {loading ? (
          <Loading />
        ) : (
          products.map((product) => (
            <Grid item key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Home;
