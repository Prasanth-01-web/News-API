import { Button, Form, Input } from 'antd';
import React from 'react'
import 'antd/dist/antd.css'


const App2 = () => {

    const onFinish = (values) =>{
        console.log('Success:' , values);
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
  return (
    <div>
        <Form
        style={{width:"400px"}}
        onFinish={onFinish}
        onError={onFinishFailed}
        autoComplete="off"
        >
            <Form.Item 
            name="UserName"
            label="UserName"
            rules={[{
                required:"ture",
                message:"Please Enter your Name!",
            }]}
            >
            <Input type='text' placeholder='UserName' maxLength={20}/>
            </Form.Item>

            <Form.Item 
            name="Password"
            label="Password"
            rules={[{
                required:"ture",
                message:"Please Enter your Password!",
            }]}
            >
                <Input.Password type='text' placeholder='UserName' maxLength={20}/>
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit'> Submit</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default App2;