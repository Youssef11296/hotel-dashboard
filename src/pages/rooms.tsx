import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography, Dialog } from '@mui/material';
import { useSelection } from '../hooks/use-selection';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import { RoomsTable } from '../sections/rooms/rooms-table';
import { RoomsSearch } from '../sections/rooms/rooms-search';
import { applyPagination } from '../utils/apply-pagination';
import { BRAND_NAME } from '../constants';
import { Room } from '../models/Room';
import { rooms } from '../data/rooms';
import AddRoomForm from '../sections/rooms/AddRoomForm';

const now = new Date();

const data: Room[] = rooms

const useRooms = (page, rowsPerPage) => {
    return useMemo(
        () => {
            return applyPagination(data, page, rowsPerPage);
        },
        [page, rowsPerPage]
    );
};

const useRoomIds = (rooms) => {
    return useMemo(
        () => {
            return rooms.map((room) => room.id);
        },
        [rooms]
    );
};

const Rooms = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const rooms = useRooms(page, rowsPerPage);
    const roomsIds = useRoomIds(rooms);
    const roomsSelection = useSelection(roomsIds);

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

    const [openAddRoomForm, setOpenAddRoomForm] = useState<boolean>(false)

    const openAddRoomFormHandler = () => setOpenAddRoomForm(true)
    const closeAddRoomFormHandler = () => setOpenAddRoomForm(false)

    return (
        <>
            <Head>
                <title>
                    Rooms | {BRAND_NAME}
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
                                    Rooms
                                </Typography>
                            </Stack>
                            <Button
                                startIcon={(
                                    <SvgIcon fontSize="small">
                                        <PlusIcon />
                                    </SvgIcon>
                                )}
                                variant="contained"
                                onClick={openAddRoomFormHandler}
                            >
                                Add
                            </Button>
                            <Dialog
                                open={openAddRoomForm}
                                onClose={closeAddRoomFormHandler}
                            >
                                <AddRoomForm />
                            </Dialog>

                        </Stack>
                        <RoomsSearch />
                        <RoomsTable
                            count={data.length}
                            items={rooms}
                            onDeselectAll={roomsSelection.handleDeselectAll}
                            onDeselectOne={roomsSelection.handleDeselectOne}
                            onPageChange={handlePageChange}
                            onRowsPerPageChange={handleRowsPerPageChange}
                            onSelectAll={roomsSelection.handleSelectAll}
                            onSelectOne={roomsSelection.handleSelectOne}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            selected={roomsSelection.selected}
                        />
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

Rooms.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Rooms;
