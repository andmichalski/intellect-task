import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from "./MainNavBar";
import menuData from './menu_data.json'

class App extends Component {
    constructor(props) {
        super(props);
        this.menuData = menuData.menu;
    }

    render() {
        return (
            <div className="App">
                <MainNavBar menuData={this.menuData}/>
            </div>
        );
    }
}

export default App;
