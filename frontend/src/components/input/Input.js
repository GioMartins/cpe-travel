import React from 'react';
import { Form } from 'react-bootstrap';
import './input.css';

function Input({
  input, setNome, setEmail, setSenha, setConfirmEmail, setConfirmPassword, setNomeLocal, setPais, setPreco, setIntinerario,
}) {
  return (
    <div>
      {input.map((item) => {
        let fn;
        if (item.type === 'name'){
          fn = item.controlId === 'nome' ? setNome : setNome;
        }
        else if (item.type === 'email') {
          fn = item.controlId === 'email' ? setEmail : setConfirmEmail;
        }else if (item.type === 'nomeLocal') {
          fn = item.controlId === 'nomeLocal' ? setNomeLocal : setNomeLocal;
        }else if (item.type === 'pais') {
          fn = item.controlId === 'pais' ? setPais : setPais;
        }else if (item.type === 'preco') {
          fn = item.controlId === 'preco' ? setPreco : setPreco;
        }else if (item.type === 'intinerario') {
          fn = item.controlId === 'intinerario' ? setIntinerario : setIntinerario;
        } else {
          fn = item.controlId === 'senha' ? setSenha : setConfirmPassword;
        }
        return (
          <Form.Group controlId={item.controlId} className="formInput" key={item.placeholder} alt="input">
            <Form.Control size="sm" className="inputLogin" onChange={fn} type={item.type} placeholder={item.placeholder} alt="formatInput" />
          </Form.Group>
        );
      })}
    </div>
  );
}

export default Input;
