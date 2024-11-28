import Navbar from '@/components/navbar';
import '@/app/globals.css';
import Footer from '@/components/footer';


interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (


    <div className='bg-white light' >
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className='bg-white light'>{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>


  );
};

export default RootLayout;