import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Grid } from '@mui/material';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import { OverviewLatestBookings } from '../sections/overview/overview-latest-orders';
import { OverviewSales } from '../sections/overview/overview-sales';
import { OverviewTotalRooms } from '../sections/overview/overview-total-rooms';
import { OverviewTotalCustomers } from '../sections/overview/overview-total-customers';
import { BRAND_NAME } from '../constants';
import { useAuth } from '../hooks/use-auth';
import { useRouter } from 'next/router';
import Rooms from './rooms';
import { roombooks } from '../data/roombooks';

const now = new Date();

const Page = () => {
  const auth: any = useAuth()
  const user = auth.user

  const isAdmin = user.role === "Admin"

  const router = useRouter()

  if (!isAdmin) {
    return <Rooms />
  }

  return (
    <>
      <Head>
        <title>
          Overview | {BRAND_NAME}
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalCustomers
                difference={16}
                positive={false}
                sx={{ height: '100%' }}
                value="1.6k"
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalRooms
                sx={{ height: '100%' }}
                value={75.5}
              />
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                lg={6}
              >
                <OverviewSales
                  chartSeries={[
                    {
                      name: 'This year',
                      data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                    },
                    {
                      name: 'Last year',
                      data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                    }
                  ]}
                  sx={{ height: '100%' }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <OverviewLatestBookings
                  orders={roombooks}
                  sx={{ height: '100%' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
