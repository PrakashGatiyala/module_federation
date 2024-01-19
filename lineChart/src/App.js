import React from 'react'
import ReactDOM from 'react-dom/client';
import LineChartComponent from './Linechart';

function App() {
  return (
    <>
    {/* <div>Apps</div> */}
    <LineChartComponent />
    </>
  )
}

export default App

const rootElement = document.getElementById('lineChart-dev');

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

