import {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './ContactForm.css';

export default class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    setName = (e) => {
        const name = e.target.value;
        this.setState({
            ...this.state,
            name
        })
    };

    setEmail = (e) => {
        const email = e.target.value;
        this.setState({
            ...this.state,
            email
        })
    };

    setMessage = (e) => {
        const message = e.target.value;
        this.setState({
            ...this.state,
            message
        });
    };

    submit = (e) => {
        console.log(this.state);
    };

    render = () => {
        return (
            <div id="contact-form">
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={this.state.name} onChange={this.setName} type="text" placeholder="John Doe" required />
                        <Form.Text className="text-muted">
                            Please specify the name with whom we shall address you!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control value={this.state.email} onChange={this.setEmail} type="email" placeholder="john.doe@example.com" required />
                        <Form.Text className="text-muted">
                            The E-Mail address on which we will reply, <strong>won't be shared with any third parties!</strong>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="textarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control value={this.state.message} onChange={this.setMessage} as="textarea" rows={5} placeholder="message" />
                        <Form.Text className="text-muted">
                            Place your message here, <strong>won't be shared with any third parties!</strong>
                        </Form.Text>
                    </Form.Group>
                    <Button onClick={this.submit}>Contact</Button>
                </Form>
            </div>
        );
    };

}