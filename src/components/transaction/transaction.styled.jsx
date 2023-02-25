import styled from '@emotion/styled'

export const BoxTable = styled.table`
    overflow:hidden;
    border:1px solid #d3d3d3;
    background:#fefefe;
    width:70%;
    margin:5% auto ;
    text-align:center; 
    border-radius:5px;
`;

export const BoxTitle = styled.th`
    padding:18px 28px 18px; 
    text-align:center;
    padding-top:22px; 
    text-shadow: 1px 1px 1px #fff;
    background: #4cacdb; 
`;

export const BoxTransaction = styled.td`
    padding:18px 28px 18px; 
    text-align:center;
    border-top:1px solid #e0e0e0; 
    border-right:1px solid #e0e0e0;
`;
export const BoxLine = styled.tr`
    &:nth-of-type(even) {
        background: #bec2c4;
    }
`;