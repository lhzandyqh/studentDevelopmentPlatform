import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import treeTableRouter from './modules/tree-table'
// import nestedRouter from './modules/nested'

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/myviews/homePage/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  }
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'rolePermission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },
  {
    path: '/studentStatusManagement',
    component: Layout,
    redirect: '/studentStatusManagement/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '学籍管理',
      icon: 'documentation',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'personalInformation',
        component: () => import('@/myviews/studentStatusManagement/personalInformation'),
        name: 'personalInformation',
        meta: {
          title: '个人信息'
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'semesterEnrollment',
        component: () => import('@/myviews/studentStatusManagement/semesterEnrollment'),
        name: 'semesterEnrollment',
        meta: {
          title: '学期注册'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'statusChanges',
        component: () => import('@/myviews/studentStatusManagement/statusChanges'),
        name: 'statusChanges',
        meta: {
          title: '学籍变动'
        }
      }
    ]
  },
  {
    path: '/courseSelectionSystem',
    component: Layout,
    redirect: '/courseSelectionSystem/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '选课系统',
      icon: 'kecheng'
      // roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'semesterSchedule',
        component: () => import('@/myviews/courseSelectionSystem/semesterSchedule'),
        name: 'semesterSchedule',
        meta: {
          title: '学期课表'
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'campusLectures',
        component: () => import('@/myviews/courseSelectionSystem/campusLectures'),
        name: 'campusLectures',
        meta: {
          title: '校园讲座'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'mySchedule',
        component: () => import('@/myviews/courseSelectionSystem/mySchedule'),
        name: 'mySchedule',
        meta: {
          title: '我的课表'
        }
      },
      {
        path: 'gradeQuery',
        component: () => import('@/myviews/courseSelectionSystem/gradeQuery'),
        name: 'gradeQuery',
        meta: {
          title: '成绩查询'
        }
      }
    ]
  },
  {
    path: '/campusGrants',
    component: Layout,
    redirect: '/campusGrants/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '校园奖助',
      icon: 'jiangli'
      // roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'grantApplication',
        component: () => import('@/myviews/campusGrants/grantApplication'),
        name: 'grantApplication',
        meta: {
          title: '助学金申请'
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'scholarshipApplication',
        component: () => import('@/myviews/campusGrants/scholarshipApplication'),
        name: 'scholarshipApplication',
        meta: {
          title: '奖学金申请'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'campusAwardsApplicaton',
        component: () => import('@/myviews/campusGrants/campusAwardsApplicaton'),
        name: 'campusAwardsApplicaton',
        meta: {
          title: '校园奖项申请'
        }
      },
      {
        path: 'myGrant',
        component: () => import('@/myviews/campusGrants/myGrant'),
        name: 'myGrant',
        meta: {
          title: '我的奖助'
        }
      }
    ]
  },
  {
    path: '/secondClassroom',
    component: Layout,
    redirect: '/secondClassroom/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '第二课堂',
      icon: 'component'
      // roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'internshipPractice',
        component: () => import('@/myviews/secondClassroom/internshipPractice'),
        name: 'internshipPractice',
        meta: {
          title: '实习实践'
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'professionalCertificate',
        component: () => import('@/myviews/secondClassroom/professionalCertificate'),
        name: 'professionalCertificate',
        meta: {
          title: '职业证书'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'comprehensiveEvaluation',
        component: () => import('@/myviews/secondClassroom/comprehensiveEvaluation'),
        name: 'comprehensiveEvaluation',
        meta: {
          title: '综合测评'
        }
      }
    ]
  },
  {
    path: '/schoolLife',
    component: Layout,
    redirect: '/schoolLife/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '校园生活',
      icon: 'peoples'
      // roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'communityManagement',
        component: () => import('@/myviews/schoolLife/communityManagement'),
        name: 'communityManagement',
        meta: {
          title: '社团管理'
          // roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'campusActivities',
        component: () => import('@/myviews/schoolLife/campusActivities'),
        name: 'campusActivities',
        meta: {
          title: '校园活动'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/learningCareerPlanning',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/myviews/learningCareerPlanning/index'),
        name: 'learningCareerPlanning',
        meta: { title: '学涯规划', icon: 'form', noCache: true }
      }
    ]
  },
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/svg-icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },

  /** When your routing table is too long, you can split it into small modules**/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,
  // treeTableRouter,

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'example',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },

  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'tab', icon: 'tab' }
  //     }
  //   ]
  // },

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/errorPage/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/errorPage/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/errorLog/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'errorLog', icon: 'bug' }
  //     }
  //   ]
  // },

  // // {
  // //   path: '/excel',
  // //   component: Layout,
  // //   redirect: '/excel/export-excel',
  // //   name: 'Excel',
  // //   meta: {
  // //     title: 'excel',
  // //     icon: 'excel'
  // //   },
  // //   children: [
  // //     {
  // //       path: 'export-excel',
  // //       component: () => import('@/views/excel/exportExcel'),
  // //       name: 'ExportExcel',
  // //       meta: { title: 'exportExcel' }
  // //     },
  // //     {
  // //       path: 'export-selected-excel',
  // //       component: () => import('@/views/excel/selectExcel'),
  // //       name: 'SelectExcel',
  // //       meta: { title: 'selectExcel' }
  // //     },
  // //     {
  // //       path: 'export-merge-header',
  // //       component: () => import('@/views/excel/mergeHeader'),
  // //       name: 'MergeHeader',
  // //       meta: { title: 'mergeHeader' }
  // //     },
  // //     {
  // //       path: 'upload-excel',
  // //       component: () => import('@/views/excel/uploadExcel'),
  // //       name: 'UploadExcel',
  // //       meta: { title: 'uploadExcel' }
  // //     }
  // //   ]
  // // },
  //
  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'pdf', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },
  //
  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'clipboardDemo', icon: 'clipboard' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/i18n',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/i18n-demo/index'),
  //       name: 'I18n',
  //       meta: { title: 'i18n', icon: 'international' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]
