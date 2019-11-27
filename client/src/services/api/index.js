import axios from 'axios';
import FossilApi from './Fossil';

const get = async (path) => {
    const result = await axios({
        method: 'get',
        url: path,
    }).catch(error => console.log(error));
    
    return result;
}

const post = async (path, body) => {
    const result = await axios({
        method: 'post',
        url: path,
        data: body
    }).catch(error => console.log(error));
    return result;
}

const Fossil = new FossilApi({ post, get });

export default {
    Fossil,
}