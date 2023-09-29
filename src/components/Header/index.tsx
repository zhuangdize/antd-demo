import React, { useEffect, useMemo, useState } from 'react';
import { Dropdown, Layout, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { MenuProps } from 'antd';
import { BaseState } from '@/model/base';
import { logout } from '@/utils/login';
// import { systemRoutes } from '@/routes/config';
import './style.less';
// import AIcon from '../AIcon';

interface Props {
  hideProjectSelect?: boolean;
  hideUserInfo?: boolean;
}

const Header: React.FC<Props> = ({ hideProjectSelect, hideUserInfo }) => {
  // const { user } = useSelector((state: { base: BaseState }) => state.base);
  const [items, setItems] = useState<MenuProps['items']>([]);

  useEffect(() => {
    
  }, []);


  const onMenuClick = ({ key }: any) => {
    if (key === 'logout') {
      logout();
    }
  };

  return (
    <Layout.Header className="atlas-layout_header">
      {/* <img className="logo" src={logo} alt="logo" /> */}

      <div className="nav-right">
        {hideUserInfo ? null : (
          <Dropdown
            overlayClassName="nav-dropdown"
            trigger={['click']}
            menu={{
              items,
              onClick: onMenuClick,
            }}
            placement="bottomRight"
          >
            <div>
              {/* <div className="user-avatar">{user?.username?.[0]}</div> */}
              {/* <span className="user-name">{user?.username}</span> */}
            </div>
          </Dropdown>
        )}
      </div>
    </Layout.Header>
  );
};

export default Header;
