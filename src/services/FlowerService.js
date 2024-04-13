import axiosInstance from "../utils/my-axios"
/* CRUD */

// CREATE
const insertFlower = async (flower) => {
    const res = await axiosInstance.post('/flores', flower);
    return res.data;
}


//READ
//all
const getFlowers = async () => {
    const res = await axiosInstance.get('/flores');
    return res.data;
}

//READ
//one

const getOneFlower = async(id) => {
    const res = await axiosInstance.get('/flores/'+id);
    return res.data
}

//UPDATE
const updateOneFlower = async(id, flower) => {
    const res = await axiosInstance.put('/flores/'+id, flower);
    return res.data
}

//DELETE
const deleteOneFlower = async(id) => {
    const res = await axiosInstance.delete('/flores/'+id);
    return res.data
}

export default {
    insertFlower, getFlowers, getOneFlower, updateOneFlower, deleteOneFlower
}

