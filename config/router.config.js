export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      {
        path: '/system',
        name: 'system',
        icon: 'form',
        routes: [
          {
            path: '/system/user',
            name: 'user',
            component: './System/Index',
          },
          {
            path: '/gateway/user/add',
            component: './Gateway/AddRoute',
          },
          {
            path: '/gateway/user/update',
            component: './Gateway/UpdateRoute',
          },
          {
            path: '/system/role',
            name: 'role',
            component: './System/RoleIndex',
          },
          {
            path: '/gateway/role/add',
            component: './Gateway/WhiteListAdd',
          },
          {
            path: '/gateway/role/update',
            component: './Gateway/WhiteListUpdate',
          },
          {
            path: '/system/orgunization',
            name: 'orgunization',
            component: './System/OrgIndex',
          },
          {
            path: '/system/grant',
            name: 'grant',
            component: './System/GrantIndex',
          }
        ],
      },
      {
        path: '/project',
        name: 'project',
        icon: 'form',
        routes: [
          {
            path: '/project/create',
            name: 'create',
            component: './Project/AddProject',
          },
          {
            path: '/project/list',
            name: 'list',
            component: './Project/Index',
          },
          {
            path: '/gateway/project/add',
            component: './Gateway/AddRoute',
          },
          {
            path: '/gateway/project/update',
            component: './Gateway/UpdateRoute',
          },
          {
            path: '/project/grant',
            name: 'grant',
            component: './Project/GrantIndex',
          },
          {
            path: '/gateway/role/add',
            component: './Gateway/WhiteListAdd',
          },
          {
            path: '/gateway/role/update',
            component: './Gateway/WhiteListUpdate',
          },
          {
            path: '/project/archive',
            name: 'archive',
            component: './Project/ArchiveIndex',
          },
          {
            path: '/project/show',
            name: 'show',
            component: './Project/ShowIndex',
          },
          {
            path: '/project/participate',
            name: 'participate',
            component: './Project/ParticipateIndex',
          }
        ],
      },
      {
        path: '/gateway',
        name: 'gateway',
        icon: 'form',
        routes: [
          {
            path: '/gateway/dynamic/routes',
            name: 'manage',
            component: './Gateway/Index',
          },
          {
            path: '/gateway/dynamic/routes/add',
            component: './Gateway/AddRoute',
          },
          {
            path: '/gateway/dynamic/routes/update',
            component: './Gateway/UpdateRoute',
          },
          {
            path: '/gateway/whitelist/routes',
            name: 'whitelist',
            component: './Gateway/WhiteListIndex',
          },
          {
            path: '/gateway/whitelist/routes/add',
            component: './Gateway/WhiteListAdd',
          },
          {
            path: '/gateway/whitelist/routes/update',
            component: './Gateway/WhiteListUpdate',
          },
          {
            path: '/gateway/LoggerList/routes',
            name: 'loggerList',
            component: './Gateway/LoggerListIndex',
          },
        ],
      },
      {
        path: '/device',
        name: 'device',
        icon: 'form',
        routes: [
          {
            path: '/gateway/device/certificate',
            name: 'certificate',
            component: './Gateway/LoggerListIndex',
          },
          {
            path: '/gateway/user',
            name: 'register',
            component: './Gateway/Index',
          },
          {
            path: '/gateway/user/add',
            component: './Gateway/AddRoute',
          },
          {
            path: '/gateway/user/update',
            component: './Gateway/UpdateRoute',
          },
          {
            path: '/gateway/role',
            name: 'list',
            component: './Gateway/WhiteListIndex',
          },
          {
            path: '/gateway/role/add',
            component: './Gateway/WhiteListAdd',
          },
          {
            path: '/gateway/role/update',
            component: './Gateway/WhiteListUpdate',
          },
          {
            path: '/gateway/orgunization',
            name: 'MQTT',
            component: './Gateway/LoggerListIndex',
          }
        ],
      },
      {
        path: '/cms',
        name: 'cms',
        icon: 'form',
        routes: [
          {
            path: '/gateway/user',
            name: 'notice',
            component: './Gateway/Index',
          },
          {
            path: '/gateway/user/add',
            component: './Gateway/AddRoute',
          },
          {
            path: '/gateway/user/update',
            component: './Gateway/UpdateRoute',
          },
          {
            path: '/gateway/role',
            name: 'broadcast',
            component: './Gateway/WhiteListIndex',
          },
          {
            path: '/gateway/role/add',
            component: './Gateway/WhiteListAdd',
          },
          {
            path: '/gateway/role/update',
            component: './Gateway/WhiteListUpdate',
          },
          {
            path: '/gateway/orgunization',
            name: 'news',
            component: './Gateway/LoggerListIndex',
          },
          {
            path: '/gateway/grant',
            name: 'staticResource',
            component: './Gateway/LoggerListIndex',
          }
        ],
      },
      {
        path: '/activity',
        name: 'activity',
        icon: 'form',
        routes: [
          {
            path: '/gateway/user',
            name: 'create',
            component: './Gateway/Index',
          },
          {
            path: '/gateway/user/add',
            component: './Gateway/AddRoute',
          },
          {
            path: '/gateway/user/update',
            component: './Gateway/UpdateRoute',
          },
          {
            path: '/gateway/role',
            name: 'list',
            component: './Gateway/WhiteListIndex',
          },
          {
            path: '/gateway/role/add',
            component: './Gateway/WhiteListAdd',
          },
          {
            path: '/gateway/role/update',
            component: './Gateway/WhiteListUpdate',
          },
          {
            path: '/gateway/orgunization',
            name: 'enroll',
            component: './Gateway/LoggerListIndex',
          }
        ],
      },
      {
        path: '/material',
        name: 'material',
        icon: 'form',
        routes: [
          {
            path: '/gateway/user',
            name: 'classify',
            component: './Gateway/Index',
          },
          {
            path: '/gateway/user/add',
            component: './Gateway/AddRoute',
          },
          {
            path: '/gateway/user/update',
            component: './Gateway/UpdateRoute',
          },
          {
            path: '/gateway/role',
            name: 'list',
            component: './Gateway/WhiteListIndex',
          },
          {
            path: '/gateway/role/add',
            component: './Gateway/WhiteListAdd',
          },
          {
            path: '/gateway/role/update',
            component: './Gateway/WhiteListUpdate',
          },
          {
            path: '/gateway/orgunization',
            name: 'apply',
            component: './Gateway/LoggerListIndex',
          },
          {
            path: '/gateway/orgunization',
            name: 'purchase',
            component: './Gateway/LoggerListIndex',
          },
          {
            path: '/gateway/grant',
            name: 'add',
            component: './Gateway/LoggerListIndex',
          }
        ],
      },
      {
        // name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        path: '/exception',
        routes: [
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
