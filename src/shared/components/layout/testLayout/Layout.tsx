import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div style={{ display: 'flex' }}>
            <nav style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}>
                <h2>Navigation</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users/1">User 1</Link>
                    </li>
                    <li>
                        <Link to="/users/2">User 2</Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
            <main style={{ padding: '10px' }}>
                <Outlet /> {/* This is where the routed components will be rendered */}
            </main>
        </div>
    );
};

export default Layout;
