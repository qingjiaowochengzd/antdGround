import { request, config } from 'utils'

const { api } = config
const { cards } = api

export async function query (params) {
  return request({
    url: cards,
    method: 'get',
    data: params,
  })
}
