import { queryWhiteList, addWhiteList, deleteWhiteList, updateWhiteList } from '@/services/whitelist';
import router from 'umi/router';
import { message } from 'antd';

export default {
  namespace: 'whitelist',
  state: {
    whiteList: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryWhiteList);
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
      const response = yield call(addWhiteList, payload);
      if (response !== null && response.code === 200) {
          message.success('新增白名单配置信息成功')
          router.push('/gateway/whitelist/routes')
      } else {
          message.error('新增白名单配置信息失败，' + response.message)
      }
    },
    *update({payload},{call, put}) {
      const response = yield call(updateWhiteList, payload);
      if (response !== null && response.code === 200) {
          message.success('更新白名单配置信息成功')
          router.push('/gateway/whitelist/routes')
      } else {
        message.error('更新白名单配置信息失败，' + response.message)
      }
    },
    *delete({payload}, {call, put}) {
        const response = yield call(deleteWhiteList, payload);
        if (response.code === 200) {
          message.success('删除白名单配置信息成功')
        } else {
          message.warn('删除白名单配置信息失败，'+response.message)
        }
    }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        whiteList: action.payload,
      };
    },
  },
};
