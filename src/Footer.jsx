export default function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      padding: '30px 20px 15px',
      width: '100%',
      maxWidth: '340px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      borderTop: '1px solid #1e293b',
      color: '#64748b',
      fontSize: '12px',
    }}>
      <p style={{ margin: 0, fontWeight: '500', color: '#94a3b8' }}>
        Alivio Tinnitus
      </p>
      
      <p style={{ margin: 0, fontSize: '11px', color: '#475569', lineHeight: '1.5' }}>
        Herramienta utilitaria de generación acústica en tiempo real para el enmascaramiento de frecuencias. No reemplaza el diagnóstico o tratamiento médico profesional.
      </p>
      
      <p style={{ margin: '8px 0 0 0', fontWeight: '600' }}>
        Desarrollado por Eric Luna
      </p>
    </footer>
  );
}