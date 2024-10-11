export function ImageDetailsPage({ selectedArt }) {
	// console.log(selectedArt)
	const { title, artist_title } = selectedArt;
	return (
		<div>
			<h1>{title}</h1>
			<p>Artist: {artist_title || 'Unknown Artist'}</p>
			<button>Back</button>
		</div>
	);
}
