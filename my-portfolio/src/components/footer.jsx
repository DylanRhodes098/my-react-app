import styled from "styled-components"

const MAINWRAP = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
`
const CONTACTSWRAP = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

const SOCIALSWRAP = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`

const EMAIL = styled.div`
padding:10px;
`
const PHONE = styled.div`
padding:10px;
`
const GITHUB = styled.div`
padding:10px;
`
const LINKEDIN = styled.div`
padding:10px;
`

const Footer = () => {
    return (
        <>
        <MAINWRAP>
        <CONTACTSWRAP>
                <EMAIL>
                <p>Email:</p>
                <a href mailto="dylanrhodes098@gmail.com">dylanrhodes098@gmail.com</a>
                </EMAIL>
                <PHONE>
                <p>Phone:</p>
                <a href mobile="07714589120">07714589120</a>
                </PHONE>
            </CONTACTSWRAP>
            <SOCIALSWRAP>
            <LINKEDIN>
                <img src="#" alt="link"/>
            </LINKEDIN>
            <GITHUB>
                <img src="#" alt="git"/>
            </GITHUB>
        </SOCIALSWRAP>
        </MAINWRAP>
        </>
    )
}

export default Footer;