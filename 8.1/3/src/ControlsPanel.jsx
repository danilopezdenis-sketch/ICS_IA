import { useTheme } from "./ThemeContext";
import React from "react";

export const ControlsPanel = React.memo(() => {
  const { theme, dispatch } = useTheme();

  return (
    <div style={{ width: '220px', padding: '1rem', borderRight: '1px solid #ccc' }}>
      <h3>Controles de Tema</h3>

      <div style={{ marginBottom: '1rem' }}>
        <label>Color Primario:</label>
        <input 
          type="color" 
          value={theme.primaryColor} 
          onChange={e => dispatch({ type: 'SET_PRIMARY_COLOR', payload: e.target.value })}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Tamaño de Texto: {theme.fontSize}px</label>
        <input 
          type="range" 
          min="10" 
          max="32" 
          value={theme.fontSize} 
          onChange={e => dispatch({ type: 'SET_FONT_SIZE', payload: Number(e.target.value) })}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Transformar Texto:</label>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <button onClick={() => dispatch({ type: 'SET_TEXT_TRANSFORM', payload: 'none' })}>Normal</button>
          <button onClick={() => dispatch({ type: 'SET_TEXT_TRANSFORM', payload: 'uppercase' })}>MAYÚSCULAS</button>
          <button onClick={() => dispatch({ type: 'SET_TEXT_TRANSFORM', payload: 'capitalize' })}>Capitalizado</button>
          <button onClick={() => dispatch({ type: 'SET_TEXT_TRANSFORM', payload: 'lowercase' })}>minúsculas</button>
        </div>
      </div>
    </div>
  );
});
