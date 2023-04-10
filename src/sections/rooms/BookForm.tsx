import { TextField, Button, Card, Box } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/use-auth';
import { FC, useEffect } from 'react'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react'

const CardStyle = {
	padding: '2rem',
	width: 500,
	maxWidth: '60vw',
}


const BookForm: FC<{ roomNumber: string }> = ({ roomNumber }) => {
	const auth: any = useAuth()
	const { user } = auth

	const formik: any = useFormik({
		initialValues: {
			roomNumber,
			securityCode: '',
			from: '',
			to: '',
			submit: null
		},
		validationSchema: Yup.object({
			roomNumber: Yup
				.number()
				.max(5)
				.required('Room number is required'),
			securityCode: Yup
				.string()
				.max(5)
				.required('Security code is required'),
			from: Yup
				.number()
				.max(5)
				.required('start date is required'),
			to: Yup
				.number()
				.max(5)
				.required('End date is required'),
		}),
		onSubmit: async (values, helpers) => {
			try {
				console.log("Add Book", { ...values, customer: user })
			} catch (err) {
				helpers.setStatus({ success: false });
				helpers.setErrors({ submit: err.message });
				helpers.setSubmitting(false);
			}
		}
	});

	const [startDate, setStartDate] = useState<Dayjs | null>(
		dayjs('2014-08-18T21:11:54'),
	);

	const changeStartDateHandler = (newValue: Dayjs | null) => {
		setStartDate(newValue);
	}

	const [endDate, setEndDate] = useState<Dayjs | null>(
		dayjs('2014-08-18T21:11:54'),
	);

	const changeEndDateHandler = (newValue: Dayjs | null) => {
		setEndDate(newValue);
	}

	useEffect(() => {
		formik.values.from = startDate
		formik.values.to = endDate
	}, [startDate, endDate])

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
						label="Book Number"
						name="roomNumber"
						onBlur={formik.handleBlur}
						disabled
						type="string"
						value={formik.values.roomNumber}
					/>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					mb={2}
				>
					<TextField
						error={!!(formik.touched.securityCode && formik.errors.securityCode)}
						fullWidth
						helperText={formik.touched.securityCode && formik.errors.securityCode}
						label="Security code"
						name="securityCode"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						type="string"
						value={formik.values.securityCode}
					/>
				</Box>
				{/* <Typography variant="body1" mb={1}>Day cost</Typography> */}
				<Box
					display="flex"
					flexDirection="column"
					mb={2}
				>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateTimePicker
							label="Start date"
							value={startDate}
							onChange={changeStartDateHandler}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					mb={2}
				>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateTimePicker
							label="End date"
							value={endDate}
							onChange={changeEndDateHandler}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</Box>
				<Button
					type="submit"
					variant="contained"
					sx={{
						display: 'block',
						margin: 'auto',
					}}
				>
					Send Request
				</Button>
			</form >
		</Card >
	)
}

export default BookForm