// src/app/App.tsx
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './Routes.tsx'
import MainLayout from "@/shared/components/layout";

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