import axios from 'axios'

export const getUsers=async()=>{
    try {
        const req=await axios.get('http://localhost:3000/users')
        const res=await req.data
        if (req.status===200) {
            return res
        } else {
            return false
        }
    } catch (error) {
        throw new Error('xeta bas verdi')
    }
}