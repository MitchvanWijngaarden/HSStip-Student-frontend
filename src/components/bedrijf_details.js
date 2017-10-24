import React, {Component} from "react";
import { Form, Input, Row, Col} from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class BedrijfDetails extends Component {

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
                bedrijfomschrijving: 'Google Inc. is het bedrijf achter de Google-zoekmachine, opgericht door Larry Page en Sergey Brin. Het bedrijf telt 69.953 werknemers (november 2016). Het hoofdkantoor (genaamd het Googleplex) is gevestigd in Mountain View, Californië. Op 19 augustus 2004 werd het bedrijf beursgenoteerd. In oktober 2015 werd het bij een reorganisatie een dochteronderneming van Alphabet Inc.'
            }
        }
    }

    componentDidMount(){
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
                <h1 className="main-h">Bedrijf details</h1>
                <div style={{maxWidth: 540}}>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Bedrijfsnaam</Col>
                        <Col {...formItemLayout.wrapperCol}>{bedrijf.bedrijfsnaam}</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Adres</Col>
                        <Col {...formItemLayout.wrapperCol}>{bedrijf.adres}</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Postcode</Col>
                        <Col {...formItemLayout.wrapperCol}>{bedrijf.postcode}</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Stad</Col>
                        <Col {...formItemLayout.wrapperCol}>{bedrijf.stad}</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Telefoonnummer</Col>
                        <Col {...formItemLayout.wrapperCol}>{bedrijf.telefoonnummer}</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Website</Col>
                        <Col {...formItemLayout.wrapperCol}>{bedrijf.website}</Col>
                    </Row>
                    <Row style={{paddingBottom: 10}}>
                        <Col {...formItemLayout.labelCol} style={{fontWeight: 500}}>Omschrijving bedrijf</Col>
                        <Col {...formItemLayout.wrapperCol} style={{maxWidth: 300}}>{bedrijf.bedrijfomschrijving}</Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default BedrijfDetails;