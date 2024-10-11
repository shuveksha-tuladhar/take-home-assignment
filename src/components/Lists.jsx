import './Lists.css';

export function Lists({ lists, setSelectedArt }) {
	return (
		<div className="results">
			{lists.length > 0 ? (
				<ol>
					{lists.map((list, index) => (
						<li key={index}>
							<button
								className="title-button"
								onClick={(evt) => {
									evt.preventDefault();
									setSelectedArt(list);
								}}
							>
								{list.title}
							</button>
							<p>Artist: {list.artist_title || 'Unknown'}</p>
						</li>
					))}
				</ol>
			) : (
				<p>No artworks found. Please refine your search!</p>
			)}
		</div>
	);
}
