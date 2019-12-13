import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Table from "react-bootstrap/Table";

class MainMenu extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    itemsIterator = (items) => {
        let dataItems = [];
        for (const item of Object.entries(items)) {
            dataItems.push(
                <tr>
                    <td><a href={''}>{item}</a></td>
                </tr>
            );

        }
        return dataItems;

    };
    groupIterator = (groups) => {
        let data = [];
        for (const [group, items] of Object.entries(groups)) {
            const dataItems = this.itemsIterator(items);
            data.push(
                <Table>
                    <thead>
                    <tr>
                        <th>{group}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dataItems}
                    </tbody>
                </Table>
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
                <Card className="Card">
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
                <NavDropdown className='Dropdown' title={category} id="basic-nav-dropdown"
                             justified>
                    <Accordion className="Accordion" defaultActiveKey="0">
                        {elementData}
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
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
