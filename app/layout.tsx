import localFont from 'next/font/local';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import "@/src/styles/main.scss";

const generalSans = localFont({
  src: [
    {
      path: '../src/fonts/GeneralSans-Light.otf',
      weight: '400',
    },
    {
      path: '../src/fonts/GeneralSans-Regular.otf',
      weight: '500',
    },
    {
      path: '../src/fonts/GeneralSans-Medium.otf',
      weight: '600',
    },
    {
      path: '../src/fonts/GeneralSans-Semibold.otf',
      weight: '700',
    },
    {
      path: '../src/fonts/GeneralSans-Bold.otf',
      weight: '800',
    },
  ],
  variable: '--font-general-sans',
  display: 'swap',
  adjustFontFallback: false,
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${generalSans.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

