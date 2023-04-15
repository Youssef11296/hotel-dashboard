/* eslint-disable react/jsx-max-props-per-line */
import { useState } from 'react';
import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography, Dialog, Grid } from '@mui/material';
import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import { BRAND_NAME } from '../../constants';
import { rooms } from '../../data/rooms';
import AddRoomForm from '../../sections/rooms/AddRoomForm';
import { useAuth } from '../../hooks/use-auth';
import RoomsGrid from '../../sections/rooms/rooms-grid';
import RoomItem from '../../sections/rooms/RoomItem';

const Rooms = () => {
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
                {!isAdmin ?
                    <>
                        <Box
                            sx={{
                                marginBottom: '2rem',
                                display: "grid",
                                position: 'relative',
                                height: 500,
                                width: '100vw',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: `url(https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png)`
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1,
                                    width: '100%',
                                    height: '100%',
                                    background: "rgba(0,0,0,.4)"
                                }}
                            />
                            <Box margin="auto" position="relative" zIndex={2}>
                                <Typography variant="h1" sx={{ color: "#fff" }}>Catch & Book your room <br /> in seconds ...</Typography>
                            </Box>
                        </Box>
                    </> : null}
                <Container maxWidth="xl">
                    <Stack spacing={3}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={4}
                        >
                            <Stack spacing={1}>
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
                                    >
                                        <AddRoomForm onClose={closeAddRoomFormHandler} />
                                    </Dialog>
                                </> : null
                            }
                        </Stack>
                        <RoomsGrid rooms={rooms} />
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
