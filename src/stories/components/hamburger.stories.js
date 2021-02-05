import Hamburger from '../../components/Hamburger'

export default {
    title: 'Components/Hamburger',
    component: Hamburger,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'blue',
            values: [
                { name: 'blue', value: '#3498db' }
            ]
        }
    }
}

const Template = (args) => <Hamburger {...args} />

export const Default = Template.bind({})
Default.args = {
    active: false,
}
