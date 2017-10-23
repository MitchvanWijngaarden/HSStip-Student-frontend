import React, {Component} from "react";
import {Link} from 'react-router-dom'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

import Logo from './logo';

class Login extends Component {
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
                            <Input placeholder="E-mail"
                                   addonAfter="@student.hsleiden.nl" maxLength="8" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input type="password" placeholder="Wachtwoord" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Onthoud mij</Checkbox>
                        )}
                        <Link to="/wachtwoord-reset" className="login-form-forgot ">Wachtwoord vergeten</Link>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            <Link to="/dashboard">Inloggen</Link>
                        </Button>
                        Of <Link to="/register">Registreren</Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;