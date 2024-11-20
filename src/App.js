import Header from "./component/Header";
import Footer from "./component/Footer";


export default function App() {
    return (
      <>
        <Header />
        <div className="container">
          <Page />
          <Sidebar />
        </div>
        <Footer />
      </>
    );
  }