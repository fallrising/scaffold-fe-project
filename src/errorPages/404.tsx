import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'

// The NotFound component serves as a user-friendly 404 error page
// It uses Ant Design's Result component for consistent styling and UX
const NotFound = () => {
    // Use the navigate hook from react-router-dom for programmatic navigation
    const navigate = useNavigate()

    // Handler for returning to the homepage
    const handleBackHome = () => {
        navigate('/')
    }

    return (
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center p-8">
            <Result
                status="404"
                title="404"
                subTitle={
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Sorry, the page you are looking for does not exist.
                        </p>
                        <p className="text-sm text-gray-500">
                            The page might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                    </div>
                }
                extra={
                    <Button
                        type="primary"
                        icon={<HomeOutlined />}
                        onClick={handleBackHome}
                        size="large"
                        className="h-10"
                    >
                        Back to Home
                    </Button>
                }
            />
        </div>
    )
}

export default NotFound