import PropTypes from 'prop-types';
import {
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
									Floor ID
								</TableCell>
								<TableCell>
									Number
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
											{floor.floorId}
										</TableCell>
										<TableCell>
											{floor.number}
										</TableCell>
										<TableCell>
											{floor.totalRooms}
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
														disabled={floor.isEmpty}
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
														disabled={floor.isEmpty}
													>
														<Link
															href={`floors/${floor.id}`}
															style={LinkStyle}
														>
															Delete
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
				open={openFloorForm}
				onClose={closeFloorHandler}
			>
				<AddFloorForm floorNumber={selectedFloor?.number} onClose={closeFloorHandler} />
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
