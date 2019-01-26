import { queryGatewayRoutes, addRoute, refresh } from '@/services/gateway';
import router from 'umi/router';

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
    *add({payload}, {call, put}){
      const response = yield call(addRoute, payload);
      if (response != null && response.code == 200) {
         router.push('/gateway/dynamic/routes')
      } else {
        console.log(response)
      }
    },
    *refresh({_}, {call, put}) {
        const response = yield call(refresh);
        if (response != null && response.code == 200) {
           console.log('refresh successfully');
        } else {
          console.log(response);
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
