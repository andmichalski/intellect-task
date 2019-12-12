import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
    render() {
        const items = Object.keys(this.props.itemData);
        const categoryData = this.props.itemData['Kategorie'];
        let elements = [];
        let i = 0;
        for (const [element, groups] of Object.entries(categoryData)) {
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
        console.log(typeof categoryData)
        return (
            <div className="MainMenu">
                <div className="TopMenu">
                    <ul>
                        {items.map((item, index) => {
                            return <li key={index}><a href={''}>{item}</a></li>
                        })}
                    </ul>
                </div>
                <div>
                </div>
                <Accordion defaultActiveKey="0">
                    { elements }
                </Accordion>
            </div>
        );
    }
}

export default MainMenu;
