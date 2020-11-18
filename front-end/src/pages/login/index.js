import React from 'react'
import logo from '../../components/img/logo.png'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import './index.css'
import TextField from '@material-ui/core/TextField'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <>
            <Container fixed className="formLogin">
                <picture className="logoContainer">
                    <img className="logo" src={logo} alt='Logo SnitchTracker com simbolo de átomo em azul' />
                </picture>
                <div className="campo">
                    <TextField id="standard-basic" label="E-mail" />
                </div>
                <div className="campo">
                    <TextField id="standard-basic" type="password" label="senha" />
                </div>
                <div className="button">
                    <Button variant="contained" color="primary">
                        Entrar
                    </Button>
                    <Button variant="outlined">
                        <Link to='/cadastrar' >
                        Cadastrar-se
                        </Link>
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default Login