import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography, Dialog } from '@mui/material';
import { useSelection } from '../../hooks/use-selection';
import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';
import { FloorsTable } from '../../sections/floors/floors-table';
import { FloorsSearch } from '../../sections/floors/floors-search';
import { applyPagination } from '../../utils/apply-pagination';
import { BRAND_NAME } from '../../constants';
import { Floor } from '../../models/Floor';
import { floors } from '../../data/floors';
import AddFloorForm from '../../sections/floors/AddFloorForm';
import { useAuth } from '../../hooks/use-auth';

const now = new Date();

const data: Floor[] = floors

const useFloors = (page, rowsPerPage) => {
	return useMemo(
		() => {
			return applyPagination(data, page, rowsPerPage);
		},
		[page, rowsPerPage]
	);
};

const useFloorIds = (floors) => {
	return useMemo(
		() => {
			return floors.map((floor) => floor.id);
		},
		[floors]
	);
};

const Floors = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const floors = useFloors(page, rowsPerPage);
	const floorsIds = useFloorIds(floors);
	const floorsSelection = useSelection(floorsIds);

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

	const [openAddFloorForm, setOpenAddFloorForm] = useState<boolean>(false)

	const openAddFloorFormHandler = () => setOpenAddFloorForm(true)
	const closeAddFloorFormHandler = () => setOpenAddFloorForm(false)

	const auth: any = useAuth()
	const user = auth.user
	const isAdmin = user?.role === "Admin"

	return (
		<>
			<Head>
				<title>
					Floors | {BRAND_NAME}
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
									Floors
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
										onClick={openAddFloorFormHandler}
									>
										Add Floor
									</Button>
									<Dialog
										open={openAddFloorForm}
										onClose={closeAddFloorFormHandler}
									>
										<AddFloorForm formType='CREATE' onClose={closeAddFloorFormHandler} />
									</Dialog>
								</> : null
							}
						</Stack>
						<FloorsSearch />
						<FloorsTable
							count={data.length}
							items={floors}
							onDeselectAll={floorsSelection.handleDeselectAll}
							onDeselectOne={floorsSelection.handleDeselectOne}
							onPageChange={handlePageChange}
							onRowsPerPageChange={handleRowsPerPageChange}
							onSelectAll={floorsSelection.handleSelectAll}
							onSelectOne={floorsSelection.handleSelectOne}
							page={page}
							rowsPerPage={rowsPerPage}
							selected={floorsSelection.selected}
						/>
					</Stack>
				</Container>
			</Box>
		</>
	);
};

Floors.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Floors;
