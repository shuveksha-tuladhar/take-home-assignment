import { useState } from 'react';

import './SearchForm.css';

export function SearchForm({ onSearchSubmit }) {
	const [query, setQuery] = useState('');

	function handleInputChange(evt) {
		setQuery(evt.target.value);
	}

	function handleFormSubmit(evt) {
		// Fix a known bug: the whole app refreshes when SearchForm is submitted
		evt.preventDefault();
		onSearchSubmit(query);
	}

	return (
		<form className="Form" role="search" onSubmit={handleFormSubmit}>
			<input
				aria-label="Search for artworks"
				className="input"
				id="search-field"
				inputMode="search"
				name="query"
				type="text"
				value={query}
				onChange={handleInputChange}
			/>
			<button className="button" type="submit">
				Search
			</button>
		</form>
	);
}
