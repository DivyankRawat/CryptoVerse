import React, { useState } from 'react'
import millify from 'millify' 
import {Card, Row, Col, Input} from 'antd'
import {Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'

function Cryptocurrencies({simplified}) {
  // If the count is simplified, show 10 else show 100. Simplied is taken as prop as it is already used in homepage..
  const count = simplified ? 10: 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  if(isFetching) return 'Loading...'

  // console.log(cryptos); will display all the coins

  return (
    <div>
        <Row gutter={[32,32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id} >
            <Link to={`/crypto/${currency.id}`}>
                <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl}/>} 
                  hoverable
                  >
                  <p>Price : {millify(currency.price)}</p>
                  <p>Market Cap : {millify(currency.marketCap)}</p>
                  <p>Daily Change : {millify(currency.change)}</p>
            </Card>
            </Link>
          </Col>
        ))}
        </Row>
    </div>
  )
}

export default Cryptocurrencies