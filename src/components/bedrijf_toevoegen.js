import React, {Component} from "react";
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class BedrijfToevoegen extends Component {

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
                <h1 className="main-h">Bedrijf toevoegen</h1>
                <Form layout='horizontal' className="form-text-align-left">
                    <FormItem
                        label="Bedrijfsnaam"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('bedrijfsnaam', {
                            rules: [{
                                required: true, message: 'Voer het bedrijfsnaam in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        label="Adres"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('adres', {
                            rules: [{
                                required: true, message: 'Voer het adres in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        label="Postcode"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('postcode', {
                            rules: [{
                                required: true, message: 'Voer de postcode in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input placeholder="Bijv. 2154SK" maxLength="6" />
                        )}
                    </FormItem>
                    <FormItem
                        label="Stad"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('stad', {
                            rules: [{
                                required: true, message: 'Voer de stad in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        label="Telefoonnummer"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('telefoonnummer', {
                            rules: [{
                                required: true, message: 'Voer het telefoonnummer in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input placeholder="Bijv. 0235654889" />
                        )}
                    </FormItem>
                    <FormItem
                        label="Website"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('website', {
                            rules: [{
                                required: true, message: 'Voer de website in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input placeholder="Bijv. www.google.nl" />
                        )}
                    </FormItem>
                    <FormItem
                        label="Omschrijving bedrijf"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('bedrijfomschrijving', {
                            rules: [{
                                required: true, message: 'Voer uw voornaam in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <TextArea />
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Toevoegen</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Form.create()(BedrijfToevoegen);