export interface Project {
    id: number;
    name: string;
    logo: string;
    maintainer: string;
    created: number;
    updated: number;
  }
  
  export interface UserInfo {
    id: number;
    username: string;
    email: string;
    phone: string;
    last_login_time: number;
    last_login_ip: string;
    state: 0 | 1;
    /** 注册时间 */
    ctime: number;
  }
  
  export interface MenuItem {
    id: number;
    /** 父级id */
    parent_id: number;
    name: string;
    active: 1 | 0;
    /** 排序值 */
    score: number;
    /** 是否有子菜单 */
    child: boolean;
    point: string;
  }
  