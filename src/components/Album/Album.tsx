import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import MusicCard from './Music.Card';
import Loading from '../../Loading';
import { AlbumType, SongType } from '../../types';

function Album() {
  const [loading, setLoading] = useState(true);
  const [music, setMusic] = useState<SongType[]>(); // musica primeiro estado dele, a segunda é uma função que altera o estado
  // guardar o array retorno,guardar as musicas
  // ele começa com array vazio
  // set de setar
  const [colecao, setColecao] = useState<AlbumType | null>();
  const { id } = useParams();
  useEffect(() => {
    const fetchMusicas = async () => {
      setLoading(true);
      if (id) {
        const musicas = await getMusics(id); // getmusic para buscar as listas de músicas e coloquei no estado music
        /*    const index = musicas.findIndex((song) => song.trackId === song); */
        const Collection = musicas[0];
        setMusic(musicas.slice(1) as SongType[]); // um array de lista de musicas, setou p estado de music com array de objetos
        setColecao(Collection);
        setLoading(false);
      }
    };
    fetchMusicas();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <h1 data-testid="album-name">{ colecao?.collectionName }</h1>
      <h2 data-testid="artist-name">{ colecao?.artistName }</h2>
      {music && music.length > 0
        ? music
          .map((song, index) => (<MusicCard key={ index } music={ song } />))
        : (
          <p>Não tem essas músicas disponíveis</p>
        )}
    </>
  );
}
export default Album;
