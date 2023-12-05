import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { getTasks, deleteTask } from "../services/TaskService";
import '../App.css';
import AddTaskModal from './AddTaskModal';
import UpdateTaskModal from './UpdateTaskModal';

const Manage = () => {
    const [tasks, setTasks] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editTask, setEditTask] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (tasks.length && !isUpdated) {
            return;
        }
        getTasks().then(data => {
            if (mounted) {
                setTasks(data)
            }
        });
        return () => {
            mounted = false;
            setIsUpdated(false);
        }
    }, [isUpdated, tasks]);

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };

    const handleUpdate = (e, tas) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditTask(tas);
    };

    const handleDelete = (e, taskId) => {
        if (window.confirm('Are you sure?')) {
            e.preventDefault();
            deleteTask(taskId).then((result) => { alert(result); setIsUpdated(true); }, (error) => { alert("Failed to delete!"); })
        }
    };

    let addModalClose = () => setAddModalShow(false);
    let editModalClose = () => setEditModalShow(false);

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
                            <td><Button className="mr-2" variant="primary" onClick={event => handleUpdate(event, tas)}>Update</Button>{' '}
                                <updateTaskModal show={editModalShow} onHide={EditModalClose} task={editTask} setUpdated={setIsUpdated}></updateTaskModal>
                                <Button className="mr-2" variant="danger" onClick={event => handleDelete(event, tas.taskId)}>Delete</Button>{' '}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Button variant="success">Add Task</Button>{' '}
            <addTaskModal show={addModalShow} onHide={AddModalClose} setUpdated={setIsUpdated}></addTaskModal>
        </div >
    );
};

export default Manage;