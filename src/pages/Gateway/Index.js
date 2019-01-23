import React, { Component } from 'react';
import {
  Button,
  Menu,
  Dropdown,
  Icon,
  Row,
  Col,
  Steps,
  Card,
  Popover,
  Badge,
  Table,
  Tooltip,
  Divider,
} from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { connect } from 'dva';
import { func } from 'prop-types';

@connect(({ gatewayRoutes, loading }) => ({
  gatewayRoutes,
  loading: loading.models.gatewayRoutes,
}))
class Gateway extends Component {
  columns = [
    {
      title: '序号',
      dataIndex: 'index',
      align: 'center',
    },
    {
      title: '路由',
      dataIndex: 'path',
      align: 'center',
    },
    {
      title: '服务名称',
      dataIndex: 'serviceId',
      align: 'center',
    },
    {
      title: '服务地址',
      dataIndex: 'url',
      align: 'center',
    },
    {
      title: '忽略前缀',
      dataIndex: 'stripPrefix',
      align: 'center',
    },
    {
      title: '是否重试',
      dataIndex: 'retryable',
      align: 'center',
    },
    {
      title: '是否生效',
      dataIndex: 'enabled',
      align: 'center',
    },
    {
      title: '路由名称',
      dataIndex: 'apiName',
      align: 'center',
    },
    {
      title: '所属域',
      dataIndex: 'domainId',
      align: 'center',
    },
    {
      title: '描述简介',
      dataIndex: 'description',
      align: 'center',
    },
  ];

  componentDidMount() {
    const { dispatch, gatewayRoutes } = this.props;
    dispatch({
      type: 'gatewayRoutes/fetch',
    });
  }

  render() {
    const { gatewayRoutes, loading } = this.props;
    return (
      <PageHeaderWrapper title="动态路由管理">
        <Card>
          <Table
            bordered
            rowKey="path"
            loading={loading}
            dataSource={gatewayRoutes.gatewayRoutesList}
            columns={this.columns}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Gateway;
