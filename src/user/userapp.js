import { HashRouter, Routes, Route } from "react-router-dom";

import Mylogin from "./login";
import PublicHeader from "./header";
import Myhome from "./home";

const UserModule = () =>{
    return(
        <HashRouter>
            <PublicHeader/>

            <Routes>
                <Route exact path="/" element={ <Myhome/> }/>
                <Route exact path="/login" element={ <Mylogin/> }/>
            </Routes>

        </HashRouter>
    )
}

export default UserModule;