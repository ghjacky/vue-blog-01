import Layout from '@/components/layout'

export const frontendRoutes = [
    {
        path: '/',
        name: '/',
        component: Layout,
        meta: {title: '', hidden: false, icon: ''},
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: '主页',
                component: () => import('@/views/home'),
                meta: {title: '主页', hidden: false, icon: ''}
            }
        ]
    }
]