import './globals.css';

export const metadata = {
  title: 'Aurélie — Fine Jewellery',
  description: 'Aurélie — Fine Jewellery',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
