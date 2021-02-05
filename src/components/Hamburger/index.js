import { Box, Line } from "./styles";

function Hamburger({ active, handleClick }) {
    return (
        <Box onClick={handleClick}>
            <Line active={active} />
        </Box>
    )
}

export default Hamburger;