import db_axios from "./apiBackend/db_axios";

export const GetInventario = async (dataModal) =>{
    const {id_aula} = dataModal
    const {data} = await db_axios.get(`/inventario/${id_aula}`);
    return data;
}