import React, {Component} from "react";
import axios from 'axios';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

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


    componentWillMount(){
        axios.get('http://127.0.0.1:8090/student/Piet123')
            .then((res) => {
                this.setState({
                    dataLoaded: true,
                    student: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 5 },
        };

        return (
            <div>
                <h1 className="main-h">Profiel</h1>
                <Form layout='horizontal'>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Voornaam" value={this.state.student.voornaam}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Tussenvoegsel" value={this.state.student.tussenvoegsel}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Achternaam" value={this.state.student.achternaam}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="E-mail" value={this.state.student.email}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Telefoonnummer" value={this.state.student.telefoonnummer}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Gebruikersnaam" value={this.state.student.gebruikersnaam}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Nieuw wachtwoord" value={this.state.student.wachtwoord} type="password"/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Bevestig wachtwoord" value={this.state.student.wachtwoord} type="password"/>
                    </FormItem>
                <FormItem
                    {...formItemLayout}
                    hasFeedback
                >
                        <Select placeholder="Selecteer je studie" value={this.state.student.studierichting}>
                            <Option value="SE">SE</Option>
                            <Option value="MEDT">MEDT</Option>
                            <Option value="FICT">FICT</Option>
                            <Option value="BDAM">BDAM</Option>
                        </Select>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    hasFeedback
                >
                    <Select placeholder="Selecteer je mentor" value={this.state.student.mentor}>
                        <Option value="Roland Westveer">Roland Westveer</Option>
                        <Option value="Alex van Manen">Alex van Manen"</Option>
                    </Select>
                </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">Opslaan</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedProfiel = Form.create()(Profiel);

export default WrappedProfiel;