/* eslint-disable react/jsx-max-props-per-line */
import { useRouter } from 'next/router'
import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { rooms } from '../../data/rooms';
import { FC } from 'react';
import Carousel from 'react-material-ui-carousel'
import RoomItem from '../../sections/rooms/RoomItem';
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface InfoBlock {
	title: string, value: string | number | boolean
}

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3 // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};

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

const Item: FC<{ image: string }> = ({ image }) => {
	return (
		<Paper sx={{
			height: 300,
			backgroundImage: `url(${image})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		}}
		/>
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

	var items = [...room.photos, room.image]

	return (
		<Container sx={{
			py: 8
		}}>
			<Grid>
				<Typography variant="h3" mb={1}>{room.number}</Typography>
				<Carousel>
					{
						items.map((image, i) => <Item key={i} image={image} />)
					}
				</Carousel>
				<Grid container>
					{roomData.map(dataItem => (
						// eslint-disable-next-line react/jsx-max-props-per-line
						<InfoBlockItem key={dataItem.title} title={dataItem.title} value={dataItem.value} />
					))}
				</Grid>
				<Typography variant="h5" my={2}>Similar Rooms</Typography>
				<MultiCarousel
					swipeable={false}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					// deviceType={deviceType}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
				>
					{
						rooms.map(room => <RoomItem key={room.id} room={room} withBookBtn={false} />)
					}
				</MultiCarousel>
			</Grid>
		</Container>
	)
}

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page