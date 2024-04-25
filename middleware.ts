import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/events/:id',
  '/api/webhook/clerk',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
]);

// check protected routes configuration later

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)',
  ], // Run middleware on API routes
};
