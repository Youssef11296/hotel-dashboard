/* eslint-disable react/jsx-max-props-per-line */
import PropTypes from 'prop-types';
import {
	Box,
	Button,
	Card,
	Checkbox,
	Dialog,
	Grid,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';
import { Floor } from '../../models/Floor';
import Link from 'next/link';
import { SeverityPill } from '../../components/severity-pill';
import { useState } from 'react'
import AddFloorForm from './AddFloorForm';

const LinkStyle = { color: "#000", textDecoration: 'none' }

export const FloorsTable = (props) => {
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

	const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null)
	const [openFloorForm, setOpenFloorForm] = useState<boolean>(false)

	const openFloorHandler = (floor: Floor) => {
		setSelectedFloor(floor)
		setOpenFloorForm(true)
	}
	const closeFloorHandler = () => {
		setSelectedFloor(null)
		setOpenFloorForm(false)
	}

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [openEditFloor, setOpenEditFloor] = useState<boolean>(false)
	const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const openEditFloorHandler = () => {
		setOpenEditFloor(true)
		handleClose()
	}

	const openConfirmDeleteHandler = () => {
		setOpenConfirmDelete(true)
		handleClose()
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
									Number
								</TableCell>
								<TableCell>
									Floor ID
								</TableCell>
								<TableCell>
									Total Rooms
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
							{items.map((floor: Floor) => {
								const isSelected = selected.includes(floor.id);

								return (
									<TableRow
										hover
										key={floor.id}
										selected={isSelected}
									>
										<TableCell padding="checkbox">
											<Checkbox
												checked={isSelected}
												onChange={(event) => {
													if (event.target.checked) {
														onSelectOne?.(floor.id);
													} else {
														onDeselectOne?.(floor.id);
													}
												}}
											/>
										</TableCell>
										<TableCell>
											{floor.number}
										</TableCell>
										<TableCell>
											{floor.floorId}
										</TableCell>
										<TableCell>
											{floor.totalRooms} Rooms
										</TableCell>
										<TableCell>
											<SeverityPill color={floor.isComplete ? "primary" : "success"}>
												{floor.isComplete ? "Complete" : "Available"}
											</SeverityPill>
										</TableCell>
										<TableCell>
											<Grid xs={12} md={6} container spacing={1}>
												<Grid item xs={12} md={6}>
													<Button
														variant="contained"
														color="primary"
														size="small"
														disabled={!floor.isEmpty}
														onClick={() => openFloorHandler(floor)}
													>
														Edit
													</Button>
												</Grid>
												<Grid item xs={12} md={6}>
													<Button
														variant="outlined"
														color="primary"
														size="small"
														disabled={!floor.isEmpty}
														onClick={openConfirmDeleteHandler}
													>
														Delete
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
				<Dialog open={openConfirmDelete} onClose={() => setOpenConfirmDelete(false)}>
					<Box sx={{ minWidth: 400, padding: 2 }}>
						<Typography variant='h6'>Do you really want to delete this floor?</Typography>
						<Grid container spacing={2} mt={2}>
							<Grid item xs={12} md={6}>
								<Button onClick={() => setOpenConfirmDelete(false)} variant="contained" size="small" fullWidth>Yes, delete it.</Button>
							</Grid>
							<Grid item xs={12} md={6}>
								<Button onClick={() => setOpenConfirmDelete(false)} variant="outlined" size="small" fullWidth>No, cancel.</Button>
							</Grid>
						</Grid>
					</Box>
				</Dialog>
			</Scrollbar>
			<Dialog
				open={openFloorForm}
				onClose={closeFloorHandler}
			>
				<AddFloorForm formType='EDIT' floorNumber={selectedFloor?.number} onClose={closeFloorHandler} />
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

FloorsTable.propTypes = {
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
