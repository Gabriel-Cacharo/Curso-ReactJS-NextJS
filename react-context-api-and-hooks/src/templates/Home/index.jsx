import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';
import './styles.css';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => {
        console.log(r);
      })
      .catch((err) => console.log(err.name + ':' + err.message));
  };

  return (
    <div>
      <Heading />
      <Button text="Increase" onButtonClick={() => actions.increase()} />
      <Button text="Decrease" onButtonClick={() => actions.decrease()} />
      <Button text="Reset" onButtonClick={() => actions.reset()} />
      <Button text="Set Counter 10" onButtonClick={() => actions.setCounter({ counter: 10 })} />
      <Button text="Set Counter 100" onButtonClick={() => actions.setCounter({ counter: 100 })} />
      <Button disabled={state.loading} text="Async Increase" onButtonClick={() => actions.asyncIncrease()} />
      <Button disabled={state.loading} text="Async Error" onButtonClick={handleError} />
    </div>
  );
};
