import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from './services/searchAlbumsAPI';
import Loading from './Loading';

interface Album {
  collectionId: string;
  collectionName: string;
}

function Search() {
  const [nomeArtista, setNomeArtista] = useState('');
  const [loading, setLoading] = useState(false);
  const [albuns, setAlbuns] = useState<Album[]>([]);
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleChangeArtista = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeArtista(event.target.value);
  };

  const handleClickPesquisar = async () => {
    setLoading(true);
    const resposta = await searchAlbumsAPI(nomeArtista);
    setLoading(false);
    setNomeArtista('');

    if (resposta.length > 0) {
      setAlbuns(resposta);
      setResultado(`Resultado de álbuns de: ${nomeArtista}`);
      setMensagem('');
    } else {
      setAlbuns([]);
      setResultado('');
      setMensagem('Nenhum álbum foi encontrado');
    }
  };

  return (
    <>
      <p>Testando</p>
      <input
        onChange={ handleChangeArtista }
        type="text"
        data-testid="search-artist-input"
        placeholder="Digite algo"
        value={ nomeArtista }
      />
      <button
        type="button"
        data-testid="search-artist-button"
        disabled={ nomeArtista.length < 2 }
        onClick={ handleClickPesquisar }
      >
        Pesquisar
      </button>

      {loading && <Loading />}
      {' '}
      {/* Renderizar o componente Loading quando loading for true */}

      {resultado && <p>{resultado}</p>}

      {albuns.length > 0 && (
        <div>
          <p>Lista dos álbuns retornados:</p>
          {albuns.map((album) => (
            <div key={ album.collectionId }>
              <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                {album.collectionName}
              </Link>
            </div>
          ))}
        </div>
      )}

      {mensagem && <p>{mensagem}</p>}
    </>
  );
}

export default Search;
