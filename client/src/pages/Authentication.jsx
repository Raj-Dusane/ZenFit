import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '../utils/images/Logo.png';
import AuthImage from "../utils/images/AuthImage.jpg";

const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    background: ${({ theme }) => theme.bg};
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    flex: 1;
    background: blue;
    position: relative;
    @media (max-width: 700px) {
        display: none;
    }
`;

const Right = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 16px;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    position: absolute;
    width: 70px;
    top: 40px;
    left: 60px;
    z-index: 10;
`;

const Images = styled.img`
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Text = styled.div`
    font-size: 16px;
    text-aling: center;
    color: ${({ theme }) => theme.text_secondar};
    margin-top: 16px;
    @media (max-width: 400px) {
        font-size: 14px;
    }
`;

const TextButton = styled.span`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
`;

const Authentication = () => {
    const [login, setLogin] = useState(false);
  return (
    <Container>
        <Left> 
            <Logo src={LogoImage}/>  
            <Images src={AuthImage}/>
        </Left>
        <Right> 
            {!login ? ( <>
                    <Text> Don't have an account? 
                    <TextButton onClick={() => setLogin(true)}> SignUp </TextButton> 
                    </Text>
                </> ) : ( <> 
                    <Text> Already have an account? 
                    <TextButton onClick={() => setLogin(false)}> SignIn </TextButton> 
                    </Text>
                </> )}
        </Right>
    </Container>
  )
}

export default Authentication