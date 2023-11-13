import React, { useState } from 'react';
import { tv } from "tailwind-variants";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { InputForm } from "./components/InputForm";
import { Button } from "./components/Button";

const LoginPage = tv({
  slots: {
    base: "flex flex-col h-screen items-center pt-10 bg-[#fee4c8]",
    headerText: "text-4xl font-bold mb-10",
  },
});

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { base, headerText } = LoginPage();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        identifier,
        password,
      });

      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);

      alert('Login successful!');
      navigate('/home');
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message || 'An unknown error occurred';
        alert(`Login failed: ${errorMessage}`);
      } else if (error.request) {
        alert('Login failed: No response from server');
      } else {
        alert('Login failed: Error in sending request');
      }
    }
  };

  return (
    <main className={base()}>
      <h1 className={headerText()}>ลงชื่อเข้าใช้</h1>
      <div className="w-full h-full flex justify-center bg-white rounded-tl-2xl rounded-tr-2xl">
        <section className="w-4/5 py-6">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <InputForm
              label="หมายเลขโทรศัพท์/อีเมล"
              id="username"
              placeholder="name@email.com"
              value={identifier}
              func={(e) => setIdentifier(e.target.value)}
            />
            <InputForm 
              label="รหัสผ่าน" 
              type="password" 
              id="password"
              value={password}
              func={(e) => setPassword(e.target.value)} />
            <Button label="ลงชื่อเข้าใช้" type="submit" />
          </form>

          <div className="flex items-center py-4 mt-4">
            <div className="flex-grow h-px bg-primary"></div>
            <span className="flex-shrink text-sm text-primary px-4 italic font-light">
              หากไม่มีบัญชี
            </span>
            <div className="flex-grow h-px bg-primary"></div>
          </div>
          <div className="flex justify-center">
            <Link to="/register">
              <Button label="ลงทะเบียน" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
