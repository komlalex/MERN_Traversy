import { useState } from "react";
import FormContainer from "../src/components/FormContainer";
import { Button, Form, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";

function RegisterScreen () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async(e) => {
        e.preventDefault();
        console.log("Register")
    }

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <Form onSubmit = {submitHandler}>

            <Form.Group controlid = "name" className="my-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
            type="text"
            placeholder = "Enter name"
            value = {name}
            onChange = {e => setName(e.target.value)}
            />
            </Form.Group>


            <Form.Group controlid = "email" className="my-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                value = {email}
                onChange = {e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlid="pasword" className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter password"
                value ={password}
                onChange= {e => setPassword(e.target.value)}/>
            </Form.Group>

            <Button type="submit" variant="primary">Sign Up</Button>

            <Row className="py-3">
                <Col>
                Already Have an Account? <Link to ="/login">Login</Link>
                </Col>
            </Row>
         </Form>
        </FormContainer>
    )
}


export default RegisterScreen;