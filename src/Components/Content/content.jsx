/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './content.css'
import 'antd/dist/antd.css'
import { Card, Col } from 'antd'
import { Form, Input, Row, Button } from 'antd'
import img1 from '../assets/Shriram City.jpeg'
import Lottie from 'lottie-react';
import hi from '../../hi.json';


const Content = () => {
  return (
    <div className="Signin">

      <Lottie animationData={hi} style={
        {width:"100px",
        position:"relative",
        top:"300px"
        }}></Lottie>
      
    <Card className="Main-Card">
      <div className="Img">
        <img src={img1} alt="" />
      </div>

      <div className="Text-Label">
        <h3>Welcome!</h3>
        <h5>Please confirm your Mobile Number to set Password</h5> <hr />
      </div>
      <Form className="Signin-Form">
        <Row>
          <Col>
            <Form.Item
              label="Enter Your Phone Number"
              className="Phone-Number-label"
              name="username"
              rules={[{ message: 'Please Enter Your Phone Number!' }]}
            ></Form.Item>
          </Col>
        </Row>
        <Row>
          <Input className="Input-Field" placeholder="+91" />
        </Row>
        <Row>
          <Col>
            <Form.Item
              label="Enter OTP"
              className="OTP-label"
              name="username"
              rules={[{ message: 'Please Enter Your Phone Number!' }]}
            ></Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Input className="Input-Field" />
            <Input className="Input-Field" />
            <Input className="Input-Field" />
            <Input className="Input-Field" />
          </Col>
        </Row>

        <Row className="RESEND-button">
          <Col>
            <p>Please enter your 4 digit OTP sent on +91XXXXXXXXXX</p>
          </Col>
          <Col>
            <p className="resend-button">RESEND</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button type="primary" htmlType="submit">
              Set Password
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
    </div>
  )
}
export default Content
