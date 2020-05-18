import React, { Component } from 'react'
// 引入文本输入框
import { List, InputItem } from 'antd-mobile';
export default class Register extends Component {
    render() {
        return (
            <div>
                {/* 表单 */}
                <div>
                    <List >
                        <InputItem
                            clear
                            placeholder="请输入手机号"
                        // ref={el => this.autoFocusInst = el}
                        ></InputItem>
                        <InputItem
                            clear
                            placeholder="请输入密码"
                        // ref={el => this.inputRef = el}
                        ></InputItem>
                        <InputItem
                            placeholder=" 请输入验证码  获取验证码 "
                        ></InputItem>
                        <List.Item>
                            <div
                                style={{ width: '100%', lineHeight: '40px', color: '#fff', textAlign: 'center', backgroundColor: 'green', borderRadius: '10px' }}
                            // onClick={this.handleClick}
                            >
                                注册
                            </div>
                        </List.Item>
                    </List>
                </div>
            </div>
        )
    }
}
