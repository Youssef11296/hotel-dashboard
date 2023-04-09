import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';

const Page = () => {
	return (
		<div>Room By Id!</div>
	)
}

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page