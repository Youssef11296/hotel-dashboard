/* eslint-disable react/jsx-max-props-per-line */
import { Grid, Box, Typography, IconButton, Button, Popover, Dialog } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { Room } from '../../models/Room'
import { MoreVert } from '@mui/icons-material'
import { useState } from 'react'
import AddRoomForm from './AddRoomForm'
import { useAuth } from '../../hooks/use-auth'

const RoomItem: FC<{ openBookFormHandler?: () => void, room: Room, withBookBtn: boolean }> = ({ withBookBtn, room, openBookFormHandler }) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [openEditRoom, setOpenEditRoom] = useState<boolean>(false)
	const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const openEditRoomHandler = () => {
		setOpenEditRoom(true)
		handleClose()
	}

	const openConfirmDeleteHandler = () => {
		setOpenConfirmDelete(true)
		handleClose()
	}

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const auth: any = useAuth()
	const { user } = auth
	const isAdmin = user.role === "Admin"

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
			{
				isAdmin ?
					<>
						<IconButton aria-describedby={id} onClick={handleClick} sx={{ display: 'block', marginLeft: 'auto' }}>
							<MoreVert sx={{ padding: 0 }} />
						</IconButton>
						<Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
						>
							<Box
								sx={{
									boxShadow: '0 2px 2px rgba(0,0,0,.4)',
									display: 'flex',
									flexDirection: 'column'
								}}
							>
								<Button variant="text" onClick={openEditRoomHandler}>Edit</Button>
								<Button variant="text" onClick={openConfirmDeleteHandler}>Delete</Button>
							</Box>
						</Popover>
					</> : null
			}
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

			<Dialog open={openEditRoom}>
				<AddRoomForm type="EDIT" onClose={() => setOpenEditRoom(false)} room={room} />
			</Dialog>
			<Dialog open={openConfirmDelete} onClose={() => setOpenConfirmDelete(false)}>
				<Box sx={{ minWidth: 400, padding: 2 }}>
					<Typography variant='h6'>Do you really want to delete this room?</Typography>
					<Grid container spacing={2} mt={2}>
						<Grid item xs={12} md={6}>
							<Button variant="contained" size="small" fullWidth>Yes, delete it.</Button>
						</Grid>
						<Grid item xs={12} md={6}>
							<Button variant="outlined" size="small" fullWidth>No, cancel.</Button>
						</Grid>
					</Grid>
				</Box>
			</Dialog>
		</Grid>
	)
}

export default RoomItem