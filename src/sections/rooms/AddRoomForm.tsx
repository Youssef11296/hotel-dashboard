/* eslint-disable react/jsx-max-props-per-line */
import { TextField, Button, Card, Box, Select, MenuItem, FormHelperText, Grid, Typography } from '@mui/material'
import { useFormik } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';
import { floors } from '../../data/floors';
import { PetsAvailability, RoomType } from '../../models/Room';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';

const CardStyle = {
	padding: '2rem',
	width: 500,
	maxWidth: '60vw',
}

interface FormikValueTypes {
	roomNumber: string,
	dayCost: number,
	totalBeds: number,
	capacity: number,
	currency: 'EGP' | "USD",
	floorNumber: number,
	type: RoomType,
	petsAvailability: PetsAvailability,
	submit: null
}

const AddRoomForm: FC<{ onClose: () => void }> = ({ onClose }) => {
	const formik: any = useFormik({
		initialValues: {
			roomNumber: '',
			dayCost: 100,
			totalBeds: 0,
			capacity: 1,
			currency: 'EGP',
			floorNumber: 1,
			type: 'MEETING_ROOM',
			petsAvailability: "PERMITTED",
			submit: null
		},
		validationSchema: Yup.object({
			roomNumber: Yup
				.string()
				.min(2)
				.max(20)
				.required('Room number is required'),
			dayCost: Yup
				.string()
				.max(100)
				.required('Day cost is required'),
			floorNumber: Yup
				.number()
				.max(100)
				.required('Floor number is required'),
			type: Yup
				.string()
				.max(100)
				.required('Room type is required'),
			petsAvailability: Yup
				.string()
				.max(100)
				.required('Pets availability is required'),
			currency: Yup
				.string()
				.required('Currency is required'),
			totalBeds: Yup
				.number()
				.min(0)
				.max(5)
				.required('Total beds is required'),
			capacity: Yup
				.number()
				.min(1)
				.max(5)
				.required('Capacity is required'),
		}),
		onSubmit: async (values: FormikValueTypes, helpers) => {
			try {
				console.log({ values })
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
				<Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
					<Typography variant="h5">Create a new Room</Typography>
					<XCircleIcon width={20} height={20} color="primary" style={{
						marginLeft: 'auto',
						display: 'block',
						cursor: 'pointer'
					}}
						onClick={onClose}
					/>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					mt={2}
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
					marginTop="1px"
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
							inputProps={{
								name: "Day Cost"
							}}
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
					<Grid
						item
						xs={12}
						md={12}
					>
						<Select
							error={!!(formik.touched.type && formik.errors.type)}
							fullWidth
							label="Type"
							name="type"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="string"
							value={formik.values.type}
						>
							<MenuItem value={"BED_ROOM"}>BED_ROOM</MenuItem>
							<MenuItem value={"MEETING_ROOM"}>MEETING_ROOM</MenuItem>
							<FormHelperText color="error">{formik.touched.type && formik.errors.type}</FormHelperText>
						</Select>
					</Grid>
				</Grid>
				{formik.values.type === "BED_ROOM" ? <Box
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
				</Box> : null}
				<Grid container spacing={2}>
					<Grid
						item
						xs={12}
						md={12}
					>
						<Select
							error={!!(formik.touched.floorNumber && formik.errors.floorNumber)}
							fullWidth
							label="Day cost"
							name="floorNumber"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="string"
							value={formik.values.floorNumber}
							defaultValue={100}
						>
							{floors.map(floor => (
								<MenuItem key={floor.id} value={floor.number}>{floor.number}</MenuItem>
							))}
						</Select>
						<FormHelperText color="error">{formik.touched.floorNumber && formik.errors.floorNumber}</FormHelperText>
					</Grid>
					<Grid
						item
						xs={12}
						md={12}
					>
						<Select
							error={!!(formik.touched.petsAvailability && formik.errors.petsAvailability)}
							fullWidth
							label="Day cost"
							name="petsAvailability"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="string"
							value={formik.values.petsAvailability}
							defaultValue={100}
						>
							<MenuItem value={"PERMITTED"}>PERMITTED</MenuItem>
							<MenuItem value={"NOT PERMITTED"}>NOT PERMITTED</MenuItem>
						</Select>
						<FormHelperText color="error">{formik.touched.petsAvailability && formik.errors.petsAvailability}</FormHelperText>
					</Grid>
				</Grid>
				<Grid container spacing={2} mt={.5}>
					<Grid item xs={12} md={12}>
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
					</Grid>
				</Grid>
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