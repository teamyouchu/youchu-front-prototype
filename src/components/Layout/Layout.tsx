import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }: any) {
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
