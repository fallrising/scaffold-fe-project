import { useState, useEffect } from 'react';
import User from "@/shared/apis/fetchUsers/types";
import fetchUsers from "@/shared/apis/fetchUsers";

const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([]); // Initialize as empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchUsers();
            setUsers(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    return { users, loading };
};

export default useFetchUsers;