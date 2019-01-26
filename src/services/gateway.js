import request from '@/utils/request';
import { async } from 'q';

export async function queryGatewayRoutes() {
  return request('/server/gateway/routes');
}

export async function addRoute(params){
  return request('/server/gateway/routes', {
    method: 'POST',
    body: params,
  });
}

export async function refresh(){
  return request('/server/gateway/refresh')
}