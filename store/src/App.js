import React from 'react'
import ReactDOM  from "react-dom/client";
import { store } from './store'
import { Provider } from 'react-redux'
import { Counter } from './Counter';

function App() {
  return (
    <>
    <div>Name: store App</div>
    <Counter />
    </>

  )
}

export default App

const root = ReactDOM.createRoot(document.getElementById('store-root'));
root.render( <Provider store={store}> <App /> </Provider>)
