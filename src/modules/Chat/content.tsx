/*
 * @Author: daha
 * @Description: 
 * @Date: 2021-03-05 15:09:17
 * @LastEditTime: 2021-03-05 17:56:15
 * @LastEditors: daha
 */
import React, { useEffect } from 'react';
import record from '../../db/record.json';
import { Message } from '../../interface';
import { Texts, Images, Systems } from './moduels';

interface ContentProps {
    user: string
}

const ContextEnum = {
    text: Texts,
    system: Systems,
    img: Images
};

const Content = (props: ContentProps) => {
    const data = record.data as Message[];

    useEffect(() => {
       
    }, [])
    
    return (
        <ul className="chat-list">
            {data.map(item => {
                const ContextModule = ContextEnum[item.type];
                return <ContextModule key={item.id} message={item}/>
            })}
        </ul>
    );
};

export default Content;