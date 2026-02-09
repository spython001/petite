import './spotifyPlay.css'

export default function SpotifyPlay() {
  return (
    <div className='spotify'>
      <div className="container">
        <iframe
        title="Spotify romantic song player"
        data-testid="embed-iframe" 
        style={{bordeRadius: "12px" }}
        src="https://open.spotify.com/embed/track/2dfHh7ECGxfNqZTQno09Vk?utm_source=generator&theme=0" 
        width="100%" height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
      
       ></iframe>
      </div>

    </div>
  )
}
