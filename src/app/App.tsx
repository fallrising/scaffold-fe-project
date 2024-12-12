// src/app/App.tsx
import MainLayout from "@/shared/components/layout/mainLayout";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "@/pages/Dashboard.tsx";
import SearchList from "@/pages/SearchList.tsx";
import FormList from "@/pages/FormList.tsx";
import UserList from "@/pages/UserList.tsx";
import Settings from "@/pages/Settings.tsx";
import HomePage from "@/pages/HomePage.tsx";
import SearchPage from "@/pages/SearchPage.tsx";

const App = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="search" element={<SearchList />} />
                <Route path="searchPage" element={<SearchPage />} />
                <Route path="form" element={<FormList />} />
                <Route path="users" element={<UserList />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
        </MainLayout>
    )
}

export default App