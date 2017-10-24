import React, {Component} from "react";
import axios from 'axios';
import { Form, Input, Select, Button} from 'antd';
const FormItem = Form.Item;


class Profiel extends Component {
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

    studierichtingen = {
        SE: 'Software Engineering',
        MEDT: 'Mediatechnologie',
        FICT: 'Forensisch ICT',
        BDAM: 'Business Data Management'
    };

    componentDidMount(){
        axios.get('http://127.0.0.1:8090/student/s1097732@student.hsleiden.nl')
            .then((res) => {
                this.setState({
                    dataLoaded: true,
                    student: res.data
                });


                console.log(res.data);

                let {voornaam, tussenvoegsel, achternaam, email, mobielnummer, studierichting, mentor} = res.data;

                email = email.substring(0, 8);

                switch (studierichting){
                    case 'SE':
                        studierichting = this.studierichtingen.SE;
                        break;
                    case 'MEDT':
                        studierichting = this.studierichtingen.MEDT;
                        break;
                    case 'FICT':
                        studierichting = this.studierichtingen.FICT;
                        break;
                    case 'BDAM':
                        studierichting = this.studierichtingen.BDAM;
                        break;
                }

                const studentData = {voornaam, tussenvoegsel, achternaam, email, mobielnummer, studierichting, mentor};

                this.props.form.setFieldsValue({
                    ...studentData
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

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

        const emailContent = (
            <div>
                <p style={{maxWidth: 225}}>
                    Voer hier uw studentnummer in, beginnend met de letter s
                </p>
            </div>
        );

        return (
            <div className="center-register-form">
                <h1 className="main-h">Profiel</h1>
                <Form layout='horizontal' className="form-text-align-left">
                    <FormItem
                        label="Voornaam"
                        {...formItemLayout}
                        className="test">

                        {getFieldDecorator('voornaam', {
                            rules: [{
                                required: true, message: 'Voer uw voornaam in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        label="Tussenvoegsel"
                        {...formItemLayout}>

                        {getFieldDecorator('tussenvoegsel', {
                            rules: [{
                                required: false, message: 'Voer uw naam in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        label="Achternaam"
                        {...formItemLayout}
                    >

                        {getFieldDecorator('achternaam', {
                            rules: [{
                                required: true, message: 'Voer uw achternaam in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
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
                            <Input addonAfter="@student.hsleiden.nl" type="text" maxLength="8" placeholder="Bijv. s1097634" disabled/>
                        )}
                    </FormItem>
                    <FormItem
                        label="Mobiel nummer"
                        {...formItemLayout}
                    >

                        {getFieldDecorator('mobielnummer', {
                            rules: [{
                                required: true, message: 'Voer uw mobiel nummer in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input placeholder="Bijv. 0685648516" />
                        )}
                    </FormItem>
                <FormItem
                    label="Studie"
                    {...formItemLayout}>

                    {getFieldDecorator('studierichting', {
                        rules: [{
                            required: true, message: 'Kies je studie',
                        }, {
                            validator: this.checkConfirm,
                        }],
                    })(
                        <Select placeholder="Selecteer je studie">
                            <Option value="SE">{this.studierichtingen.SE}</Option>
                            <Option value="MEDT">{this.studierichtingen.MEDT}</Option>
                            <Option value="FICT">{this.studierichtingen.FICT}</Option>
                            <Option value="BDAM">{this.studierichtingen.BDAM}</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    label="Mentor"
                    {...formItemLayout}>

                    {getFieldDecorator('mentor', {
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
                        <Button type="primary" htmlType="submit">Opslaan</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedProfiel = Form.create()(Profiel);

export default WrappedProfiel;