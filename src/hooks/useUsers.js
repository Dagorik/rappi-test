import { useEffect, useState } from "react";

const URL = 'https://jsonplaceholder.typicode.com/users';

const useUsers = () => {
    const [users, setUser] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setErrro] = useState();

    const getUserList = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(URL);    
            if (!response.ok) {
                throw new Error('Error')
            }
            const users = await response.json();
            setUser(users);
        } catch (error) {
            console.log(error);
            setErrro(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (!users) {
            getUserList();
        }
    }, [users])

    return { users, isLoading, error }
};

export default useUsers;