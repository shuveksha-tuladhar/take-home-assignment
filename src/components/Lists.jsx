export function Lists({ lists }) {
	return (
		<div className="results">
			{lists.length > 0 ? (
				<ul>
					{lists.map((list, index) => (
						<li key={index}>
							<h1>{list.title}</h1>
							<p>Artist: {list.artist_title || 'Unknown'}</p>
						</li>
					))}
				</ul>
			) : (
				<p>No artworks found. Please refine your search!</p>
			)}
		</div>
	);
}
