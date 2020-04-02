export const commonRoutes = [
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/extra/404'),
        meta: { title: '', hidden: false, icon: ''}
    },
    {
        path: '*',
        redirect: '/404'
    }
]