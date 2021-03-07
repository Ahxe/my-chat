/*
 * @Author: daha
 * @Description: 
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2021-03-07 10:21:18
 * @LastEditors: daha
 */
import React, { useEffect, useState } from 'react';
import { Chat, Login } from './modules';
import './App.less';


function App() {
	const [userName, setUserName] = useState<string>('');

	const login = (userName: string) => {
		!!userName && setUserName(userName);
	};
	
	return (
		<div className="app-wrap">
			{!!userName ? <Chat userName={userName}/> : <Login onSubmit={login}/>}
		</div>
	);
}

export default App;
