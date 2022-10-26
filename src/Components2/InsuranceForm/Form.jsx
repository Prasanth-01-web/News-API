/* eslint-disable jsx-a11y/anchor-is-valid */
import './Form.css'
import { Card, Row, Col, Input, Checkbox} from 'antd'
import React from 'react'
import 'antd/dist/antd.css'

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
const Form = () => {
  return (
    <div className="Form">
      <Card 
        title="MediCare Premier | MediCare | MediCare Product | MediCare Plus"
        className="Insurance-Form"
        style={{ width: '100%' }}
      >
        <Row>
          <Col span={3}>
            <p>Address :</p>
          </Col>
          <Col span={9}>
            <Input />
          </Col>

          <Col span={3}>
            <p>Landmark :</p>
          </Col>
          <Col>
            <Input />
          </Col>        
        </Row>

        <Row>
          <Col span={3}>
            <p>Area :</p>
          </Col>
          <Col span={9} >
            <Input />
          </Col>
          <Col span={3}>
            <p>CityTown :</p>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <p>Pincode :</p>
          </Col>
          <Col span={9}>
            <Input />
          </Col>
          <Col span={3}>
            <p>Email :</p>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <p>Phone :</p>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>

        <Row>
          <Col span={18}>
            <p style={{ color: 'red' }}>DETAILS OF HOSPITALIZATION</p>
          </Col>
          <Col>
            <p style={{ color: 'red' }}>(SECTION D)</p>
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <p>Name of Hospital :</p>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <p>Date Of Injury :</p>
          </Col>
          <Col span={9}>
            <Input type="date" />
          </Col>
          <Col span={3}>
            <p>Time :</p>
          </Col>
          <Col>
            <Input type="time" />
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <p>Date Of Admission :</p>
          </Col>
          <Col span={9}>
            <Input type="date" />
          </Col>
          <Col span={3}>
            <p>Time :</p>
          </Col>
          <Col>
            <Input type="time" />
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <p>Date Of Discharge :</p>
          </Col>
          <Col span={9}>
            <Input type="date" />
          </Col>
          <Col span={3}>
            <p>Time :</p>
          </Col>
          <Col>
            <Input type="time" />
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <p>System Of Medicine :</p>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>

        <Row>
          <Col span={18}>
            <p style={{ color: 'red' }}>DETAILS OF CLAIM</p>
          </Col>
          <Col>
            <p style={{ color: 'red' }}>(SECTION E)</p>
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <p>Pre:Hospital Expenses : Rs</p>
          </Col>
          <Col span={9}>
            <Input />
          </Col>

          <Col span={3}>
            <p>Hospital Expenses :</p>
          </Col>
          <Col>
            <Input />
          </Col>        
        </Row>

        <Row>
          <Col span={3}>
            <p>Post:Hospital Expenses : Rs</p>
          </Col>
          <Col span={9}>
            <Input />
          </Col>

          <Col span={3}>
            <p>Health-Chech Up Cost:</p>
          </Col>
          <Col>
            <Input />
          </Col>        
        </Row>

        <Row>
          <Col span={3}>
            <p>Ambulance Charges : Rs</p>
          </Col>
          <Col span={9}>
            <Input />
          </Col>

          <Col span={3}>
            <p>Other (Cost):</p>
          </Col>
          <Col>
            <Input />
          </Col>        
        </Row>

        <Row>
          <Col span={3}>
            <p>Dialy Cash :</p>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <p>Total :</p>
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>

        <Row>
          <Col span={18}>
            <p style={{ color: 'red' }}>CLAIM DOCUMENTS SUBMITTED - CHECK LIST</p>
          </Col>
        </Row>

        <Row>
           <Col span={5}><Checkbox onChange={onChange}>Claim Form duty signed</Checkbox></Col>
           <Col><Checkbox onChange={onChange}>Copy of the Claim intimatiom , if any</Checkbox></Col>
        </Row>

        <Row>
           <Col span={5}><Checkbox onChange={onChange}>Hospital Main Bill</Checkbox></Col>
           <Col><Checkbox onChange={onChange}>Hospitam Break - Up Bill</Checkbox></Col>
        </Row>

        <Row>
           <Col span={5}><Checkbox onChange={onChange}>Pharmacy Bill</Checkbox></Col>
           <Col><Checkbox onChange={onChange}>Operation Theatre Notes</Checkbox></Col>
        </Row>

        <Row>
           <Col span={5}><Checkbox onChange={onChange}>ECG</Checkbox></Col>
           <Col><Checkbox onChange={onChange}>Doctor's request for investigation</Checkbox></Col>
        </Row>

        <Row>
           <Col span={5}><Checkbox onChange={onChange}>Investigation Reports</Checkbox></Col>
           <Col><Checkbox onChange={onChange}>Doctor's Prescription</Checkbox></Col>
        </Row>

        <Row>
           <Col><Checkbox onChange={onChange}>Other's</Checkbox></Col>
        </Row>
        <Row>
          <Col>
          <button>Submit</button></Col>
        </Row>
     


      </Card>
    </div>
  )
}

export default Form
