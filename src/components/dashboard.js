import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import Profiel from './profiel';

import { Layout, Menu, Icon } from 'antd';
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
        this.props.history.push(`/dashboard${key}`);
    };

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}>

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleMenuClick}>
                        <Menu.Item key="/" className="menu-item" keyPath="/">
                            <Icon type="home" />
                            <span>Overzicht</span>
                        </Menu.Item>

                        <Menu.Item key="/profiel">
                            <Icon type="user" />
                            <span>Profiel</span>
                        </Menu.Item>

                        <SubMenu key="sub1" title={<span><Icon type="star" /><span>Bedrijven</span></span>}>
                            <Menu.Item key="3">Bekijken</Menu.Item>
                            <Menu.Item key="4">Toevoegen</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" title={<span><Icon type="star" /><span>Stages</span></span>}>
                            <Menu.Item key="5">Bekijken</Menu.Item>
                            <Menu.Item key="6">Toevoegen</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Route path={`${this.props.match.url}/profiel`} component={Profiel}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;