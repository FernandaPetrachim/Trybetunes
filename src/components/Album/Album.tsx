import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import MusicCard from './Music.Card';
import Loading from '../../Loading';
import { AlbumType, SongType } from '../../types';

const DEFAULT_TYPE = {
  trackId: 0,
  trackName: '',
  previewUrl: '',

};
function Album() {
  const [loading, setLoading] = useState(true);
  const [music, setMusic] = useState<AlbumType[] | null>(null); // musica primeiro estado dele, a segunda é uma função que altera o estado
  // guardar o array retorno,guardar as musicas
  // ele começa com array vazio
  // set de setar
  const { id } = useParams();
  useEffect(() => {
    const fetchMusicas = async () => {
      setLoading(true);
      if (id) {
        const musicas = await getMusics(id); // getmusic para buscar as listas de músicas e coloquei no estado music
        /*    const index = musicas.findIndex((song) => song.trackId === song); */
        setMusic(musicas); // um array de lista de musicas, setou p estado de music com array de objetos
        setLoading(false);
      }
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
      {music && music.length > 0
        ? music.slice(1)
          .map((song, index) => (<MusicCard key={ index } music={ song } />))
        : (
          <p>Não tem essas músicas disponíveis</p>
        )}
    </>
  );
}
export default Album;
