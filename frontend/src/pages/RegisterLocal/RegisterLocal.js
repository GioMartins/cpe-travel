import React, {useState} from 'react';
import Box from '../../components/Box';

function RegisterLocal() {
  const [nomeLocal, setNomeLocal] = useState();
  const [pais, setPais] = useState();
  const [preco, setPreco] = useState();
  const [intinerario, setIntinerario] = useState();
  const handleChangeNomeLocal = (e) => setNomeLocal(e.target.value);
  const handleChangePais = (e) => setPais(e.target.value);
  const handleChangePreco = (e) => setPreco(e.target.value);
  const handleChangeIntinerario = (e) => setIntinerario(e.target.value);
  const input = [
    { controlId: 'nomeLocal', type: 'nomeLocal', placeholder: 'Digite o nome do local' },
    { controlId: 'pais', type: 'pais', placeholder: 'Digite o país de origem' },
    { controlId: 'preco', type: 'preco', placeholder: 'Digite o preço' },
    { controlId: 'itinerario', type: 'intinerario', placeholder: 'Digite o itinerario do local' },
  ];

  return (
    <Box
      nomeLocal={nomeLocal}
      pais={pais}
      preco={preco}
      intinerario={intinerario}
      setNomeLocal={handleChangeNomeLocal}
      setPais={handleChangePais}
      setPreco={handleChangePreco}
      setIntinerario={handleChangeIntinerario}
      title="Cadastro de Local"
      subtitle="Preencha os campos abaixo para o cadastro do local desejado"
      nextMessage=""
      nextButton=""
      input={input}
    />
  );
}

export default RegisterLocal;
