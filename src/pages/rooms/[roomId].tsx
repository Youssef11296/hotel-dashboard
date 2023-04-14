import { useRouter } from 'next/router'
import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import { Grid, Typography } from '@mui/material'

const Page = () => {
	const router = useRouter()
	const { roomId } = router.query

	return (
		<Grid>
			<Typography>Room ID: {roomId}</Typography>
		</Grid>
	)
}

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page