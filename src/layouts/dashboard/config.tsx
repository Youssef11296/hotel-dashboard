import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { IconButton, SvgIcon } from '@mui/material';
import { ReactNode } from 'react';

interface NavItem {
  title: string;
  path: string;
  icon: ReactNode;
  disabled?: boolean;
  external?: boolean;
}

export const publicItems: NavItem[] = [
  {
    title: 'Rooms',
    path: '/rooms',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
];

export const items: NavItem[] = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Floors',
    path: '/floors',
    icon: (
      <SvgIcon fontSize="small">
        <XCircleIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Rooms',
    path: '/rooms',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'Bookings',
    path: '/bookings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
];
