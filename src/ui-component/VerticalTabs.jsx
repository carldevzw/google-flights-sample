import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// project imports
import useConfig from 'hooks/useConfig';
import { gridSpacing } from 'store/constant';
import { ThemeMode } from 'config';

// assets
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';

import AnalyticsImag from 'assets/images/3964964.jpg';
import CalendatImage from 'assets/images/—Pngtree—vector calendar icon_3782243.png';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimelineIcon from '@mui/icons-material/Timeline';
// tab content
function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    };
}

// ================================|| UI TABS - VERTICAL ||================================ //

export default function VerticalTabs() {
    const theme = useTheme();
    const { borderRadius } = useConfig();

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={4} md={4}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        orientation="vertical"
                        variant="scrollable"
                        sx={{
                            '& .MuiTabs-flexContainer': {
                                borderBottom: 'none'
                            },
                            '& button': {
                                borderRadius: `${borderRadius}px`,
                                color: theme.palette.mode === ThemeMode.DARK ? 'grey.600' : 'grey.900',
                                minHeight: 'auto',
                                minWidth: '100%',
                                py: 1.5,
                                px: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                justifyContent: 'flex-start'
                            },
                            '& button.Mui-selected': {
                                color: 'primary.main',
                                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50'
                            },
                            '& button > svg': {
                                marginBottom: '0px !important',
                                marginRight: 1.25,
                                marginTop: 1.25,
                                height: 20,
                                width: 20
                            },
                            '& button > div > span': {
                                display: 'block'
                            },
                            '& > div > span': {
                                display: 'none'
                            }
                        }}
                    >
                        <Tab
                            icon={<CalendarTodayIcon style={{ color: '#4A90E2' }} />}
                            label={
                                <Grid container direction="column">
                                    <Typography variant="subtitle1" color="inherit">
                                        Find the cheapest days to fly
                                    </Typography>
                                    <Typography variant="caption">
                                        The Date grid and Price graph make it easy to see the best flight deals{' '}
                                    </Typography>
                                </Grid>
                            }
                            {...a11yProps(0)}
                        />

                        <Tab
                            icon={<TimelineIcon style={{ color: '#4A90E2' }} />}
                            label={
                                <Grid container direction="column">
                                    <Typography variant="subtitle1" color="inherit">
                                        See the whole picture with price insights{' '}
                                    </Typography>
                                    <Typography variant="caption">
                                        Price history and trend data show you when to book to get the best price on your flight{' '}
                                    </Typography>
                                </Grid>
                            }
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                    <TabPanel value={value} index={0}>
                        <Stack spacing={gridSpacing}>
                            <Typography variant="h4">Insightful tools help you choose your trip dates</Typography>
                            <Typography variant="body2">
                                If your travel plans are flexible, use the form above to start searching for a specific trip. Then, play
                                around with the Date grid and Price graph options on the Search page to find the cheapest days to get to
                                your destination – and back again for round trips.
                            </Typography>
                            {/* Box with image */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: `${borderRadius}px`,
                                    p: 2,
                                    mt: 2
                                }}
                            >
                                <img src={CalendatImage}
                                alt="user" width="50%" />
                            </Box>
                        </Stack>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Stack spacing={gridSpacing}>
                            <Typography variant="h4">Get smart insights about flight prices</Typography>

                            <Typography variant="body2">
                                Real-time insights can tell you if a fare is lower or higher than usual, and if the fare you’re seeing is a
                                good price. So, you don’t have to worry about paying too much for a flight or missing out on the cheapest
                                time to book. On some routes, you might also see historical data that helps you better understand how flight
                                prices vary over time.{' '}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: `${borderRadius}px`,
                                    p: 2,
                                    mt: 2
                                }}
                            >
                                <img src={AnalyticsImag}
                                 alt="user" width="50%" />
                            </Box>
                        </Stack>
                    </TabPanel>
                </Grid>
            </Grid>
        </div>
    );
}
