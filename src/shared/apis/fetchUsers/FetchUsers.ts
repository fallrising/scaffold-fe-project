import axios from 'axios';
import { User } from '@/shared/apis/fetchUsers/types/user.ts';

const apiUrl = import.meta.env.VITE_API_URL; // Load API URL from environment variable

// Fetch data from the API
async function fetchUsers(): Promise<User[]> {
    try {
        const response = await axios.get<User[]>(`${apiUrl}/users`);
        // Validate response structure
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error('Error fetching users:', error);
        return []; // Return an empty array on failure
    }
}

export default fetchUsers;