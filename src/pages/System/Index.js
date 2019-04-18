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

@connect(({ user, loading }) => ({
  user,
  loading: loading.models.user,
}))
class User extends Component {
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
      title: '账号',
      dataIndex: 'userId',
      align: 'left',
    },
    {
      title: '姓名',
      dataIndex: 'username',
      align: 'center',
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
      align: 'center',
    },
    {
      title: '微信号',
      dataIndex: 'weixin',
      align: 'center',
      render: (text, record)=>{
        const desc = text === true ? '是' : '否';
        return (
          desc
        )
      }
    },
    {
      title: 'QQ号',
      dataIndex: 'qq',
      align: 'center',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      align: 'right',
    },
    {
      title: '生效',
      dataIndex: 'enable',
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
      title: '入学年份',
      dataIndex: 'enrollmentYear',
      align: 'center',
    },
    {
      title: '常住城市',
      dataIndex: 'liveCity',
      align: 'center',
    },
    {
      title: '操作',
      width: 160,
      align: 'center',
      render: (text, record, index) => (
        <div>
          <Button onClick={() => this.update(record)} size="small" ghost type="primary">编辑</Button>
          <Button onClick={() => this.delete(record)} size="small" ghost type="danger" style={{marginLeft:6+'px'}}>禁用</Button>
        </div>
      )
    },
  ];

  add = () => {
      router.push('/gateway/dynamic/routes/add');
  }

  refresh = () => {
    this.getUserList()
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

  getUserList = () => {
    const { dispatch, user } = this.props;
    dispatch({
      type: 'user/queryUserList',
    });
  }
  
  componentDidMount() {
    this.getUserList()
  }

  render() {
    const { user, loading } = this.props;

    return (
      <PageHeaderWrapper title="成员管理">
        <Card>
          <div className={styles.btnGroup}>
              <Button onClick={this.refresh} className={styles.btnItem} type="primary" ghost>刷新</Button>
          </div>
          <Table
            rowKey='id'
            bordered
            size="small"
            loading={loading}
            dataSource={user.userList}
            columns={this.columns}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default User;
