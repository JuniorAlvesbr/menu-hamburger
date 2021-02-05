import { useState } from 'react';
import Header from "./components/Header";
import Hamburger from "./components/Hamburger";
import Menu from "./components/Menu";

function App() {
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

  // const menuItems = ['Home', 'Noticias', 'Informativos', 'Curiosidade', 'Sobre']

  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((old) => !old)
  }

  return (
    <>
      <Header>
        <Hamburger active={active} handleClick={handleClick} />
      </Header>
      <Menu MenuItems={menuItems} active={active} />
    </>
  );
}

export default App;
