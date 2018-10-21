import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/index',
      component: resolve => require(['../components/commons/Home.vue'], resolve),
      meta: {title: '首页'},
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: {title: '发现'}
        },
        {
          //关注组件
          path: '/subscriptions',
          redirect:'/subscriptions/timeline',
          component: resolve => require(['../components/page/Subscriptions.vue'], resolve),
          meta: {title: '关注'},
          children:[
            {
              path:'/subscriptions/timeline',
              component: resolve => require(['../components/SideChildren/TimeLine.vue'],resolve),
              meta:{title:'简友圈'}
            },
            {
              path:'/subscriptions/story',
              component: resolve =>require(['../components/SideChildren/Story.vue'],resolve),
              meta:{title:'故事'}
            }
          ]
        },
        {
          //消息组件
          path: '/notifications',
          redirect:'/notifications/comments',
          component: resolve => require(['../components/page/Notifications.vue'], resolve),
          meta: {title: '消息'},
          children:[
            {
              path:'/notifications/comments',
              component: resolve => require(['../components/NotificationChildren/Comments.vue'],resolve),
              meta: {title:'评论'}
            },
            {
              path:'/notifications/chats',
              component: resolve => require(['../components/NotificationChildren/Chats.vue'],resolve),
              meta: {title:'简信'}
            },
            {
              path:'/notifications/requests',
              component: resolve => require(['../components/NotificationChildren/Requests.vue'],resolve),
              meta: {title:'投稿请求'}
            },
            {
              path:'/notifications/likes',
              component: resolve => require(['../components/NotificationChildren/Likes.vue'],resolve),
              meta: {title:'喜欢和赞'}
            },
            {
              path:'/notifications/follows',
              component: resolve => require(['../components/NotificationChildren/Follows.vue'],resolve),
              meta: {title:'关注'}
            }
          ]
        },
        {
          //所有用户组件
          path: '/users',
          component: resolve => require(['../components/page/Users.vue'], resolve),
          meta: {title: '所有用户'}
        },
        {
          //所有专题组件
          path: '/collections',
          component: resolve => require(['../components/page/Collections.vue'], resolve),
          meta: {title: '所有专题'}
        },
        {
          //专题详情
          path:'/c/:id',
          component: resolve =>require(['../components/page/Collection.vue'],resolve),
          meta:{title:'专题详情'}
        },
        {
          //文章详情
          path:'/p/:id',
          component: resolve =>require(['../components/page/Article.vue'],resolve),
          meta:{title:'文章详情'}
        },
        {
          // 个人中心组件
          path: '/u',
          component: resolve => require(['../components/page/User.vue'], resolve),
          meta: {title: '个人中心'}
        },
        {
          path:'/ou/:id',
          component: resolve =>require (['../components/page/OtherUser.vue'],resolve),
          meta:{title:'某个作者'}
        },
        {
          //设置
          path: '/settings',
          redirect:'/settings/basic',
          component: resolve => require(['../components/page/VueEditor.vue'],resolve),
          meta: {title: '设置'},
          children:[
            {
              path:'/settings/basic',
              component: resolve => require(['../components/SettingsChildren/BasicSet.vue'],resolve),
              meta:{title:'基础设置'},
            },
            {
              path:'/settings/profile',
              component: resolve => require(['../components/SettingsChildren/PersonSet.vue'],resolve),
              meta:{title:'个人资料'},
            },
            {
              path:'/settings/weibo-auth',
              component: resolve => require(['../components/SettingsChildren/WeiBoCheck.vue'],resolve),
              meta:{title:'微博认证'},
            },
            {
              path:'/settings/blacklist',
              component: resolve => require(['../components/SettingsChildren/BlackList.vue'],resolve),
              meta:{title:'黑名单'},
            },
            {
              path:'/settings/reward-setting',
              component: resolve => require(['../components/SettingsChildren/AdmireSet.vue'],resolve),
              meta:{title:'赞赏设置'},
            },
            {
              path:'/settings/misc',
              component: resolve => require(['../components/SettingsChildren/AccountManager.vue'],resolve),
              meta:{title:'账号管理'},
            }
          ]
        }
      ]
    },
    {
      // 写文章
      path: '/write',
      component: resolve => require(['../components/page/Write.vue'], resolve),
      meta: {title: '写文章'}
    },
    {
      path:'/login',
      component: resolve =>require(['../components/page/Login.vue'],resolve),
      meta:{title:'登陆'}
    },
    {
      path:'/sign_up',
      component: resolve =>require(['../components/page/Register.vue'],resolve),
      meta: {title:'注册'}
    }
  ]
})
