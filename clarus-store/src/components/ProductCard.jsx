import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { add } from "../redux/action/basketAction";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const { title, image, price } = product;

  const { basket } = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  const handleAdd = () => {
    const some = basket.some((item) => item.id === product.id);
    if (some) {
      alert("This product already added");
    } else {
      dispatch(add([...basket, { ...product, quantity: 1 }]));
    }
  };

  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 4,
        boxShadow: 3,
        padding: 1,
      }}
    >
      <CardMedia
        sx={{ height: 200, borderRadius: 4 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleAdd} size="small">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
