import { TextField, Button, Card, Box, Select, MenuItem, FormHelperText, Grid, Typography } from '@mui/material'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CardStyle = {
	padding: '2rem',
	width: 500,
	maxWidth: '60vw',
}


const AddRoomForm = () => {
	const formik: any = useFormik({
		initialValues: {
			roomNumber: '',
			dayCost: 100,
			totalBeds: '',
			capacity: '',
			currency: 'EGP',
			submit: null
		},
		validationSchema: Yup.object({
			roomNumber: Yup
				.number()
				.max(5)
				.required('Room number is required'),
			dayCost: Yup
				.string()
				.max(100)
				.required('Day cost is required'),
			currency: Yup
				.string()
				.required('Currency is required'),
			totalBeds: Yup
				.number()
				.max(5)
				.required('Total beds is required'),
			capacity: Yup
				.number()
				.max(5)
				.required('Capacity is required'),
		}),
		onSubmit: async (values, helpers) => {
			try {
				console.log("Add Room", { ...values, dayCost: `${values.dayCost} ${values.currency}` })
			} catch (err) {
				helpers.setStatus({ success: false });
				helpers.setErrors({ submit: err.message });
				helpers.setSubmitting(false);
			}
		}
	});

	return (
		<Card sx={CardStyle}>
			<form onSubmit={formik.handleSubmit}>
				<Box
					display="flex"
					flexDirection="column"
					mb={2}
				>
					<TextField
						error={!!(formik.touched.roomNumber && formik.errors.roomNumber)}
						fullWidth
						helperText={formik.touched.roomNumber && formik.errors.roomNumber}
						label="Room Number"
						name="roomNumber"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						type="string"
						value={formik.values.roomNumber}
					/>
				</Box>
				{/* <Typography variant="body1" mb={1}>Day cost</Typography> */}
				<Grid
					container
					mb={2}
					spacing={2}
				>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Select
							error={!!(formik.touched.dayCost && formik.errors.dayCost)}
							fullWidth
							label="Day cost"
							name="dayCost"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="string"
							value={formik.values.dayCost}
							defaultValue={100}
						>
							<MenuItem value={100}>100</MenuItem>
							<MenuItem value={200}>200</MenuItem>
							<MenuItem value={300}>300</MenuItem>
						</Select>
						<FormHelperText color="error">{formik.touched.dayCost && formik.errors.dayCost}</FormHelperText>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
					>
						<Select
							error={!!(formik.touched.currency && formik.errors.currency)}
							fullWidth
							label="Day cost"
							name="currency"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="string"
							value={formik.values.currency}
						>
							<MenuItem value={"EGP"}>EGP</MenuItem>
							<MenuItem value={"USD"}>USD</MenuItem>
							<FormHelperText color="error">{formik.touched.currency && formik.errors.currency}</FormHelperText>
						</Select>
					</Grid>
				</Grid>
				<Box
					display="flex"
					flexDirection="column"
					mb={2}
				>
					<TextField
						error={!!(formik.touched.totalBeds && formik.errors.totalBeds)}
						fullWidth
						helperText={formik.touched.totalBeds && formik.errors.totalBeds}
						label="Total beds"
						name="totalBeds"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						type="number"
						value={formik.values.totalBeds}
					/>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					mb={2}
				>
					<TextField
						error={!!(formik.touched.capacity && formik.errors.capacity)}
						fullWidth
						helperText={formik.touched.capacity && formik.errors.capacity}
						label="Capacity"
						name="capacity"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						type="number"
						value={formik.values.capacity}
					/>
				</Box>
				<Button
					type="submit"
					variant="contained"
					sx={{
						display: 'block',
						margin: 'auto',
					}}
				>
					Submit
				</Button>
			</form >
		</Card >
	)
}

export default AddRoomForm