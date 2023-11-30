import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button,  } from "react-bootstrap";
import FormContainer from "../src/components/FormContainer";






function  LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SubmitHandler = async(e) => {
        e.preventDefalut();
        console.log("login");
    }


  return (
    <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit = {SubmitHandler}>
            <Form.Group className="my-2" constrolid = "email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                type = "email" 
                placeholder="Enter email"
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group  className="my-2" controlid="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter password"
                value= {password}
                onChange = {e => setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button type="submit" variant ="primary">Sign In</Button>

            <Row className="py-3">
                <Col>New Customer? <Link to ="/register">Register</Link></Col>

            </Row>

        </Form>
    </FormContainer>
  )
}

export default LoginScreen;