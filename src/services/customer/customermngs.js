import { request, config } from 'utils'

const { api } = config
const { customerinfos } = api

export async function query (params) {
  return request({
    url: customerinfos,
    method: 'get',
    data: params,
  })
}
