//tener react en el scope
import React from "react"
//tener react dom en el scope
import ReactDOM from "react-dom"

import App from "./components/App"

//crear un componente
// const App =() => "hola mundo"

//renderizar la app
ReactDOM.render(<App/>, document.getElementById('root'))