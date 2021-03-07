/*
 * @Author: daha
 * @Description: 
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2021-03-05 16:31:03
 * @LastEditors: daha
 */
import React, { useEffect, useState } from 'react';
import { Chat, Login } from './modules';
import './App.less';


function App() {
	const [userName, setUserName] = useState<string>('');

	// useEffect(() => {
	// 	const IDBRequest = indexedDB.open('my-chat', 4);
	// 	IDBRequest.onupgradeneeded = (event) => {
	// 		let db = event?.target?.addEventListener('');
	// 		db.createObjectStore(
	// 			'message',
	// 			{ autoIncrement: true }
	// 		);
	// 		console.log(db);
	// 	}
	// }, [])
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
