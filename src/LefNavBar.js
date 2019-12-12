import React, { Component } from 'react';
import logo from './logo.svg';

class LeftNavBar extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.menuData)
    }
    render() {
        const menuItems = Object.keys(this.props.menuData.items);
        const logoPath =  this.props.menuData['logoPath'];
        console.log(logoPath)
        return (
            <div>
                <div className="LeftNavBar">
                    <img src={require(`${logoPath}`)} className="App-logo" />
                    <ul>
                        {menuItems.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default LeftNavBar;
