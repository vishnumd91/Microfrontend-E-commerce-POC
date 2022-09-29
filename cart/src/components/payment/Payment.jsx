import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import PaymentIcon from "@mui/icons-material/Payment";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Modal from "@mui/material/Modal";
import * as action from "../../actions/CartActions";

const theme = createTheme();

const Payment = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const cartProducts = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(action.clearCart(cartProducts.length));
    handleOpen();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 470,
          height: 500,
        },
      }}
    >
      <Paper elevation={3} style={{ marginTop: "60px", marginLeft: "392px" }}>
        <ThemeProvider theme={theme}>
          <Container
            component="main"
            maxWidth="xs"
            style={{ marginTop: "-52px" }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <PaymentIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Make Payment
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="Card Number"
                  label="Card Number"
                  name="Card Number"
                  autoComplete="Card Number"
                  autoFocus
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  name="CVV"
                  label="CVV"
                  type="password"
                  id="CVV"
                  autoComplete="CVV"
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    required
                    label="Expiry Date*"
                    id="Expiry Date"
                    name="Expiry Date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        required
                        variant="standard"
                        style={{ marginTop: "30px" }}
                      />
                    )}
                  />
                </LocalizationProvider>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  style={{ marginLeft: "-244px", marginTop: "100px" }}
                  label="Save Card"
                />
                <Button
                  type="submit"
                  style={{ marginBottom: "-184px", marginLeft: "207px" }}
                  primary
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Pay
                </Button>
              </Box>
            </Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Order Placed Successfully :)
                  <Button
                    style={{ marginTop: "14px", marginLeft: "130px" }}
                    primary
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => navigate("/home")}
                  >
                    OK
                  </Button>
                </Typography>
              </Box>
            </Modal>
          </Container>
        </ThemeProvider>
      </Paper>
    </Box>
  );
};
export default Payment;
