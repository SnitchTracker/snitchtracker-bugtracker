import React, { useState } from 'react'
import { Card, CssBaseline, Paper } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import Barra from '../../components/Barra'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const usarEstilo = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 100,
        },
    },
    space: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 300,
    },
    paper: {
        padding: theme.spacing(2),
    },
    high: {
        color: 'white',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#ce364b',
        fontWeight: 600,
    },
    medium: {
        color: 'white',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#F0DC28',
        fontWeight: 600,
    },
    low: {
        color: 'white',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#42c133',
        fontWeight: 600,
    },
    titleSecondary: {
        textAlign: 'center',
        fontWeight: '600'
    },
    platform: {
        textAlign: 'center',
    },
}))


const ViewTicket = () => {



    const [priority, setPriority] = useState('alta');

    const classes = usarEstilo();

    const Prioritys = () => {
        return (
            <>
                {priority === 'alta' &&
                    <Typography className={classes.high}>Alta</Typography>}
                {priority === 'média' &&
                    <Typography className={classes.medium}>Média</Typography>}
                {priority === 'baixa' &&
                    <Typography className={classes.low}>Baixa</Typography>}
            </>
        )
    }

    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Barra />
                <Container maxWidth="sm">
                    <div className={classes.space}>
                        <Card>
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom variant="h6">Título</Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Aaaah deu um bug aqui, me ajude
                                </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography className={classes.titleSecondary}>Prioridade:</Typography>
                                        {/* {priority === 'alta' &&
                                            <Typography className={classes.high}>Alta</Typography>}
                                        {priority === 'média' &&
                                            <Typography className={classes.medium}>Média</Typography>}
                                        {priority === 'baixa' &&
                                            <Typography className={classes.low}>Baixa</Typography>} */}
                                        <Prioritys />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography className={classes.titleSecondary}>Plataforma:</Typography>
                                        <Typography className={classes.platform}>Windows</Typography>
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid
                                    container
                                    xs={12}
                                >
                                    <Typography gutterBottom variant="h6">Descrição</Typography>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>Anim mollit cupidatat excepteur labore in ipsum do laborum minim duis pariatur proident do. Irure et sint commodo Lorem aliqua magna nostrud aliquip elit enim exercitation irure. Excepteur deserunt aliquip quis pariatur fugiat eu Lorem qui incididunt mollit consectetur.

                                        Eiusmod aute irure ea do nisi fugiat nisi ea sit ad ex consequat incididunt ea. Lorem duis consequat minim elit et in eu exercitation eu fugiat laborum consequat sit. Cupidatat ea tempor fugiat elit.

Culpa nostrud sit ullamco veniam minim ut ea ad. Cupidatat quis Lorem occaecat nulla ullamco. Ut ullamco laborum velit quis duis proident voluptate consequat cillum deserunt veniam occaecat minim duis.</Paper>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </React.Fragment>
        </>
    )
}

export default ViewTicket
