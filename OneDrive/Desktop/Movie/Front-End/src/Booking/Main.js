import { Route, Routes } from "react-router-dom"
import App from "./App"
// import SignUpPage from "./SignUpPage";
// import LoginPage from "./LoginPage";
import My from "./My";
import CreateAccount from "./CreateAccount";
import Payment from "./Payment";
import Login from "./Login";


const Main = () => {
    return(
        <>
            <Routes>
                <Route path='/createaccount' element={<CreateAccount />} />
                <Route path="/homee" element={<My />} />
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<App />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </>
    )
}

export default Main;