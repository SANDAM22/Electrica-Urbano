import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/', '/Nosotros', '/Contacto','/api/contact','/Richi','/Jeluz','/Candela','/Kalop','/Sica','/Tacsa','/Trefilcon','/Baw','/Ferrolux','/Faroluz'],
  
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
