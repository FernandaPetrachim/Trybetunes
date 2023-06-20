interface MusicCardProps {
  music: {
    trackName: string;
    previewUrl: string;
    trackId: string;
  }
}

function MusicCard({ music: { trackName, previewUrl, trackId } }: MusicCardProps) {
  return (
    <>
      <p>{trackName}</p>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
        .
      </audio>
      <input data-testid={ `checkbox-music-${trackId}` } />
    </>
  );
}

export default MusicCard;
