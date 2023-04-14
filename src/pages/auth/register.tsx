import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from '../../hooks/use-auth';
import { Layout as AuthLayout } from '../../layouts/auth/layout';
import { BRAND_NAME } from '../../constants';

const Page = () => {
  const router = useRouter();
  const auth: any = useAuth();
  const formik: any = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      phone: '',
      whatsApp: '',
      address: '',
      nationalId: '',
      age: 20,
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      name: Yup
        .string()
        .max(255)
        .required('Name is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required'),
      phone: Yup
        .string()
        .max(255)
        .required('Phone is required'),
      whatsApp: Yup
        .string()
        .max(255)
        .required('WhatsApp is required'),
      address: Yup
        .string()
        .max(255)
        .required('Address is required'),
      nationalId: Yup
        .string()
        .max(255)
        .required('National ID is required'),
      age: Yup
        .number()
        .max(100)
        .min(20)
        .required('Age is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        // await auth.signUp(values.email, values.name, values.password
        //   , values.phone, values.whatsApp, values.address, values.nationalId, values.age
        // );
        router.push('/');
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
          Register | {BRAND_NAME}
        </title>
      </Head>
      <Box
        sx={{
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
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Register
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Already have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/login"
                  underline="hover"
                  variant="subtitle2"
                >
                  Log in
                </Link>
              </Typography>
            </Stack>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="Name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
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
                <TextField
                  error={!!(formik.touched.phone && formik.errors.phone)}
                  fullWidth
                  helperText={formik.touched.phone && formik.errors.phone}
                  label="Phone"
                  name="phone"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                <TextField
                  error={!!(formik.touched.whatsApp && formik.errors.whatsApp)}
                  fullWidth
                  helperText={formik.touched.whatsApp && formik.errors.whatsApp}
                  label="whatsApp"
                  name="whatsApp"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.whatsApp}
                />
                <TextField
                  error={!!(formik.touched.nationalId && formik.errors.nationalId)}
                  fullWidth
                  helperText={formik.touched.nationalId && formik.errors.nationalId}
                  label="nationalId"
                  name="nationalId"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.nationalId}
                />
                <TextField
                  error={!!(formik.touched.age && formik.errors.age)}
                  fullWidth
                  helperText={formik.touched.age && formik.errors.age}
                  label="age"
                  name="age"
                  type="number"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.age}
                />
                <TextField
                  error={!!(formik.touched.address && formik.errors.address)}
                  fullWidth
                  helperText={formik.touched.address && formik.errors.address}
                  label="address"
                  name="address"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.address}
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
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
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
