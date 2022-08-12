import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { useMemo } from "react";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value)=> value.includes('@'), 'El correo debe ser valido'],
  password: [(value)=> value.length >= 6, 'El password debe ser valido'],
  displayName: [(value)=> value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {


  const dispatch = useDispatch()
  const [ formSubmitted, setFormSubmitted ] = useState(false)

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isCheckingAuthenticaction = useMemo(()=> status === 'checking', [status])

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);




  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return;
    dispatch( startCreatingUserWithEmailPassword(formState) )
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form 
      className="animate__animated animate__fadeIn animate__faster"
      onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error = {!!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error = {!!emailValid && formSubmitted}
              helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error = {!!passwordValid && formSubmitted}
              helperText={ passwordValid }
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid  display={!!errorMessage ? '' : 'none'} item xs={12}>
             <Alert severity="error">{ errorMessage }</Alert>
            </Grid>
            <Grid item  xs={12}>
              <Button disabled={ isCheckingAuthenticaction } type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
