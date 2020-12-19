import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Box.css";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "react-bootstrap";
import Input from "../input";
import api from "../../services/api";
import RegisterLocal from "../../pages/RegisterLocal";

function Box({
  title,
  subtitle,
  nextMessage,
  nextButton,
  input,
  nome,
  email,
  password,
  senha,
  nomeLocal,
  user_id,
  pais,
  intinerario,
  preco,
  setNomeLocal,
  setPais,
  setIntinerario,
  setPreco,
  confirmEmail,
  confirmPassword,
  setNome,
  setEmail,
  setSenha,
  setConfirmEmail,
  setConfirmPassword,
}) {
  const idUsuarioCadastrado = localStorage.getItem('idCadastrado');
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const url =
    nextButton === "Cadastrar"
      ? "/img/Icones/novofundo_login.png"
      : "/img/Icones/novofundo-cadastro.png";
  const marginNextButton = nextButton === "Cadastrar" ? "50px" : "0px";

  async function loginUser() {
    const objetoBackend = {
      email,
      senha,
    };
    objetoBackend.email = email;
    objetoBackend.senha = password;
    console.log(objetoBackend);
    try {
      let usuarios = await api.get("usuario");
      let verificaLogin = 0;
      let idSaida = "";
      let nomeSaida = "";
      let emailSaida = "";
      let senhaSaida = "";
      usuarios.data.result.map((i) => {
        if (
          objetoBackend.email === i.email &&
          objetoBackend.senha === i.senha
        ) {
          idSaida = i.user_id;
          nomeSaida = i.nome;
          emailSaida = i.email;
          senhaSaida = i.senha;
          verificaLogin = 1;
          return i;
        }
      });
      if (verificaLogin === 1) {
        localStorage.setItem("nomeCadastrado", nomeSaida);
        localStorage.setItem("idCadastrado", idSaida);
        localStorage.setItem("emailCadastrado", emailSaida);
        localStorage.setItem("senhaCadastrado", senhaSaida);

        alert("Login efetuado");
        history.push("/");
      } else {
        alert("Usuario inexistente");
      }
    } catch (err) {
      alert("Erro no Login");
    }
  }
  async function create(objetoCadastro) {
    console.log(objetoCadastro);
    const objetoBackend = {
      nome,
      email,
      senha,
    };
    objetoBackend.nome = objetoCadastro.nome;
    objetoBackend.email = objetoCadastro.email;
    objetoBackend.senha = objetoCadastro.password;

    try {
      await api.post("usuario", objetoBackend);
    } catch {
      alert("Erro no cadastro!");
    }
  }
  async function createLocal(objetoCadastro){
    const objetoBackend = {
      nome,
      pais,
      preco,
      intinerario,
      user_id,
    }
    objetoBackend.nome = objetoCadastro.nomeLocal;
    objetoBackend.pais = objetoCadastro.pais;
    objetoBackend.preco = objetoCadastro.preco;
    objetoBackend.intinerario = objetoCadastro.intinerario;
    objetoBackend.user_id = objetoCadastro.idUsuarioCadastrado;
    console.log(objetoBackend);
    try {
      await api.post("local", objetoBackend);
      alert("Local Cadastrado");
    } catch {
      alert("Erro no cadastro!");
    }
  }

  const registerUser = () => {
    create({
      nome,
      email,
      password,
    });
  };
  const registerLocal = () => {
    createLocal({
      nomeLocal,
      pais,
      preco,
      intinerario,
      idUsuarioCadastrado,
    })
  }

  const handleClick = () => {
    if (nextButton === "Cadastrar") {
      const userEmail = email;
      const userPassword = password;
      loginUser();
    } else if (nextButton === "Logar") {
      const isEqualsEmails = email === confirmEmail;
      const isEqualsPasswords = password === confirmPassword;
      const alreadyRegister = users.filter((item) => item.email === email);
      if (alreadyRegister.length !== 0) {
        alert("Usuário ja cadastrado");
      } else if (isEqualsEmails && isEqualsPasswords) {
        registerUser();
        history.push("/login");
      } else alert("Email ou senha não coincidem com confirmação");
    } else {
      registerLocal();
    }
  };

  return (
    <div
      className="containerRegister"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="baseRegister">
        <div className="boxContainer">
          <BiArrowBack
            className="back_button"
            type="button"
            onClick={() => history.push("/home")}
          />
          <div className="logoAzul" />
        </div>
        <div>
          <h2 className="H2title">{title}</h2>
          <p className="text">{subtitle}</p>
          <Input
            input={input}
            setNome={setNome}
            setSenha={setSenha}
            setEmail={setEmail}
            setConfirmEmail={setConfirmEmail}
            setConfirmPassword={setConfirmPassword}
            setPais={setPais}
            setPreco={setPreco}
            setNomeLocal={setNomeLocal}
            setIntinerario={setIntinerario}
          />

          {nextButton === "Cadastrar" && (
            <div className="fundocontainer1" alt="Help">
              <Button variant="link">Esqueceu a senha?</Button>
            </div>
          )}

          {nextButton === "Logar" && (
            <p className="subtitle">
              Ao se cadastrar, você aceita os Termos de Serviço e a Política de
              Privacidade
            </p>
          )}

          <div className="next_button" style={{ marginTop: marginNextButton }}>
            <Button
              variant="primary"
              type="Proximo"
              onClick={() => handleClick()}
            >
              Próximo
            </Button>
          </div>
          <div className="fundocontainer">
            <p className="linkLogin">{nextMessage}</p>
            <Button
              variant="link"
              onClick={() => {
                if (nextButton === "Cadastrar") history.push("/cadastro");
                else history.push("/login");
              }}
            >
              {nextButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
