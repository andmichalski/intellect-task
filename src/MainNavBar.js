import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import MainMenu from "./MainMenu";

class MainNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {context: this.props.menuData.items[Object.keys(this.props.menuData.items)[0]]};
    }

    getContext = (mainTopic) => {
        this.setState({context: this.props.menuData.items[mainTopic]});
    };

    mainMenuIterator = () => {
        let mainTopics = [];
        for (const mainTopic of Object.keys(this.props.menuData.items)) {
            mainTopics.push(
                <NavLink eventKey={mainTopic}>{mainTopic}</NavLink>
            )
        }
        return mainTopics;
    };

    render() {
        const logoPath = this.props.menuData['logoPath'];
        const mainTopics = this.mainMenuIterator();
        return (
            <div>
                <div className="NavBar">
                    <div className="MainNavBar">
                        <img src={require(`${logoPath}`)} className="App-logo" alt="logo"/>
                        <Nav onSelect={selectedKey => this.getContext(selectedKey)}
                             className="mr-auto" navbar>
                            {mainTopics}
                        </Nav>
                    </div>
                </div>
                <div className="Menu">
                    <MainMenu itemData={this.state.context}/>
                </div>
            </div>
        );
    }
}

export default MainNavBar;
