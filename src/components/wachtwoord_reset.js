import React, {Component} from "react";
import {Link} from 'react-router-dom'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

import Logo from './logo';

class WachtwoordReset extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="center">
                <div style={{textAlign: 'center'}}>
                    <Logo />
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="E-mail" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            <Link to="/dashboard">Wachwoord resetten</Link>
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedWachtwoordReset = Form.create()(WachtwoordReset);

export default WrappedWachtwoordReset;