import React from 'react'
import millify from 'millify'  // use to overall a particul number which is too big to display ex. 1M
import {Typography , Row, Col, Statistic} from 'antd'
import {Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography;

function Homepage() {

  const { data, isFetching } = useGetCryptosQuery();
  // console.log(data);
  if(isFetching) return 'Loading...'
  const GlobalStats = data?.data?.stats;

  return (
    <div>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={GlobalStats.total}></Statistic></Col>
        <Col span={12}><Statistic title='Total Total Exchanges' value={millify(GlobalStats.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(GlobalStats.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(GlobalStats.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(GlobalStats.totalMarkets)}></Statistic></Col>
      </Row>
    </div>
  )
}

export default Homepage