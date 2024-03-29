import { useState, useEffect } from 'react'

function useFetch(page) {
    const [data, setData] = useState()
    useEffect(() => {
        let GetData = async () => {
        try{
        const response = await fetch(`http://127.0.0.1:8000${page}`)
        const Data = await response.json()
        setData(Data)
        }
        catch(err){
            console.log(err)
        }
    }
    GetData()
}, [page])

        return data
}

export default useFetch

