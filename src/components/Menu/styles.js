import styled from 'styled-components'

export const MenuStyles = styled.nav`
    width: 300px;
    background-color: #2980b9;
    transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all 200ms ease-in-out;
`

export const Item = styled.a.attrs({ href: "#" })`
    display: block;
    padding: 20px 20px;
    margin-bottom: 2px;
    background-color: ${({ active }) => active ? '#3498db' : '#2980b9'};
    color: ${({ active }) => active ? '#FFFFFF' : '#2980b9'};
    font-size: 20px;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    transition-delay: 200ms;
`