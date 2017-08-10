import { request, config } from 'utils'

const { api } = config
const { usermarkets } = api

export async function query (params) {
  return request({
    url: usermarkets,
    method: 'get',
    data: params,
  })
}
