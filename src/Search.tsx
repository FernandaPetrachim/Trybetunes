import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from './services/searchAlbumsAPI';
import Loading from './Loading';

interface Album {
  collectionId: string;
  collectionName: string;
}

function Search() {
  const [nomeArtista, setNomeArtista] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [albuns, setAlbuns] = useState<Album[]>([]);
  const [resultado, setResultado] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

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

      {resultado && <p>{resultado}</p>}

      {albuns.length > 0 ? (
        <div>
          {albuns.map((album) => (
            <div key={ album.collectionId }>
              <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                <h3>{album.collectionName}</h3>
              </Link>
              <ol>
                <li>{album.collectionName}</li>
              </ol>
            </div>
          ))}
        </div>
      ) : null}

      {mensagem && <p>{mensagem}</p>}
    </>
  );
}

export default Search;
