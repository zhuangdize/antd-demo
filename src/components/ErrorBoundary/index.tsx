import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError() as any;
  const [stackMsg, setStackMsg] = useState('');

  useEffect(() => {
    if (error.stack) {
      setStackMsg('请重新刷新页面');
    }
  }, [error.stack]);

  const reload = () => {
    window.location.reload();
  };

  return (
    <div style={{ background: '#fff', margin: '22px', padding: '22px' }}>
      <h1>
        页面内容更新，请<span className="primary-color" style={{ cursor: 'pointer' }} onClick={reload}>刷新</span>重进
      </h1>
    </div>
  );
};

export default ErrorBoundary;
