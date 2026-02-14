import { type RouteConfig, index, layout } from '@react-router/dev/routes';

export const routes: RouteConfig = [
  layout('root.tsx', [
    index('routes/home.tsx'),
    // TODO: Add /about route
    // TODO: Add /projects route
    // TODO: Add /projects/:id route for dynamic project details
  ]),
];