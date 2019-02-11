import request from '@/utils/request';
import { async } from 'q';

export async function queryList() {
  return request('/server/gateway/logger');
}