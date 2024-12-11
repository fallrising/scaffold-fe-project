# Directory Structure

```
README.md
deploy/
eslint.config.js
index.html
mock/
package.json
postcss.config.js
public/
  vite.svg
src/
  app/
    App.tsx
    routes.tsx
  assets/
    react.svg
  config/
    api.config.ts
  errorPages/
    401.tsx
    403.tsx
    404.tsx
    500.tsx
  index.css
  main.tsx
  modules/
    home/
      HomePage.tsx
  shared/
    components/
      layout/
        Footer.tsx
        Header.tsx
        MainLayout.tsx
        Sidebar.tsx
      ui/
    hooks/
    types/
    utils/
  styles/
    globals.css
static/
tailwind.config.js
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## README.md

```md

```

## package.json

```json
{
  "name": "my-react-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@ant-design/icons": "^5.5.2",
    "@tanstack/react-query": "^5.62.7",
    "@types/node": "^22.10.1",
    "antd": "^5.22.4",
    "axios": "^1.7.9",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.0.2",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@typescript-eslint/eslint-plugin": "^8.18.0",
    "@typescript-eslint/parser": "^8.18.0",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.16.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "husky": "^9.1.7",
    "lint-staged": "^15.2.11",
    "postcss": "^8.4.49",
    "prettier": "^3.4.2",
    "tailwindcss": "^3.4.16",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.15.0",
    "vite": "^6.0.1",
    "vitest": "^2.1.8"
  }
}

```

## eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

```

## postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

## src/app/App.tsx

```tsx
// src/app/App.tsx
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { MainLayout } from '@/shared/components/layout/MainLayout'
import { routes } from './routes'

const App = () => {
    const element = useRoutes(routes)

    return (
        <MainLayout>
            <Suspense fallback={<div>Loading...</div>}>
                {element}
            </Suspense>
        </MainLayout>
    )
}

export default App
```

## src/app/routes.tsx

```tsx
// src/app/routes.tsx
import { lazy } from 'react'

const HomePage = lazy(() => import('@/modules/home/HomePage'))
const NotFound = lazy(() => import('@/errorPages/404'))

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '*',
        element: <NotFound />
    }
]
```

## src/config/api.config.ts

```ts

```

## src/errorPages/401.tsx

```tsx

```

## src/errorPages/403.tsx

```tsx

```

## src/errorPages/404.tsx

```tsx
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
```

## src/errorPages/500.tsx

```tsx

```

## src/main.tsx

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import './styles/globals.css'
import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
```

## src/modules/home/HomePage.tsx

```tsx
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
```

## src/shared/components/layout/Footer.tsx

```tsx
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
```

## src/shared/components/layout/Header.tsx

```tsx
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

```

## src/shared/components/layout/MainLayout.tsx

```tsx
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
```

## src/shared/components/layout/Sidebar.tsx

```tsx
import { Layout, Menu } from 'antd'
import {
    HomeOutlined,
    AppstoreOutlined,
    SettingOutlined
} from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'

const { Sider } = Layout

const menuItems = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: 'Home',
    },
    {
        key: '/dashboard',
        icon: <AppstoreOutlined />,
        label: 'Dashboard',
    },
    {
        key: 'settings',
        icon: <SettingOutlined />,
        label: 'Settings',
        children: [
            {
                key: '/settings/profile',
                label: 'Profile',
            },
            {
                key: '/settings/account',
                label: 'Account',
            },
        ],
    },
]

export const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Sider
            width={200}
            className="min-h-screen bg-white"
            breakpoint="lg"
            collapsible
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['/']}
                selectedKeys={[location.pathname]}
                items={menuItems}
                onClick={({ key }) => navigate(key)}
                className="h-full border-r"
            />
        </Sider>
    )
}
```

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}


```

## tsconfig.json

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## tsconfig.node.json

```json
// tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

## vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

