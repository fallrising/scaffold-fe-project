// src/modules/home/HomePages.tsx
import { useFetchUsers } from '@/shared/apis/fetchUsers/hooks/useFetchUsers.ts';

const HomePage = () => {
    const { users, loading } = useFetchUsers();

    return (
        <div className="home-page">
            <h2>Welcome to My Application</h2>
            <p>This is a simple demonstration of a layout structure with header,
                sidebar, main content, and footer components working together.</p>

            {/* Example content */}
            <div className="content-box">
                <h3>Hello World!</h3>
                <p>This is where your main content will go. The layout ensures that:</p>
                <ul>
                    <li>The header stays at the top</li>
                    <li>The sidebar remains fixed on the left</li>
                    <li>The content area scrolls independently</li>
                    <li>The footer stays at the bottom</li>
                </ul>
            </div>

            {/* Fetched Users Section */}
            <div className="users-section">
                <h3>Fetched Users:</h3>
                {loading ? (
                    <p>Loading...</p>
                ) : users.length > 0 ? (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                {user.id}: {user.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No users found or an error occurred.</p>
                )}
            </div>
        </div>
    )
}

export default HomePage