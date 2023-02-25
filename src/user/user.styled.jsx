import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    
`;

export const Photo = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
`;
export const BoxPhoto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const BoxStats = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    gap: 10px;
`;

export const LabelStats = styled.span`
    display: block;
    text-align: center;
    color: #787a7c;
    font-size: 16px;
`;

export const QuantityStats = styled.span`
    display: block;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
`;
export const NameUser = styled.p`
    font-size: 24px;
`;

export const Tag = styled.p`
    font-size: 20px;
    color: #787a7c;
`;

export const Location = styled.p`
    font-size: 20px;
    color: #787a7c;
`;