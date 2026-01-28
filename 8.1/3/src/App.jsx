import { ThemeProvider } from "./ThemeContext.jsx";
import { ControlsPanel } from "./ControlsPanel.jsx";
import { BotonPreview, TextoPreview, CardPreview } from "./PreviewComponents.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ display: 'flex', height: '100vh' }}>
        <ControlsPanel />
        <div style={{ flex: 1, padding: '2rem' }}>
          <h1>Vista Previa del Tema</h1>
          <BotonPreview />
          <TextoPreview />
          <CardPreview />
        </div>
      </div>
    </ThemeProvider>
  );
}
