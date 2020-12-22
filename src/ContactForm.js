import {Component} from 'react';
import Form from 'react-bootstrap/Form'
import './ContactForm.css';

export default class ContactForm extends Component {

    render = () => {
        return (
            <div id="contact-form">
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" />
                        <Form.Text className="text-muted">
                            Please specify the name with whom we shall address you!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="john.doe@example.com" />
                        <Form.Text className="text-muted">
                            The E-Mail address on which we will reply, <strong>won't be shared with any third parties!</strong>
                        </Form.Text>
                    </Form.Group>
                    {/* Phone Number, Birthdate, Message (Text Area), Country (Selection) */}
                </Form>
            </div>
        );
    };

}