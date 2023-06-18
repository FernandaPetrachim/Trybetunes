import { useState } from 'react';
import searchAlbumsAPI from './services/searchAlbumsAPI';
import Loading from './Loading';

function Search() {
  const [nomeArtista, setNomeArtista] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [albuns, setAlbuns] = useState([]);

  const handleChangeArtista = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNomeArtista(event.target.value);
  };
  const handleClickPesquisar = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setLoading(true);
    const resposta = await searchAlbumsAPI(nomeArtista);
    setNomeArtista('');
    setLoading(false);
    setAlbuns(resposta);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <p>Testando</p>
      <input
        onChange={ handleChangeArtista }
        type="text"
        data-testid="search-artist-input"
        placeholder="Digite algo"
      />
      <button
        type="button"
        data-testid="search-artist-button"
        disabled={ nomeArtista.length < 2 }
        onClick={ handleClickPesquisar }
      >
        Pesquisar
      </button>
      {
      albuns.map((album) => {
        return (
          <ol>
<li>
  {
    album.collectionName
  }
</li>
          </ol>
        )
      });
      }
    </>
  );
}

export default Search;
