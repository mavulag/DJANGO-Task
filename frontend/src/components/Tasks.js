import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { getTasks } from "../services/TaskService";
import '../App.css';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let mounted = true;
        getTasks().then(data => {
            if (mounted) {
                setTasks(data)
            }
        });
        return () => mounted = false;
    }, []);

    return (
        <div className="row">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Expire At</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) =>
                        <tr key={task.id}>
                            <td>{task.taskId}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.expiration_date}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default Tasks;