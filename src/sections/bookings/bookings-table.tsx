import PropTypes from 'prop-types';
import {
    Button,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    Grid,
    TableHead,
    TablePagination,
    TableRow,
    Dialog,
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';
import { RoomBook } from '../../models/RoomBook';
import { SeverityPill } from '../../components/severity-pill';
import BookingItem from './BookingItem';
import { useState } from 'react'
import Link from 'next/link';

export const BookingsTable = (props) => {
    const {
        count = 0,
        items = [],
        onDeselectAll,
        onDeselectOne,
        onPageChange = () => { },
        onRowsPerPageChange,
        onSelectAll,
        onSelectOne,
        page = 0,
        rowsPerPage = 0,
        selected = []
    } = props;

    const selectedSome = (selected.length > 0) && (selected.length < items.length);
    const selectedAll = (items.length > 0) && (selected.length === items.length);

    const [viewBooking, setViewBooking] = useState<boolean>(false)
    const [selectedBooking, setSelectedBooking] = useState<RoomBook | null>(null)
    const viewBookingHandler = (booking: RoomBook) => {
        setSelectedBooking(booking)
        setViewBooking(true)
    }
    const closeViewBookingHandler = () => {
        setViewBooking(false)
        setTimeout(() => {
            setSelectedBooking(null)
        }, 300)
    }

    return (
        <Card>
            <Scrollbar>
                <Box sx={{ minWidth: 800 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedAll}
                                        indeterminate={selectedSome}
                                        onChange={(event) => {
                                            if (event.target.checked) {
                                                onSelectAll?.();
                                            } else {
                                                onDeselectAll?.();
                                            }
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    Booking Number
                                </TableCell>
                                <TableCell>
                                    Customer Name
                                </TableCell>
                                <TableCell>
                                    Room Number
                                </TableCell>
                                <TableCell>
                                    Security Code
                                </TableCell>
                                <TableCell>
                                    Total Cost
                                </TableCell>
                                <TableCell>
                                    Status
                                </TableCell>
                                <TableCell>
                                    More
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((booking: RoomBook) => {
                                const isSelected = selected.includes(booking.id);

                                return (
                                    <TableRow
                                        hover
                                        key={booking.id}
                                        selected={isSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isSelected}
                                                onChange={(event) => {
                                                    if (event.target.checked) {
                                                        onSelectOne?.(booking.id);
                                                    } else {
                                                        onDeselectOne?.(booking.id);
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {booking.number}
                                        </TableCell>
                                        <TableCell>
                                            {booking.customer.name}
                                        </TableCell>
                                        <TableCell>
                                            {booking.roomNumber}
                                        </TableCell>
                                        <TableCell>
                                            {booking.securityCode}
                                        </TableCell>
                                        <TableCell>
                                            {booking.totalCost}
                                        </TableCell>
                                        <TableCell>
                                            <SeverityPill color={
                                                booking.status === "ACCEPTED" ? "success" :
                                                    booking.status === "REJECTED" ? "error" :
                                                        booking.status === "PENDING" ? 'primary' : ''
                                            }>
                                                {booking.status}
                                            </SeverityPill>
                                        </TableCell>
                                        <TableCell>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6}>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        onClick={() => viewBookingHandler(booking)}
                                                    >
                                                        View
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </Scrollbar>
            <Dialog
                fullWidth
                maxWidth="md"
                open={viewBooking}
                onClose={closeViewBookingHandler}
            >
                <BookingItem booking={selectedBooking} />
            </Dialog>
            <TablePagination
                component="div"
                count={count}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

BookingsTable.propTypes = {
    count: PropTypes.number,
    items: PropTypes.array,
    onDeselectAll: PropTypes.func,
    onDeselectOne: PropTypes.func,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    onSelectAll: PropTypes.func,
    onSelectOne: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    selected: PropTypes.array
};
