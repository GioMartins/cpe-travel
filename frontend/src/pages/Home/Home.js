import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Slider from "../../components/Carousel";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import "./Home.css";

function Home() {
  const nomeUsuarioCadastrado = localStorage.getItem("nomeCadastrado");
  const idUsuarioCadastrado = localStorage.getItem("idCadastrado");
  const emailUsuarioCadastrado = localStorage.getItem("emailCadastrado");
  const senhaUsuarioCadastrado = localStorage.getItem("senhaCadastrado");
  const [search, setSearch] = useState();
  const [images, setImages] = useState([]);
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const input = [
    { controlId: "email", type: "email", placeholder: "Digite o seu email" },
    { controlId: "senha", type: "password", placeholder: "Digite a sua senha" },
  ];

  const handleChange = (e) => setSearch(e.target.value.toLowerCase());
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleConfirm = () => {
    if (
      email === emailUsuarioCadastrado &&
      password === senhaUsuarioCadastrado
    ) {
      alert("Email e senha corretos!");
      history.push("cadastro-local");
    } else {
      alert("Email e senha errados!");
    }
  };

  return (
    <div>
      {!admin && (
        <div>
          <Header setAdmin={setAdmin} />
          <Slider images={images} />
          <div className="searchDiv">
            <SearchBar handleChange={handleChange} />
          </div>
          <div className="boxSubtitle">
            <h1>Guia de Destinos</h1>
            <hr className="linha" />
          </div>
          <div className="boxMessage">
            <div>
              Procure as melhores localidades e os preços mais baixos da viagem
              dos seus sonhos!
            </div>
          </div>
          <Cards search={search} images={images} />
          <Footer />
        </div>
      )}
      {admin && (
        <div className="adminPage">
          <div className="boxAdmin">
            <div className="boxContainer">
              <BiArrowBack
                className="back_button"
                type="button"
                onClick={() => setAdmin(false)}
              />
              <div className="logoAzul" />
            </div>
            <div className="titleAdmin">
              Olá {nomeUsuarioCadastrado}, confirme seu email e senha
            </div>
            {input.map((item) => {
              const change =
                item.controlId === "email"
                  ? handleChangeEmail
                  : handleChangePassword;
              return (
                <div key={item.controlId}>
                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    onChange={change}
                    className="inputAdmin"
                  />
                </div>
              );
            })}
            <Button
              className="adminButton"
              variant="primary"
              onClick={() => handleConfirm()}
            >
              Próximo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
