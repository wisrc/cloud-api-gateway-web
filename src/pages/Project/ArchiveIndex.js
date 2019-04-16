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
class ArchiveIndex extends Component {
  columns = [
    {
      title: '序号',
      width: 50,
      align: 'center',
      key: "id",
      dataIndex: 'id',
      render: (text, record, index) => (index + 1)
    },
    {
      title: '路由',
      dataIndex: 'path',
      align: 'left',
    },
    {
      title: '微服务ID',
      dataIndex: 'serviceId',
      align: 'left',
    },
    {
      title: '微服务地址',
      dataIndex: 'url',
      align: 'left',
    },
    {
      title: '忽略前缀',
      width: 80,
      dataIndex: 'stripPrefix',
      align: 'center',
      render: (text, record)=>{
        const desc = text === true ? '是' : '否';
        return (
          desc
        )
      }
    },
    {
      title: '重试',
      width:50,
      dataIndex: 'retryable',
      align: 'center',
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
      width: 50,
      align: 'center',
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
    },
    {
      title: '所属域',
      dataIndex: 'domainId',
      align: 'center',
    },
    {
      title: '描述简介',
      dataIndex: 'apiDoc',
      align: 'left',
      render: (text, record, index) => (
          <a target="blank" href={text}>{text}</a>
      )
    },
    {
      title: '操作',
      width: 160,
      align: 'center',
      render: (text, record, index) => (
        <div>
          <Button onClick={() => this.update(record)} size="small" ghost type="primary">编辑</Button>
          <Button onClick={() => this.delete(record)} size="small" ghost type="danger" style={{marginLeft:6+'px'}}>删除</Button>
        </div>
      )
    },
  ];

  add = () => {
      router.push('/gateway/dynamic/routes/add');
  }

  refresh = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'gatewayRoutes/refresh'
    }).then(() => {
      this.getRoutes()
    })
  }

  delete = (item) => {
    const { dispatch } = this.props;
    dispatch({
      type:'gatewayRoutes/deleteRoute',
      payload: item.id
    }).then(() => {
      this.getRoutes()
    })
  }

  update = (record) => {
    router.push({
      pathname: '/gateway/dynamic/routes/update',
      state: record,
    })
  }

  getRoutes = () => {
    const { dispatch, gatewayRoutes } = this.props;
    dispatch({
      type: 'gatewayRoutes/fetch',
    });
  }
  
  componentDidMount() {
    this.getRoutes()
  }

  render() {
    const { gatewayRoutes, loading } = this.props;

    return (
      <PageHeaderWrapper title="项目归档">
        <Card>
          <div className={styles.btnGroup}>
              <Button onClick={this.add} className={styles.btnItem} type="primary" ghost>新增</Button>
              <Button onClick={this.refresh} className={styles.btnItem} type="primary" ghost>刷新</Button>
          </div>
          <Table
            rowKey='id'
            bordered
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

export default ArchiveIndex;
