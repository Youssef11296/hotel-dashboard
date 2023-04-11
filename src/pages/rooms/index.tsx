import { useEffect, useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography, Dialog } from '@mui/material';
import { useSelection } from '../../hooks/use-selection';
import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import { RoomsTable } from '../../sections/rooms/rooms-table';
import { RoomsSearch } from '../../sections/rooms/rooms-search';
import { applyPagination } from '../../utils/apply-pagination';
import { BRAND_NAME } from '../../constants';
import { Room } from '../../models/Room';
import AddRoomForm from '../../sections/rooms/AddRoomForm';
import { useAuth } from '../../hooks/use-auth';
import { API } from '../../configs/apiConfig';

const useRooms = (page, rowsPerPage) => {
    const [rooms, setRooms] = useState<Room[]>([])

    const getRooms = async () => {
        const response = await API.rooms.GET_ROOMS()
        setRooms(response.data.rooms)
    }
    useEffect(() => {
        getRooms()
    }, [])

    return useMemo(
        () => {
            return applyPagination(rooms, page, rowsPerPage);
        },
        [page, rowsPerPage, rooms]
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
    console.log({ rooms })
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

    const auth: any = useAuth()
    const user = auth.user
    const isAdmin = user?.role === "Admin"

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
                            {
                                isAdmin ? <>
                                    <Button
                                        startIcon={(
                                            <SvgIcon fontSize="small">
                                                <PlusIcon />
                                            </SvgIcon>
                                        )}
                                        variant="contained"
                                        onClick={openAddRoomFormHandler}
                                    >
                                        Add Room
                                    </Button>
                                    <Dialog
                                        open={openAddRoomForm}
                                        onClose={closeAddRoomFormHandler}
                                    >
                                        <AddRoomForm />
                                    </Dialog>
                                </> : null
                            }
                        </Stack>
                        <RoomsSearch />
                        <RoomsTable
                            count={rooms.length}
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
