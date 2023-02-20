import NavBar from './NavBar';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <div id="wrap">
        {children}
        <Footer />
      </div>
    </>
  );
}
