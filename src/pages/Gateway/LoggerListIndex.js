import React, { Component } from 'react';
import {
  Button,
  Card,
  Table,
} from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { connect } from 'dva';
import styles from './LoggerListIndex.less'
import router from 'umi/router';

@connect(({ loggerList, loading }) => ({
  loggerList,
  loading: loading.models.loggerList,
}))
class LoggerListIndex extends Component {
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
      align: 'center',
    },
    {
      title: '账号',
      dataIndex: 'username',
      align: 'center'
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      align: 'center'
    },
    {
        title: '结束时间',
        dataIndex: 'endTime',
        align: 'center',
    },
    {
      title: '耗时（ms）',
      dataIndex: 'costTime',
      align: 'right',
    },
    {
        title: '状态码',
        dataIndex: 'status',
        align: 'center',
    },
    {
        title: 'Query参数',
        dataIndex: 'query',
        align: 'center',
    },
    {
        title: 'Body参数',
        dataIndex: 'body',
        align: 'center',
    },
    {
        title: '信息描述',
        dataIndex: 'message',
        align: 'center',
    }
  ];

  getRoutes = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'loggerList/fetch',
    });
  }
  
  componentDidMount() {
    this.getRoutes()
  }

  render() {
    const { loggerList, loading } = this.props;

    return (
      <PageHeaderWrapper title="请求日志管理">
        <Card>
          <div className={styles.btnGroup}>
              <Button className={styles.btnItem} type="primary" ghost>刷新</Button>
          </div>
          <Table
            rowKey='id'
            bordered
            size="small"
            loading={loading}
            dataSource={loggerList.loggerList}
            columns={this.columns}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default LoggerListIndex;
