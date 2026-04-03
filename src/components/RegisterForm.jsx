import { useState } from 'react';
import { registerForEvent } from '../services/api';
import { useLanguage } from '../context/LanguageContext';
import {
  User, Phone, Mail, School, MapPin, BookOpen,
  Users, CheckCircle2, Loader2, AlertCircle,
} from 'lucide-react';

const INITIAL = {
  name: '', phone: '', email: '', standard: '',
  school: '', city: '', parentName: '', parentPhone: '', howHeard: '',
};

const HOW_HEARD_VALS = ['friend', 'social_media', 'school', 'family', 'other'];
const STANDARD_VALS = ['9', '10', '11', '12', 'other'];

const INPUT_CLS =
  'w-full bg-dark-700 border border-white/10 focus:border-brand-500 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm font-tamil outline-none transition-colors';
const LABEL_CLS = 'block text-white/70 text-xs font-tamil mb-1.5 font-medium';

export default function RegisterForm() {
  const { t } = useLanguage();
  const f = t('form');
  const fields = f.fields;
  const successTxt = t('success');

  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.standard || !form.school || !form.city) {
      setStatus('error');
      setMessage(f.errors.required);
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setStatus('error');
      setMessage(f.errors.phone);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus('error');
      setMessage(f.errors.email);
      return;
    }
    setStatus('loading');
    setMessage('');
    try {
      const res = await registerForEvent(form);
      setStatus('success');
      setMessage(res.message);
    } catch (err) {
      setStatus('error');
      setMessage(err.message || f.errors.required);
    }
  };

  if (status === 'success') {
    return (
      <div className="card-glass rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-green-400" />
        </div>
        <h3 className="text-2xl font-bold font-tamil text-white mb-3">
          {successTxt.heading}
        </h3>
        <p className="text-white/60 font-tamil mb-6 leading-relaxed">{message}</p>
        <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-4 w-full">
          <p className="text-brand-300 text-sm font-tamil font-semibold mb-1">
            📅 {successTxt.eventDate}
          </p>
          <p className="text-white/50 text-xs font-tamil">
            {successTxt.eventVenue}
          </p>
        </div>
        <p className="text-white/40 text-xs font-tamil mt-4">
          {successTxt.confirmationNote}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-glass rounded-3xl p-6 sm:p-8" noValidate>
      <h3 className="text-white font-bold font-tamil text-xl mb-1">{f.title}</h3>
      <p className="text-white/40 text-sm font-tamil mb-6">{f.subtitle}</p>

      {/* Error banner */}
      {status === 'error' && (
        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-5">
          <AlertCircle size={16} className="text-red-400 shrink-0" />
          <p className="text-red-300 text-sm font-tamil">{message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="sm:col-span-2">
          <label className={LABEL_CLS}>
            <User size={12} className="inline mr-1" />
            {fields.name}
          </label>
          <input
            type="text"
            placeholder={fields.namePlaceholder}
            value={form.name}
            onChange={set('name')}
            className={INPUT_CLS}
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className={LABEL_CLS}>
            <Phone size={12} className="inline mr-1" />
            {fields.phone}
          </label>
          <input
            type="tel"
            placeholder={fields.phonePlaceholder}
            value={form.phone}
            onChange={set('phone')}
            className={INPUT_CLS}
            maxLength={10}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className={LABEL_CLS}>
            <Mail size={12} className="inline mr-1" />
            {fields.email}
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            value={form.email}
            onChange={set('email')}
            className={INPUT_CLS}
            required
          />
        </div>

        {/* Standard */}
        <div>
          <label className={LABEL_CLS}>
            <BookOpen size={12} className="inline mr-1" />
            {fields.standard}
          </label>
          <select value={form.standard} onChange={set('standard')} className={INPUT_CLS} required>
            <option value="">{fields.standardPlaceholder}</option>
            {STANDARD_VALS.map((val, i) => (
              <option key={val} value={val}>{fields.standards[i]}</option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label className={LABEL_CLS}>
            <MapPin size={12} className="inline mr-1" />
            {fields.city}
          </label>
          <input
            type="text"
            placeholder={fields.cityPlaceholder}
            value={form.city}
            onChange={set('city')}
            className={INPUT_CLS}
            required
          />
        </div>

        {/* School */}
        <div className="sm:col-span-2">
          <label className={LABEL_CLS}>
            <School size={12} className="inline mr-1" />
            {fields.school}
          </label>
          <input
            type="text"
            placeholder={fields.schoolPlaceholder}
            value={form.school}
            onChange={set('school')}
            className={INPUT_CLS}
            required
          />
        </div>

        {/* Parent Name */}
        <div>
          <label className={LABEL_CLS}>
            <Users size={12} className="inline mr-1" />
            {fields.parentName}
          </label>
          <input
            type="text"
            placeholder={fields.parentNamePlaceholder}
            value={form.parentName}
            onChange={set('parentName')}
            className={INPUT_CLS}
          />
        </div>

        {/* Parent Phone */}
        <div>
          <label className={LABEL_CLS}>
            <Phone size={12} className="inline mr-1" />
            {fields.parentPhone}
          </label>
          <input
            type="tel"
            placeholder={fields.parentPhonePlaceholder}
            value={form.parentPhone}
            onChange={set('parentPhone')}
            className={INPUT_CLS}
            maxLength={10}
          />
        </div>

        {/* How heard */}
        <div className="sm:col-span-2">
          <label className={LABEL_CLS}>{fields.howHeard}</label>
          <select value={form.howHeard} onChange={set('howHeard')} className={INPUT_CLS}>
            <option value="">{fields.howHeardPlaceholder}</option>
            {HOW_HEARD_VALS.map((val, i) => (
              <option key={val} value={val}>{fields.howHeardOptions[i]}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold font-tamil text-base py-4 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-500/30 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            {f.submitting}
          </>
        ) : (
          f.submit
        )}
      </button>

      <p className="text-center text-white/30 text-xs font-tamil mt-3">{f.free}</p>
    </form>
  );
}
