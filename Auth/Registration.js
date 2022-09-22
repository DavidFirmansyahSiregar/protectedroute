import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { userRegistration } from "../_services";
import { Layout, Button, Form, Input } from "antd";
import "./auth.css"


const { Header, Footer, Content } = Layout
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const Registration = () => {
    const navigate = useNavigate();

    const [userCredentials, setUserCredential] = useState({userName: "", email: "", password: ""});
    // console.log(userCredentials);
    const [validUserCredentials, setValidUserCredentials] = useState(false)
    
    const onFinish = (values) => {
        console.log(values);
      };
    useEffect(() => {
        setValidUserCredentials(USER_REGEX.test(userCredentials));
    }, [userCredentials])
    //   const userRegistration = async e => {
    //     e.preventDefault();

    //     await axios.post("https://nodejs-backend-api-playground.herokuapp.com/auth/user/registration", {
    //         userName: "", email: "", password: ""
    //     });
    //     navigate("/login");
    // }
    return (
        <Layout>
        <Header></Header>
        <div className="registration-page-container">
            <Content>
            <h1><b>REGISTRATION</b></h1>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item 
                    name={['user', 'name']}
                    label="Name"
                    onChange={(e) => {
                        setUserCredential({...userCredentials, user: e.target.value})
                    }}
                    rules={[
              
                    {
                    required: true,
                    },
                    ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    onChange={(e) => {
                        setUserCredential({...userCredentials, user: e.target.value})
                    }}
                    rules={[
                    {
                    type: 'email',
                    },
                    ]}
                >
                <Input />
                </Form.Item>

                <Form.Item 
                    name={['user', 'password']} 
                    label="Password"
                    onChange={(e) => {
                        setUserCredential({...userCredentials, user: e.target.value})
                    }}
                >
                <Input />
                </Form.Item>

                <Form.Item 
                    name={['user', 'confirmpassword']} 
                    label="ConfirmPassword"
                >
                <Input />
                </Form.Item>

            <Form.Item 
                wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button 
                    type="primary" 
                    htmlType="submit"
                    onClick={() => {
                        userRegistration(userCredentials, navigate);
                    }}
                >
                <b>Submit</b>
                </Button>
            </Form.Item>
            </Form>
            </Content>
            <Footer>
                <h1>Already have an account?</h1>
                <button 
                    type="primary" 
                    onClick={() => navigate("/login")}>
                LOGIN
                </button>
            </Footer>
        </div>
        </Layout>
    );
};