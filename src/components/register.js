import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Form, Input, Select, Button } from 'antd';
const FormItem = Form.Item;

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

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
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
                <p style={{maxWidth: 225}}>
                    Voer hier uw studentnummer in, beginnend met de letter s
                </p>
            </div>
        );

        const passwordContent = (
            <div>
                <p style={{maxWidth: 225}}>
                    Gebruik ten minste 6 tekens.
                    Gebruik niet het wachtwoord van een andere site of iets dat erg voor de hand liggend is, zoals de naam van uw huisdier
                </p>
            </div>
        );

        return (
            <div className="center center-register-form">
                <div style={{textAlign: 'center'}}>
                    <Logo />
                </div>
                <Form onSubmit={this.handleSubmit} className="register-form ">
                    <FormItem
                        {...formItemLayout}
                        label="E-mail ">

                        {getFieldDecorator('email', {
                            rules: [{
                                required: true, message: 'Please input your password!',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input addonAfter="@student.hsleiden.nl" type="text" maxLength="8" placeholder="Bijv. s1097634" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Wachtwoord"
                        hasFeedback>

                            {getFieldDecorator('password', {
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
                        label="Bevestig wachtwoord"
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
                            <Input type="text" placeholder="Bijv. 0685648516"></Input>
                        )}
                    </FormItem>
                    <FormItem
                        label="Studie"
                        {...formItemLayout}
                        hasFeedback>

                        {getFieldDecorator('studie', {
                            rules: [{
                                required: true, message: 'Kies je studie',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Select placeholder="Selecteer je studie">
                                <Option value="SE">Software Engineering</Option>
                                <Option value="MEDT">Mediatechnologie</Option>
                                <Option value="FICT">Forensisch ICT</Option>
                                <Option value="BDAM">Business Data Management</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        label="Mentor"
                        {...formItemLayout}
                        hasFeedback>

                        {getFieldDecorator('studie', {
                            rules: [{
                                required: true, message: 'Kies je studie',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Select placeholder="Selecteer je mentor">
                                <Option value="Roland Westveer">Roland Westveer</Option>
                                <Option value="Alex van Manen">Alex van Manen</Option>
                            </Select>
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

export default Form.create()(RegistrationForm);