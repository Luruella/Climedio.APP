import { Link } from 'react-router-dom';
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import UsuarioApi from "../../services/UsuarioApi";
import style from "./Login.module.css";
import Logo from "../../assets/LogoClimedio.png"

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function Entrar() {
        debugger
        try {
            const id = await UsuarioApi.verificarLogin(email, senha);
            localStorage.setItem('usuarioId', id);
            navigate('/');
        } catch (error) {
        }
    }

    return (
            <div className={style.conteudo} >
                <div className={style.conteudo_esquerda} >
                </div>
                <div className={style.conteudo_login}>
                    <img src={Logo} alt="logo" className={style.imagem_logo} />
                    <Form onSubmit={(e) => { e.preventDefault(); Entrar() }}>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Control className={style.campos} type="email" placeholder="e-mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formSenha" className="mb-3">
                            <Form.Control className={style.campos} type="password" placeholder="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className={style.botao_entrar}>
                            Entrar
                        </Button>
                    </Form>
                    {/* <Link to="/EsqueciSenha" className={style.esqueci_minha_senha}>esqueci minha senha</Link> */}


                </div>
                <div className={style.conteudo_direita}>
                </div>
            </div>
    )
}