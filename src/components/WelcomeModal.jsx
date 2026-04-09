import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function WelcomeModal({ onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-3"
      style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <style>{`
        @keyframes pulse-gold {
          0%, 100% { text-shadow: 0 0 20px #f59e0b, 0 0 40px #f59e0b88; }
          50% { text-shadow: 0 0 40px #fbbf24, 0 0 80px #fbbf2466; }
        }
        @keyframes badge-pop {
          0% { transform: scale(0.8) rotate(-3deg); }
          60% { transform: scale(1.08) rotate(1deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .pulse-gold { animation: pulse-gold 2s ease-in-out infinite; }
        .badge-pop { animation: badge-pop 0.5s cubic-bezier(.36,.07,.19,.97) both; }
        .shine-btn { position: relative; overflow: hidden; }
        .shine-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: shine 2.5s ease-in-out infinite;
        }
      `}</style>

      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden"
        style={{
          background: '#0d0d14',
          border: '2px solid #ea6c00',
          boxShadow: '0 0 60px rgba(234,108,0,0.4), 0 25px 50px rgba(0,0,0,0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* X button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '10px', right: '10px', zIndex: 10,
            background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%', width: '28px', height: '28px',
            color: '#fff', fontSize: '18px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1,
          }}
          aria-label="Close"
        >×</button>

        {/* TOP STRIP — orange bar */}
        <div style={{
          background: 'linear-gradient(90deg, #c2410c, #ea6c00, #f97316)',
          padding: '8px 16px',
          textAlign: 'center',
        }}>
          <span style={{
            color: '#fff', fontWeight: '800', fontSize: '11px',
            letterSpacing: '2px', textTransform: 'uppercase',
          }}>
            🔥 {t('welcome.badge')} 🔥
          </span>
        </div>

        {/* MAIN BODY */}
        <div style={{ padding: '24px 20px 20px', textAlign: 'center' }}>

          {/* Gift icons row */}
          <div style={{ fontSize: '36px', marginBottom: '10px', letterSpacing: '6px' }}>
            🎁🎁🎁
          </div>

          {/* Title */}
          <h2 style={{
            color: '#ffffff', fontSize: '20px', fontWeight: '800',
            lineHeight: '1.25', marginBottom: '16px',
            textTransform: 'uppercase', letterSpacing: '0.5px',
          }}>
            {t('welcome.title')}
          </h2>

          {/* AMOUNT CARD */}
          <div
            className="badge-pop"
            style={{
              background: 'linear-gradient(135deg, #1a1000, #2d1a00)',
              border: '2px solid #f59e0b',
              borderRadius: '16px',
              padding: '18px 16px',
              marginBottom: '16px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative corner stars */}
            <span style={{ position: 'absolute', top: '8px', left: '10px', fontSize: '14px', opacity: 0.6 }}>✦</span>
            <span style={{ position: 'absolute', top: '8px', right: '10px', fontSize: '14px', opacity: 0.6 }}>✦</span>
            <span style={{ position: 'absolute', bottom: '8px', left: '10px', fontSize: '14px', opacity: 0.6 }}>✦</span>
            <span style={{ position: 'absolute', bottom: '8px', right: '10px', fontSize: '14px', opacity: 0.6 }}>✦</span>

            <div style={{
              color: '#9ca3af', fontSize: '12px', fontWeight: '600',
              letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px',
            }}>
              {t('welcome.voucherLabel')}
            </div>

            <div
              className="pulse-gold"
              style={{
                color: '#fbbf24',
                fontSize: '52px',
                fontWeight: '900',
                lineHeight: '1',
                marginBottom: '6px',
                letterSpacing: '-1px',
              }}
            >
              {t('welcome.amount')}
            </div>

            <div style={{
              color: '#fb923c',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '0.5px',
            }}>
              {t('welcome.voucherSub')}
            </div>
          </div>

          {/* Body text */}
          <p style={{
            color: '#d1d5db', fontSize: '13px', lineHeight: '1.6',
            marginBottom: '20px',
          }}>
            {t('welcome.body')}
          </p>

          {/* CTA button */}
          <a
            href="#register"
            onClick={onClose}
            className="shine-btn"
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #c2410c, #ea6c00, #f97316)',
              color: '#fff',
              borderRadius: '12px',
              padding: '15px 16px',
              textAlign: 'center',
              fontWeight: '800',
              fontSize: '15px',
              textDecoration: 'none',
              marginBottom: '10px',
              letterSpacing: '0.3px',
              boxShadow: '0 4px 20px rgba(234,108,0,0.5)',
            }}
          >
            {t('welcome.cta')} →
          </a>

          {/* Close link */}
          <button
            onClick={onClose}
            style={{
              background: 'transparent', border: 'none',
              color: '#6b7280', fontSize: '12px',
              cursor: 'pointer', padding: '4px',
              width: '100%',
            }}
          >
            {t('welcome.close')}
          </button>
        </div>
      </div>
    </div>
  );
}
