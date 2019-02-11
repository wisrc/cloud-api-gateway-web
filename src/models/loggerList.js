import { queryList } from '@/services/loggerList';
import router from 'umi/router';
import { message } from 'antd';

export default {
  namespace: 'loggerList',
  state: {
    loggerList: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryList);
      if (response != null && response.code == 200) {
        yield put({
          type: 'save',
          payload: response.data,
        });
      } else {
        message.error('请求发生错误,'+ response.message)
      }
    }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        loggerList: action.payload,
      };
    },
  },
};
