import axios from 'axios';

let instance = axios.create({
        baseURL: 'https://firestore.googleapis.com/v1/projects/potluck-tracker/databases/(default)/documents/'
    })

export default instance;