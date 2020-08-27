import React from 'react'
import './Sidenav.css'
import { Accordion } from 'react-bootstrap'
import axios from 'axios'


class Sidenav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: []
        };
    }
    componentDidMount() {
        axios.get(`http://localhost:8000/`)
            .then(res => {
                this.setState({
                    details: res.data
                })
            })
    }

    render() {
        let drawerClasses = 'side-drawer'
        if (this.props.show) {
            drawerClasses = 'side-drawer open'
        }
        const { details } = this.state
        const menList = details.length ? (
            details.map(detail => {
                return (
                    detail.section === "Men" ? (
                        <a href={'/' + detail._id} style={{ textDecoration: 'none' }}>
                            <li>{detail.items}</li>
                        </a>
                    ) : ( null )
                )
            })
        ) : (
                <p>Nothing to display</p>
            )
        const womenList = details.length ? (
            details.map(detail => {
                return (
                    detail.section === "Women" ? (
                        <a href={'/' + detail._id} style={{ textDecoration: 'none' }}>
                            <li>{detail.items}</li>
                        </a>
                    ) : ( null )
                )
            })
        ) : (
                <p>Nothing to display</p>
            )
        const kidsList = details.length ? (
            details.map(detail => {
                return (
                    detail.section === "Kids" ? (
                        <a href={'/' + detail._id} style={{ textDecoration: 'none' }}>
                            <li>{detail.items}</li>
                        </a>
                    ) : ( null )
                )
            })
        ) : (
                <p>Nothing to display</p>
            )

        return (
            <nav className={drawerClasses}>
                <ul>
                    <Accordion className="accordian" style={{ textDecoration: 'none' }} defaultActiveKey="null">
                        <Accordion.Toggle as="h4" eventKey="0">
                            Men</Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ul>
                                {menList}
                            </ul>
                        </Accordion.Collapse>
                        <hr />
                    {/* </Accordion>
                    <Accordion className="accordian" style={{ textDecoration: 'none' }} defaultActiveKey="null"> */}
                        <Accordion.Toggle as="h4" eventKey="1">
                            Women</Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <ul>
                                {womenList}
                            </ul>
                        </Accordion.Collapse>
                        <hr />
                    {/* </Accordion>
                    <Accordion className="accordian" style={{ textDecoration: 'none' }} defaultActiveKey="null"> */}
                        <Accordion.Toggle as="h4" eventKey="2">
                            Kids</Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <ul>
                                {kidsList}
                            </ul>
                        </Accordion.Collapse>
                        <hr />
                    </Accordion>
                </ul>
            </nav>
        )
    }
}

export default Sidenav;