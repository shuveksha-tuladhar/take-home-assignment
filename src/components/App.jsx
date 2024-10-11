import { useEffect, useState } from 'react';

import { searchArtworks } from '../api';
import { Footer } from './Footer';
import { ImageDetailsPage } from './ImageDetailsPage';
import { Lists } from './Lists';

import { SearchForm } from './SearchForm';

import './App.css';

export function App() {
	const [lists, setLists] = useState([]);
	const [selectedArt, setSelectedArt] = useState(null);

	useEffect(() => {
		searchArtworks().then((response) => {
			setLists(response.data);
		});
	}, []);

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
			{selectedArt === null && (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<Lists lists={lists} setSelectedArt={setSelectedArt} />
				</>
			)}
			{selectedArt !== null && <ImageDetailsPage selectedArt={selectedArt} />}
			<Footer />
		</div>
	);
}
