import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Stack,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { usePopover } from '../../hooks/use-popover';
import { AccountPopover } from './account-popover';
import { useAuth } from '../../hooks/use-auth';
import { Logo } from '../../components/logo';

export const TopNav = (props) => {
  const accountPopover = usePopover();

  const auth: any = useAuth()
  const { user } = auth
  const isAdmin = user?.role === "Admin"

  const TOP_NAV_HEIGHT = 64
  const SIDE_NAV_WIDTH = isAdmin ? 280 : 0;

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
          },
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
          {!isAdmin ? <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32
            }}
          >
            <Logo />
          </Box> : null}
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            ml="auto"
          >
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: 'pointer',
                height: 40,
                width: 40
              }}
              src="/assets/avatars/avatar-anika-visser.png"
            />
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
