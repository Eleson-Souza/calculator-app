import styled from 'styled-components';

const CalculatorArea = styled.div`
    background-color: #e4e4e4;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .calculator {
        background-color: #888;
        width: 340px;
        height: 505px;
    }

    .result-calc input {        
        box-sizing: border-box;
        width: 100%;
        height: 95px;
        padding: 30px 20px;
        font-size: 42px;
        border: none;
        background-color: #000;
        color: #fff;
        text-align: right;
    }

    .buttons-calc button {
        width: 85px;
        height: 85px;
        font-size: 30px;
        font-weight: 100;
        border: 1px solid #838383;
        background-color: #fff;
        outline: none;
        cursor: pointer;
        transition: all ease .2s;

        &.btn-header {
            background-color: #ddd;
        }

        &:active {
            background-color: #a8a8a8;            
        }
    }

    .buttons-calc .btn-zero {
        width: 85px;
    }

    .buttons-calc .btn-operator {
        background-color: #f5963d;
        color: #fff;
        transition: all ease .2s;

        &:active {
            background-color: #805126;            
        }
    }
`;

export default CalculatorArea;