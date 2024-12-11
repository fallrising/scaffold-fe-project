import { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '@/styles/globals.css'; // You only need this import in main.tsx

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const location = useLocation();

    return (
        <div className="layout">
            {/* Header stays at the top */}
            <header className="header">
                <h1>My Application</h1>
                <nav>
                    <button>Profile</button>
                    <button>Settings</button>
                    <button>Logout</button>
                </nav>
            </header>

            <div className="main-container">
                {/* Sidebar on the left */}
                <aside className="sidebar">
                    <nav>
                        <ul>
                            <li>
                                <Link
                                    to="/"
                                    className={location.pathname === '/' ? 'active' : ''}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/conveyor"
                                    className={location.pathname === '/conveyor' ? 'active' : ''}
                                >
                                    Conveyor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={location.pathname === '/about' ? 'active' : ''}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={location.pathname === '/contact' ? 'active' : ''}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main content area */}
                <main className="content">
                    {children}
                </main>
            </div>

            {/* Footer at the bottom */}
            <footer className="footer">
                <p>© 2024 My Application. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainLayout;
