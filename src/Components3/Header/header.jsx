/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Form, Navbar } from 'react-bootstrap'
import 'antd/dist/antd.css'
import { useState } from 'react';

function GoogleNews({setsearchs}) {

  // const onSubmit = () =>{
  //   console.log("hai")
  // }

  const[Google,setGoogle]=useState("")
  console.log(Google,"leo")

  return (
    <div className="Google-news">
      <Navbar expand="lg" variant="light" bg="light" className="Nav-bar">
        <Container>
          <Navbar.Brand>India Today</Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              onChange={(e)=>setGoogle(e.target.value)}
              aria-label="Search"

            />
            <Button variant="outline-success" onClick={()=>setsearchs(Google)}>
              Search
            </Button>
            <Button className="Login-button button-85">Login</Button>
          </Form>
        </Container>
      </Navbar>

    </div>
  )
}

export default GoogleNews;
