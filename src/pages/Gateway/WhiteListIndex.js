import React, { Component } from 'react';
import {
  Button,
  Card,
  Table,
} from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { connect } from 'dva';
import styles from './WhiteListIndex.less'
import router from 'umi/router';

@connect(({ whitelist, loading }) => ({
    whitelist,
    loading: loading.models.whitelist,
}))
class WhiteListIndex extends Component {
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
      title: '请求方法',
      dataIndex: 'method',
      width: 80,
      align: 'left',
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
      title: '所属域',
      dataIndex: 'domainId',
      align: 'center',
    },
    {
        title: '创建人',
        dataIndex: 'createBy',
        align: 'center',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        align: 'center',
    },
    {
        title: '修改人',
        dataIndex: 'updateBy',
        align: 'center',
    },
    {
        title: '修改时间',
        dataIndex: 'updateTime',
        align: 'center',
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
      router.push('/gateway/whitelist/routes/add');
  }

  delete = (item) => {
    const { dispatch } = this.props;
    dispatch({
      type:'whitelist/delete',
      payload: item.id
    }).then(() => {
      this.getRoutes()
    })
  }

  update = (record) => {
    router.push({
      pathname: '/gateway/whitelist/routes/update',
      state: record,
    })
  }

  getRoutes = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'whitelist/fetch',
    });
  }
  
  componentDidMount() {
    this.getRoutes()
  }

  render() {
    const { whitelist, loading } = this.props;

    return (
      <PageHeaderWrapper title="白名单管理">
        <Card>
          <div className={styles.btnGroup}>
              <Button onClick={this.add} className={styles.btnItem} type="primary" ghost>新增</Button>
          </div>
          <Table
            rowKey='id'
            bordered
            size="small"
            loading={loading}
            dataSource={whitelist.whiteList}
            columns={this.columns}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default WhiteListIndex;
