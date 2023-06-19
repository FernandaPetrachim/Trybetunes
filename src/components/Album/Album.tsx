import { useEffect, useState } from 'react';
import getMusics from '../../services/musicsAPI';

function Album() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMusicas = async () => {
      setLoading(true);
      const musicas = await getMusics(id);
      setLoading(false);
    };
    fetchMusicas();
  }, []);

  return (
    <>
      <h1 data-testid="artist-name">Nome da banda</h1>
      <h2 data-testid="album-name">Nome do albúm</h2>
    </>
  );
}
