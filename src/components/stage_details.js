import React, {Component} from "react";
import { Form, Input, Checkbox, Select, DatePicker, Button, Row, Col} from 'antd';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

import moment from 'moment';

const studierichtingOptions = ['BDAM', 'FICT', 'MEDT', 'SE'];
const moduleOptions = ['IWLS', 'IWLA'];

const dateFormat = 'DD-MM-YYYY';

class StageDetails extends Component {

    constructor(props){
        super(props);

        this.state = {
            bedrijf: {
                bedrijfsnaam: 'Google',
                adres: 'Googlestraat 5',
                postcode: '2135LS',
                stad: 'Amsterdam',
                telefoonnummer: '0235654889',
                website: 'www.google.nl',
                bedrijfomschrijving: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        }
    }

    render() {

        const bedrijf = this.state.bedrijf;

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

        return (
            <div className="center-register-form">
                <h1 className="main-h">Stage details</h1>
                <div style={{maxWidth: 540}}>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Bedrijfsnaam</Col>
                        <Col {...formItemLayout.wrapperCol}>{bedrijf.bedrijfsnaam}</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Stagetitel</Col>
                        <Col {...formItemLayout.wrapperCol}>Docker Integratie</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Stad stage</Col>
                        <Col {...formItemLayout.wrapperCol}>Amsterdam</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Tags</Col>
                        <Col {...formItemLayout.wrapperCol}>Java, Docker</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Stage contactpersoon</Col>
                        <Col {...formItemLayout.wrapperCol}>Piet van Bos</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Studierichting</Col>
                        <Col {...formItemLayout.wrapperCol}>Mediatechnologie, Software Engineering</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Begin- en einddatum</Col>
                        <Col {...formItemLayout.wrapperCol}>1-1-2018 ~ 26-6-2018</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Soort stage</Col>
                        <Col {...formItemLayout.wrapperCol}>Meeloopstage (IWLS), Afstudeerstage (IWLA)</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Korte omschrijving stage</Col>
                        <Col {...formItemLayout.wrapperCol} style={{maxWidth: 300}}>Lorem ipsum</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Lange omschrijving stage</Col>
                        <Col {...formItemLayout.wrapperCol} style={{maxWidth: 300}}>{bedrijf.bedrijfomschrijving}</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol}></Col>
                        <Col {...formItemLayout.wrapperCol} style={{maxWidth: 300}}>
                            <Button type="primary" htmlType="submit">Inschrijven</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default  Form.create()(StageDetails);