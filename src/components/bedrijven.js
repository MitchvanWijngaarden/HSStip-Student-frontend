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
    title: 'Stad',
    dataIndex: 'stad',
}, {
    title: 'Website',
    dataIndex: 'website',
}
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        bedrijfnaam: `Google ${i}`,
        stad: 'Leiden',
        website: `www.google.nl`
    });
}

class Bedrijven extends Component {
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

    handleRowClick = (record) => {
        this.props.history.push(`/dashboard/bedrijf-details/`);
    };

    render() {
        const {loading, selectedRowKeys} = this.state;
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <h1 className="main-h">Bedrijven</h1>
                <div className="table-operations">
                    <Search
                        placeholder="Bedrijven zoeken..."
                        style={{ width: 400 }}
                    />
                </div>
                <Table columns={columns} dataSource={data} onRowClick={this.handleRowClick}/>
            </div>
        );
    }
}

export default Bedrijven;