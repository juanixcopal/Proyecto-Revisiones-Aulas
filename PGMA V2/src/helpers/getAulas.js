import db_axios from './apiBackend/db_axios.js';

export const GetAulas = () =>{
    return new Promise(async(resolve, reject) =>{{
        const {data} = await db_axios.get('/aula');
        resolve(data);}
    })
}