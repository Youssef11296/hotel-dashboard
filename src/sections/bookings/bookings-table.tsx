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
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';
import { RoomBook } from '../../models/RoomBook';
import { SeverityPill } from '../../components/severity-pill';

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
                                    User
                                </TableCell>
                                <TableCell>
                                    Room
                                </TableCell>
                                <TableCell>
                                    Date
                                </TableCell>
                                <TableCell>
                                    From
                                </TableCell>
                                <TableCell>
                                    To
                                </TableCell>
                                <TableCell>
                                    Status
                                </TableCell>
                                <TableCell align="center">
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
                                            {booking.user_id.slice(0, 10)}
                                        </TableCell>
                                        <TableCell>
                                            {booking.room_id.slice(0, 10)}
                                        </TableCell>
                                        <TableCell>
                                            {booking.booking_date}
                                        </TableCell>
                                        <TableCell>
                                            {booking.booking_time_from}
                                        </TableCell>
                                        <TableCell>
                                            {booking.booking_time_to}
                                        </TableCell>
                                        <TableCell>
                                            <SeverityPill color={
                                                booking.is_approved ? "success" : 'primary'
                                            }>
                                                {booking.is_approved ? "Approved" : "Pending"}
                                            </SeverityPill>
                                        </TableCell>
                                        <TableCell>
                                            <Grid
                                                container
                                                spacing={2}
                                            >
                                                <Grid
                                                    item
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        disabled={booking.is_approved}
                                                    >
                                                        Approve
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        disabled={booking.is_approved}
                                                    >
                                                        Reject
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
