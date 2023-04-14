import PropTypes from 'prop-types';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { rooms } from '../../data/rooms';
import { useEffect, useState } from 'react';
import { currencyFormatter } from '../../utils/format-currency';

export const OverviewTotalProfit = (props) => {
	const { sx } = props;
	const [value, setValue] = useState<number>(0)

	useEffect(() => {
		rooms.map(room => {
			setValue(ps => ps + room.sales.currentMonthInEGP + room.sales.lastMonthInEGP)
		})
	}, [rooms])

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
							variant="overline"
						>
							Total Profit
						</Typography>
						<Typography variant="h4">
							{currencyFormatter(value)}
						</Typography>
					</Stack>
					<Avatar
						sx={{
							backgroundColor: 'primary.main',
							height: 56,
							width: 56
						}}
					>
						<SvgIcon>
							<CurrencyDollarIcon />
						</SvgIcon>
					</Avatar>
				</Stack>
			</CardContent>
		</Card>
	);
};

OverviewTotalProfit.propTypes = {
	value: PropTypes.string,
	sx: PropTypes.object
};