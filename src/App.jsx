import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import LineChartComponent from './components/LineChartComponent';
import BarChartComponent from './components/BarChartComponent';

function App() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>{t('title')}</h1>
      <LanguageSelector />
      <LineChartComponent />
      <BarChartComponent />
    </div>
  );
}

export default App;

