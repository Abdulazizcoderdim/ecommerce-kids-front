import Layout from '@/layout/layout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <div>sa</div>,
      },
    ],
  },
]);
