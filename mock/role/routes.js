// Just a mock data

const constantRoutes = [
    {
        path: '/redirect',
        component: 'layout/Layout',
        hidden: true,
        children: [
            {
                path: '/redirect/:path*',
                component: 'views/redirect/index'
            }
        ]
    },
    {
        path: '/login',
        component: 'views/login/index',
        hidden: true
    },
    {
        path: '/auth-redirect',
        component: 'views/login/auth-redirect',
        hidden: true
    },
    {
        path: '/404',
        component: 'views/error-page/404',
        hidden: true
    },
    {
        path: '/401',
        component: 'views/error-page/401',
        hidden: true
    },
    {
        path: '/',
        component: 'layout/Layout',
        redirect: 'dashboard',
        children: [
            {
                path: 'dashboard',
                component: 'views/dashboard/index',
                name: 'Dashboard',
                meta: { title: '首页', icon: 'dashboard', affix: true }
            }
        ]
    },
    {
        path: '/example',
        component: 'layout/Layout',
        redirect: '/example/table',
        name: 'Example',
        meta: { title: '举例', icon: 'el-icon-s-help' },
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('@/views/table/index'),
                meta: { title: '表格', icon: 'table' }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () => import('@/views/tree/index'),
                meta: { title: '树', icon: 'tree' }
            }
        ]
    },
    {
        path: '/form',
        component: 'layout/Layout',
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('@/views/form/index'),
                meta: { title: '表单', icon: 'form' }
            }
        ]
    }
]
const asyncRoutes = [
    {
        path: '/nested',
        component: 'layout/Layout',
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
            roles: ['admin'],
            title: '嵌套',
            icon: 'nested'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/nested/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: { roles: ['admin'], title: '菜单1' },
                children: [
                    {
                        path: 'menu1-1',
                        component: () => import('@/views/nested/menu1/menu1-1'),
                        name: 'Menu1-1',
                        meta: { roles: ['admin'], title: '菜单1-1' }
                    },
                    {
                        path: 'menu1-2',
                        component: () => import('@/views/nested/menu1/menu1-2'),
                        name: 'Menu1-2',
                        meta: { roles: ['admin'], title: '菜单1-2' },
                        children: [
                            {
                                path: 'menu1-2-1',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                                name: 'Menu1-2-1',
                                meta: { roles: ['admin'], title: '菜单1-2-1' }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                                name: 'Menu1-2-2',
                                meta: { roles: ['admin'], title: '菜单1-2-2' }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () => import('@/views/nested/menu1/menu1-3'),
                        name: 'Menu1-3',
                        meta: { roles: ['admin'], title: '菜单1-3' }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () => import('@/views/nested/menu2/index'),
                meta: { roles: ['admin'], title: '菜单2' }
            }
        ]
    },

    {
        path: '/permission',
        component: 'layout/Layout',
        redirect: '/permission/page',
        alwaysShow: true, // will always show the root menu
        name: 'Permission',
        meta: {
            title: '权限',
            icon: 'lock',
            roles: ['admin'] // you can set roles in root nav
        },
        children: [
            {
                path: 'role',
                component: () => import('@/views/permission/index'),
                name: 'RolePermission',
                meta: {
                    title: '角色权限',
                    roles: ['admin']
                }
            }
        ]
    },

    {
        path: 'external-link',
        component: 'layout/Layout',
        children: [
            {
                path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
                meta: { roles: ['admin'], title: '外链接', icon: 'link' }
            }
        ]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

module.exports = {
    constantRoutes,
    asyncRoutes
}