// src/shared/components/layout/Footer.tsx
import { Layout } from 'antd'

const { Footer: AntFooter } = Layout

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <AntFooter className="bg-white text-center">
            <div className="text-sm text-gray-500">
                © {currentYear} Your Company Name. All rights reserved.
            </div>
        </AntFooter>
    )
}