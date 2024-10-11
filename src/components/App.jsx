import { useState } from 'react';

import { searchArtworks } from '../api';

import { Footer } from './Footer';

import { Lists } from './Lists';

import { SearchForm } from './SearchForm';

import './App.css';

export function App() {
	const [lists, setLists] = useState([]);

	async function onSearchSubmit(query) {
		try {
			const response = await searchArtworks(query);
			setLists(response.data);
			console.log(response.data);
		} catch (error) {
			console.log('Errors:', error);
		}
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<Lists lists={lists} />
			<Footer />
		</div>
	);
}
