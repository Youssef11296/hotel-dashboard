import React, { FC } from 'react'
import { RoomBook } from '../../models/RoomBook'
import { Card, Dialog, Divider, Grid, Stack, Typography } from '@mui/material'
import { SeverityPill } from '../../components/severity-pill'

interface Props {
	booking: RoomBook,
}

const BookingItem: FC<Props> = ({ booking }) => {
	return (
		<>
			<Grid sx={{ width: '100%' }} container flexDirection="row">
				<Grid item xs={12} md={8}>
					<SeverityPill color={
						booking.status === "ACCEPTED" ? "success" :
							booking.status === "REJECTED" ? "error" :
								booking.status === "PENDING" ? 'primary' : ''
					}>
						{booking.status}
					</SeverityPill>
				</Grid>

				{/* <Grid item xs={1} md={1}>
					<Divider />
				</Grid> */}

				<Grid item xs={12} md={3}>
					<Stack flexDirection="row" alignItems="center">
						<Typography variant="body1">Name: </Typography>
						<Typography variant="body1">{booking.customer.name}</Typography>
					</Stack>
					<Stack flexDirection="row" alignItems="center">
						<Typography variant="body1">Email: </Typography>
						<Typography variant="body1">{booking.customer.email}</Typography>
					</Stack>
					<Stack flexDirection="row" alignItems="center">
						<Typography variant="body1">Phon: </Typography>
						<Typography variant="body1">{booking.customer.phone}</Typography>
					</Stack>
					<Stack flexDirection="row" alignItems="center">
						<Typography variant="body1">Address: </Typography>
						<Typography variant="body1">{booking.customer.address}</Typography>
					</Stack>
				</Grid>
			</Grid>
		</>
	)
}

export default BookingItem