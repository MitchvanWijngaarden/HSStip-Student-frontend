import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import Voortgang from './voortgang';
import Profiel from './profiel';
import Account from './account';
import Stages from './stages';
import Bedrijven from './bedrijven';
import BedrijfToevoegen from './bedrijf_toevoegen';
import StageToevoegen from './stage_toevoegen';
import BedrijfDetails from './bedrijf_details';
import StageDetails from './stage_details';

import Logo from './logo';

import { Layout, Menu, Icon, Row, Col} from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Dashboard extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    handleMenuClick = ({key}) => {
        this.props.history.push(`${key}`);
    };

    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="xs"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleMenuClick}>
                        <Menu.Item key="/dashboard/" className="menu-item" keyPath="/">
                            <Icon type="home" />
                            <span>Overzicht</span>
                        </Menu.Item>

                        <SubMenu key="sub1" title={<span><Icon type="star" /><span>Bedrijven</span></span>}>
                            <Menu.Item key="/dashboard/bedrijven/">Bekijken</Menu.Item>
                            <Menu.Item key="/dashboard/bedrijf-toevoegen/">Toevoegen</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" title={<span><Icon type="star" /><span>Stages</span></span>}>
                            <Menu.Item key="/dashboard/stages/">Bekijken</Menu.Item>
                            <Menu.Item key="/dashboard/stage-toevoegen/">Toevoegen</Menu.Item>
                        </SubMenu>

                        <Menu.Item key="/dashboard/profiel/">
                            <Icon type="user" />
                            <span>Profiel</span>
                        </Menu.Item>

                        <Menu.Item key="/dashboard/account/">
                            <Icon type="lock" />
                            <span>Account</span>
                        </Menu.Item>

                        <Menu.Item key="/">
                            <Icon type="poweroff" />
                            <span>Uitloggen</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff'}} className="header">
                        <Logo/>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minWidth: 200}}>
                        <Route exact path={`${this.props.match.url}/`} component={Voortgang}/>
                        <Route path={`${this.props.match.url}/profiel/`} component={Profiel}/>
                        <Route path={`${this.props.match.url}/account/`} component={Account}/>
                        <Route path={`${this.props.match.url}/stages/`} component={Stages}/>
                        <Route path={`${this.props.match.url}/bedrijven/`} component={Bedrijven}/>
                        <Route path={`${this.props.match.url}/bedrijf-toevoegen/`} component={BedrijfToevoegen}/>
                        <Route path={`${this.props.match.url}/stage-toevoegen/`} component={StageToevoegen}/>
                        <Route path={`${this.props.match.url}/bedrijf-details/`} component={BedrijfDetails}/>
                        <Route path={`${this.props.match.url}/stage-details/`} component={StageDetails}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;