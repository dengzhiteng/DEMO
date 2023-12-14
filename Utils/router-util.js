/**
 * @新增 定义初始化菜单
*/

import { lazyLoadingCop, forEach } from '@/libs/tools'
import { localSave, localRead } from '@/libs/util'
import Main from '@/components/main' // Main 是架构组件，不在后台返回，在文件里单独引入
import parentView from '@/components/parent-view' // parentView 是二级架构组件，不在后台返回，在文件里单独引入
import store from '@/store'
//import config from '@/config'
import { getMenuData } from '@/api/user'

const hasChild = (item) => {
  return item.menuList && item.menuList.length !== 0
}

// 初始化路由
export const initRouter = (callback) => {
  let gotRouter = [];
  let antRouter = localRead('dynamicRouter');

  if (!antRouter) {
    getMenuData().then(res => {
      let _data = res.status==200 ? res.data : res.data.data;

      if(_data && _data.length > 0) {
        localSave('dynamicRouter', JSON.stringify(_data)) // 存储路由到localStorage
        gotRouter = filterAsyncRouter(_data) // 过滤路由,路由组件转换
        store.commit('updateMenuList', gotRouter);
        //dynamicRouterAdd()
      }
      callback();
    })
  }else{
    gotRouter = dynamicRouterAdd();
    callback();
  }
}

// 加载路由菜单,从localStorage拿到路由,在创建路由时使用
export const dynamicRouterAdd = () => {
  let dynamicRouter = []
  let data = localRead('dynamicRouter')
  if (!data) {
    return dynamicRouter
  }
  dynamicRouter = filterAsyncRouter(JSON.parse(data))
  return dynamicRouter
}

// @函数: 遍历后台传来的路由字符串，转换为组件对象
export const filterAsyncRouter = (asyncRouterMap) => {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Main') { // Main组件特殊处理
        route.component = Main
      } else if (route.component === 'parentView') { // parentView组件特殊处理
        route.component = parentView
      } else {
        // route.component = _import(route.component)
        route.component = lazyLoadingCop(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}

/*
// @函数: 遍历后台传来的路由字符串，转换为组件对象
export const filterAsyncRouter = (asyncRouterMap) => {
  var list = createRouterMap(asyncRouterMap);
  return list
}

// @函数: 创建路由表
export const createRouterMap = (list) => {
  let res = [];
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    let obj = {
      name: item.menuCode,
      meta: {
        title: item.menuName,
        icon: item.icon || ''
      }
    }

    if (item.parentMenuId == null) {
      if (hasChild(item)) {
        obj.meta.showAlways = true;
      } else {
        continue
      }
      obj.path = '/' + item.menuCode;
      obj.component = Main;
    } else {
      obj.path = item.menuCode;
      if (item.href) {
        obj.meta.href = item.href;
      } else {
        obj.component = lazyLoadingCop(item.menuUrl);
      }
    }
    if (hasChild(item)) {
      obj.children = createRouterMap(item.menuList)
    }
    res.push(obj)
  }
  return res
}
*/