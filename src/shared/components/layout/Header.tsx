import { Layout, Avatar, Dropdown } from 'antd'
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'

const { Header: AntHeader } = Layout

const userMenuItems: MenuProps['items'] = [
    {
        key: 'profile',
        icon: <UserOutlined />,
        label: 'Profile',
    },
    {
        key: 'settings',
        icon: <SettingOutlined />,
        label: 'Settings',
    },
    {
        type: 'divider',
    },
    {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'Logout',
    },
]

export const Header = () => {
    return (
        <AntHeader className="flex items-center justify-between bg-white px-6 shadow">
            <div className="text-xl font-bold">Your App Name</div>
            <div className="flex items-center gap-4">
                <Dropdown menu={{ items: userMenuItems }} trigger={['click']}>
                    <Avatar
                        icon={<UserOutlined />}
                        className="cursor-pointer"
                    />
                </Dropdown>
            </div>
        </AntHeader>
    )
}
