/*
 * @Author: daha
 * @Description: 
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2021-03-05 13:42:07
 * @LastEditors: daha
 */
import React, { useState } from 'react';
import { Chat, Login } from './modules';
import './App.less';


function App() {
	const [userName, setUserName] = useState<string>('');

	return (
		<div className="app-wrap">
			{!!userName ? <Chat/> : <Login/>}
		</div>
	);
}

export default App;
