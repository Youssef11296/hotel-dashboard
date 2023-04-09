import { TextField, Button, Card, Box, Typography } from '@mui/material'

const CardStyle = {
	padding: '2rem',
	width: 500,
	maxWidth: '60vw',
}

const AddRoomForm = () => {
	return (
		<Card sx={CardStyle}>
			<form>
				<Box
					display="flex"
					flexDirection="column"
					mb={2}
				>
					<Typography
						variant="subtitle2"
						mb={1}
					>
						Room numbe
						r</Typography>
					<TextField />
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					mb={2}
				>
					<Typography
						variant="subtitle2"
						mb={1}
					>
						Day cost</
					Typography>
					<TextField />
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					mb={2}
				>
					<Typography
						variant="subtitle2"
						mb={1}
					>
						Total beds
					</Typography>
					<TextField />
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					mb={2}
				>
					<Typography
						variant="subtitle2"
						mb={1}
					>
						Capacity</
					Typography>
					<TextField />
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
			</form>
		</Card>
	)
}

export default AddRoomForm