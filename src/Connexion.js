import React from 'react'
import Appli from './App'
import './css/Connexion.css'
class App extends React.Component {

    constructor() {
        super();
        mess
    }

    render() {
        return (
            <div>
                <React.StrictMode>
                    <Appli />
                </React.StrictMode>
                <div id={"Connect"}>

                    <h1> Connexion </h1>
                    <form action={'/connexion'} method={"post"}>
                        <label> Nom d'utilisateur :</label>
                        <input type={'text'} name={"pseudo"} id={"pseudo"}/>
                        <br/><br/>
                        <label> Mot de passe :</label>
                        <input type={"text"} name={"password"} id={"password"}/>
                        <br/><br/>
                        <input type={"submit"} value={"Se connecter"}/>
                    </form>
                    {}
                </div>


            </div>

        )
    }

}
export default App