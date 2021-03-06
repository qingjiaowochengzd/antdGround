import modelExtend from 'dva-model-extend'
import { query } from '../../services/customer/customerinfos'
import { pageModel } from '../common'

export default modelExtend(pageModel, {

  namespace: 'customerinfo',

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/customer/info/customerinfo') {
          dispatch({ type: 'query',
            payload: {
              status: 2,
              ...location.query,
            } })
        }
      })
    },
  },

  effects: {
    * query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, payload)
      console.log(JSON.stringify(data))
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      } else {
        throw data
      }
    },
  },
})
