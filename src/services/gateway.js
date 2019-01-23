import request from '@/utils/request';

export async function queryGatewayRoutes() {
  return request('/server/gateway/routes');
}
