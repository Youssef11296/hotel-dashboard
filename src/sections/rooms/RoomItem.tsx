/* eslint-disable react/jsx-max-props-per-line */
import { Grid, Box, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { Room } from '../../models/Room'
import { useRouter } from 'next/router'

const RoomItem: FC<{ openBookFormHandler?: () => void, room: Room, withBookBtn: boolean }> = ({ withBookBtn, room, openBookFormHandler }) => {
	const { pathname } = useRouter()

	return (
		<Grid
			key={room.id}
			item
			xs={12}
			md={3}
			sx={{
				borderRadius: '12px',
				boxShadow: '0 2px 2px rgba(0,0,0,.2)'
			}}
		>
			<Box sx={{ padding: 2 }}>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					sx={{ width: '100%' }}
				>
					<Typography variant="h6" color="primary">{room.number}</Typography>
					<Typography>{room.dayCost}</Typography>
				</Box>
				<Link href={`rooms/${room.id}`}
					style={{ textDecoration: 'none', color: "#000" }}
				>
					<Box
						sx={{
							width: '100%',
							margin: "1rem 0",
							height: 200,
							backgroundImage: `url(${room.image})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}}
					/>
				</Link>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="start"
					>
						<Typography variant="caption" color="primary">Type</Typography>
						<Typography textTransform="capitalize">{room.type}</Typography>
					</Box>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="start"
					>
						<Typography variant="caption" color="primary">Capacity</Typography>
						<Typography>{room.capacity} Persons</Typography>
					</Box>
				</Box>
				<Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="start"
					>
						<Typography variant="caption" color="primary">Pets Availability</Typography>
						<Typography>{room.petsAvailability ? "Permitted" : "Not Permitted"}</Typography>
					</Box>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="start"
					>
						<Typography variant="caption" color="primary">Floor Number</Typography>
						<Typography># {room.floor.floorNumber}</Typography>
					</Box>
				</Box>
				{withBookBtn ? <Button
					variant="contained"
					size="small"
					fullWidth
					sx={{ margin: '1rem auto 0', display: 'block' }}
					onClick={openBookFormHandler}
				>
					Book Now!
				</Button> : null}
			</Box>
		</Grid>
	)
}

export default RoomItem