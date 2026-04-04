import { MapPin, Phone, Mail, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const ft = t('footer');

  return (
    <footer className="bg-dark-900 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold">
                T
              </div>
              <div>
                <p className="text-white font-bold font-tamil">SIGARAM THODU</p>
                <p className="text-brand-400 text-xs">T.I.M.E Tirunelveli</p>
              </div>
            </div>
            <p className="text-white/40 text-sm font-tamil leading-relaxed">{ft.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-tamil mb-4">{ft.contactTitle}</h4>
            <div className="space-y-2.5">
              <a
                href={`tel:${ft.phone1.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-white/50 hover:text-brand-400 text-sm font-tamil transition-colors"
              >
                <Phone size={14} /> {ft.phone1}
              </a>
              <a
                href={`tel:${ft.phone2.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-white/50 hover:text-brand-400 text-sm font-tamil transition-colors"
              >
                <Phone size={14} /> {ft.phone2}
              </a>
              <a
                href={`mailto:${ft.email}`}
                className="flex items-center gap-2 text-white/50 hover:text-brand-400 text-sm font-tamil transition-colors"
              >
                <Mail size={14} /> {ft.email}
              </a>
              <div className="flex items-start gap-2 text-white/50 text-sm font-tamil">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>{ft.address}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold font-tamil mb-4">{ft.linksTitle}</h4>
            <ul className="space-y-2">
              {ft.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/50 hover:text-brand-400 text-sm font-tamil transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-white/30 text-xs font-tamil text-center">{ft.copyright}</p>
            <a href="/privacy-policy" className="text-white/30 hover:text-brand-400 text-xs transition-colors whitespace-nowrap">
              Privacy Policy
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/time.tirunelveli/" className="text-white/30 hover:text-brand-400 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.instagram.com/time.tirunelveli/" className="text-white/30 hover:text-brand-400 transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
