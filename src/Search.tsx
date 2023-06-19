import React, { useState } from 'react';
import searchAlbumsAPI from './services/searchAlbumsAPI';
import Loading from './Loading';
import { Link } from 'react-router-dom';

interface Album {
  collectionId: string;
  collectionName: string;
}

function Search() {
  const [nomeArtista, setNomeArtista] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [albuns, setAlbuns] = useState<Album[]>([]);

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
        onChange={handleChangeArtista}
        type="text"
        data-testid="search-artist-input"
        placeholder="Digite algo"
      />
      <button
        type="button"
        data-testid="search-artist-button"
        disabled={nomeArtista.length < 2}
        onClick={handleClickPesquisar}
      >
        Pesquisar
      </button>
      {albuns.map((album) => (
        <div key={album.collectionId}>
          <Link to={`/album/${album.collectionId}`} data-testid={`link-to-album-${album.collectionId}`}>
            <h3>{album.collectionName}</h3>
          </Link>
          <ol>
            <li>{album.collectionName}</li>
          </ol>
        </div>
      ))}
    </>
  );
}

export default Search;
