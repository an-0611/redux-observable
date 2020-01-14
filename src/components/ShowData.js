import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from "styled-components";

import Loading from './common/Loading';

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
    border: 1px solid black;
    padding: 2px;
    width: 24%;
`;

export default function ShowData(props) {
    const { pending, products, getDetail, productsDetail, heroId, detailPending } = props;
    console.log(productsDetail, heroId)
    return (
        <DataList primary>
            { products.length === 0 &&
                <div>
                    <div>no mapping hero data</div>
                    { pending && <Loading /> }
                </div>
            }
            { !pending && products.length > 0 &&
                products.map(hero => (
                    <HeroContainer key={hero.id} onClick={() => { getDetail(hero.id) }}>
                        <img src={hero.image} alt={hero.name} style={{ width: '100%', height: '100%' }} />
                        <span>{hero.name}</span>
                    </HeroContainer>
                    )
                )
            }
            {   productsDetail.length > 0 && heroId && !detailPending &&
                productsDetail.map((hero) => (
                    <div key={hero[heroId]}>
                        { Object.keys(hero[heroId]).map((keyname, i) => (
                            <div key={i} >{`${keyname} : ${Object.values(hero[heroId])[i]}`}</div>
                        ))
                        }
                    </div>
                ))
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
