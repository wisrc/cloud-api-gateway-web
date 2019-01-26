import React, { Component } from 'react';
import {
  Button,
  Card,
  Table,
} from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { connect } from 'dva';
import styles from './Index.less'
import router from 'umi/router';


@connect(({ gatewayRoutes, loading }) => ({
  gatewayRoutes,
  loading: loading.models.gatewayRoutes,
}))
class Gateway extends Component {
  columns = [
    {
      title: '序号',
      dataIndex: 'id',
      align: 'center',
      key: 'id',
    },
    {
      title: '路由',
      dataIndex: 'path',
      align: 'center',
      key: 'path',
    },
    {
      title: '服务名称',
      dataIndex: 'serviceId',
      align: 'center',
      key: 'serviceId',
    },
    {
      title: '服务地址',
      dataIndex: 'url',
      align: 'center',
      key: 'url',
    },
    {
      title: '忽略前缀',
      dataIndex: 'stripPrefix',
      align: 'center',
      key: 'stripPrefix',
      render: (text, record)=>{
        const desc = text === true ? '是' : '否';
        return (
          desc
        )
      }
    },
    {
      title: '重试',
      dataIndex: 'retryable',
      align: 'center',
      key: 'retryable',
      render: (text, record)=>{
          const desc = text === true ? '是' : '否';
          return (
            desc
          )
      }
    },
    {
      title: '生效',
      dataIndex: 'enabled',
      align: 'center',
      key: 'enabled',
      render: (text, record)=>{
        const desc = text === true ? '是' : '否';
        return (
          desc
        )
      }
    },
    {
      title: '路由名称',
      dataIndex: 'apiName',
      align: 'center',
      key: 'apiName'
    },
    {
      title: '所属域',
      dataIndex: 'domainId',
      align: 'center',
      key: 'domainId'
    },
    {
      title: '描述简介',
      dataIndex: 'description',
      align: 'center',
      key: 'description'
    },
  ];

  add = () => {
      router.push('/gateway/dynamic/routes/add');
  }

  refresh = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'gatewayRoutes/refresh'
    })
  }

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
          <div className={styles.btnGroup}>
              <Button onClick={this.add} className={styles.btnItem} type="primary" ghost>新增</Button>
              <Button className={styles.btnItem} type="primary" ghost>编辑</Button>
              <Button onClick={this.refresh} className={styles.btnItem} type="primary" ghost>刷新</Button>
              <Button className={styles.btnItem} type="danger" ghost>删除</Button>
          </div>
          <Table
            bordered
            rowKey="id"
            size="small"
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
