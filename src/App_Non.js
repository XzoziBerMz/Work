import logo from './logo.svg';
import './App.css';

function App_Non() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 className="t-green">Resume</h1>
        </div>
        <div>
          <h2>นายสุชานนท์ พู่สกุลโชติ</h2>
        </div>
        <div>
          <p>สีที่ชอบ : สีดำ</p>
        </div>
        <div>
          <p>ความสูง : 178 ซม.</p>
        </div>
        <div>
          <p>น้ำหนัก : 78 กก.</p>
        </div>
        <div>
          <p>คำคมที่ชอบ : ครึ่งหนึ่งของความสนุกในการเดินทาง คือความงดงามของการหลงทาง</p>
        </div>
      </header>
    </div>
  );
}

export default App_Non;
