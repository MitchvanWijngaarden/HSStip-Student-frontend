import React, {Component} from "react";
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const { TextArea } = Input;

class BedrijfDetails extends Component {

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
                <h1 className="main-h">Bedrijf details</h1>
                <Form layout='horizontal'>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Bedrijfsnaam" value="Google" disabled />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Adres" value="googlestraat 5" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Postcode" value="2545KJ" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Stad" value="Amsterdam" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Telefoonnummer" value="0235654998" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Input placeholder="Website" value="www.google.nl" disabled/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <TextArea placeholder="Omschrijving bedrijf" value="Google steelt je gegevens" disabled/>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedBedrijfDetails = Form.create()(BedrijfDetails);

export default WrappedBedrijfDetails;