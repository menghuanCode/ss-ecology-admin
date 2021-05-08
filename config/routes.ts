export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
    // wrappers: ['@/wrappers/auth'],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'noticeCenter',
    icon: 'table',
    path: '/notice',
    component: './NoticeCenter',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
  {
    exact:false,
    component: './403',
    Path:'/403',
    name:'Unauthorized',
  },
  {
    exact:false,
    component: './500',
    Path:'/500',
    name:'ServerError',
  },
];
