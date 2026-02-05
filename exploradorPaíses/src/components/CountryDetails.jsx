import { useParams, useRouteLoaderData, Link } from 'react-router-dom';

export default function CountryDetails() {
  const { countryName } = useParams();

  const allCountries = useRouteLoaderData('root');

  const country = allCountries.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>El país "{countryName}" no existe en nuestra base de datos de Europa.</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  const borderCountries = country.borders?.map((code) => {
    return allCountries.find((c) => c.cca3 === code);
  }).filter(Boolean); 

  return (
    <article>
      <header style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img src={country.flags.svg} alt="" style={{ width: '100px', border: '1px solid #eee' }} />
        <h1>{country.name.official}</h1>
      </header>

      <section style={{ marginTop: '2rem' }}>
        <p><strong>Capital:</strong> {country.capital?.[0] || 'No tiene'}</p>
        <p><strong>Población:</strong> {country.population.toLocaleString()} habitantes</p>
        <p><strong>Región:</strong> {country.region} ({country.subregion})</p>
        <p><strong>Idiomas:</strong> {Object.values(country.languages || {}).join(', ')}</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Países Fronterizos:</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {borderCountries && borderCountries.length > 0 ? (
            borderCountries.map((neighbor) => (
              <Link 
                key={neighbor.cca3} 
                to={`/country/${neighbor.name.common.toLowerCase()}`}
                style={{
                  padding: '5px 15px',
                  border: '1px solid #007bff',
                  borderRadius: '15px',
                  textDecoration: 'none',
                  color: '#007bff'
                }}
              >
                {neighbor.name.common}
              </Link>
            ))
          ) : (
            <p>Este país no tiene fronteras terrestres en Europa.</p>
          )}
        </div>
      </section>
    </article>
  );
}