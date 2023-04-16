/* eslint-disable react/jsx-max-props-per-line */
import React, { FC } from 'react'
import { RoomBook } from '../../models/RoomBook'
import { Button, Container, Grid, Typography } from '@mui/material'
import { SeverityPill } from '../../components/severity-pill'

interface Props {
	booking: RoomBook,
}

const BookingItem: FC<Props> = ({ booking }) => {
	return (
		<Container sx={{ padding: '1rem' }}>
			<Typography variant="h5" mb={2} textAlign="center" sx={{ marginBottom: '2rem' }}>Booking Details</Typography>
			<Grid sx={{ width: '100%', minHeight: 225 }} container spacing={3}>
				<Grid item xs={12} md={8}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<Grid container>
								<Grid
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									flexDirection="row"
									item
									xs={12}
									md={12}
									sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
								>
									<Typography variant="caption">Status</Typography>
									<SeverityPill color={
										booking?.status === "ACCEPTED" ? "success" :
											booking?.status === "REJECTED" ? "error" :
												booking?.status === "PENDING" ? 'primary' : ''
									}>
										{booking?.status}
									</SeverityPill>
								</Grid>
								<Grid
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									flexDirection="row"
									item
									xs={12}
									md={12}
									sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
								>
									<Typography variant="caption">Room Number:</Typography>
									<Typography>{booking.roomNumber}</Typography>
								</Grid>
								<Grid
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									flexDirection="row"
									item
									xs={12}
									md={12}
									sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
								>
									<Typography variant="caption">Email:</Typography>
									<Typography>{booking.customerEmail}</Typography>
								</Grid>
								<Grid
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									flexDirection="row"
									item
									xs={12}
									md={12}
									sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
								>
									<Typography variant="caption">Pets:</Typography>
									<Typography>{booking?.pets.length ?? 0}</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={6}>
							<Grid container>
								<Grid
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									flexDirection="row"
									item
									xs={12}
									md={12}
									sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
								>
									<Typography variant="caption">Start Date:</Typography>
									<Typography>{booking.from}</Typography>
								</Grid>
								<Grid
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									flexDirection="row"
									item
									xs={12}
									md={12}
									sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
								>
									<Typography variant="caption">End Date:</Typography>
									<Typography>{booking.to}</Typography>
								</Grid>
								<Grid
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									flexDirection="row"
									item
									xs={12}
									md={12}
									sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
								>
									<Typography variant="caption">Total Cost:</Typography>
									<Typography>{booking.totalCost}</Typography>
								</Grid>
								<Grid
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									flexDirection="row"
									item
									xs={12}
									md={12}
									sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
								>
									<Typography variant="caption">Participants:</Typography>
									<Typography>{booking?.participants.length ?? 0}</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				{/* <Grid item xs={1} md={1}>
					<Divider />
				</Grid> */}

				<Grid item xs={12} md={4}>
					<Grid container>
						<Grid item xs={12} md={12} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
							sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
						>
							<Typography variant="body1">Customer Name: </Typography>
							<Typography variant="body1">{booking.customer.name}</Typography>
						</Grid>
						<Grid item xs={12} md={12} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
							sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
						>
							<Typography variant="body1">Email: </Typography>
							<Typography variant="body1">{booking.customer.email}</Typography>
						</Grid>
						<Grid item xs={12} md={12} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
							sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
						>
							<Typography variant="body1">Phone: </Typography>
							<Typography variant="body1">{booking.customer.phone}</Typography>
						</Grid>
						<Grid item xs={12} md={12} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
							sx={{ borderBottom: '1px solid #000', paddingBottom: '1rem' }}
						>
							<Typography variant="body1">Address: </Typography>
							<Typography variant="body1">{booking.customer.address}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container spacing={2} textAlign="center" justifyContent="center" alignItems="center" mb={2}>
				{booking.status === "COMPLETED" && booking?.customerFeedback ? <Container>
					<Typography variant="h5" mb={2}>Customer Feedback</Typography>
					<Typography variant="body1">{booking.customerFeedback}</Typography>
				</Container> : <Typography>No feedback is there yet.</Typography>}
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Button disabled={booking.status !== "PENDING"} variant="contained" fullWidth>Accept</Button>
				</Grid>
				<Grid item xs={12} md={6}>
					<Button disabled={booking.status !== "PENDING"} variant="outlined" fullWidth>Reject</Button>
				</Grid>
			</Grid>
		</Container>
	)
}

export default BookingItem