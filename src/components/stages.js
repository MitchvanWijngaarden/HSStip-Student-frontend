import React, {Component} from "react";

import {Table, Input} from 'antd';

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
        selectedRowKeys: [],
        loading: false,
    };

    handleRowClick = (record) => {
        this.props.history.push(`/dashboard/stage-details/`);
    };

    render() {
        return (
            <div>
                <h1 className="main-h">Stages</h1>
                <div className="table-operations">
                    <Search
                        placeholder="Stages zoeken..."
                        style={{ maxWidth: 400 }}
                    />
                </div>
                <Table columns={columns} dataSource={data} onRowClick={this.handleRowClick}/>
            </div>
        );
    }
}

export default Stages;