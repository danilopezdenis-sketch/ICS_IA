import { useState } from 'react';
import { useLoaderData, NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  const countries = useLoaderData();
  
  const [search, setSearch] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="layout-container" style={{ display: 'flex', height: '100vh' }}>
      
      <aside style={{ width: '300px', borderRight: '1px solid #ccc', overflowY: 'auto', padding: '1rem' }}>
        <h2>Europa </h2>
        
        <input 
          type="text" 
          placeholder="Buscar país..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />

        <nav>
          {filteredCountries.map((country) => (
            <NavLink 
              key={country.cca3}
              to={`/country/${country.name.common.toLowerCase()}`}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px',
                textDecoration: 'none',
                color: 'inherit',
                backgroundColor: isActive ? '#f0f0f0' : 'transparent',
                borderRadius: '8px'
              })}
            >
              <img src={country.flags.svg} alt={country.name.common} style={{ width: '25px' }} />
              {country.name.common}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <Outlet />
      </main>

    </div>
  );
}