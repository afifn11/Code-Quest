import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <Hero />
      {/* Tambahkan komponen About, Projects, dll di sini */}
    </div>
  );
}

export default App;