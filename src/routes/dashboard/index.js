import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { color } from 'utils'
import { NumberCard, Sales, RecentSales, Comments, Completed, Browser, Cpu, User } from './components'
import styles from './index.less'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function Dashboard ({ dashboard }) {
  const { sales, numbers, recentSales, comments, completed, browser, cpu, user } = dashboard
  // const numberCards = numbers.map((item, key) => (<Col key={key} lg={6} md={12}>
  //   <NumberCard {...item} />
  // </Col>))

  return (
    <Row gutter={24}>
      <Col lg={8} md={24}>
        <Card bordered={false} bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}>
          <User {...user} />
        </Card>
      </Col>
      <Col lg={8} md={24}>
        <Card bordered={false} bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}>
          <User {...user} />
        </Card>
      </Col>
      <Col lg={8} md={24}>
        <Card bordered={false} bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}>
          <User {...user} />
        </Card>
      </Col>


      <Col lg={24} md={24}>
        <Card bordered={false}
          bodyStyle={{
            padding: '24px 36px 24px 0',
          }}
        >
          <Sales data={sales} />
        </Card>
      </Col>
      
    </Row>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)
