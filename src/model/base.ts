import { getUserInfo } from '@/services';
import { isRespSuccess } from '@/utils/request';
import { MenuItem, UserInfo } from './type';

export interface BaseState {
  user: UserInfo | null;
  menus: MenuItem[];
  isInited: boolean;
  collapsed: boolean;
}

const searchedMenuKeys: number[] = [];

const defaultState: BaseState = {
  user: null,
  menus: [],
  isInited: false,
  collapsed: false,
};

export default {
  namespace: 'base',

  state: defaultState,

  effects: {
    *getUserInfo(_: any, { put, call }: any) {
      const { data, code } = yield call(getUserInfo);
      if (isRespSuccess(code)) {
        yield put({
          type: 'save',
          payload: {
            user: data,
          },
        });
      }
    },

    *getMenus({ payload }: any, { put, call, select }: any) {
      // if (payload && searchedMenuKeys.includes(payload)) return;

      // searchedMenuKeys.push(payload);

      // const { data, code } = yield call(getMenuList, payload);
      // const oldMenus = (yield select((state: any) => state.base.menus)) as MenuItem[];

      // if (isRespSuccess(code)) {
      //   yield put({
      //     type: 'save',
      //     payload: {
      //       menus: [...oldMenus, ...data],
      //     },
      //   });
      // }
    },

    // 项目初始化
    *initState({ payload }: { payload: string[] }, { put, call }: any) {
      // yield put({ type: 'getUserInfo' });

      // const results = (yield call(searchBaseMenus, payload)) as MenuItem[];

      // yield put({ type: 'save', payload: { isInited: true, menus: results } });
    },
  },

  reducers: {
    save(state: any, { payload }: { payload: any }) {
      return {
        ...state,
        ...payload,
      };
    },
    updateUserInfo(state: BaseState, { payload }: { payload: Partial<BaseState['user']> }) {
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      };
    },
    setCollapsed(state: BaseState, { payload } : {payload: {collapsed: boolean}}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};