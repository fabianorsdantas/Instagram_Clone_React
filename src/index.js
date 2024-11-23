import ReactDOM from "react-dom"
import { NavBar } from "./components/NavBar"
import { Corpo } from "./components/Corpo"

function App() {
    return (
        <>
            <NavBar src="../assets/logo.svg"/>
            <Corpo />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))