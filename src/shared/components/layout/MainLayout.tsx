// src/shared/components/layout/MainLayout.tsx
import { Layout } from 'antd'
import { Header } from './Header'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

const { Content } = Layout

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout className="min-h-screen">
            <Header />
            <Layout>
                <Sidebar />
                <Layout>
                    <Content className="p-6">{children}</Content>
                </Layout>
            </Layout>
            <Footer />
        </Layout>
    )
}