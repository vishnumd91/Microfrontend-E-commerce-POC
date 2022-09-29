import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import * as action from "../../actions/CartActions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let price = 0;
  let totalPrice = 0;

  const handleIncrement = (id) => {
    dispatch(action.increaseQuantity(id));
  };

  const handleDecrement = (id, quantity) => {
    if (quantity === 1) {
      dispatch(action.deleteProduct(id));
    } else {
      dispatch(action.decreaseQuantity(id));
    }
  };

  const removeItem = (id) => {
    dispatch(action.deleteProduct(id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 1250,
          minHeight: 500,
        },
      }}
    >
      <Paper elevation={3}>
        {cartProducts.length > 0 ? (
          <div style={{ display: "flex" }}>
            <Card
              sx={{ maxWidth: 650 }}
              style={{
                marginTop: "30px",
                marginLeft: "10px",
                marginBottom: "50px",
                height: "fit-content",
              }}
            >
              <CardHeader
                title={"My Cart (" + cartProducts.length + ")"}
                style={{ borderBottom: "1px solid lightgray" }}
              />
              {cartProducts.map((product, i) => {
                price = product.quantity * product.price;
                totalPrice = totalPrice + price;

                return (
                  <div style={{ display: "flex", marginTop: "30px" }} key={i}>
                    <CardMedia
                      component="img"
                      image={product.source}
                      alt="iphone"
                      style={{ height: "120px", width: "100px" }}
                    />
                    <CardContent>
                      <Typography>{product.name}</Typography>
                      <Typography>{product.prodId}</Typography>
                      <Typography>
                        <b>{price}$</b>
                      </Typography>
                      <div style={{ display: "flex" }}>
                        <ButtonGroup
                          size="small"
                          aria-label="small outlined button group"
                        >
                          <Button
                            onClick={() => handleIncrement(product.prodId)}
                          >
                            +
                          </Button>
                          <Button>{product.quantity}</Button>
                          <Button
                            onClick={() =>
                              handleDecrement(product.prodId, product.quantity)
                            }
                          >
                            -
                          </Button>
                        </ButtonGroup>
                        <Button
                          variant="text"
                          style={{ marginLeft: "25px" }}
                          onClick={() => removeItem(product.prodId)}
                        >
                          Remove
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                );
              })}
              <CardActions
                style={{ borderTop: "1px solid lightgray", height: "75px" }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#fb641b", marginLeft: "480px" }}
                  onClick={() => navigate("/payment")}
                >
                  Place Order
                </Button>
              </CardActions>
            </Card>

            <Card
              style={{
                marginTop: "30px",
                marginLeft: "31px",
                marginBottom: "50px",
                width: "545px",
                height: "350px",
              }}
            >
              <CardHeader
                title="Price Details"
                style={{ borderBottom: "1px solid lightgray" }}
              />
              <CardContent>
                <List style={{ borderBottom: "1px solid lightgray" }}>
                  <ListItem>
                    <ListItemText
                      primary={"Price (" + cartProducts.length + " items )"}
                    />
                    <ListItemText primary={totalPrice + "$"} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Discount" />
                    <ListItemText primary="0$" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Delivery Charges" />
                    <ListItemText
                      primary="FREE"
                      style={{ marginLeft: "-27px" }}
                    />
                  </ListItem>
                </List>
                <Typography
                  style={{
                    marginTop: "30px",
                    marginBottom: "20px",
                    marginLeft: "19px",
                    display: "flex",
                  }}
                >
                  <b>Total Amount</b>
                  <b style={{ marginLeft: "160px" }}>{totalPrice}$</b>
                </Typography>
                <Typography style={{ marginLeft: "20px" }}>
                  NOTE: No discount applied on this order
                </Typography>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div style={{ marginLeft: "500px", marginTop: "250px" }}>
            Your Cart is Empty!
          </div>
        )}
      </Paper>
    </Box>
  );
};
export default Cart;
