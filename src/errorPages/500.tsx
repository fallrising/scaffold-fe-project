import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ReloadOutlined, HomeOutlined } from '@ant-design/icons'

// The ServerError component handles 500 internal server errors
// It provides users with options to retry their action or return home
const ServerError = () => {
    const navigate = useNavigate()

    // Handlers for page actions
    const handleRetry = () => {
        window.location.reload()
    }

    const handleBackHome = () => {
        navigate('/')
    }

    return (
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center p-8">
            <Result
                status="500"
                title="500: Internal Server Error"
                subTitle={
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Sorry, something went wrong on our end.
                        </p>
                        <p className="text-sm text-gray-500">
                            We're working to fix the issue. Please try again in a few moments.
                            If the problem persists, contact our support team.
                        </p>
                    </div>
                }
                extra={[
                    <Button
                        key="retry"
                        icon={<ReloadOutlined />}
                        onClick={handleRetry}
                        size="large"
                        className="h-10"
                    >
                        Try Again
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

export default ServerError