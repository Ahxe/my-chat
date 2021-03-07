/*
 * @Author: daha
 * @Description: 
 * @Date: 2021-03-05 11:15:25
 * @LastEditTime: 2021-03-05 16:37:37
 * @LastEditors: daha
 */
import React from 'react';
import Send from './send';
import Conetnt from './content';

import './index.less';

interface ChatProps {
    userName: string
}
const Chat = (props:ChatProps ) => {
    return (
        <div className="chat-wrap">
            <div className="chat-header">
                chat group
            </div>
            <Conetnt user={props.userName}/>
            <Send/>
        </div>
    );
}

export default Chat;