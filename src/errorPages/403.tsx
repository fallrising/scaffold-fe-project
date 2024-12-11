import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HomeOutlined, ContactsOutlined } from '@ant-design/icons'

// The Forbidden component handles 403 access denied errors
// It provides users with clear options when they lack permissions
const Forbidden = () => {
    const navigate = useNavigate()

    // Handlers for navigation
    const handleBackHome = () => {
        navigate('/')
    }

    const handleContactSupport = () => {
        // Adjust this path to your support page
        navigate('/support')
    }

    return (
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center p-8">
            <Result
                status="403"
                title="403: Access Denied"
                subTitle={
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Sorry, you don't have permission to access this page.
                        </p>
                        <p className="text-sm text-gray-500">
                            If you believe this is a mistake, please contact your system administrator
                            or reach out to our support team.
                        </p>
                    </div>
                }
                extra={[
                    <Button
                        key="contact"
                        icon={<ContactsOutlined />}
                        onClick={handleContactSupport}
                        size="large"
                        className="h-10"
                    >
                        Contact Support
                    </Button>,
                    <Button
                        key="home"
                        type="primary"
                        icon={<HomeOutlined />}
                        onClick={handleBackHome}
                        size="large"
                        className="h-10"
                    >
                        Back to Home
                    </Button>
                ]}
            />
        </div>
    )
}

export default Forbidden