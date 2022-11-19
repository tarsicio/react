import ReactDOM from 'react-dom'
import Menu from './menu/Menu'
import App from './side/App'
//import App from './api/Api'
import Footer from './footer/Footer'
import './index.css'

ReactDOM.render(<Menu />, document.getElementById('menu'))
ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Footer />, document.getElementById('footer'))