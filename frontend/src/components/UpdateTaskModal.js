import React from 'react';
import { Button, Form, FormGroup, Modal, Row, Col } from 'react-bootstrap';
import { updateTask } from '../services/TaskService';

const updateTaskModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(props.task.taskId, e.target).then((result) => {
            alert(result);
            props.setUpdated(true);
        }, (error) => {
            alert("Failed to update task!");
        });
    };
    return (
        <div className='container'>
            <Modal {...props} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" name='title' required defaultValue={props.task.title} placeholder=''></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" name='description' required defaultValue={props.task.description} placeholder=''></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="expiration_date">
                                    <Form.Label>Expiration Day</Form.Label>
                                    <Form.Control type="date" name='expiration_date' required defaultValue={props.task.expiration_date} placeholder=''></Form.Control>
                                </Form.Group>

                                <Form.Group controlId="expiration_date">
                                    <p></p>
                                    <Button variant='primary' type='submit'>Add</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" type='submit' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default updateTaskModal;