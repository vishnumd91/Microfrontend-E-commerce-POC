import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        www.applestore.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = {
      username: data.get("username"),
      password: data.get("password"),
    };
    const { username, password } = credentials;
    // eslint-disable-next-line no-console
    if (username === "admin" && password === "admin") {
      navigate("/home");
    } else {
      window.alert("Invalid Credentials.Please enter valid credentials");
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 470,
          height: 400,
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
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                /* noValidate */ sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  style={{ marginBottom: "-81px" }}
                  primary
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => handleSubmit()}
                >
                  Sign In
                </Button>
                {/*  <Grid container style={{marginTop:"20px"}}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
 */}
              </Box>
            </Box>
            {/*<Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
        </ThemeProvider>
      </Paper>
    </Box>
  );
};
export default Login;
