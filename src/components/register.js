import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Form, Input, Tooltip, Icon, Popover, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

import Logo from './logo';

class RegistrationForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 26 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 8,
                },
            },
        };

        const emailContent = (
            <div>
                <p style={{maxWidth: 250}}>
                    Voer hier uw studentnummer in, beginnend met de letter s
                </p>
            </div>
        );

        const passwordContent = (
            <div>
                <p style={{maxWidth: 250}}>
                    Gebruik ten minste acht tekens.
                    Gebruik niet het wachtwoord van een andere site of iets dat erg voor de hand liggend is, zoals de naam van uw huisdier
                </p>
            </div>
        );

        const phoneContent = (
            <div>
                <p style={{maxWidth: 250}}>
                    Je persoonlijke mobiel nummer om bereikt te kunnen worden
                </p>
            </div>
        );

        return (
            <div className="center">
                <div style={{textAlign: 'center'}}>
                    <Logo />
                </div>
                <Form onSubmit={this.handleSubmit} className="register-form ">
                    <FormItem
                        {...formItemLayout}
                        label="E-mail ">

                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please input your password!',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Popover content={emailContent} placement="right" trigger="focus">
                                <Input addonAfter="@student.hsleiden.nl" type="text" maxLength="8" placeholder="Bijv. s1097634" />
                            </Popover>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Wachtwoord"
                        hasFeedback
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please confirm your password!',
                            }, {
                                validator: this.checkPassword,
                            }],
                        })(
                            <Popover content={passwordContent} placement="right" title="Wachtwoordkwaliteit" trigger="focus">
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            </Popover>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Herhaal wachtwoord"
                        hasFeedback
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: 'Please confirm your password!',
                            }, {
                                validator: this.checkPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Voornaam"
                    >
                        {getFieldDecorator('website', {
                            rules: [{ required: true, message: 'Please input website!' }],
                        })(
                            <Input
                                placeholder=""
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Tussenvoegsel"
                    >
                        {getFieldDecorator('website', {
                            rules: [{ message: 'Please input website!' }],
                        })(
                            <Input
                                placeholder=""
                            >
                            </Input>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Achternaam"
                    >
                        {getFieldDecorator('website', {
                            rules: [{ required: true, message: 'Please input website!' }],
                        })(
                            <Input placeholder=""></Input>

                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Mobiel nummer">

                        {getFieldDecorator('website', {
                            rules: [{ required: true, message: 'Please input website!' }],
                        })(
                            <Popover content={phoneContent} placement="right" trigger="focus">
                                <Input type="text" placeholder="Bijv. 0685648516"></Input>
                            </Popover>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Cohort">

                        {getFieldDecorator('website', {
                            rules: [{ required: true, message: 'Please input website!' }],
                        })(
                            <Select />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Mentor">

                        {getFieldDecorator('website', {
                            rules: [{ required: true, message: 'Please input website!' }],
                        })(
                            <Select />
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Registreren</Button>
                        <br/>
                        Heb je al een account? <Link to="/">Inloggen</Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedRegistration = Form.create()(RegistrationForm);

export default WrappedRegistration;