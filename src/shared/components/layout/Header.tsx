// src/shared/components/layout/Header.tsx
import { Layout, Avatar, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'

const { Header: AntHeader } = Layout

const userMenuItems: MenuProps['items'] = [
    {
        key: 'profile',
        icon: <UserOutlined />,
        label: 'Profile',
    },
]

export const Header = () => {
    return (
        <AntHeader className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-white px-6 shadow-md">
            {/* Left side - Logo/Brand */}
            <div className="text-xl font-bold">Your App Name</div>

            {/* Right side - User menu */}
            <Dropdown menu={{ items: userMenuItems }} trigger={['click']}>
                <Avatar icon={<UserOutlined />} className="cursor-pointer" />
            </Dropdown>
        </AntHeader>
    )
}