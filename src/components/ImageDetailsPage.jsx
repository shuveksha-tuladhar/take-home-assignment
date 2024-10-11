export function ImageDetailsPage({ selectedArt, setSelectedArt }) {
	// console.log(selectedArt)
	const { title, artist_title, thumbnail, image_id } = selectedArt;
	return (
		<div>
			<h1>{title}</h1>
			<p>By Artist: {artist_title || 'Unknown Artist'}</p>
			<button onClick={() => setSelectedArt(null)}>Back</button>
			<br />
			<img
				alt={thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
