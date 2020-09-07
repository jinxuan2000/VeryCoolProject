import React from 'react';
import '../App.css';
import '../Styles/NavBar.css';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CourseNode from './TreeComponents/CourseNode';

export default class NavigationBar extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            majors:["Commerce","Computer Science","Mathematics","Psychology",null],
            selectedMajor:null,
        }
    }

    handleSelectMajor = (index) => {
        if (this.state.selectedMajor != this.state.majors[index]) {
            this.setState({selectedMajor:this.state.majors[index]});
            //console.log("Changed major: ",this.state.majors[index]);
        }
    }

    render() {

        const itemStyle = "- ";

        return (
            <div>
                <Navbar className="Appbar-custom" bg="light" expand="lg">
                <Navbar.Brand className="Appbar-header">Development</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Button className="Appbar-component" onClick={ e => this.handleSelectMajor(-1)}>
                            {itemStyle}Reset</Button>
                        <Button className="Appbar-component" onClick={ e => this.handleSelectMajor(0)}>
                            {itemStyle}{this.state.majors[0]}</Button>
                        <Button className="Appbar-component" onClick={ e => this.handleSelectMajor(1)}>
                            {itemStyle}{this.state.majors[1]}</Button>
                        <Button className="Appbar-component" onClick={ e => this.handleSelectMajor(2)}>
                            {itemStyle}{this.state.majors[2]}</Button>
                        <Button className="Appbar-component" onClick={ e => this.handleSelectMajor(3)}>
                            {itemStyle}{this.state.majors[3]}</Button>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

                <Navbar className="Appbar-custom" bg="light" expand="lg">
                    <p>Current Selection: {this.state.selectedMajor}</p>
                </Navbar>

                <div className="container">
                    { this.state.selectedMajor != null ?
                        <div>
                            <CourseNode name={this.state.selectedMajor}/>
                            <CourseNode name={this.state.selectedMajor}/>
                            <CourseNode name={this.state.selectedMajor}/>
                            <CourseNode name={this.state.selectedMajor}/>
                            <CourseNode name={this.state.selectedMajor}/>
                        </div>
                        : null
                    }
                </div>

            </div>
            
        );

    }

}
