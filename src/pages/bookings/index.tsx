import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from '../../hooks/use-selection';
import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import { BookingsTable } from '../../sections/bookings/bookings-table';
import { BookingsSearch } from '../../sections/bookings/bookings-search';
import { applyPagination } from '../../utils/apply-pagination';
import { BRAND_NAME } from '../../constants';
import { roombooks } from '../../data/roombooks';
import { RoomBook } from '../../models/RoomBook';
import { useAuth } from '../../hooks/use-auth';
import { useEffect } from 'react'
import axios from 'axios'

const now = new Date();

const data: RoomBook[] = roombooks

const useBookings = (page, rowsPerPage) => {
    return useMemo(
        () => {
            return applyPagination(data, page, rowsPerPage);
        },
        [page, rowsPerPage]
    );
};

const useBookingIds = (bookings) => {
    return useMemo(
        () => {
            return bookings.map((booking) => booking.id);
        },
        [bookings]
    );
};

const Page = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const bookings = useBookings(page, rowsPerPage);
    const bookingsIds = useBookingIds(bookings);
    const bookingsSelection = useSelection(bookingsIds);

    const handlePageChange = useCallback(
        (event, value) => {
            setPage(value);
        },
        []
    );

    const handleRowsPerPageChange = useCallback(
        (event) => {
            setRowsPerPage(event.target.value);
        },
        []
    );


    const auth: any = useAuth()
    const user = auth.user
    const isAdmin = user?.role === "Admin"

    useEffect(() => {
        const res = axios.get("https://web01.usn.no/~240179/tilkobling/booking")
        console.log({ res })
    }, [])

    return (
        <>
            <Head>
                <title>
                    Bookings | {BRAND_NAME}
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
                    <Stack spacing={3}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={4}
                        >
                            <Stack spacing={1}>
                                <Typography variant="h4">
                                    Bookings
                                </Typography>
                            </Stack>
                        </Stack>
                        <BookingsSearch />
                        <BookingsTable
                            count={data.length}
                            items={bookings}
                            onDeselectAll={bookingsSelection.handleDeselectAll}
                            onDeselectOne={bookingsSelection.handleDeselectOne}
                            onPageChange={handlePageChange}
                            onRowsPerPageChange={handleRowsPerPageChange}
                            onSelectAll={bookingsSelection.handleSelectAll}
                            onSelectOne={bookingsSelection.handleSelectOne}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            selected={bookingsSelection.selected}
                        />
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
