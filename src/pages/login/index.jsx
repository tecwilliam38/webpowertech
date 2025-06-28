import React, { useState } from 'react'
import "./style.css"
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import iconLogo from '../../assets/iconlogo.png'

export default function LoginScreen() {

    const navigate = useNavigate();

    const [showPpass, setShowPass] = useState("password");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function HandleLogin() { }

    const [msg, setMsg] = useState("");

    return (
        <>
            <div className="bgImage">
                <div className='row'>
                    <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
                        <form className="form-signin">
                            <div className="px-4 pb-2 ">
                                {/* <h5 className="mb-4">Gerencie seus agendamentos de forma descomplicada.</h5>
                                <h5 className="mb-4 text-dark">Acesse sua conta</h5> */}
                                <div className="mt-4">
                                    <img src={iconLogo} className="logo w-100 mt-4" />
                                    <input type="email" placeholder="E-mail"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mt-2">
                                    <input type={showPpass} placeholder="Senha"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mt-3 mb-5">
                                    <button onClick={HandleLogin} className="btn btn-primary w-100" type="button">Login</button>
                                </div>

                                {
                                    msg.length > 0 &&
                                    <div className="alert alert-danger" role="alert">
                                        {msg}
                                    </div>
                                }
                                <div>
                                    <span className="me-1">Não tenho uma conta.</span>
                                    <Link to="/register" className="ml-2">Criar agora!</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
