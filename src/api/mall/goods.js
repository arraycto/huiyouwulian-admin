import request from '@/router/axios'

export function listGoods(query) {
  return request({
    url: '/yry/mall/goods/list',
    method: 'get',
    params: query
  })
}

export function deleteGoods(data) {
  return request({
    url: '/yry/mall/goods/delete',
    method: 'post',
    data
  })
}

export function publishGoods(data) {
  return request({
    url: '/yry/mall/goods/save',
    method: 'post',
    data
  })
}

export function detailGoods(id) {
  return request({
    url: '/yry/mall/goods/info/'+id,
    method: 'get'
  })
}

export function editGoods(data) {
  return request({
    url: '/yry/mall/goods/update',
    method: 'post',
    data
  })
}

export function listCatAndBrand() {
  return request({
    url: '/yry/mall/goods/catAndBrand',
    method: 'get'
  })
}


export function editGoodsPrice(data) {
  return request({ 
    url: '/yry/mall/goods/editGoodsPrice',
    method: 'post',
    data
  })
}