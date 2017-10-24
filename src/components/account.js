import React, {Component} from "react";
import axios from 'axios';
import { Form, Input, Tooltip, Icon, Popover, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            student: {}
        };
    }

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    render() {
        const { getFieldDecorator } = this.props.form;

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

        return (
            <div className="center-register-form">
                <h1 className="main-h">Account</h1>
                <Form layout='horizontal' className="form-text-align-left">
                    <FormItem
                        label="Huidig wachtwoord"
                        {...formItemLayout}>

                        {getFieldDecorator('huidigWachtwoord', {
                            rules: [{
                                required: true, message: 'Voer uw wachtwoord in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="password"/>
                        )}

                    </FormItem>
                    <FormItem
                        label="Nieuw wachtwoord"
                        {...formItemLayout}
                    >

                        {getFieldDecorator('wachtwoord', {
                            rules: [{
                                required: true, message: 'Voer uw wachtwoord in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="password"/>
                        )}

                    </FormItem>
                    <FormItem
                        label="Bevestig wachtwoord"
                        {...formItemLayout}
                    >


                        {getFieldDecorator('bevestigWachtwoord', {
                            rules: [{
                                required: true, message: 'Voer uw wachtwoord in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="password"/>
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Wachtwoord wijzigen</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Form.create()(Account);