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