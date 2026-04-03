const API_BASE = import.meta.env.VITE_API_URL || '/api';

export const registerForEvent = async (formData) => {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'பதிவு தோல்வியடைந்தது');
  return data;
};

export const getRegistrationCount = async () => {
  try {
    const res = await fetch(`${API_BASE}/register/count`);
    const data = await res.json();
    return data.count || 0;
  } catch {
    return 0;
  }
};
