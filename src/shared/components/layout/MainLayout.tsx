// src/shared/components/layout/MainLayout.tsx
import { ReactNode } from 'react'
import '@/styles/globals.css'  // You only need this import in main.tsx

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
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
                            <li><a href="/" className="active">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
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
    )
}
