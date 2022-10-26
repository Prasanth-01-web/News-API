import React from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'


const { Header } = Layout
const items1 =['Signin' , 'Signup'].map((key) => ({
  key,
  label: ` ${key}`,
}))

const Headers = () => {
  return (
    <div>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items1}
          
        />
      </Header>
    </div>
  )
}
export default Headers
