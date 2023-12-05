import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { getTasks, deleteTask } from "../services/TaskService";
import '../App.css';
import AddTaskModal from './AddTaskModal';

const Manage = () => {
    const [tasks, setTasks] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        getTasks().then(data => {
            if (mounted) {
                setTasks(data)
            }
        });
        return () => mounted = false;
    }, []);

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };

    let addModalClose = () => setAddModalShow(false);

    return (
        <div className="row">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Expire At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) =>
                        <tr key={task.id}>
                            <td>{task.taskId}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.expiration_date}</td>
                            <td><Button className="mr-2" variant="primary">Update</Button>{' '}
                                <Button className="mr-2" variant="danger">Delete</Button>{' '}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Button variant="success">Add Task</Button>{' '}
            <addTaskModal show={addModalShow} onHide={addModalClose}></addTaskModal>
        </div >
    );
};

export default Manage;