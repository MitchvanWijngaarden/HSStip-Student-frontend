import React, {Component} from "react";
import { Form, Input, Tooltip, Icon, Steps, Select, Row, Col, Checkbox, Button, AutoComplete, DatePicker} from 'antd';

const Step = Steps.Step;


class Voortgang extends Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <h1 className="main-h1">Stagevoortgang</h1>
                <p>Welkom op HSSTIP - het stage inschrijfsysteem van de Hogeschool Leiden.</p>
                <p>Hieronder kan je de voortgang van je stage zien:</p>
                <Steps direction="vertical" current={2} style={{marginTop: 24}}>
                    <Step title="Stagevoortang 1" description="Beschrijving 1" />
                    <Step title="Stagevoortang 2" description="Beschrijving 2" />
                    <Step title="Stagevoortang 3" description="Beschrijving 3" />
                    <Step title="Stagevoortang 4" description="Beschrijving 4" />
                    <Step title="Stagevoortang 5" description="Beschrijving 5" />
                </Steps>
            </div>
        );
    }
}

const WrappedVoortgang = Form.create()(Voortgang);

export default WrappedVoortgang;