import { queryGatewayRoutes, addRoute, refresh, deleteRoute, updateRoute } from '@/services/gateway';
import router from 'umi/router';
import { message } from 'antd';

export default {
  namespace: 'gatewayRoutes',
  state: {
    gatewayRoutesList: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryGatewayRoutes);
      if (response != null && response.code == 200) {
        yield put({
          type: 'save',
          payload: response.data,
        });
      } else {
        message.error('请求发生错误,'+ response.message)
      }
    },
    *add({payload}, {call, put}){
      const response = yield call(addRoute, payload);
      if (response !== null && response.code === 200) {
          message.success('新增路由配置信息成功')
          router.push('/gateway/dynamic/routes')
      } else {
          message.error('新增路由配置信息失败，' + response.message)
      }
    },
    *update({payload},{call, put}) {
      const response = yield call(updateRoute, payload);
      if (response !== null && response.code === 200) {
          message.success('更新路由配置信息成功')
          router.push('/gateway/dynamic/routes')
      } else {
        message.error('更新路由配置信息失败，' + response.message)
      }
    },
    *refresh({_}, {call, put}) {
        const response = yield call(refresh);
        if (response !== null && response.code === 200) {
          message.success('刷新路由配置成功')
        } else {
          message.error('刷新路由配置服务失败，'+response.message)
        }
    },
    *deleteRoute({payload}, {call, put}) {
        const response = yield call(deleteRoute, payload);
        if (response.code === 200) {
          message.success('删除路由配置信息成功')
        } else {
          message.warn('删除路由配置信息失败，'+response.message)
        }
    }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        gatewayRoutesList: action.payload,
      };
    },
  },
};
