import { MenuStyles, Item } from './styles'

function Menu({ MenuItems, active }) {
    return (
        <MenuStyles active={active}>
            {MenuItems.map(item => <Item active={active} key={item.id}>{item.Item}</Item>)}
        </MenuStyles>
    )
}

export default Menu;