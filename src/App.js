import './App.css';
import Content from './components/Content';
import MyGallery from './components/MyGallery';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

function App() {
  return (
    <>
      <Header />
      <Content />
      <MyGallery />
      <Footer />
    </>
  );
}

export default App;
