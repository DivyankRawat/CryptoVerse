import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from 'antd'
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/news' element={<News />} />
            </Routes>
            <br />
            <br />
            <p> <b>NOTE</b>: I wanted to add more data about cryptocurrencies like exchange, detals and their history price but the api only had limited features available for free use.</p>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
            <Link to="/">
              Cryptoverse Inc.
            </Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
