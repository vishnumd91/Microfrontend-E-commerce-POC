import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../actions";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import products from "./products.json";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Apple = () => {
  const productState = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const [localState, setLocalState] = useState({
    id: null,
    items: [],
  });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const clickedFavorite = (id) => {
    setLocalState({
      ...localState,
      id: id,
    });
  };
  const addToCart = (id) => {
    const productPayload = products.find((p) => p.prodId === id);
    dispatch(action.addToCart(productPayload));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 628,
          minHeight: 500,
        },
      }}
    >
      <Paper
        elevation={3}
        style={{ display: "flex", width: "100%", flexWrap: "wrap" }}
      >
        {products.map((product, i) => {
          return (
            <Card
              key={i}
              sx={{ maxWidth: 350 }}
              style={{
                marginTop: "50px",
                marginLeft: "50px",
                marginBottom: "50px",
                width: "320px",
              }}
            >
              <CardHeader subheader={product.name} />
              <CardMedia
                component="img"
                style={{ height: "160px", objectFit: "contain" }}
                image={product.source}
                alt="iphone"
              />
              <CardContent>
                <Typography>
                  <b>{product.price}$ </b>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => clickedFavorite(product.prodId)}
                >
                  <FavoriteIcon
                    style={{
                      color: localState.id === product.prodId ? "red" : "",
                    }}
                  />
                </IconButton>
                <IconButton
                  aria-label="add to cart"
                  onClick={() => addToCart(product.prodId)}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={() => handleExpandClick()}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>{product.description}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        })}
      </Paper>
    </Box>
  );
};
export default Apple;
