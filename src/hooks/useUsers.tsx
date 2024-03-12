import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Datum, ReqResUserListResponse } from '../interfaces'


const loadUsers = async(page: number = 1): Promise<Datum[]> => {
    try{
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users',
            {
                params: {
                    page: page
                }
            }
        )
        return data.data
    } catch (error) {
        console.error(error);
        return []
    }

}

const useUsers = () => {

    const [users, setUsers] = useState<Datum[]>([]);
    const currentPageRef = useRef(1)

    useEffect(() => {
        loadUsers(currentPageRef.current).then(setUsers)

    }, [])

    const nextPage = async() => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current)
        if(users.length > 0){
            setUsers(users)
        }else{
            currentPageRef.current--;
        }
    }

    const prevPage = async() => {
        if(currentPageRef.current > 1){
            currentPageRef.current--;
            const users = await loadUsers(currentPageRef.current)
            setUsers(users)
        }
    }

  return (
        {
            users,
            nextPage,
            prevPage
        }
  )
}

export { useUsers }