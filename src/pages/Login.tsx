import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputGroup from '../components/InputGroup';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = (e: FormEvent) => {
    //페이지 refresh를 막아줌
    e.preventDefault();

    // api signin

    // 홈화면으로 이동
    navigate('/');
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen p-6">
        <div className="w-10/12 mx-auto md:w-96">
          <h1 className="mb-2 text-lg font-medium">로그인</h1>
          <form onSubmit={handleSubmit}>
            <InputGroup placeholder="Email" value={email} setValue={setEmail} error={errors.email} />

            <InputGroup placeholder="Password" value={password} setValue={setPassword} error={errors.email} />

            <button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded">
              로그인
            </button>
          </form>

          <small>
            아직 아이디가 없나요?
            <Link to="/signin" className="ml-1 text-blue-500 uppercase">
              회원가입
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
