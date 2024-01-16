import { createBrowserRouter } from 'react-router-dom';
import { Shell } from '@/layouts/shell';

// pages
import { HomePage } from '@/pages/home';
import { DetailsPage } from '@/pages/details';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'country/:code',
        element: <DetailsPage />,
      },
    ],
  },
]);
