import styled from "styled-components"

const Header = () => {
const pages = [
    {key:"about", 
    value: "About"
  }, {
    key:"projects",
    value: "Projects"
  }, {
    key:"technologies",
    value: "Technologies"
  }];
  
  const Layout = ({ children, chosenPage, choosePage }) => {
  
  const selectPage = () => {
    return pages.map((page) => {
      return (
        <div key={page.key} 
        onClick={() => choosePage(page.key)}
        >{page.value}</div>
    )})
    }
}
}

export default Header;