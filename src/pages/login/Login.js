import React, { Component } from 'react'
// 引入css样式
import './Login.scss'
// 引入文本输入框
import { List, InputItem } from 'antd-mobile';
export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <img alt='' src={require('../../assets/imgs/1.png')}></img>
                {/* 表单 */}
                <div>
                    <List >
                        <InputItem
                            clear
                            placeholder="请输入手机号"
                        // ref={el => this.autoFocusInst = el}
                        ><img alt='' src={require('../../assets/imgs/son.png')}></img></InputItem>
                        <InputItem
                            clear
                            placeholder="请输入密码"
                        // ref={el => this.inputRef = el}
                        ><img alt='' src={require('../../assets/imgs/pwd.png')}></img></InputItem>
                        <List.Item>
                            <div
                                style={{ width: '100%', lineHeight: '40px', color: '#fff', textAlign: 'center', backgroundColor: 'green', borderRadius: '10px' }}
                            // onClick={this.handleClick}
                            >
                                登录
                            </div>
                        </List.Item>
                    </List>
                </div>
                <div className='text'>
                    <div>手机快速注册</div>
                    <div>忘记密码？</div>
                </div>
                <div className='footer'>登陆/注册即代表同意《源码房产用户协议》</div>
            </div>
        )
    }
}
