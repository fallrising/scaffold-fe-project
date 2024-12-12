// src/app/Routes.tsx
import { lazy } from 'react'

const Conveyor = lazy(() => import('@/modules/conveyor'));
const HomePage = lazy(() => import('@/modules/home/testHome/HomePage.tsx'));
const NotFound = lazy(() => import('@/errorPages/404'));

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/conveyor',
        element: <Conveyor />
    },
    {
        path: '*',
        element: <NotFound />
    }
]