import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type = 'spinningBubbles', color = '#fff' }) => (
    <ReactLoading type={type} color={color} height={'20px'} width={'20px'} delay={2} /> // https://github.com/fakiolinho/react-loading
);

export default Loading;