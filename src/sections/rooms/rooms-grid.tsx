import { FC } from 'react'
import { Room } from '../../models/Room'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'

const RoomsGrid: FC<{ rooms: Room[] }> = ({ rooms }) => {
	return (
		<Container>
			<Grid container spacing={1}>
				{rooms.map(room => (
					<Grid key={room.id} item xs={12} md={4} sx={{ borderRadius: 3, boxShadow: '0 4px 4px rgba(0,0,0,.2)' }}>
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
							<Grid container mb={3} spacing={2}>
								<Grid item xs={12} md={6}>
									<Box
										display="flex"
										flexDirection="column"
										justifyContent="start"
									>
										<Typography variant="caption" color="primary">Total Beds</Typography>
										<Typography>{room.numOfBeds} Beds</Typography>
									</Box>
								</Grid>
								<Grid item xs={12} md={6}>
									<Box
										display="flex"
										flexDirection="column"
										justifyContent="start"
									>
										<Typography variant="caption" color="primary">Capacity</Typography>
										<Typography>{room.capacity} Individuals</Typography>
									</Box>
								</Grid>
							</Grid>
							<Button
								variant="contained"
								size="small"
								sx={{ margin: 'auto', display: 'block' }}
							>
								Book Now!
							</Button>
						</Box>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default RoomsGrid