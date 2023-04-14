import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Divider, MenuItem, MenuList, Popover, Button, Typography } from '@mui/material';
import { useAuth } from '../../hooks/use-auth';
import Link from 'next/link';

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  const auth: any = useAuth();

  const handleSignOut = useCallback(
    () => {
      onClose?.();
      auth.signOut();
      router.push('/auth/login');
    },
    [onClose, auth, router]
  );

  const handleRouteToSettings = () => {
    router.push('/account')
  }

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {auth.user?.name}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          py: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
        <MenuItem onClick={handleRouteToSettings}>
          Settings
        </MenuItem>
      </MenuList>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          py: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
        <MenuItem onClick={handleSignOut}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
