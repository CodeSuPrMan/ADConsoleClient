import React,{PropTypes} from 'react';
import { Row, Col } from 'antd';
import LeftNav from './LeftNav';
import ContentLayout from './ContentLayout';
import Header from './Header';

const MainLayout=({children })=>{
  return (
    <div >
   <Row>
     <Col span={6}>col-12</Col>
     <Col span={18}>
       <Header/>
     </Col>
   </Row>
   <Row >
     <Col span={4}>
       <LeftNav />
     </Col>
     <Col span={20}>
        <ContentLayout >
          {children}
        </ContentLayout>
     </Col>
   </Row>
   <Row>
     <Col span={24}>col-6</Col>
   </Row>
 </div>
  )
}

export default MainLayout;
