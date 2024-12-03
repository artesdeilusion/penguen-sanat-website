import Navbar from '@/components/navbar';
import '@/app/globals.css';
import Footer from '@/components/footer';
import { WhatsApp } from '@mui/icons-material';

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white light font-raleway">
      <nav>
        <Navbar />
      </nav>
      <main className="bg-white light">{children}</main>
      <footer>
        <Footer />
      </footer>
      
      {/* WhatsApp Icon Fixed in Bottom-Right Corner */}
      <div className="fixed shadow-xl  bg-green-500  text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition bottom-4 right-4">
        <a
          href="https://api.whatsapp.com/send/?phone=905348418664&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className=" "
          aria-label="Chat on WhatsApp"
        >
          <WhatsApp fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default RootLayout;
 