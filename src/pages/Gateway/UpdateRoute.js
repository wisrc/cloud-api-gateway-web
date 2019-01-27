import React, { Component } from 'react';
import {
  Button,
  Card,
  Form,
  Table,
  Input,
  Radio,
  Divider
} from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import FormItem from 'antd/lib/form/FormItem';
import styles from './UpdateRoute.less';
import router from 'umi/router';
import { connect } from 'dva';

const RadioGroup = Radio.Group;


@Form.create()
@connect(({gatewayRoutes, loading}) => ({
    gatewayRoutes,
    submiting: loading.effects['gatewayRoutes/add']
}))
class AddRoute extends Component {

    /***
     * 取消新增操作，返回动态路由配置列表
     */
    cancel = () => {
        router.push('/gateway/dynamic/routes')
    }

    /**
     * 新增动态路由信息
     * @param 动态路由参数
     */
    update = (params) => {
        const {dispatch} = this.props
        dispatch({
          type: 'gatewayRoutes/update',
          payload: params,
        });
    }

    /**
     * 表单校验，如果校验成功，则提交新增申请到后台，否则不执行提交操作
     * */
    check =  (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            const {
                id
            } = this.props.location.state
            values.id = id;
            this.update(values)
          }
        });
    }

    render(){

        const { getFieldDecorator } = this.props.form;

        const {
            id,
            path,
            serviceId,
            url,
            stripPrefix,
            retryable,
            enabled,
            domainId,
            apiDoc,
            apiName
        } = this.props.location.state

        const {submiting} = this.props;

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8, offset: 1 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
        };

        return (
          <PageHeaderWrapper title="编辑动态路由">
            <Card>
                <Form onSubmit={this.check}>
                    <Form.Item
                        {...formItemLayout}
                        label="路由"
                        hasFeedback>
                        {getFieldDecorator('path', {
                            initialValue: path,
                            rules: [{
                                required: true,
                                message: '请输入路由地址，如: /gateway/**',
                            }],
                        })(
                            <Input placeholder="请输入路由地址,如: /gateway/**" />
                        )}
                    </Form.Item>
                    <FormItem
                        {...formItemLayout}
                        label="服务ID">
                        {getFieldDecorator('serviceId',{
                            initialValue: serviceId,
                        })(
                            <Input></Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="服务URL地址"
                        >
                        {getFieldDecorator('url',{
                            initialValue: url,
                        })(
                            <Input></Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="忽略前缀"
                        >
                        {getFieldDecorator('stripPrefix',{
                            initialValue: stripPrefix,
                        })(
                            <RadioGroup>
                                <Radio value={true}>是</Radio>
                                <Radio value={false}>否</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="是否有效"
                        >
                        {getFieldDecorator('enabled',{
                            initialValue: enabled
                        })(
                            <RadioGroup>
                                <Radio value={true}>是</Radio>
                                <Radio value={false}>否</Radio>
                            </RadioGroup>                        
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="是否重试"
                        >
                        {getFieldDecorator('retryable',{
                            initialValue: retryable
                        })(
                            <RadioGroup>
                                <Radio value={true}>是</Radio>
                                <Radio value={false}>否</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="服务中文名"
                        >
                        {getFieldDecorator('apiName',{
                            initialValue: apiName
                        })(
                            <Input></Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="所属域"
                        >
                        {getFieldDecorator('domainId',{
                            initialValue: domainId,
                        })(
                            <Input></Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="API文档"
                        >
                        {getFieldDecorator('apiDoc',{
                            initialValue: apiDoc
                        })(
                            <Input placeholder="https://localhost:8080/demo/swagger-ui.html"></Input>
                        )}
                    </FormItem>
                    <Divider />
                    <div className={styles.Footer}>
                        <Button onClick={this.cancel} type="danger" className={styles.FooterButtonItem}>取 消</Button>
                        <Button loading={submiting} htmlType="submit" type="primary" ghost>提 交</Button>
                    </div>
                </Form>
            </Card>
          </PageHeaderWrapper>
        )
    }
};

export default AddRoute;