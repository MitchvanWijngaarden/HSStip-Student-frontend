import React, {Component} from "react";

import {Form, Table, Button, Input, Cascader, Select, Row, Col, Checkbox, AutoComplete} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const {Search} = Input;

const columns = [{
    title: 'Bedrijfsnaam',
    dataIndex: 'bedrijfnaam',
}, {
    title: 'Plaats',
    dataIndex: 'plaats',
}, {
    title: 'Titel',
    dataIndex: 'titel',
}, {
    title: 'Richting',
    dataIndex: 'richting',
}, {
    title: 'Keywords',
    dataIndex: 'keywords',
}, {
    title: 'Module',
    dataIndex: 'module',
}];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        bedrijfnaam: `Google ${i}`,
        plaats: 'Amsterdam',
        titel: `Node.js + React`,
        richting: `SE`,
        keywords: `JavaScript, React, Node`,
        module: `IWLS`
    });
}

class Stages extends Component {
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
    };
    start = () => {
        this.setState({loading: true});
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };

    render() {
        const {loading, selectedRowKeys} = this.state;
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <h1 className="main-h1">Stages</h1>
                <div className="table-operations">
                    <Search
                        placeholder="Stages zoeken..."
                        style={{ width: 400 }}
                    />
                </div>
                <Table columns={columns} dataSource={data}/>
            </div>
        );
    }
}

export default Stages;