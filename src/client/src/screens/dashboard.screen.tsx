import React, { Fragment } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { RouteComponentProps } from '@reach/router';

const drawerWidth = 240;


const DrawerListItems: {[Key in ViewsType]: JSX.Element} = {
    'Upload': <CloudUploadIcon />,
    'Starred': <MailIcon />,
    'Trash': <InboxIcon />
}

type ViewsType = 'Upload' | 'Starred' | 'Trash'

interface DashboardScreenProps extends RouteComponentProps { }


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

export const DashboardScreen = (props: DashboardScreenProps) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [view, setView] = React.useState<ViewsType>('Upload');
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleItemClick = (view: ViewsType) => {
        setView(view)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        KHI LABS DASHBOARD
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <DrawerListComponent onClick={handleItemClick} />
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                { view === 'Upload' &&
                    <View1 />
                }
                {   view === 'Starred' && 
                    <View2 />
                }
                {   view === 'Trash' && 
                    <View3 />
                }
            </main>
        </div>
    );
}



type DrawerListComponentType = {
    onClick: (view: ViewsType) => void
}

// this is to prevent type widening from string literal to string
const constructMapOfKeys = () => {
    const keys = Object.keys(DrawerListItems)
    const ViewsTypesKeysArray: ViewsType[] = []
    keys.forEach((key: string) => {
           ViewsTypesKeysArray.push(key as ViewsType) 
    });
    return ViewsTypesKeysArray
}


const DrawerListItemsKeys  = constructMapOfKeys()


const DrawerListComponent = (props: DrawerListComponentType) => (
    <>
        {DrawerListItemsKeys.map((view: ViewsType) => {
            return (
                <ListItem button key={view} onClick={() => props.onClick(view)}>
                    <ListItemIcon>
                        {DrawerListItems[view]}
                    </ListItemIcon>
                    <ListItemText primary={view} />
                </ListItem>
            )
        })
        }
    </>
)

const View1 = () => {
    return  <Typography paragraph>Upload component </Typography>
}

const View2 = () => {
    return  <Typography paragraph>Starred component </Typography>
}

const View3 = () => {
    return  <Typography paragraph>Trash compoennt </Typography>
}