import styled from 'styled-components'

export const Box = styled.div`
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Line = styled.span`
    display: block;
    width: 20px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    transform: ${({ active }) => active ? 'rotate(45deg)' : 'rotate(0)'};
    transition: all 200ms ease-in-out;

    &::before, &::after {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background-color: #fff;
        position: absolute;
        transform: ${({ active }) => active ? 'rotate(90deg)' : 'rotate(0)'};
        transition: all 200ms ease-in-out;
    }

    &::before {
    top: ${({ active }) => active ? '0' : '-6px'};
}

    &::after {
    top: ${({ active }) => active ? '0' : '6px'};
}
`;