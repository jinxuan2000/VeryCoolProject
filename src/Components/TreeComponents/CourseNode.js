import React from 'react';
import '../../App.css';
//import {Card,CardBody} from 'react-bootstrap';
import {Card,CardBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class CourseNode extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            name:this.props.name,
        }
    }

    render() {

        return (
            <div>
                <Card>
                    <CardBody>

                    <h6>{this.props.name}
                    </h6>

                    </CardBody>
                </Card>
                <br/>
            </div>
            
        );

    }

}
