import { Outlet } from 'react-router-dom';
import { Header, Footer } from './shared/layouts';
import { ScrollToTop } from './shared/components/ScrollToTop';


function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
