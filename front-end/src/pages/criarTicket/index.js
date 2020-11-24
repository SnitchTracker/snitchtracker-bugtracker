import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Barra from '../../components/Barra'

const usarEstilo = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 100,
        },
    },
    card: {
        minWidth: 275,
    },
    cardFile: {
        minWidth: '96%',
    },
    description: {
        width: '96%',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        width: '96%'
    },
    formSelect: {
        margin: theme.spacing(1),
        minWidth: '46.5%',
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
    inputLabel: {
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 300,
    },
    button: {
        margin: theme.spacing(1),
        width: '96%',
    },
}));

const CriarTicket = () => {

    const [age, setAge] = useState('');
    const classes = usarEstilo();

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Barra />
                <Container maxWidth="sm">
                    <div className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <div className={classes.root}>
                                    <form onSubmit="" noValidate autoComplete="off">
                                        <Typography component="h1" variant="h5" classname={classes.title}>
                                            Criar ticket
                                        </Typography>
                                        <TextField
                                            className={classes.formControl}
                                            label="Título"
                                            variant="outlined"
                                        />
                                        <FormControl variant="outlined" className={classes.formSelect}>
                                            <InputLabel id="demo-simple-select-outlined-label">Plataforma/Ambiente</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={age}
                                                onChange={handleChange}
                                                label="Plataforma/Ambiente"
                                            >
                                                <MenuItem value={10}>Windows</MenuItem>
                                                <MenuItem value={20}>MacOS</MenuItem>
                                                <MenuItem value={30}>Linux</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl variant="outlined" className={classes.formSelect}>
                                            <InputLabel id="demo-simple-select-outlined-label">Prioridade</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={age}
                                                onChange={handleChange}
                                                label="Prioridade"
                                            >
                                                <MenuItem value={10}>Baixo</MenuItem>
                                                <MenuItem value={20}>Médio</MenuItem>
                                                <MenuItem value={30}>Alto</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            label="Descrição"
                                            variant="outlined"
                                            multiline="true"
                                            rows="5"
                                            name="description"
                                            className={classes.description}
                                        />
                                        <Card variant="outlined" className={classes.cardFile}>
                                            <CardContent>
                                                <input
                                                    accept="image/*"
                                                    className={classes.input}
                                                    id="contained-button-file"
                                                    multiple
                                                    type="file"
                                                />
                                            </CardContent>
                                        </Card>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            type="submit"
                                            className={classes.button}
                                        >Criar</Button>
                                    </form>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </React.Fragment>
        </>
    )
}

export default CriarTicket
