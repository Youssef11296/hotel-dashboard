import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';
import { Room } from '../../models/Room';
import Link from 'next/link';
import { SeverityPill } from '../../components/severity-pill';
import BookForm from './BookForm';
import { useState } from 'react'

const LinkStyle = { color: "#fff", textDecoration: 'none' }

export const RoomsTable = (props) => {
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

  const [openBookForm, setOpenBookForm] = useState<boolean>(false)
  const openBookFormHandler = (room: Room) => {
    setSelectedRoom(room)
    setOpenBookForm(true)
  }
  const closeBookFormHandler = () => {
    setSelectedRoom(null)
    setOpenBookForm(false)
  }

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

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
                  Room Number
                </TableCell>
                <TableCell>
                  Day Cost
                </TableCell>
                <TableCell>
                  Capacity
                </TableCell>
                <TableCell>
                  Total Beds
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
              {items.map((room: Room) => {
                const isSelected = selected.includes(room.id);

                return (
                  <TableRow
                    hover
                    key={room.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(room.id);
                          } else {
                            onDeselectOne?.(room.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      {room.number}
                    </TableCell>
                    <TableCell>
                      {room.dayCost}
                    </TableCell>
                    <TableCell>
                      {room.capacity} Individuals
                    </TableCell>
                    <TableCell>
                      {room.numOfBeds} Beds
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={room.isReserved ? "primary" : "success"}>
                        {room.isReserved ? "Reserved" : "Available"}
                      </SeverityPill>
                    </TableCell>
                    <TableCell>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            disabled={room.isReserved}
                            onClick={() => openBookFormHandler(room)}
                          >
                            Book now
                          </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Button variant="contained" color="primary" size="small">
                            <Link href={`/rooms/${room.id}`} style={LinkStyle}>
                              View
                            </Link>
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
        open={openBookForm}
        onClose={closeBookFormHandler}
      >
        <BookForm roomNumber={selectedRoom?.number} />
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

RoomsTable.propTypes = {
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
