import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

export const metadata = {
  title: "Eléctrica Urbano",
  description: "Distriubuidora de materiales eléctricos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/LogoUrbano.jpg" sizes="any" />
      </Head>
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
    </>
  );
}
