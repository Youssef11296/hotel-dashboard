import PropTypes from 'prop-types';
import {
    Button,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';
import { RoomBook } from '../../models/RoomBook';
import Link from 'next/link';

const LinkStyle = { color: "#fff", textDecoration: 'none' }

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
                                            <Button variant="contained" size="small">
                                                <Link href={`/bookings/${booking.id}`} style={LinkStyle}>
                                                    View
                                                </Link>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </Scrollbar>
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
