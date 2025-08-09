import styled from "styled-components"

// - - - BODY - - - //
// - - - WRAPPING - - - //
const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`

const SocialLinks = () => {
    return (
        <>
        {/* Wrap body */}
         <Wrapper>
            <div>
                <a className="contact" href="https://www.linkedin.com/in/dylan-rhodes-58a8a1263/"><img className="footerContent" src="/linkedin.jpeg" height="30px" width="30px"/></a>
            </div>
            <div>
            <a className="contact" href="https://github.com/DylanRhodes098"><img className="footerContent" src="/gitHub.jpeg" height="30px" width="30px"/></a>
            </div>
        </Wrapper>
        </>
    )
};

export default SocialLinks;