import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Li = styled.li`
  display: inline-block;
  margin: 0 10px;
`

export default function Nav() {
  const List = () => {
    const navListData = [
      { 'path': '/', 'name': 'Home' },
      { 'path': '/about/', 'name': 'About' },
    ];
    return navListData.map((item, i) => {
      return (
        <Li key={i}>
          <Link to={item.path}>{item.name}</Link>
        </Li>
      );
    })
  }
  return (
    <div>
      <nav>
        <ul>
          <List />
        </ul>
      </nav>
    </div>
  );
}