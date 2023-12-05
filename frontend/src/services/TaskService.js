import axios from "axios";

export function getTasks() {
    return axios.get('http://localhost:8000/todo/').then(response => response.data)
}

export function addTasks(task) {
    return axios.post('http://localhost:8000/todo/'), { taskId: null, title: task.title.value, description: task.descritpion.value, expiration_date:task.expiration_date.value }.then(response => response.data)
}