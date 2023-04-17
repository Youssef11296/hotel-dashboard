/* eslint-disable react/jsx-max-props-per-line */
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { useCallback, useState } from 'react'
import { useAuth } from '../../hooks/use-auth';
import { Layout as AuthLayout } from '../../layouts/auth/layout';
import { BRAND_NAME } from '../../constants';

const Page = () => {
  const router = useRouter();
  const auth: any = useAuth();
  const { user } = auth
  const isAdmin = user?.role === "Admin"

  const [method, setMethod] = useState('email');

  const formik: any = useFormik({
    initialValues: {
      email: 'admin@test.com',
      password: 'admin',
      authNumber: "12345",
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required'),
      authNumber: Yup
        .string()
        .min(4, "Authenticating number must have at least 4 characters.")
        .max(10, "Authenticating number can not contain more than 10 charcters.")
        .required('Authenticating number is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email, values.password, values.authNumber);
        router.push('/')
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <>
      <Head>
        <title>
          Login | {BRAND_NAME}
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Tabs
              // onChange={handleMethodChange}
              sx={{ mb: 3 }}
              value={method}
            >
              <Tab
                label="Email"
                value="email"
                disabled
              />
              <Tab
                label="Google Authenticator"
                value="Google Authenticator"
                disabled
              />
            </Tabs>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Login
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              {method === "email" ?
                <>
                  <Stack spacing={3}>
                    <TextField
                      error={!!(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      label="Email Address"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      value={formik.values.email}
                    />
                    <TextField
                      error={!!(formik.touched.password && formik.errors.password)}
                      fullWidth
                      helperText={formik.touched.password && formik.errors.password}
                      label="Password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      value={formik.values.password}
                    />
                  </Stack>
                  {formik.errors.submit && (
                    <Typography
                      color="error"
                      sx={{ mt: 3 }}
                      variant="body2"
                    >
                      {formik.errors.submit}
                    </Typography>
                  )}
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    disabled={formik.errors.password || formik.errors.email}
                    onClick={() => setMethod("Google Authenticator")}
                    variant="contained"
                  >
                    Next
                  </Button>
                </>
                : null}
              {method !== "email" ?
                <>
                  <TextField
                    error={!!(formik.touched.authNumber && formik.errors.authNumber)}
                    fullWidth
                    helperText={formik.touched.authNumber && formik.errors.authNumber}
                    label="Authenticating Number"
                    name="authNumber"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="string"
                    value={formik.values.authNumber}
                  />
                  {formik.errors.submit && (
                    <Typography
                      color="error"
                      sx={{ mt: 3 }}
                      variant="body2"
                    >
                      {formik.errors.submit}
                    </Typography>
                  )}
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Button
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                        variant="contained"
                        onClick={() => setMethod("email")}
                      >
                        Back
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                        type="submit"
                        variant="contained"
                      >
                        Continue
                      </Button>
                    </Grid>
                  </Grid>
                </>
                : null}
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
