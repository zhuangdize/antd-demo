import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CODE } from '@/constants';
import { login } from './login';
import { getToken } from './token';

interface ResponseData<T = unknown> {
  code: number;
  data: T;
  message: string;
}

const NO_AUTH = 'noauth';

const request = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
  withCredentials: true,
  timeout: 30000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const { headers } = config;

    const authToken = headers?.Authorization;

    // 通过 https://note.4399doc.com/ 访问站点时，请求url需要添加/atlas前缀
    if (window.location.host === 'note.4399doc.com' && !config.baseURL?.startsWith('/atlas')) {
      config.baseURL = `/atlas${config.baseURL || ''}`;
    }

    // 需要权限时，设置 Authorization 字段
    if (!authToken || authToken !== NO_AUTH) {
      config.headers = config.headers || {} as any;
      config.headers.Authorization = `Bearer ${getToken()}`;
    } else if (authToken === NO_AUTH) {
      headers.Authorization = undefined;
    }

    return config;
  },
  (error) => {
    // 错误
    Promise.reject(error);
  },
);

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    if (!response.data) {
      throw Error('网络异常，请重试~');
    }

    if (response.data.code === CODE.NO_AUTH) {
      login();
      throw Error('登录校验失败');
    }

    return response;
  },
  (error) => {
    throw Error(`请求错误 ${error.response.status}：${error.response.statusText}`);
  },
);

interface RequestConfig {
  params?: AxiosRequestConfig['params'];
  data?: AxiosRequestConfig['data'];
  noAuth?: boolean;
  headers?: AxiosRequestConfig['headers'];
}

interface PageParams {
  page?: number;
  limit?: number;
}

export function get<D>(url: string, config?: RequestConfig) {
  const { params, noAuth } = config || {};

  return request<ResponseData<D>>({
    method: 'get',
    url,
    params,
    headers: {
      Authorization: noAuth ? NO_AUTH : undefined,
    },
  }).then((res) => res.data);
}

export function post<D>(url: string, config?: RequestConfig) {
  const { params, data, noAuth, headers } = config || {};

  return request<ResponseData<D>>({
    method: 'post',
    url,
    params,
    data,
    headers: {
      Authorization: noAuth ? NO_AUTH : undefined,
      ...(headers || {}),
    },
  }).then((res) => res.data);
}

interface PageResponse<T> {
  count: number;
  page: number;
  page_size: number;
  list: T;
}

/** 分页获取数据方法封装，传入参数类型和结果详情项数据类型 */
export function pageGet<P extends Record<string, any>, D>(url: string, noAuth?: boolean) {
  return (params?: P & PageParams) => {
    return get<PageResponse<D>>(url, {
      noAuth,
      params,
    });
  };
}

/** 根据code判断请求是否成功 */
export function isRespSuccess(code: number) {
  return code === CODE.SUCCESS;
}

export default request;
