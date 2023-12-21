import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
publicRoutes:['/','/Nosotros']
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 