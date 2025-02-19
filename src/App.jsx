import {createRoot} from "react-dom/client"
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import "./App.css"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Header/>
    <Main/>
  </>
)