import styled from "styled-components";

// - - - TECHNOLOGIES - - - //
// - - - WRAPPING - - - //
const TechWrap = styled.section`
background-color:var(--secondary-color);
color:var(--primary-color);
padding-top:1%;
padding-bottom:5%;
`

const TechSubWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  & > div {
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
`;

const TechImageWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap:5px;
  `

const TechHeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap:12%;`

  const Technologies = () => {

    return(<>
    {/* Wrap technologies body */}
    <TechWrap>
  
<h2 className="techHeader">Software Skills</h2>

{/* Wrap technologies content */}
<TechSubWrap>
            <div>
            <h1 className="techSubHeader">Project</h1>
            {/* Wrap technologies logos */}
        <TechImageWrap>
        <img className="techImageScale" src="/gitHubTrans.png"  width="24%"></img>
        <img className="techImageScale" src="/visualStudioLogo.png" width="23%"></img>
        <img className="techImageScale" src="/TrelloLogoTrans.png" width="23%"></img>
        </TechImageWrap>
        {/* Wrap technologies headers */}
        <TechHeaderWrap>
        <p className="techHeaderScale">GitHub</p>
        <p className="techHeaderScale">Visual Studio</p>
        <p className="techHeaderScale">Trello</p>
        </TechHeaderWrap>
        </div>
        <div>
            <h1 className="techSubHeader">Development</h1>
            {/* Wrap technologies logos */}
            <TechImageWrap>
        <img className="techImageScale" src="/nodeLogoTrans.png" width="21%"></img>
        <img className="techImageScale" src="/wordPressLogoTrans.png" width="23%"></img>
        <img className="techImageScale" src="/reactLogoTrans.png" width="25%"></img>
        </TechImageWrap>
        {/* Wrap technologies logos */}
        <TechHeaderWrap>
        <p className="techHeaderScale">Node.js</p>
        <p className="techHeaderScale">WordPress</p>
        <p className="techHeaderScale">React</p>
        </TechHeaderWrap>
        </div>
        </TechSubWrap>
        </TechWrap>
    </>)
  }

  export default Technologies;