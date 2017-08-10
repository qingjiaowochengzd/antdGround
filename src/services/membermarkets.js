import { request, config } from 'utils'

const { api } = config
const { membermarkets } = api

export async function query (params) {
  return request({
    url: membermarkets,
    method: 'get',
    data: params,
  })
}
