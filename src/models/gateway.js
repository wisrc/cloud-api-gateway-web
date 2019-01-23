import { queryGatewayRoutes } from '@/services/gateway';

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
        console.log('请求发生错误：', response);
      }
    },
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
