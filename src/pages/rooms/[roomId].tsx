import { useRouter } from 'next/router'
import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import { Grid, Typography } from '@mui/material'
import { rooms } from '../../data/rooms';
import { FC } from 'react';

interface InfoBlock {
	title: string, value: string | number | boolean
}

const InfoBlockItem: FC<InfoBlock> = ({ title, value }) => {
	return (
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
			<Typography variant="caption">{title}</Typography>
			<Typography>{value}</Typography>
		</Grid>
	)
}

const Page = () => {
	const router = useRouter()
	const { roomId } = router.query

	const room = rooms.find(room => room.id === roomId)

	const roomData: InfoBlock[] = [
		{
			title: "Floor",
			value: `${room.floor.floorId} / ${room.floor.floorNumber}`
		},
		{
			title: "Type",
			value: room.type
		},
		{
			title: "Day Cost",
			value: room.dayCost
		},
		{
			title: "Pets Availability",
			value: room.petsAvailability
		},
		{
			title: "Current total residents",
			value: room.currentTotalResidents
		},
		{
			title: "Capacity",
			value: room.capacity
		}
	]

	return (
		<Grid>
			<Typography>{room.number}</Typography>
			<Grid container>
				{roomData.map(dataItem => (
					// eslint-disable-next-line react/jsx-max-props-per-line
					<InfoBlockItem key={dataItem.title} title={dataItem.title} value={dataItem.value} />
				))}
			</Grid>
		</Grid>
	)
}

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page