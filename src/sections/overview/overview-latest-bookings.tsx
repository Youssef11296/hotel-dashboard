import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';
import { SeverityPill } from '../../components/severity-pill';
import { RoomBook } from '../../models/RoomBook';
import Link from 'next/link';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const OverviewLatestBookings = (props) => {
  const { orders = [], sx } = props;

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title="Latest Bookings" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  #.
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell sortDirection="desc">
                  Date
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order: RoomBook) => {
                return (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>
                      {order.number}
                    </TableCell>
                    <TableCell>
                      {order.customer.name}
                    </TableCell>
                    <TableCell>
                      {new Date().getFullYear()}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color='primary'>
                        {order.status}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          <Link href="/bookings" style={{ color: "#000", textDecoration: 'none' }}>
            View all
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestBookings.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
