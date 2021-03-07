/*
 * @Author: daha
 * @Description: 
 * @Date: 2021-03-05 15:13:24
 * @LastEditTime: 2021-03-05 15:15:37
 * @LastEditors: daha
 */
export interface Message {
    id: number,
    user: string,
    type: 'text' | 'img' | 'system',
    context: string
}