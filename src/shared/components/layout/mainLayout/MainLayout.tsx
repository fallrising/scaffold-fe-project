import React, {useState} from 'react';
import { cn } from "@/utils/utils.ts";
import '@/styles/globals.css';
import {Menu, Search, Layout, Users, FileText, Settings, Link, Banknote} from 'lucide-react'
import {Button} from "@/shared/components/ui/button/Button.tsx";
import {useLocation} from "react-router-dom";

interface MainLayoutProps {
    children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const location = useLocation()

    const navItems = [
        { icon: Layout, label: "Dashboard", path: "/" },
        { icon: Search, label: "Search List", path: "/search" },
        { icon: Banknote, label: "Search Page", path: "/searchPage" },
        { icon: FileText, label: "Form List", path: "/form" },
        { icon: Users, label: "User List", path: "/users" },
        { icon: Settings, label: "Settings", path: "/settings" },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-0 z-40 h-screen w-64 transform bg-white transition-transform duration-200 ease-in-out",
                    !isSidebarOpen && "-translate-x-full"
                )}
            >
                <div className="flex h-16 items-center border-b px-6">
                    <h1 className="text-xl font-bold">Ant Design Pro</h1>
                </div>
                <nav className="space-y-1 p-4">
                    {navItems.map((item) => {
                        const Icon = item.icon; // Assuming item.icon is a valid React component
                        return (
                            <div key={item.label} className="w-full">
                                <Link
                                    to={item.path}
                                    className={cn(
                                        "flex w-full cursor-pointer select-none items-center rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100",
                                        location.pathname === item.path && "bg-gray-100 font-medium text-gray-900"
                                    )}
                                >
                                    <Icon className="mr-2 h-5 w-5 flex-shrink-0"/>
                                    <span className="flex-1">{item.label}</span>
                                </Link>
                            </div>
                        );
                    })}
                </nav>
            </aside>

            {/* Main content */}
            <div
                className={cn(
                    "transition-margin duration-200 ease-in-out",
                    isSidebarOpen ? "ml-64" : "ml-0"
                )}
            >
                {/* Header */}
                <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <Menu className="h-5 w-5"/>
                    </Button>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Settings className="h-5 w-5"/>
                        </Button>
                    </div>
                </header>

                {/* Page content */}
                <main className="container mx-auto p-6">{children}</main>
            </div>
        </div>
    )
}

export default MainLayout;
