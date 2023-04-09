import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';

const Page = () => {
	return (
		<div>Room Book By Id!</div>
	)
}

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page