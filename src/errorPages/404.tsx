// src/modules/home/HomePage.tsx
import { Card, Typography, Row, Col, Button } from 'antd'
import { RocketOutlined, BookOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const HomePage = () => {
    return (
        <div className="p-6">
            <Title level={2} className="mb-6">Welcome to Your Application</Title>

            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <Card
                        hoverable
                        className="h-full"
                        title={
                            <span>
                <RocketOutlined className="mr-2" />
                Getting Started
              </span>
                        }
                    >
                        <Paragraph>
                            This is your new application homepage. Start building your features from here.
                        </Paragraph>
                        <Button type="primary">
                            Explore Features
                        </Button>
                    </Card>
                </Col>

                <Col xs={24} md={12}>
                    <Card
                        hoverable
                        className="h-full"
                        title={
                            <span>
                <BookOutlined className="mr-2" />
                Documentation
              </span>
                        }
                    >
                        <Paragraph>
                            Check out our documentation to learn more about the application structure
                            and development guidelines.
                        </Paragraph>
                        <Button>View Docs</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage