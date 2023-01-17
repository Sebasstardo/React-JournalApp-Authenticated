import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React, { useEffect, useMemo } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks";

export const LoginPage = () => {

  const {status} = useSelector(state => state.auth)

  const dispach = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: "seba@gmail.com",
    password: "12345",
  });
  const isAuthenticating = useMemo(()=> status ==='checking', [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispach(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    dispach(startGoogleSignIn());
  };

  return (
    <AuthLayout title="login!!">
      <form action="" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ my: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} variant="contained" fullWidth type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
              disabled={isAuthenticating}
                variant="contained"
                fullWidth
                type="submit"
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una Cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
