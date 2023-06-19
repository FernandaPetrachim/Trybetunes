interface MusicCardProps {
  trackName: string;
  previewUrl: string;
}

function MusicCard({ trackName, previewUrl }: MusicCardProps): string {
  return `
      <div>
        <h3>${trackName}</h3>
        <audio controls src="${previewUrl}"></audio>
      </div>
    `;
}

export default MusicCard;
