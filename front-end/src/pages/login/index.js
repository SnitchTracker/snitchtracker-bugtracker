import React from 'react'
import logo from '../../components/img/logo.png'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import './index.css'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import ApisUser from '../apis/user';

const Login = () => {

    async function onSubmit(value) {
        value.preventDefault();
        let dadosFormFormado = {};
        let pegarDadoForm = new FormData(value.target);
        pegarDadoForm.forEach((valor, chave) => {
            dadosFormFormado[chave] = valor;
        });

        try {
            const respostaValidacao = await ApisUser.prototype.validarLoginUser(dadosFormFormado);
            let {token, user} = respostaValidacao.data;
            let {name, email, createdAt} = user;

            if (respostaValidacao.statusText === "OK") {
                localStorage.setItem('token', JSON.stringify({
                    token,
                    user: {
                        name,
                        email,
                        createdAt
                    }
                }))
                console.log(respostaValidacao)
                window.location.href = '/dashboard';
            } else {
            }
        }
        catch (error) {
                console.log("Erro ao Conectar", error)
        }
    }
    return (
        <>
            <Container fixed className="formLogin">
                <form onSubmit={onSubmit}>
                    <picture className="logoContainer">
                        <img className="logo" src={logo} alt='Logo SnitchTracker com simbolo de átomo em azul' />
                    </picture>
                    <div className="campo">
                        <TextField id="standard-basic" name="email" label="E-mail" />
                    </div>
                    <div className="campo">
                        <TextField id="standard-basic" name="password" type="password" label="Senha" />
                    </div>
                    <div className="button">
                        <Button type="submit" variant="contained" color="primary">
                            Entrar
                    </Button>
                        <Link to='/cadastrar'>
                            <Button variant="outlined">
                                Cadastrar-se
                    </Button>
                        </Link>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Login