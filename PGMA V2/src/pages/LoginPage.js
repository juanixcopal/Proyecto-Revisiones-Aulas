import React, { Component }from "react";
import '../styles/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import md5 from "md5";
import Cookies from 'universal-cookie'

const baseUrl="http://localhost:3002/usuarios";
const cookies = new Cookies;

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length > 0){
                var respuesta = response[0];
                cookies.set('id', respuesta.id, {path: '/'})
                cookies.set('nombre', respuesta.nombre, {path: '/'})
                cookies.set('apellido1', respuesta.apellido1, {path: '/'})
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido1}`)
                window.location.href='./plantas'
            }else{
                alert('El usuario o contraseña son incorrectos')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }


    render(){
        return(
            <div className="containerPrincipal">
            <div className="containerSecundario">
                <div className="form-group">
                    <label>Usuario: </label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Contraseña: </label>
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <br />
                    <button className="btn btn-primary" onClick={()=> this.iniciarSesion()} >Iniciar Sesión</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Login