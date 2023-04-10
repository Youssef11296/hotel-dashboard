import PropTypes from 'prop-types';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	LinearProgress,
	Stack,
	SvgIcon,
	Typography
} from '@mui/material';
import { roombooks as bookings } from '../../data/roombooks';

export const OverviewTotalBookings = (props) => {
	const { sx } = props;
	const value = bookings.length

	return (
		<Card sx={sx}>
			<CardContent>
				<Stack
					alignItems="flex-start"
					direction="row"
					justifyContent="space-between"
					spacing={3}
				>
					<Stack spacing={1}>
						<Typography
							color="text.secondary"
							gutterBottom
							variant="overline"
						>
							Total Bookings
						</Typography>
						<Typography variant="h4">
							{value}
						</Typography>
					</Stack>
					<Avatar
						sx={{
							backgroundColor: 'warning.main',
							height: 56,
							width: 56
						}}
					>
						<SvgIcon>
							<ListBulletIcon />
						</SvgIcon>
					</Avatar>
				</Stack>
			</CardContent>
		</Card>
	);
};

OverviewTotalBookings.propTypes = {
	value: PropTypes.number.isRequired,
	sx: PropTypes.object
};
