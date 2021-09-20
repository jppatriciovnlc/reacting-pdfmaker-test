import logo from './logo.svg';
import './App.css';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { data } from './data';
import { Print } from './print';


pdfMake.vfs = pdfFonts.pdfMake.vfs;



const preview = () => {
  const cprint = new Print(data);
  const document = cprint.handleDocument();
  
  pdfMake.createPdf(document).open({}, window.open('', '_blank'));
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
             
      </header>
      <section className="App-body">
      <button className="btn" onClick={preview}>
        Create PDF
      </button>
      </section>
    </div>
  );
}

export default App;
