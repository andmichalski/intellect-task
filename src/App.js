import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftNavBar from "./LefNavBar";
import MainMenu from "./MainMenu";
import menuData from './menu_data.json'

class App extends Component {
    constructor(props) {
        super(props);
        this.menuData = menuData.menu;
    }

    render() {
        return (
            <div className="App">
                <div className="NavBar">
                    <LeftNavBar menuData={this.menuData}/>
                </div>
                <div className="Menu">
                    <MainMenu itemData={this.menuData.items['Nasza oferta']}/>
                </div>
            </div>
        );
    }
}

export default App;
