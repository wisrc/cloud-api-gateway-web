import request from '@/utils/request';
import { async } from 'q';

export async function queryWhiteList() {
  return request('/server/gateway/white/list');
}

export async function addWhiteList(params){
  return request('/server/gateway/white/list', {
    method: 'POST',
    body: params,
  });
}

export async function deleteWhiteList(whiteListId) {
  return request(`/server/gateway/white/list/${whiteListId}`,{
    method: 'DELETE',
  })
}

export async function updateWhiteList(params){
  return request('/server/gateway/white/list',{
    method: 'PUT',
    body: params,
  })
}