import { useState, useEffect } from 'react';
import { fetchUsers } from '@/shared/apis/fetchUsers/fetchUsers.ts';
import { User } from '@/shared/apis/fetchUsers/types/user';

export const useFetchUsers = () => {
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