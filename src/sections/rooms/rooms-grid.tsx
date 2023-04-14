import { FC } from 'react'
import { Room } from '../../models/Room'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'

const RoomsGrid: FC<{ rooms: Room[] }> = ({ rooms }) => {
	return (
		<>
			<Grid container spacing={1}>
				{rooms.map(room => (
					<Grid
						key={room.id}
						item
						xs={12}
						md={3}
						sx={{
							borderRadius: 3,
							boxShadow: '0 4px 4px rgba(0,0,0,.2)'
						}}
					>
						<Box sx={{ padding: 2 }}>
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								sx={{ width: '100%' }}
							>
								<Typography variant="h6">{room.number}</Typography>
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
									<Typography variant="caption" color="primary">Total Beds</Typography>
									<Typography>{room.numOfBeds} Beds</Typography>
								</Box>
								<Box
									display="flex"
									flexDirection="column"
									justifyContent="start"
								>
									<Typography variant="caption" color="primary">Capacity</Typography>
									<Typography>{room.capacity} Individuals</Typography>
								</Box>
							</Box>
							<Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
								<Box
									display="flex"
									flexDirection="column"
									justifyContent="start"
								>
									<Typography variant="caption" color="primary">Status</Typography>
									<Typography>{room.isReserved ? "Reserved" : "Available"}</Typography>
								</Box>
								<Box
									display="flex"
									flexDirection="column"
									justifyContent="start"
								>
									<Typography variant="caption" color="primary">Total Residents</Typography>
									<Typography>{room.currentTotalResidents} Residents</Typography>
								</Box>
							</Box>
							<Button
								variant="contained"
								size="small"
								fullWidth
								sx={{ margin: '1rem auto 0', display: 'block' }}
							>
								Book Now!
							</Button>
						</Box>
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default RoomsGrid