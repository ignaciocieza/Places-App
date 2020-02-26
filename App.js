import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/api/store';
import { initSQLite } from './src/api/db/SQLite';
import Main from './src/ui/layouts/Main';

export default function App() {
  //Error (illegal invocation) -> Da el error en web.
  initSQLite('CREATE')
    .then((succ) => console.log("Se inicializo DB",succ))
    .catch((err) => console.log("Error al inicializar DB",err));

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
