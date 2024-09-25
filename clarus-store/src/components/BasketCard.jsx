import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/action/basketAction";
import { useSelector } from "react-redux";

const BasketCard = ({ product }) => {
  const dispatch = useDispatch();

  const { basket } = useSelector((state) => state.basket);

  const handleUpdate = (productId, quantity) => {
    if (quantity === 0) {
      dispatch(remove(productId));
    } else {
      const update = basket.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      );
      dispatch(add(update));
    }
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
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
        image={product.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.price + "$"}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" alignItems="center">
          <Button
            type="button"
            onClick={() => handleUpdate(product.id, product.quantity - 1)}
            size="small"
          >
            -
          </Button>
          <Typography>{product.quantity}</Typography>
          <Button
            onClick={() => handleUpdate(product.id, product.quantity + 1)}
            type="button"
            size="small"
          >
            +
          </Button>
          <Button
            onClick={() => handleRemove(product.id)}
            type="button"
            size="small"
          >
            REMOVE
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default BasketCard;
