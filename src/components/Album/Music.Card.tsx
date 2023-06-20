interface MusicCardProps {
  music: {
    trackName: string;
    previewUrl: string;
  }
}

function MusicCard({ music: { trackName, previewUrl } }: MusicCardProps) {
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
    </>
  );
}

export default MusicCard;
