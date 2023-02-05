import logo from './logo.svg';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import './App.css';
import React, { createRef, useState } from 'react';
import QRCode from 'react-qr-code'


function App() {
  const [name, setName] = useState("Burger");
  const [description, setDescription] = useState("This is a burger");
  const [type, setType] = useState("Food");
  const changeName = event => {
    setName(event.target.value)
  }
  const changeDescription = event => {
    setDescription(event.target.value)
  }
  const changeType = event => {
    setType(event.target.value)
  }
  const cardRef = createRef()
  return (
    <React.Fragment>
      <div ref={cardRef} className="card">
        <div className='cardNameWrapper'>
          <p className='cardName'> {name}</p>
        </div>
        <img className='cardImage' src="ice-wizard.png" />
        <p className='cardType'>{type}</p>
        <div style={{display: 'flex', width: '100%'}}>
          <p className='cardDescription'>{description}</p>
          <div className='cardQRCode'>
            <QRCode size="64" value="hey" />
          </div>
        </div>
      </div>
      <input type="text" value={name} onChange={changeName} />
      <br />
      <input type="text" value={type} onChange={changeType} />
      <br />
      <textarea value={description} onChange={changeDescription} />
      <br />
      <button onClick={() => exportComponentAsJPEG(cardRef)}>Download</button>
    </React.Fragment>
  );
}

export default App;
