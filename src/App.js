import Header from "./component/Header";
import Footer from "./component/Footer";
import Page from "./component/Page";
import Sidebar from "./component/Sidebar";


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