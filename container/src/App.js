import React from 'react'
import  Linechart from "linechart/Linechart"; 
import {store} from "store/store";
import { Provider } from 'react-redux'
import { Counter } from './Counter';

function App() {
  return (
    <>
    <Linechart />
    {/* <div>Apps1</div>  */}
    <Counter /> 
    </>
  )
}

export default App

// import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render( <Provider store={store}> <App /> </Provider> );