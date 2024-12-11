import { Layout, Menu } from 'antd'
import {
    HomeOutlined,
    AppstoreOutlined,
    SettingOutlined
} from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'

const { Sider } = Layout

const menuItems = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: 'Home',
    },
    {
        key: '/dashboard',
        icon: <AppstoreOutlined />,
        label: 'Dashboard',
    },
    {
        key: 'settings',
        icon: <SettingOutlined />,
        label: 'Settings',
        children: [
            {
                key: '/settings/profile',
                label: 'Profile',
            },
            {
                key: '/settings/account',
                label: 'Account',
            },
        ],
    },
]

export const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Sider
            width={200}
            className="min-h-screen bg-white"
            breakpoint="lg"
            collapsible
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['/']}
                selectedKeys={[location.pathname]}
                items={menuItems}
                onClick={({ key }) => navigate(key)}
                className="h-full border-r"
            />
        </Sider>
    )
}