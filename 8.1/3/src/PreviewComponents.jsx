import React, { useMemo } from "react";
import { useTheme } from "./ThemeContext";

export const BotonPreview = React.memo(() => {
  const { theme } = useTheme();


  const textColor = useMemo(() => {
    const r = parseInt(theme.primaryColor.slice(1,3),16);
    const g = parseInt(theme.primaryColor.slice(3,5),16);
    const b = parseInt(theme.primaryColor.slice(5,7),16);
    const brightness = (r*299 + g*587 + b*114)/1000;
    return brightness > 125 ? '#000' : '#fff';
  }, [theme.primaryColor]);

  return (
    <button 
      style={{
        backgroundColor: theme.primaryColor,
        color: textColor,
        fontSize: theme.fontSize,
        textTransform: theme.textTransform,
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '1rem'
      }}
    >
      Botón Preview
    </button>
  );
});


export const TextoPreview = React.memo(() => {
  const { theme } = useTheme();
  return (
    <p style={{
      fontSize: theme.fontSize,
      color: theme.primaryColor,
      textTransform: theme.textTransform
    }}>
      Este es un texto de prueba
    </p>
  );
});


export const CardPreview = React.memo(() => {
  const { theme } = useTheme();
  return (
    <div style={{
      backgroundColor: theme.primaryColor,
      color: '#fff',
      padding: '1rem',
      borderRadius: '8px',
      fontSize: theme.fontSize,
      textTransform: theme.textTransform,
      width: '200px',
      marginTop: '1rem'
    }}>
      Card Preview
    </div>
  );
});
