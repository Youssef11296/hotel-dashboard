import { TextField, Button, Card, Box, Select, MenuItem, FormHelperText, Grid, Typography } from '@mui/material'
import { useFormik } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';
import { Floor } from '../../models/Floor';

const CardStyle = {
	padding: '2rem',
	width: 500,
	maxWidth: '60vw',
}

type FormType = "EDIT" | "CREATE"

const AddFloorForm: FC<{ formType: FormType, floorId?: Floor["floorId"], floorNumber?: Floor["number"], onClose: () => void }> =
	({ formType, floorId, floorNumber, onClose }) => {
		const formik: any = useFormik({
			initialValues: {
				floorNumber: floorNumber ?? "",
				floorId: floorId ?? '',
				submit: null
			},
			validationSchema: Yup.object({
				floorNumber: Yup
					.number()
					.max(5)
					.required('Floor number is required'),
				floorId: Yup
					.string()
					.max(100)
					.required('Floor ID is required'),
			}),
			onSubmit: async (values, helpers) => {
				try {
					onClose()
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
							error={!!(formik.touched.floorNumber && formik.errors.floorNumber)}
							fullWidth
							helperText={formik.touched.floorNumber && formik.errors.floorNumber}
							label="Floor Number"
							name="floorNumber"
							disabled={formType === "EDIT"}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="string"
							value={formik.values.floorNumber}
						/>
					</Box>
					{/* <Typography variant="body1" mb={1}>Day cost</Typography> */}
					<Box
						display="flex"
						flexDirection="column"
						mb={2}
					>
						<TextField
							error={!!(formik.touched.floorId && formik.errors.floorId)}
							fullWidth
							helperText={formik.touched.floorId && formik.errors.floorId}
							label="Floor ID"
							name="floorId"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="string"
							value={formik.values.floorId}
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

export default AddFloorForm