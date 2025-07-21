import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="lang">{t('selectLanguage')}:</label>
      <select id="lang" value={i18n.language} onChange={handleChange} style={{ marginLeft: '0.5rem' }}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
