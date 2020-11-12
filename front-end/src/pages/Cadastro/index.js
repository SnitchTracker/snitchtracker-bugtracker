import React from 'react'
import logo from '../../components/img/logo.png'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import './index.css'
import TextField from '@material-ui/core/TextField'

const Cadastro = () => {
    return (
        <>
            <Container fixed className="formLogin">
                <picture className="logoContainer">
                    <img className="logo" src={logo} alt='Logo SnitchTracker com simbolo de átomo em azul' />
                </picture>
                <div className="campo">
                    <TextField id="standard-basic" label="Nome Completo" />
                </div>
                <div className="campo">
                    <TextField id="standard-basic" label="E-mail" />
                </div>
                <div className="campo">
                    <TextField id="standard-basic" type="password" label="Senha" />
                </div>
                <div className="campo">
                    <TextField id="standard-basic" type="password" label="Confirme a senha" />
                </div>
                <div className="button">
                    <Button variant="contained" color="primary">
                        Cadastrar
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default Cadastro