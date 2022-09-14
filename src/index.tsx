import React from 'react';
import ReactDOM from 'react-dom/client';
import { UrnaEletronica } from './components/Urna';
import { Global } from './style/Global';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Global />
    <UrnaEletronica />
  </>
);