import { createRoot } from 'react-dom/client';
import { App } from '@/app';
import '@/styles/global.css';

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
