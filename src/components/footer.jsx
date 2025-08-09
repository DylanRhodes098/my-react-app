import styled from "styled-components"

// - - - BODY - - - //
// - - - WRAPPING - - - //
const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
margin-top:5%;
`
// - - - CONTACTS - - - //
// - - - WRAPPING - - - //
const ContactsWrap = styled.div`
display:flex;
flex-direction:row;
align-items:center;

 @media (max-width: 768px) {
 display: none;
`
// - - - SOCIALS - - - //
// - - - WRAPPING - - - //
const SocialsWrap = styled.div`
display:flex;
flex-direction:row;
justify-content:center;

`

const Footer = () => {
    return (
        <>
         {/* Wrap body */}
        <Wrapper>
             {/* Wrap contacts */}
        <ContactsWrap>
             {/* Email div */}
                <div>
                <p>Email:</p>
                <a className="footerContent" href="mailto:dylanrhodes098@gmail.com">dylanrhodes098@gmail.com</a>
                </div>
                {/* Phone div */}
                <div>
                <p>Phone:</p>
                <a className="footerContent" href="tel:07714589120">07714589120</a>
                </div>
            </ContactsWrap>
            {/* Wrap socials */}
            <SocialsWrap>
                {/* Linkedin div */}
            <div>
                <a className="footerContent" href="https://www.linkedin.com/in/dylan-rhodes-58a8a1263/"><img className="contact" src="/linkedin.jpeg" height="30px" width="30px"/></a>
            </div>
            {/* Git div */}
            <div>
            <a className="footerContent" href="https://github.com/DylanRhodes098"><img className="contact" src="/gitHub.jpeg" height="30px" width="30px"/></a>
            </div>
        </SocialsWrap>
        </Wrapper>
        </>
    )
}

export default Footer;