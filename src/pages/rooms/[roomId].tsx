import { useRouter } from 'next/router'
import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import { Grid, Typography } from '@mui/material'
import { rooms } from '../../data/rooms';

const Page = () => {
	const router = useRouter()
	const { roomId } = router.query

	const room = rooms.find(room => room.id === roomId)

	return (
		<Grid>
			<Typography>{room.number}</Typography>
		</Grid>
	)
}

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page