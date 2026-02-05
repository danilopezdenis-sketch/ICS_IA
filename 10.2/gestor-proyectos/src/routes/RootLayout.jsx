import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
export default function RootLayout() {
  const nav = useNavigation();
  return (
    <>
      <MainNavigation />
      {nav.state === 'loading' && <div className="loading">Cargando datos...</div>}
      <main><Outlet /></main>
    </>
  );
}