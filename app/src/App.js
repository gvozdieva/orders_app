import React, {useState} from 'react';
import './App.css';
import s from './app.module.css'
import Orders from './orders/Orders'

function App() {
  const [value, setValue] = useState('')
  return (
    <>
      <div className={s.conteiner}>
        <h1>ЗАКАЗЫ</h1>
        <div className={s.form}>
          <p>Фильтр:</p>
          <input value={value} onChange={(event) => setValue(event.target.value)} />
        </div>
        <Orders value={value} />
      </div>
    </>
  );
}

export default App;
