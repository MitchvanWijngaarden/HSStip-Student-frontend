import React, {Component} from "react";

import {Form, Table, Button, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


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

    render() {
        const {loading, selectedRowKeys} = this.state;
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <h1 className="main-h1">Bedrijven</h1>

                <Table columns={columns} dataSource={data}/>
            </div>
        );
    }
}

export default Bedrijven;