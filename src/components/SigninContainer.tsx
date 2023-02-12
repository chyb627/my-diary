import { Button, Col, Input, Row } from 'antd';
import React, { useRef } from 'react';

export default function SigninContainer() {
  const emialRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <Row align="middle" className="signin_row">
      <Col span={24}>
        <Row className="signin_contents">
          <Col span={12}>
            <img className="signin_bg" alt="Signin" src="turtle.png" />
          </Col>
          <Col span={12}>
            <div className="signin_title">My Diary</div>
            <div className="signin_subtitle">Please Note Your Opinion</div>

            <div className="signin_underline" />

            <div className="email_title">
              Email
              <span className="required"> *</span>
            </div>

            <div className="input_area">
              <Input className="input" placeholder="Email" autoComplete="email" name="email" ref={emialRef} />
            </div>

            <div className="password_title">
              Password
              <span className="required"> *</span>
            </div>

            <div className="input_area">
              <Input
                className="input"
                type="password"
                autoComplete="current-password"
                ref={passwordRef}
                onClick={click}
              />
            </div>
            <div className="button_area">
              <Button className="button" size="large">
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
