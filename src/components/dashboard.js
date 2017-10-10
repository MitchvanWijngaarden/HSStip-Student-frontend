import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import Profiel from './profiel';
import Stages from './stages';
import Bedrijven from './bedrijven';
import BedrijfToevoegen from './bedrijf_toevoegen';
import StageToevoegen from './stage_toevoegen';

import Logo from './logo';

import { Layout, Menu, Icon, Row, Col} from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



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
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}>

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleMenuClick}>
                        <Menu.Item key="/dashboard/" className="menu-item" keyPath="/">
                            <Icon type="home" />
                            <span>Overzicht</span>
                        </Menu.Item>

                        <Menu.Item key="/dashboard/profiel/">
                            <Icon type="user" />
                            <span>Profiel</span>
                        </Menu.Item>

                        <SubMenu key="sub1" title={<span><Icon type="star" /><span>Bedrijven</span></span>}>
                            <Menu.Item key="/dashboard/bedrijven/">Bekijken</Menu.Item>
                            <Menu.Item key="/dashboard/bedrijf-toevoegen/">Toevoegen</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" title={<span><Icon type="star" /><span>Stages</span></span>}>
                            <Menu.Item key="/dashboard/stages/">Bekijken</Menu.Item>
                            <Menu.Item key="/dashboard/stage-toevoegen/">Toevoegen</Menu.Item>
                        </SubMenu>

                        <Menu.Item key="/">
                            <Icon type="poweroff" />
                            <span>Uitloggen</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff'}} className="header">
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <Logo/>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff'}}>
                        <Route path={`${this.props.match.url}/profiel/`} component={Profiel}/>
                        <Route path={`${this.props.match.url}/stages/`} component={Stages}/>
                        <Route path={`${this.props.match.url}/bedrijven/`} component={Bedrijven}/>
                        <Route path={`${this.props.match.url}/bedrijf-toevoegen/`} component={BedrijfToevoegen}/>
                        <Route path={`${this.props.match.url}/stage-toevoegen/`} component={StageToevoegen}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;