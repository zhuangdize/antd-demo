/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Outlet } from 'react-router';
import classNames from 'classnames';
import { ConfigProvider, Layout as ALayout } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import type { ConfigProviderProps } from 'antd/lib/config-provider';
import { StyleProvider } from '@ant-design/cssinjs';
import themeConfig from '@/themeConfig';
import Header from '../Header';

import './index.less';

const providerProps: ConfigProviderProps = {
  theme: themeConfig,
  locale: zhCN,
  autoInsertSpaceInButton: false,
  // 配置弹出层（主要是下拉面板之类）能够跟随屏幕滚动，如果部分组件异常，可以单独去调整对应组件的配置
  getPopupContainer(triggerNode) {
    if (triggerNode) {
      return (triggerNode.parentNode || document.body) as HTMLElement;
    }
    return document.body;
  },
};

const BaseLayout = ({ children }: { children: React.ReactNode }) => (
  <ConfigProvider {...providerProps}>
    <StyleProvider hashPriority="high">{children}</StyleProvider>
  </ConfigProvider>
);

const Layout: React.FC = () => {
  return (
    <BaseLayout>
      <ALayout className="atlas-layout">
        <Header />
        <ALayout>
          {/* <Aside /> */}
          <ALayout.Content className="atlas-layout_content">
            <Outlet />
          </ALayout.Content>
        </ALayout>
      </ALayout>
    </BaseLayout>
  );
};

// 无侧边菜单，顶部只显示logo部分的布局
export const LayoutWithoutAside: React.FC<{
  children?: React.ReactNode;
  contentClass?: string;
  hideProjectSelect?: boolean;
  hideUserInfo?: boolean;
}> = ({ children, contentClass, hideUserInfo, hideProjectSelect }) => {
  return (
    <BaseLayout>
      <ALayout className="atlas-layout">
      <Header />
        <ALayout.Content className={classNames('atlas-layout_content', contentClass)}>
          {children}
        </ALayout.Content>
      </ALayout>
    </BaseLayout>
  );
};

export default LayoutWithoutAside;
