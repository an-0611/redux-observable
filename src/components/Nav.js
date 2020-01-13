import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Li = styled.li`
  display: inline-block;
  margin: 0 10px;
  
  & > a {
    text-decoration: none;
    color: black;
  };
`;

export default function Nav() {
  const List = () => {
    const navListData = [
      { 'path': '/', 'name': 'Home' },
      { 'path': '/Thunk/', 'name': 'Thunk' },
      { 'path': '/Saga/', 'name': 'Saga' },
      { 'path': '/Observable/', 'name': 'Observable' },
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
    <div style={{ background: 'red', width: '100%', height: '100%' }}>
      <nav>
        <ul>
          <List />
        </ul>
      </nav>
    </div>
  );
}