import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class MainMenu extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    itemsIterator = (items) => {
        let dataItems = [];
        let i = 0;
        for (const item of Object.entries(items)) {
            dataItems.push(
               <li key={i}><a href={''}>{item}</a></li>
            );
            i++;

        }
        return dataItems;

    };
    groupIterator = (groups) => {
        let data = [];
        for (const [group, items] of Object.entries(groups)) {
            const dataItems = this.itemsIterator(items);
            data.push(
                <ul>
                   <li><h3>{group}</h3></li>
                    {dataItems}
                </ul>
            )
        }
        return data;
    };

    elementsIterator = (categories) => {
        let elements = [];
        let i = 0;
        for (const [element, groups] of Object.entries(categories)) {
            const groupData = this.groupIterator(groups);
            elements.push(
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                            {element}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i}>
                        <Card.Body>
                            {groupData}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            );
            i++;
        }
        return elements;
    };

    categoriesIterator = () => {
       let categories = [];
        for (const [category, elements] of Object.entries(this.props.itemData)) {
            const elementData = this.elementsIterator(elements);
            categories.push(
                <NavDropdown title={category} id="basic-nav-dropdown">
                    <Accordion defaultActiveKey="0">
                        { elementData }
                    </Accordion>
                </NavDropdown>
            )
        }
        return categories;
    };

    render() {
        const categories = this.categoriesIterator()
        return (
            <div className="MainMenu">
                <div className="TopMenu">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                {categories}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default MainMenu;
