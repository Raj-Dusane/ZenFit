import React from 'react';
import styled from "styled-components";
import TextInput from './TextInput';
import Button from './Button';
import { UserSignIn } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/userSlice.js";


const Container = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 800;
    color: ${({ theme }) => theme.text_primary};
`;

const Span  = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 90};
`;


const SignUp = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateInput = () => {
        if (!email || !password) {
            alert("Please fill in all the fields");
            return false;
        }
        return true;
    };

    const handelSignUp = async () => {
        setLoading(true);
        setButtonDisabled(true);
        if (validateInput()) {
            await UserSignUp({name, email, password}).then((res) => {
                // console.log(res);
                dispatch(loginSuccess(res.data));
                // alert("Login Success");
                setLoading(false);
                setButtonDisabled(false);
            }).catch((err) => {
                setLoading(false);
                setButtonDisabled(false);
                alert(err.response.data.message);
            });
        }
    };

  return (
    <Container>
        <div>
            <Title> Welcome To ZenFit 👋</Title>
            <Span> Please the details to create an account </Span>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
        }}>
            <TextInput 
                label="Full name" 
                placeholder="Enter your ful name"
                value={name}
                handelChange={(e)=>setName(e.target.value)}
            />
            <TextInput 
                label="Email Address" 
                placeholder="abc@gmail.com"
                value={email}
                handelChange={(e) => setEmail(e.target.value)}
            />
            <TextInput 
                label="Password" 
                placeholder="Enter your password here"
                password
                value={password}
                handelChange={(e) => setPassword(e.target.value)}
            />
            <Button
                text="SignIn"
                onClick={handelSignUp}
                isLoading={loading}
                isDisabled={buttonDisabled}
            />
        </div>
    </Container>
  )
}

export default SignUp;