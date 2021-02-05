import Menu from '../../components/Menu'

const menuItems = [
    {
        id: '1',
        Item: 'Home'
    },
    {
        id: '2',
        Item: 'Noticias'
    },
    {
        id: '3',
        Item: 'Informativos'
    },
    {
        id: '4',
        Item: 'Curiosidade'
    },
    {
        id: '5',
        Item: 'Sobre'
    },
];


export default {
    title: 'Components/Menu',
    components: Menu
}

const Template = (args) => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {
    active: true,
    MenuItems: menuItems
}
