// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FlightClassIcon from '@mui/icons-material/FlightClass';

import MapImage from 'assets/images/andrew-stutesman-l68Z6eF2peA-unsplash.jpg'

import { styled } from '@mui/material/styles';

// ==============================|| SAMPLE PAGE ||============================== //

import PersonIcon from '@mui/icons-material/Person'; // Passenger Count Icon
import ClassIcon from '@mui/icons-material/Class'; // Travel Class Icon
import VerticalTabs from 'ui-component/VerticalTabs';
import { GridOnSharp, Image } from '@mui/icons-material';
import UIAccordion from 'ui-component/UIAccordion';

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
        // backgroundColor: '#303030',
        color: '#fff',
        // borderRadius: '10px',
        padding: '6px 12px',
        cursor: 'pointer',
        // border: '1px solid #555',
        transition: 'all 0.3s ease-in-out',
        height: '44px', // Slightly taller for a button-like feel
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center'
    },
    '&:hover .MuiInputBase-root': {
        backgroundColor: '#3a3a3a'
    },
    '& .MuiFilledInput-root:before': {
        borderBottom: 'none !important'
    },
    '& .MuiInputAdornment-root': {
        color: '#fff'
    }
}));

const CustomPaper = (props) => {
    return <Paper {...props} style={{ backgroundColor: '#fff', color: '#000' }} />;
};
const SamplePage = () => {
    const flightTypes = ['Round trip', 'One way'];
    const flightClasses = ['Economy', 'Business', 'First Class'];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 3,
                borderRadius: 2,
                backgroundColor: 'transparent',
                maxWidth: '900px', // Adjust this to your preferred width
                width: '100%',
                margin: '0 auto' // Centers the box horizontally
            }}
        >
            <img src="src/assets/images/11045.jpg" alt="flight" style={{ width: '100%', height: 'auto' }} />
            <Typography variant="h1" sx={{ mt: 2, mb: 2 }}>
                Flights
            </Typography>
            <Card sx={{ p: 2, mt: 2, borderRadius: 2, backgroundColor: 'transparent' }} elevation={3}>
                <Grid container spacing={2}>
                   
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={1} alignItems="center">
                            {/* Trip Type */}
                            <Grid item xs={4}>
                                <Autocomplete
                                    disablePortal
                                    disableClearable
                                    options={flightTypes}
                                    defaultValue={flightTypes[0]}
                                    // PaperComponent={CustomPaper}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="filled"
                                            fullWidth
                                            size="small"
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    height: 36, // Adjust height
                                                    fontSize: '0.85rem', // Reduce font size
                                                    padding: '0 8px' // Reduce horizontal padding
                                                },
                                                '& .MuiInputBase-input': {
                                                    padding: '6px 0' // Adjust input padding
                                                }
                                            }}
                                            InputProps={{
                                                ...params.InputProps,
                                                disableUnderline: true,

                                                startAdornment: (
                                                    <InputAdornment
                                                        position="start"
                                                        sx={{ display: 'flex', alignItems: 'center', paddingBottom: 2 }}
                                                    >
                                                        <CompareArrowsIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            {/* Passengers */}
                            <Grid item xs={3}>
                                <Autocomplete
                                    options={[...Array(10).keys()].map((num) => num + 1)}
                                    defaultValue={1}
                                    disableClearable
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="filled"
                                            fullWidth
                                            size="small"
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    height: 36, // Adjust height
                                                    fontSize: '0.85rem', // Reduce font size
                                                    padding: '0 8px' // Reduce horizontal padding
                                                },
                                                '& .MuiInputBase-input': {
                                                    padding: '6px 0' // Adjust input padding
                                                }
                                            }}
                                            InputProps={{
                                                ...params.InputProps,
                                                disableUnderline: true,

                                                startAdornment: (
                                                    <InputAdornment
                                                        position="start"
                                                        size="small"
                                                        sx={{ display: 'flex', alignItems: 'center', paddingBottom: 2 }}
                                                    >
                                                        <PersonIcon size="small" />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            {/* Class */}
                            <Grid item xs={4}>
                                <Autocomplete
                                    options={flightClasses}
                                    defaultValue={flightClasses[0]}
                                    disableClearable
                                    size="small"
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="filled"
                                            fullWidth
                                            size="small"
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    height: 37, // Adjust height
                                                    fontSize: '0.85rem', // Reduce font size
                                                    padding: '0 8px' // Reduce horizontal padding
                                                },
                                                '& .MuiInputBase-input': {
                                                    padding: '6px 0' // Adjust input padding
                                                }
                                            }}
                                            InputProps={{
                                                ...params.InputProps,
                                                disableUnderline: true,
                                                startAdornment: (
                                                    <InputAdornment
                                                        position="start"
                                                        sx={{ display: 'flex', alignItems: 'center', paddingBottom: 2 }}
                                                    >
                                                        <FlightClassIcon size="small" />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Where From, Where To, Date */}
                    <Grid item xs={12} md={12}>
                        <Grid container spacing={1} alignItems="center">
                            {/* Where From */}
                            <Grid item xs={12} md={4}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    // size="small"
                                    placeholder="Where from?"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <RadioButtonUncheckedIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            {/* Where To */}
                            <Grid item xs={12} md={4}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    // size="small"
                                    placeholder="Where to?"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationOnIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            {/* Date */}
                            <Grid item xs={12} md={4}>
                                <TextField variant="outlined" type="date" fullWidth placeholder="Select Date" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" sx={{ backgroundColor: '#6ea8fe' }} fullWidth>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Card>
            <Grid container sx={{ mt: 2 }} alignItems="center">
                <Typography variant="h2" sx={{ mt: 2, mb: 2 }}>
                    Find cheap flights to anywhere
                </Typography>
            </Grid>

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '300px',
                    backgroundImage: `url(${MapImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 2,

                    mt: 2,
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0)', // Initially transparent
                        transition: 'background-color 0.3s ease-in-out',
                        borderRadius: 2
                    },
                    '&:hover::before': {
                        backgroundColor: 'rgba(0, 0, 0, 0.3)' // Dark overlay on hover
                    }
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#6ea8fe',
                        borderRadius: 7,
                        zIndex: 1 // Ensures the button stays above the dimmed background
                    }}
                >
                    Explore Destinations
                </Button>
            </Box>

            <Grid container sx={{ mt: 2 }} alignItems="center">
                <Typography variant="h2" sx={{ mt: 2, mb: 2 }}>
                    Useful tools to help you find the best deals
                </Typography>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 2 }} alignItems="center">
                <Grid item xs={12} md={12} alignContent={'center'}>
                    <VerticalTabs />
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2 }} alignItems="center">
                <Typography variant="h2" sx={{ mt: 2, mb: 2 }}>
                    Frequently asked questions
                </Typography>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 2 }} alignItems="center">
                <Grid item xs={12} md={12} alignContent={'center'}>
                    <UIAccordion />
                </Grid>
            </Grid>
        </Box>
    );
};

export default SamplePage;
