/* eslint-disable react/jsx-max-props-per-line */
import { FC, useState } from 'react'
import { Room } from '../../models/Room'
import { Box, Button, Container, Dialog, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import BookForm from './BookForm'
import RoomItem from './RoomItem'
import { useAuth } from '../../hooks/use-auth'

const RoomsGrid: FC<{ rooms: Room[] }> = ({ rooms }) => {
	const [openBookForm, setOpenBookForm] = useState<boolean>(false)
	const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

	const openBookFormHandler = (room: Room) => {
		setSelectedRoom(room)
		setOpenBookForm(true)
	}
	const closeBookFormHandler = () => {
		setOpenBookForm(false)
		setTimeout(() => {
			setSelectedRoom(null)
		}, 250)
	}

	const auth: any = useAuth()
	const { user } = auth
	const isAdmin = user.role === "Admin"

	return (
		<>
			{
				!isAdmin ?
					<>
						<Typography variant='h4'>Your Previous Bookings</Typography>
						<Grid container spacing={2}>
							{
								rooms.slice(0, 3).map(room => (
									<RoomItem key={room.id} withBookBtn room={room} openBookFormHandler={() => openBookFromHandler(room)} />
								))
							}
						</Grid>
					</> : null
			}
			<Typography variant="h4">
				Rooms
			</Typography>
			<Grid container spacing={1}>
				{rooms.map(room => (
					<RoomItem key={room.id} withBookBtn room={room} openBookFormHandler={() => openBookFormHandler(room)} />
				))}
			</Grid>
			<Dialog
				open={openBookForm}
				onClose={closeBookFormHandler}
			>
				<BookForm roomNumber={selectedRoom?.number} onClose={closeBookFormHandler} />
			</Dialog>
		</>
	)
}

export default RoomsGrid