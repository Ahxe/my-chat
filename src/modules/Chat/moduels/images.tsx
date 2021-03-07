/*
 * @Author: daha
 * @Description: 
 * @Date: 2021-03-05 16:53:07
 * @LastEditTime: 2021-03-05 18:09:56
 * @LastEditors: daha
 */
import React from 'react';
import { Message } from '../../../interface';

interface ImagesProps {
    message: Message
}

const Images = (props: ImagesProps) => {
    const item = props.message;

    return (
        <li className={`chat-item chat-item-${item.type}`}>
            <div className="chat-item-user">{item.user}</div>
            <div className="img-wrap">
                <img src={item.context}/>
            </div>
        </li>
    )
};

export default Images;