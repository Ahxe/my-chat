/*
 * @Author: daha
 * @Description: 
 * @Date: 2021-03-05 16:53:01
 * @LastEditTime: 2021-03-05 18:13:23
 * @LastEditors: daha
 */
import React from 'react';
import { Message } from '../../../interface';

interface TextProps {
    message: Message
}
const Texts = (props: TextProps) => {
    const item = props.message;

    return (
        <li className={`chat-item chat-item-${item.type}`}>
            <div className="chat-item-user">{item.user}</div>
            <div className="text-wrap">{item.context}</div>
        </li>
    )
};

export default Texts;