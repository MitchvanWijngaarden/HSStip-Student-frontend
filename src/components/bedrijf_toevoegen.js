import React, {Component} from "react";
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const { TextArea } = Input;

class BedrijfToevoegen extends Component {

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
                <h1 className="main-h1">Bedrijf toevoegen</h1>
                <Form layout='horizontal'>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Bedrijfsnaam" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Adres" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Postcode" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Stad" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Telefoonnummer" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Website" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <TextArea placeholder="Omschrijving bedrijf" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">Toevoegen</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedBedrijfToevoegen = Form.create()(BedrijfToevoegen);

export default WrappedBedrijfToevoegen;