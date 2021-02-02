import { Form, Input, Button } from 'antd';
import Background from '../../static/background_login.jpg'


const layout = {
    wrapperCol: {
        span: 24,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};

function Login(props) {
    return (
        <div className="bg" style={{backgroundImage:`url(${Background})`}}>
            <div className="container">
                <div className="login-container" >
                    <h1>Đăng Nhập</h1>
                    <Form
                        {...layout}
                        name="basic"
                        //onFinish={this.onFinish}
                        style={{ margin: "auto" }}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit"> Đăng nhập </Button>
                        </Form.Item>
                        <div>
                            <span>Không có tài khoản?</span> <a href="signup"><span>Tạo tài khoản</span></a>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;