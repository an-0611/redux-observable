import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from "styled-components";

const DataList = styled.div`
    margin: 20px;
    padding: 12px 24px;
    border: 1px solid;
    color: #ec4646;
    background: transparent;
    font-size: 15px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease all;
    text-align: center;
    // ${props => props.primary && css`
    //     display: flex;
    // `};
`;

const HeroContainer = styled.div`
    display: inline-block;
    border: 1px solid white;
    padding: 2px;
    width: 24%;
`;

export default function ShowData(props) {
    const { pending, products } = props;
    return (
        <DataList primary>
            {
                // !pending && 
                products.length === 0 && <div>no mapping hero data</div>
            }
            { !pending && products.length > 0 &&
                products.map(hero => (
                    <HeroContainer key={hero.id}>
                        <img src={hero.image} alt={hero.name} />
                        <span>{hero.name}</span>
                    </HeroContainer>
                    )
                )
            }
        </DataList>
    );
}

ShowData.defaultProps = {
    pending: false,
    products: [],
};

ShowData.propTypes = {
    pending: PropTypes.bool,
    products: PropTypes.array,
};
