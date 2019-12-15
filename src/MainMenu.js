import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import NavLink from "react-bootstrap/NavLink";

class MainMenu extends Component {
    constructor(props) {
        super(props);
    }

    state = {};
    toggleMenu = (category, categoryId) => {
        this.setState(({menuOpen}) => ({
            menuOpen: !menuOpen,
            category: category,
            categoryId: categoryId
        }))
    };


    itemsIterator = (items) => {
        let dataItems = [];
        for (const item of items) {
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

    arrow = (categoryId) => {
        if (this.state.menuOpen && this.state.categoryId === categoryId) {
            return (
                <div className='arrow-container'>
                    <div className="arrow-down"></div>
                </div>
            )
        }
    };

    closeMenu = () => {
        this.setState(({menuOpen}) => ({
            menuOpen: !menuOpen,
        }))

    };

    categoriesIterator = () => {
        let categories = [];
        let categoriesNames = [];
        let elementsInCategory = [];
        let categoryId = 0;
        const selectedStyle = {backgroundColor: "white"};
        for (const [category, elements] of Object.entries(this.props.itemData)) {
            elementsInCategory.push([this.elementsIterator(elements)]);
            categoriesNames.push(category);
            const id = categoryId;

            categories.push(
                <Nav className="mr-auto" activeKey={category} navbar>
                    <NavLink active={this.state.menuOpen}
                             onClick={() => this.toggleMenu(category, id)}
                             className={"dropdown-toggle nav-link"}
                             style={this.state.menuOpen ? this.state.categoryId === categoryId ? selectedStyle : {} : {}}>
                        {category}
                        {this.arrow(categoryId)}
                    </NavLink>
                </Nav>
            );
            categoryId++;
        }
        return [categoriesNames, categories, elementsInCategory];
    };

    render() {
        const categories = this.categoriesIterator()
        return (
            <div className="MainMenu">
                <div className="TopMenu">
                    <Navbar classname='ml-auto"' expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            {categories[1]}
                        </Navbar.Collapse>
                        <Button onClick={() => this.closeMenu()}>X</Button>
                    </Navbar>
                </div>
                {this.state.menuOpen &&
                <Accordion className="Accordion" defaultActiveKey="0">
                    {categories[2][categories[0].indexOf(this.state.category)]}
                </Accordion>
                }
            </div>
        );
    }
}

export default MainMenu;
