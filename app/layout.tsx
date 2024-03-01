import { ClerkProvider, SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Eléctrica Urbano",
  description: "Distriubuidora de materiales eléctricos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          fontFamily: "sans-serif",
        },
        elements: {
          rootBox: {
            "@media (min-width: 768px)": {
              marginTop: "2%",
              marginLeft: "32%",
            },
          },
          
        },
      }}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
