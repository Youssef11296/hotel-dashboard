import { useRouter } from 'next/router';
import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import BookingItem from '../../sections/bookings/BookingItem';
import { roombooks } from '../../data/roombooks';

const Page = () => {
	const router = useRouter()
	const { query } = router

	const { roombookId } = query
	const booking = roombooks.find(booking => booking.id === roombookId)

	return (
		<>
			<BookingItem booking={booking} />
		</>
	)
}

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page