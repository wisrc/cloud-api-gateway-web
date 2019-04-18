import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'MicroService',
          title: '万物互联 IoT 物联网研发平台',
          href: '/',
          blankTarget: false,
        },
        // {
        //   key: 'Github',
        //   title: <Icon type="github" />,
        //   href: 'https://github.com/wisrc',
        //   blankTarget: true,
        // },
        // {
        //   key: 'AntDesignPro',
        //   title: 'Ant Design Pro 首页',
        //   href: 'https://pro.ant.design',
        //   blankTarget: true,
        // },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 wisrc.com
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
