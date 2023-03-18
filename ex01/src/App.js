import img1 from './images/img1.jpg'
import styleImg1 from './style.json';
import nomes from './nomes.json';
import './App.css';

const img2 = process.env.PUBLIC_URL + "/img2.jpg";
const urlImg3 ='https://images.unsplash.com/photo-1610878914708-df115b5a994c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo">Pessoas em geral</h1>
      </header>
      <main>
        <div className='img-card'>
          <img src={img1} alt='imagem 1' style={styleImg1}/>
          <span className='nome'>{nomes.img1}</span>
        </div>
        <div className='img-card'>
          <img src={img2} alt="imagem 2" style={{
           width: "90%",
           height: "70%",
       
           border: "none",
           borderRadius: "8px",
           objectFit: "cover",
          }}/>
          <span className='nome'>{nomes.img2}</span>
        </div>
        <div className='img-card'>
          <img src={urlImg3} alt="imagem 3" className='img3'/>
          <span className='nome'>{nomes.img3}</span>
        </div>
      </main>
    </div>
  );
}

export default App;
