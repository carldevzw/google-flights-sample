import { useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import Header from './Header';
import Sidebar from './Sidebar';
import HorizontalBar from './HorizontalBar';
import MainContentStyled from './MainContentStyled';
import Loader from 'ui-component/Loader';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';

import useConfig from 'hooks/useConfig';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';
import { MenuOrientation } from 'config';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const downMD = useMediaQuery(theme.breakpoints.down('md'));

    const { borderRadius, container, miniDrawer, menuOrientation } = useConfig();
    const { menuMaster, menuMasterLoading } = useGetMenuMaster();
    const drawerOpen = menuMaster?.isDashboardDrawerOpened;

    useEffect(() => {
        handlerDrawerOpen(!miniDrawer);
    }, [miniDrawer]);

    useEffect(() => {
        downMD && handlerDrawerOpen(false);
    }, [downMD]);

    const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downMD;

    // horizontal menu-list bar : drawer
    const menu = useMemo(() => (isHorizontal ? <HorizontalBar /> : <Sidebar />), [isHorizontal]);

    if (menuMasterLoading) return <Loader />;

    return (
        <Container maxWidth={container ? 'lg' : false} {...(!container && { sx: { px: { xs: 0 } } })}>
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: 'background.default',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)' // Subtle border
                }}
            >
                <Toolbar sx={{ p: isHorizontal ? 1.25 : 1 }}>
                    <Header />
                </Toolbar>
            </AppBar>

            {menu}

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Outlet />{' '}
            </Box>
        </Container>
    );
};

export default MainLayout;
