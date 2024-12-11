import { Layout } from 'antd'

const { Footer: AntFooter } = Layout

export const Footer = () => {
    return (
        <AntFooter className="text-center bg-white">
            <div className="mx-auto max-w-7xl px-4 py-2">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-sm font-semibold">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold">Resources</h3>
                        <ul className="mt-4 space-y-2">
                            <li>Documentation</li>
                            <li>Guides</li>
                            <li>Support</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-sm font-semibold">Social</h3>
                        <ul className="mt-4 space-y-2">
                            <li>Twitter</li>
                            <li>GitHub</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </AntFooter>
    )
}