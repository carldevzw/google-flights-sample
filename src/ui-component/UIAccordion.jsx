// material-ui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project imports
import Accordion from 'ui-component/extended/Accordion';

import { gridSpacing } from 'store/constant';

// assets
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import DomainTwoToneIcon from '@mui/icons-material/DomainTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';

// accordion data
const basicData = [
    {
        id: 'basic1',
        title: 'FAQ #1',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        id: 'basic2',
        title: 'FAQ #2',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        id: 'basic3',
        title: 'FAQ #3',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    }
];

const customContentData = [
    {
        id: 'basic1',
        defaultExpand: true,
        title: (
            <>
                <FaceTwoToneIcon fontSize="small" color="primary" sx={{ mr: 0.5 }} />
                <Typography variant="subtitle1" color="primary">
                    Profile
                </Typography>
            </>
        ),
        content: (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">Joseph William</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </Grid>
            </Grid>
        )
    },
    {
        id: 'basic2',
        title: (
            <>
                <DomainTwoToneIcon fontSize="small" color="error" sx={{ mr: 0.5 }} />
                <Typography variant="subtitle1" color="error">
                    Address
                </Typography>
            </>
        ),
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        id: 'basic3',
        title: (
            <>
                <MonetizationOnTwoToneIcon fontSize="small" color="secondary" sx={{ mr: 0.5 }} />
                <Typography variant="subtitle1" color="secondary">
                    Account Info
                </Typography>
            </>
        ),
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    }
];

// =============================|| UI ACCORDION ||============================= //

const UIAccordion = () => (
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={12}>
            <Accordion data={basicData} />
        </Grid>
      
    </Grid>
);

export default UIAccordion;
