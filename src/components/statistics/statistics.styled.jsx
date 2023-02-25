import styled from '@emotion/styled'

export const Title = styled.h2`
    text-align: center;
    font-size: 40px;
    font-weight: 500;
`;

export const StatList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin-top: 20px;
`;

export const LabelStat = styled.span`
    display: block;
    text-align: center;
    color: #e7ecf2;
`;

export const PercentageStat = styled.span`
    display: block;
    text-align: center;
    color: #e7ecf2;
`;

export const StatItem = styled.li`
    padding: 10px;
    background-color: ${props => {
    switch (props.type) {
        case '.docx':
            return 'blue';
        case '.pdf':
            return 'purple';
        case '.mp3':
            return 'red';
        case '.psd':
            return 'green';
        default:
            return 'black';
    }
    }};
`;