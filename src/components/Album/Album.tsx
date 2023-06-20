import { useEffect, useState } from 'react';
import getMusics from '../../services/musicsAPI';
import MusicCard from './Music.Card';

function Album() {
  const [loading, setLoading] = useState(true);
  const [music, setMusic] = useState([]); // musica primeiro estado dele, a segunda é uma função que altera o estado
  // guardar o array retorno,guardar as musicas
  // ele começa com array vazio
  // set de setar
  useEffect(() => {
    const fetchMusicas = async () => {
      setLoading(true);
      const musicas = await getMusics(id); // getmusic para buscar as listas de músicas e coloquei no estado music
      const filterMusicas = musicas.filter((musica) => musica.kind === 'song'); // so quero o obejto kind com tipo song
      setMusic(filterMusicas); // um array de lista de musicas, setou p estado de music com array de objetos
      setLoading(false);
    };
    fetchMusicas();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <h1 data-testid="album-name">Collection Name</h1>
      <h2 data-testid="artist-name">Artist Name</h2>
      {music.length > 0 ? (
        <MusicCard musicas={ music } />
      ) : (
        <p>Não tem essas músicas disponíveis</p>
      )}
      <audio data-testid="audio-component" src="{previewUrl}" controls>
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
