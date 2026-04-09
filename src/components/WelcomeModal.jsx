import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function WelcomeModal({ onClose }) {
  const { t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.08)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient bar */}
        <div style={{ background: 'linear-gradient(135deg, #ea6c00, #f97316)', padding: '28px 28px 24px' }}>
          {/* Gift icon */}
          <div className="flex justify-center mb-3">
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '32px',
            }}>
              🎁
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-2">
            <span style={{
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              borderRadius: '999px',
              padding: '3px 14px',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}>
              {t('welcome.badge')}
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            color: '#fff',
            fontSize: '20px',
            fontWeight: '700',
            textAlign: 'center',
            margin: 0,
            lineHeight: '1.3',
          }}>
            {t('welcome.title')}
          </h2>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 28px 24px' }}>
          {/* Main message */}
          <p style={{
            color: '#d1d5db',
            fontSize: '15px',
            lineHeight: '1.7',
            textAlign: 'center',
            marginBottom: '20px',
          }}>
            {t('welcome.body')}{' '}
            <span style={{
              color: '#f97316',
              fontWeight: '800',
              fontSize: '22px',
              display: 'inline-block',
              margin: '0 2px',
            }}>
              {t('welcome.amount')}
            </span>{' '}
            {t('welcome.bodyEnd')}
          </p>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginBottom: '20px' }} />

          {/* CTA button */}
          <a
            href="#register"
            onClick={onClose}
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #ea6c00, #f97316)',
              color: '#fff',
              borderRadius: '12px',
              padding: '14px',
              textAlign: 'center',
              fontWeight: '700',
              fontSize: '15px',
              textDecoration: 'none',
              marginBottom: '12px',
            }}
          >
            {t('welcome.cta')}
          </a>

          {/* Close link */}
          <button
            onClick={onClose}
            style={{
              display: 'block',
              width: '100%',
              background: 'transparent',
              border: 'none',
              color: '#6b7280',
              fontSize: '13px',
              cursor: 'pointer',
              padding: '6px',
            }}
          >
            {t('welcome.close')} →
          </button>
        </div>

        {/* X button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '14px',
            background: 'rgba(255,255,255,0.15)',
            border: 'none',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}
