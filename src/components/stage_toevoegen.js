import React, {Component} from "react";
import { Form, Input, Select, Checkbox, Button, DatePicker, Tag, Row, Col} from 'antd';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const moduleOptions = ['IWLS', 'IWLA'];

class StageToevoegen extends Component {

    state = {
        tags: ['Java', 'Docker'],
        inputVisible: false,
        inputValue: '',
    };

    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    }

    saveInputRef = input => this.input = input

    render() {
        const { tags, inputVisible, inputValue } = this.state;
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
                <h1 className="main-h">Stage toevoegen</h1>

                <h2 className="main-h">Stage informatie</h2>

                <Form layout='horizontal' className="form-text-align-left">
                    <FormItem
                        label="Bedrijf"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('bedrijf', {
                            rules: [{
                                required: true, message: 'Voer het bedrijfsnaam in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Select placeholder="Selecteer het bedrijf dat de stage aanbiedt"/>
                        )}
                    </FormItem>
                    <FormItem
                        label="Stagetitel"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('stagetitel', {
                            rules: [{
                                required: true, message: 'Voer de stagetitel in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input placeholder="Titel die bij een vacature staat"/>
                        )}
                    </FormItem>
                    <FormItem
                        label="Tags"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('tags', {
                            rules: [{
                                required: true, message: 'Voer een keyword in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <div>
                                {tags.map((tag, index) => {
                                    const isLongTag = tag.length > 20;
                                    const tagElem = (
                                        <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
                                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                        </Tag>
                                    );
                                    return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
                                })}
                                {inputVisible && (
                                    <Input
                                        ref={this.saveInputRef}
                                        type="text"
                                        size="small"
                                        style={{ width: 78 }}
                                        value={inputValue}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleInputConfirm}
                                        onPressEnter={this.handleInputConfirm}
                                    />
                                )}
                                {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ Nieuwe tag</Button>}
                            </div>
                        )}
                    </FormItem>
                    <FormItem
                        label="Korte omschrijving stage"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('stagetitel', {
                            rules: [{
                                required: true, message: 'Voer de stagetitel in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <TextArea />
                        )}
                    </FormItem>
                    <FormItem
                        label="Lange omschrijving stage"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('stagetitel', {
                            rules: [{
                                required: true, message: 'Voer de stagetitel in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <TextArea />
                        )}
                    </FormItem>
                    <FormItem
                        label="Begin- en einddatum"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('stagetitel', {
                            rules: [{
                                required: true, message: 'Voer de stagetitel in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <RangePicker />
                        )}
                    </FormItem>
                    <FormItem
                        label="Studierichting"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('stagetitel', {
                            rules: [{
                                required: true, message: 'Voer de stagetitel in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Checkbox.Group>
                                <Row>
                                    <Col span={24}><Checkbox value="A">Business Data Management</Checkbox></Col>
                                    <Col span={24}><Checkbox value="B">Forensisch ICT</Checkbox></Col>
                                    <Col span={24}><Checkbox value="C">Mediatechnologie</Checkbox></Col>
                                    <Col span={24}><Checkbox value="D">Software Engineering</Checkbox></Col>
                                </Row>
                            </Checkbox.Group>
                        )}
                    </FormItem>
                    <FormItem
                        label="Soort stage"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('stagetitel', {
                            rules: [{
                                required: true, message: 'Voer de stagetitel in',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Checkbox.Group>
                                <Row>
                                    <Col span={24}><Checkbox value="A">Meeloopstage (IWLS)</Checkbox></Col>
                                    <Col span={24}><Checkbox value="B">Afstudeerstage (IWLA)</Checkbox></Col>
                                </Row>
                            </Checkbox.Group>
                        )}
                    </FormItem>
                </Form>

                    <h2 className="main-h">Contactpersoon informatie</h2>

                    <Form layout='horizontal' className="form-text-align-left">
                        <FormItem
                            label="Contactpersoon voor bedrijf"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('bedrijf', {
                                rules: [{
                                   message: 'Voer het bedrijfsnaam in',
                                }, {
                                    validator: this.checkConfirm,
                                }],
                            })(
                                <Select/>
                            )}
                        </FormItem>
                        <FormItem
                            label="Voornaam"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('bedrijf', {
                                rules: [{
                                    message: 'Voer het bedrijfsnaam in',
                                }, {
                                    validator: this.checkConfirm,
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="Tussenvoegsel"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('bedrijf', {
                                rules: [{
                                    message: 'Voer het bedrijfsnaam in',
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
                            {getFieldDecorator('bedrijf', {
                                rules: [{
                                    message: 'Voer het bedrijfsnaam in',
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
                            {getFieldDecorator('bedrijf', {
                                rules: [{
                                    message: 'Voer het bedrijfsnaam in',
                                }, {
                                    validator: this.checkConfirm,
                                }],
                            })(
                                <Input placeholder="Bijv. 0235654889" />
                            )}
                        </FormItem>
                        <FormItem
                            label="E-mail"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('bedrijf', {
                                rules: [{
                                    message: 'Voer het bedrijfsnaam in',
                                }, {
                                    validator: this.checkConfirm,
                                }],
                            })(
                                <Input placeholder="Bijv. iemand@voorbeeld.nl" />
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">Toevoegen</Button>
                            <span> Of </span>
                            <Button type="primary" htmlType="submit">Toevoegen en inschrijven</Button>
                        </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedStageToevoegen = Form.create()(StageToevoegen);

export default WrappedStageToevoegen;