/* eslint-disable react/jsx-max-props-per-line */
import PropTypes from 'prop-types';
import { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  Grid,
  IconButton,
  Popover,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { MoreVert } from '@mui/icons-material'
import { Scrollbar } from '../../components/scrollbar';
import { getInitials } from '../../utils/get-initials';
import { User as Customer, User } from '../../models/User';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SeverityPill } from '../../components/severity-pill';

export const CustomersTable = (props) => {
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

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false)
  const [openConfirmVerify, setOpenConfirmVerify] = useState<boolean>(false)
  const [openContactInfo, setOpenContactInfo] = useState<boolean>(false)

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickVerify = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseVerify = () => {
    setAnchorEl(null);
  };

  const openConfirmDeleteHandler = (user: User) => {
    setSelectedUser(user)
    setOpenConfirmDelete(true)
    handleClose()
  }

  const openConfirmVerifyHandler = (user: User) => {
    setSelectedUser(user)
    setOpenConfirmVerify(true)
    handleCloseVerify()
  }

  const openContactInfoHandler = (user: User) => {
    setSelectedUser(user)
    setOpenContactInfo(true)
    handleClose()
  }

  const closeConfirmDeleteHandler = () => {
    setOpenConfirmDelete(false)
    setSelectedUser(null)
  }

  const closeConfirmVerifyHandler = () => {
    setOpenConfirmVerify(false)
    setSelectedUser(null)
  }

  const closeContactInfoHandler = () => {
    setOpenContactInfo(false)
    setSelectedUser(null)
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
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  National ID
                </TableCell>
                <TableCell>
                  Address
                </TableCell>
                <TableCell>
                  Age
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Actions & More
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer: Customer) => {
                const isSelected = selected.includes(customer.id);

                return (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(customer.id);
                          } else {
                            onDeselectOne?.(customer.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Avatar>
                          {getInitials(customer.name)}
                        </Avatar>
                        <Typography variant="subtitle2">
                          {customer.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {customer.email}
                    </TableCell>
                    <TableCell>
                      {customer?.nationalId}
                    </TableCell>
                    <TableCell>
                      {customer.address}
                    </TableCell>
                    <TableCell>
                      {customer.age}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={customer.isVerified ? "success" : "info"}>
                        {customer.isVerified ? "Verified" : "Not verified"}
                      </SeverityPill>
                    </TableCell>
                    <TableCell>
                      <Grid container xs={12} md={9} spacing={1}>
                        <Grid item xs={12} md={6}>
                          <IconButton aria-describedby={id}
                            onClick={handleClick} sx={{ display: 'block', marginLeft: 'auto' }}>
                            <MoreVert sx={{ padding: 0 }} />
                          </IconButton>
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                          >
                            <Box
                              sx={{
                                boxShadow: '0 2px 2px rgba(0,0,0,.4)',
                                display: 'flex',
                                flexDirection: 'column'
                              }}
                            >
                              <Button size="small" variant="text" onClick={() => openContactInfoHandler(customer)}>
                                Contact
                              </Button>
                              <Button size="small" variant="text" onClick={() => openConfirmVerifyHandler(customer)}>
                                Verify
                              </Button>
                              <Button variant="text" onClick={() => openConfirmDeleteHandler(customer)}>Delete</Button>
                            </Box>
                          </Popover>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
        <Dialog open={openConfirmDelete} onClose={closeConfirmDeleteHandler}>
          <Box sx={{ minWidth: 400, padding: 2 }}>
            <Typography variant='h6'>Do you really want to delete this user?</Typography>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} md={6}>
                <Button onClick={closeConfirmDeleteHandler} variant="contained" size="small" fullWidth>Yes, delete it.</Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button onClick={closeConfirmDeleteHandler} variant="outlined" size="small" fullWidth>No, cancel.</Button>
              </Grid>
            </Grid>
          </Box>
        </Dialog>

        <Dialog open={openConfirmVerify} onClose={closeConfirmVerifyHandler}>
          <Box sx={{ minWidth: 400, padding: 2 }}>
            <Typography variant='h6'>
              {selectedUser?.isVerified ? "This user is already verified, Do you really want to un-verify him?" :
                "Do you really want to verify this user?"}
            </Typography>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} md={6}>
                <Button onClick={closeConfirmVerifyHandler} variant="contained" size="small" fullWidth>Yes, verify it.</Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button onClick={closeConfirmVerifyHandler} variant="outlined" size="small" fullWidth>No, cancel.</Button>
              </Grid>
            </Grid>
          </Box>
        </Dialog>

        <Dialog open={openContactInfo} onClose={closeContactInfoHandler}>
          <Box sx={{ minWidth: 400, padding: 2 }}>
            <Box sx={{
              display: 'flex',
              justifyContent: "space-between",
              aignItems: "center",
              marginBottom: '1rem'
            }}>
              <Typography variant='h6'>Contact Info</Typography>
              <XCircleIcon width={20} height={20} color="primary" style={{
                marginLeft: 'auto',
                display: 'block',
                cursor: 'pointer'
              }}
                onClick={closeContactInfoHandler}
              />
            </Box>
            <Grid container spacing={2} p={4} textAlign="center" flexDirection="column" alignItems="center">
              <Typography variant="h6" mb={2}>{selectedUser?.name}</Typography>
              <Button variant="contained" fullWidth sx={{ my: 1 }}>{selectedUser?.phone}</Button>
              <Box display="flex" alignItems="center">
                <Typography>Send an email to:</Typography>
                <Typography fontWeight="bold" ml={1}>{selectedUser?.email}</Typography>
              </Box>
            </Grid>
          </Box>
        </Dialog>
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
}

CustomersTable.propTypes = {
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
