import React, {useState} from 'react';
import styled from 'styled-components';
import Calc, {CalcInput} from '../modules/calc';
import Button, {ButtonType} from './Button';

const Container = styled.div`

`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 120px repeat(5, 80px);
`;

const Display = styled.div`
  justify-items: flex-end;
  background: #fff;
  border-radius: 8px;
  font-size: 48px;
  grid-column-end: span 4;
  padding: 30px 24px;
  text-align: right;
`;

const Calculator: React.FC<{}> = () => {

  const [inputs, setInputs] = useState<Array<CalcInput>>([]);
  const state = Calc.getState(inputs);
  return (
    <Container>
      <Grid>
        <Display>{state.displayValue}</Display>
        <Button label="AC" position={[0, 1]} width={2} />
        <Button label="DEL" position={[2, 1]} width={2} />
        <Button label="+" position={[3, 2]} />
        <Button label="-" position={[3, 3]} />
        <Button label="=" position={[3, 4]} height={2} />
        <Button type={ButtonType.Number} label="9" position={[2, 2]} />
        <Button type={ButtonType.Number} label="8" position={[1, 2]} />
        <Button type={ButtonType.Number} label="7" position={[0, 2]} />
        <Button type={ButtonType.Number} label="6" position={[2, 3]} />
        <Button type={ButtonType.Number} label="5" position={[1, 3]} />
        <Button type={ButtonType.Number} label="4" position={[0, 3]} />
        <Button type={ButtonType.Number} label="3" position={[2, 4]} />
        <Button type={ButtonType.Number} label="2" position={[1, 4]} />
        <Button type={ButtonType.Number} label="1" position={[0, 4]} />
        <Button type={ButtonType.Number} label="0" position={[0, 5]} width={3} />
      </Grid>
    </Container>
  );  
}

export default Calculator;