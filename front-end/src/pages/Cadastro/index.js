import React from 'react'
import logo from '../../components/img/logo.png'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import './index.css'
import TextField from '@material-ui/core/TextField'
import ApisUser from '../apis/user'

const Cadastro = () => {

    const cadastrar = async (e) => {
        e.preventDefault()

        let formulario = document.querySelector('.form')
        let {name, email, password, confirmPassword} = formulario

        name = name.value
        email = email.value
        password = password.value
        confirmPassword = confirmPassword.value

        if(password !== confirmPassword) {
            alert('As senhas não coincidem.')
        } else {
            await ApisUser.prototype.cadastrarUser({name, email, password})
            alert('Cadastro realizado com sucesso!')
        }

        console.log(name, email, password)
    }

    // async function onSubmit(value) {
    //     value.preventDefault();
    //     let dadosFormFormado = {};
    //     let pegarDadoForm = new FormData(value.target);
    //     pegarDadoForm.forEach((valor, chave) => {
    //         dadosFormFormado[chave] = valor;
    //     });

    //     try {
    //         const respostaRegistro = await ApisUser.prototype.cadastrarUser(dadosFormFormado);
    //         console.log(respostaRegistro);
    //         // if (respostaRegistro.status == "success") {
    //         //     console.log('Conta criada')

    //         // } else {
    //         //     console.log('Erro ao criar')

    //         //     // await shelf.setState({ carregando: false, erro: respostaRegistro.statusMotivo })
    //         // }
    //     } catch (error) {
    //         console.log("Deu ruim", error)
    //     }
    // }


    return (
        <>
            <form className="form" onSubmit={cadastrar}>
                <Container fixed className="formLogin">
                    <picture className="logoContainer">
                        <img className="logo" src={logo} alt='Logo SnitchTracker com simbolo de átomo em azul' />
                    </picture>
                    <div className="campo">
                        <TextField id="standard-basic" name="name" label="Nome Completo" />
                    </div>
                    <div className="campo">
                        <TextField id="standard-basic" name="email" label="E-mail" />
                    </div>
                    <div className="campo">
                        <TextField id="standard-basic" name="password" type="password" label="Senha" />
                    </div>
                    <div className="campo">
                        <TextField id="standard-basic" name="confirmPassword" type="password" label="Confirme a senha" />
                    </div>
                    <div className="button">
                        <Button type="submit" variant="contained" color="primary">
                            Cadastrar
                    </Button>
                    </div>
                </Container>
            </form>
        </>
    )
}

export default Cadastro