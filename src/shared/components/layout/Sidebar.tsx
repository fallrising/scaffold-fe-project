// src/shared/components/layout/Sidebar.tsx
import { Layout, Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'

const { Sider } = Layout

// Define menu items for navigation
const menuItems = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: 'Home',
    },
]

export const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Sider
            width={200}
            className="fixed left-0 top-16 h-[calc(100vh-64px)] bg-white"
            breakpoint="lg"
            collapsible
        >
            <Menu
                mode="inline"
                selectedKeys={[location.pathname]}
                items={menuItems}
                onClick={({ key }) => navigate(key)}
                className="h-full border-r"
            />
        </Sider>
    )
}