import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import Header from "./components/header";
import Box from "./components/box";
import Btns from "./components/btns";
import {data} from "./components/data"
import "./App.css"
export default function App() {
        const [person, setPerson] = useState(data);
        const onDelete = () => setPerson([])
        const onShow = () => setPerson(data)
    return <div className="color-body">
        <Container className="py-1">
        <Row className="justify-content-center my-2">
            <Col sm="8" >
            <Header length={person.length}/>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col sm="8" >
            <Box data={person}/>
            </Col>
        </Row>
        <Row className="justify-content-center my-2">
            <Col sm="8" >
            <Btns clear = {onDelete} show = {onShow}/>
            </Col>
        </Row>
    </Container>
    </div>
}
