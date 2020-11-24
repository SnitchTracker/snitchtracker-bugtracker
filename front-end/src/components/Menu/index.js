import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PrimarySearchAppBar from '../../components/Barra';
import CustomizedTables from '../../components/Grid';
import logo from '../img/logomenor.png';
import './index.css';
import AddIcon from '@material-ui/icons/Add';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import ContactSupportSharpIcon from '@material-ui/icons/ContactSupportSharp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        <PrimarySearchAppBar />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={`${classes.drawer} menu-lateral`}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className='logo-container'>
                    <img className='logo' src={logo} />
                </div>
                <Divider />
                <List>
                    {['Criar chamado', 'Criar Relatorio', 'Ir para'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index === 0 ? <AddIcon /> : index ===1 ? <CreateIcon /> : <DirectionsRunIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Configurações', 'Informações', 'Contatos'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{ index === 0 ?<PermDataSettingIcon /> : index === 1 ?<ContactSupportSharpIcon /> : <AddIcCallIcon /> }</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
                <main className={`${classes.content} corpo`}  >
                    <div className={classes.toolbar} />
                    <Typography paragraph>
                        <CustomizedTables />
                    </Typography>
                    <Typography paragraph>
                    <button className = 'criar'>Criar chamado</button>
                    </Typography>
                </main>
            </div>
    );
}