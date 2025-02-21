import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Link from '@mui/material/Link';

// project imports
import { DASHBOARD_PATH } from 'config';
import Logo from 'ui-component/Logo';
import Typography from '@mui/material/Typography';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <Link component={RouterLink} to={DASHBOARD_PATH} aria-label="theme-logo">
        {/* <Logo /> */}
        <Typography variant="h2">Booble </Typography>
    </Link>
);

export default LogoSection;
