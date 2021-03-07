/*
 * @Author: daha
 * @Description: 
 * @Date: 2021-03-05 11:15:42
 * @LastEditTime: 2021-03-05 14:44:45
 * @LastEditors: daha
 */
import React, { useRef } from 'react';
import './index.less';

interface LoginProps {
    onSubmit: (userName: string) => void
}

const Login = (props: LoginProps) => {
    const iptRef = useRef<HTMLInputElement>(null);
    const login = (): void => {
        const ipt = iptRef.current;
        
        if(!!ipt?.value) {
            props?.onSubmit?.(ipt.value);
            return;
        }

        alert('请输入用户名');
    }
    return (
        <div className="login-wrap">
            <div className="ipt-wrap">
                <label>用户名:</label>
                <input ref={iptRef} placeholder="请输入用户名"/>
            </div>
            <button className="btn" onClick={login}>登陆</button>
        </div>
    );
};

export default Login;