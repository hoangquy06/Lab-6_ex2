import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)',
      color: '#fff',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <span style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>❄️</span>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
        Winter Dashboard
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem', maxWidth: '500px' }}>
        Dashboard sử dụng App Router với Server & Client Components
      </p>
      <Link
        href="/dashboard"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '1rem 2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
          color: '#fff',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 500,
          transition: 'all 0.3s ease'
        }}
      >
        🚀 Vào Dashboard
      </Link>
    </div>
  );
}
