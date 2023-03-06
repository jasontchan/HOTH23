/*
import React from 'react'
import App from "./App"
import ReactDOM from 'react-dom/client'

function f() {
if(typeof document !== 'undefined')
{
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
}
}

export default f;
*/

import React from "react"

import Home from "./posts/home"
import FirstPost from "./posts/first-post"

import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';

function App()
{
  if(typeof document !== 'undefined')
  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="first-post" element={<FirstPost />} />
      </Routes>
    </BrowserRouter>
    
  );
}
else
{
  return (<Home/>);
}
}

export default App;

