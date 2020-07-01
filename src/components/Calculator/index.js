import React, { useState } from 'react';
import CalculatorArea from './styled';

function Calculator() {
    const [ valor, setValor ] = useState('');
    const [ sentence1, setSentence1 ] = useState(0);
    const [ operator, setOperator ] = useState('');
    const [ contFloat, setContFloat ] = useState(0);
    const [ contSum, setContSum ] = useState(0);

    function handleButtonNumber(number) {
        if(valor.length < 8) {
            if(valor == '0') {
                setValor(String(number));
            } else {
                setValor(String(valor) + number);
            } 
        } 
    }
    
    document.body.onkeyup = (event) => {
        let press = event.key;

        if(!isNaN(press) && valor.length < 8) {
            if(valor[0] == 0) {
                setValor(press);
            } else {
                setValor(valor + press);
            }
        }
        
        if(press == '+')
            // caso seja a primeira soma, chama a função que irá armazenar o primeiro valor e setar o tipo de operação.
            if(contSum == 0) {
                handleOperator('sum');
                setContSum(contSum + 1);
            } else { // caso o cálculo já tenha uma soma, chama a função que irá calcular os dois valores.
                handleCalc();
                setContSum(0);
            }
            
        else if(press == '-')
            handleOperator('subtraction');
        else if(press == '*')
            handleOperator('multiplication');
        else if(press == '/')
            handleOperator('divison');
        else if(press == '%')
            handleCalcPercent();
        else if(press == 'Enter')
            handleCalc();     
    }

    function handleResetResult() {
        setValor('0');
        setContFloat(0);

        document.getElementsByClassName('result-calc')[0].click();
    }

    function handleClearDigit() {
        setValor(valor.substr(0, valor.length - 1));
    }

    function handleOperator(operation) {
        console.log(valor);
        setSentence1(Number(valor));
        setOperator(operation);
        setValor('');
        setContFloat(0);
    }

    function handleFloat() {        
        if(contFloat == 0 && valor.length >= 1) {
            setValor(valor + '.');
            setContFloat(contFloat + 1);
        }
    }

    function handleMoreLess() {
        if(Number(valor) > 0) {
            setValor(`-${valor}`);
        } else if(Number(valor < 0)) {
            setValor(valor.substr(1));
        }
    }

    function handleCalcPercent() {
        let result = sentence1 * (Number(valor) / 100);
        setValor(result);
    }

    function handleCalc() {
        let sentence2 = Number(valor);
        console.log(sentence2);

        let resultCalc = 0;
        switch(operator) {
            case 'sum': 
                resultCalc = sentence1 + sentence2;
                break;
            case 'subtraction': 
                resultCalc = sentence1 - sentence2;
                break;
            case 'multiplication': 
                resultCalc = sentence1 * sentence2;
                break;
            case 'divison': 
                resultCalc = sentence1 / sentence2;
                break;
            default:
                alert('Operação inválida');
                break;
        }
        
        resultCalc = Number.isInteger(resultCalc) ? resultCalc : resultCalc.toFixed(2);
        setValor(resultCalc);
    }

    return (
        <CalculatorArea>
            <div className="calculator">
                <div className="result-calc">
                    <input 
                        type="text" 
                        name="result" 
                        id="result" 
                        value={valor} 
                        disabled
                    /> <br/>
                </div>
                <div className="buttons-calc">
                    <button type="button" 
                        onClick={handleResetResult} 
                        className="btn-header">
                            AC
                    </button>
                    <button type="button" 
                        onClick={handleClearDigit} 
                        className="btn-header">
                            C
                    </button>
                    <button type="button" 
                        onClick={handleCalcPercent} 
                        className="btn-header">
                            %
                    </button>

                    <button 
                        type="button" 
                        className="btn-operator" 
                        onClick={() => handleOperator('divison')}
                    >
                        &divide;
                    </button>

                    <br/>
                    <button type="button" onClick={() => handleButtonNumber(7)}>7</button>
                    <button type="button" onClick={() => handleButtonNumber(8)}>8</button>
                    <button type="button" onClick={() => handleButtonNumber(9)}>9</button>
                    <button 
                        type="button" 
                        className="btn-operator" 
                        onClick={() => handleOperator('multiplication')}
                    >
                        &times;
                    </button>

                    <br/>
                    <button type="button" onClick={() => handleButtonNumber(4)}>4</button>
                    <button type="button" onClick={() => handleButtonNumber(5)}>5</button>
                    <button type="button" onClick={() => handleButtonNumber(6)}>6</button>
                    <button 
                        type="button" 
                        className="btn-operator" 
                        onClick={() => handleOperator('subtraction')}
                    >
                        -
                    </button>

                    <br/>
                    <button type="button" onClick={() => handleButtonNumber(1)}>1</button>
                    <button type="button" onClick={() => handleButtonNumber(2)}>2</button>
                    <button type="button" onClick={() => handleButtonNumber(3)}>3</button>
                    <button 
                        type="button" 
                        className="btn-operator" 
                        onClick={() => handleOperator('sum')}
                    >
                        +
                    </button>

                    <br/>
                    <button type="button" onClick={handleMoreLess}>+/-</button>
                    <button type="button" className="btn-zero" onClick={() => handleButtonNumber(0)}>0</button>
                    <button type="button" onClick={handleFloat}>.</button>
                    <button 
                        type="button" 
                        className="btn-operator" 
                        onClick={handleCalc}
                    >
                        =
                    </button>
                </div>
            </div>
        </CalculatorArea>
    );
}

export default Calculator;