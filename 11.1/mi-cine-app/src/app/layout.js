// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: '20px', background: '#eee', marginBottom: '20px' }}>
          <a href="/movies">Películas</a> | <a href="/actors">Actores</a>
        </nav>
        {children}
      </body>
    </html>
  )
}