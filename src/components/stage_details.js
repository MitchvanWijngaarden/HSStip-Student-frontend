import React, {Component} from "react";
import { Form, Input, Tooltip, Icon, Checkbox, Select, Row, Col, DatePicker, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

import moment from 'moment';

const studierichtingOptions = ['BDAM', 'FICT', 'MEDT', 'SE'];
const moduleOptions = ['IWLS', 'IWLA'];

const dateFormat = 'DD-MM-YYYY';

class StageDetails extends Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 5 },
        };

        return (
            <div>
                <h1 className="main-h">Stage details</h1>

                <h2 className="main-h">Stage informatie</h2>

                <Form layout='horizontal'>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Bedrijf" value="Google" disabled />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Stagetitel" value="Node.js + React" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="keywords" value="JavaScript, React, Node" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <TextArea placeholder="Korte omschrijving stage" value="Google steelt je gegevens" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <TextArea placeholder="Lange omschrijving stage" value="Google steelt je gegevens" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <RangePicker  defaultValue={[moment('10-10-2017', dateFormat), moment('10-10-2017', dateFormat)]} disabled/>
                    </FormItem>

                    <FormItem
                        label="Studierichting"
                    >
                        <CheckboxGroup options={studierichtingOptions} defaultValue={['SE']} disabled />
                    </FormItem>

                    <FormItem
                        label="Module"
                    >
                        <CheckboxGroup options={moduleOptions} defaultValue={['IWLS']} disabled />
                    </FormItem>
                </Form>

                <h2 className="main-h">Contactpersoon informatie</h2>

                <Form layout='horizontal'>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Select placeholder="Contactpersoon voor bedrijf" value="Roland Westveer" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Voornaam" value="Jan" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Tussenvoegsel" value="van" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Achternaam" value="Bos" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Telefoonnummer" value="023-5654889" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="E-mail" value="Jan@hotmail.com" disabled/>
                    </FormItem>

                </Form>
            </div>
        );
    }
}

const WrappedStageDetails = Form.create()(StageDetails);

export default WrappedStageDetails;