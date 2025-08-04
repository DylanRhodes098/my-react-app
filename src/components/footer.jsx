import styled from "styled-components"

const MAINWRAP = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
margin-
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
                <a className="contact" href="mailto:dylanrhodes098@gmail.com">dylanrhodes098@gmail.com</a>
                </EMAIL>
                <PHONE>
                <p>Phone:</p>
                <a className="contact" href="tel:07714589120">07714589120</a>
                </PHONE>
            </CONTACTSWRAP>
            <SOCIALSWRAP>
            <LINKEDIN>
                <a className="contact" href="https://www.linkedin.com/in/dylan-rhodes-58a8a1263/"><img className="contact" src="../public/linkedin.jpeg" height="30px" width="30px"/></a>
            </LINKEDIN>
            <GITHUB>
            <a className="contact" href="https://github.com/DylanRhodes098"><img className="contact" src="../public/gitHub.jpeg" height="30px" width="30px"/></a>
            </GITHUB>
        </SOCIALSWRAP>
        </MAINWRAP>
        </>
    )
}

export default Footer;