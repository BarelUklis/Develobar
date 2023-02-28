import { Providers } from '@/components/Providers';
const Navbar = dynamic(() => import('@/components/navbar/navbar'), { ssr: false });
import ContactModal from '@/components/contact-modal/contact-modal';
import dynamic from 'next/dynamic';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Navbar />
      {children}
      <ContactModal />
    </Providers>
  );
}