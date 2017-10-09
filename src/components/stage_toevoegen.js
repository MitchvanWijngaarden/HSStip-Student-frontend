import React, {Component} from "react";
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, DatePicker} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const studierichtingOptions = ['BDAM', 'FICT', 'MEDT', 'SE'];
const moduleOptions = ['IWLS', 'IWLA'];

class StageToevoegen extends Component {

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
                <h1 className="main-h1">Stage toevoegen</h1>

                <h2 className="main-h1">Stage informatie</h2>

                <Form layout='horizontal'>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Bedrijf" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Stagetitel" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="keywords" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <TextArea placeholder="Korte omschrijving stage" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <TextArea placeholder="Lange omschrijving stage" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <RangePicker />
                    </FormItem>

                    <FormItem
                        label="Studierichting"
                    >
                        <CheckboxGroup options={studierichtingOptions} />
                    </FormItem>

                    <FormItem
                        label="Module"
                    >
                        <CheckboxGroup options={moduleOptions} />
                    </FormItem>
                </Form>

                    <h2 className="main-h1">Contactpersoon informatie</h2>

                    <Form layout='horizontal'>
                        <FormItem
                            {...formItemLayout}
                        >
                            <Select placeholder="Contactpersoon voor bedrijf" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                        >
                            <Input placeholder="Voornaam" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                        >
                            <Input placeholder="Tussenvoegsel" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                        >
                            <Input placeholder="Achternaam" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                        >
                            <Input placeholder="Telefoonnummer" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                        >
                            <Input placeholder="E-mail" />
                        </FormItem>

                        <FormItem>
                        <Button type="primary" htmlType="submit">Toevoegen</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedStageToevoegen = Form.create()(StageToevoegen);

export default WrappedStageToevoegen;