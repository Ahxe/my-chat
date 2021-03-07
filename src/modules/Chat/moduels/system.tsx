/*
 * @Author: daha
 * @Description: 
 * @Date: 2021-03-05 16:59:27
 * @LastEditTime: 2021-03-05 17:54:48
 * @LastEditors: daha
 */
import React from 'react';

import { Message } from '../../../interface';
interface IProps {
    message: Message
}

const Systems = (props: IProps) => {
    const item = props.message;

    return (
        <li className={`chat-item chat-item-${item.type}`}>
            <div>{item.context}</div>
        </li>
    )
};

export default Systems;