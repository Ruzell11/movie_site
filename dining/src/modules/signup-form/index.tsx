import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useToGetUserRequest } from './services/query';
import { paramsObj, userSignUpRequest } from './services';
import { useMutation } from '@tanstack/react-query';


export const SignupForm: React.FC = () => {
    const [form] = Form.useForm();

   const {mutate , isLoading } = useToGetUserRequest();

    const onFinish = (values: paramsObj) => {
        const params = {
            name: values.name,
            email: values.email,
            password: values.password
        }
        mutate(params)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='justify-center flex items-center h-full w-full'>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button className='bg-red-500 text-white' htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
