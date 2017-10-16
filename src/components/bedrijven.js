import React, {Component} from "react";
import axios from 'axios';

import {Form, Table, Button, Input, Cascader, Select, Row, Col, Checkbox, AutoComplete} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const {Search} = Input;

const columns = [{
    title: 'Bedrijfsnaam',
    dataIndex: 'bedrijfsnaam',
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
        bedrijfsnaam: `Google ${i}`,
        stad: 'Leiden',
        website: `www.google.nl`
    });
}


class Bedrijven extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            bedrijven: []
        };
    }

    handleRowClick = (record) => {
        this.props.history.push(`/dashboard/bedrijf-details/`);
    };

    componentWillMount(){
        axios.get('http://127.0.0.1:8090/bedrijven')
            .then((bedrijven) => {
               const mappedBedrijven = bedrijven.data.map((bedrijf) => {
                    bedrijf.key = bedrijf.id;
                    return bedrijf;
                });

                this.setState({
                    dataLoaded: true,
                    bedrijven: mappedBedrijven
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h1 className="main-h">Bedrijven</h1>
                <div className="table-operations">
                    <Search
                        placeholder="Bedrijven zoeken..."
                        style={{ width: 400 }}
                    />
                </div>
                <Table columns={columns} dataSource={this.state.bedrijven} onRowClick={this.handleRowClick} loading={!this.state.dataLoaded}/>
            </div>
        );
    }
}

export default Bedrijven;