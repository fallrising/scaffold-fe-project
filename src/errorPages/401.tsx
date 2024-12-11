import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LoginOutlined } from '@ant-design/icons'

// The Unauthorized component handles 401 authentication errors
// It provides users with a clear path to log in or authenticate
const Unauthorized = () => {
    const navigate = useNavigate()

    // Handler for redirecting to the login page
    const handleToLogin = () => {
        // You might want to adjust this path to match your login route
        navigate('/login')
    }

    return (
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center p-8">
            <Result
                status="403" // Using 403 status icon as Ant Design doesn't have a 401-specific icon
                title="401: Unauthorized"
                subTitle={
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Sorry, you need to be authenticated to access this page.
                        </p>
                        <p className="text-sm text-gray-500">
                            Please log in with your credentials to view this content.
                        </p>
                    </div>
                }
                extra={
                    <Button
                        type="primary"
                        icon={<LoginOutlined />}
                        onClick={handleToLogin}
                        size="large"
                        className="h-10"
                    >
                        Log In
                    </Button>
                }
            />
        </div>
    )
}

export default Unauthorized