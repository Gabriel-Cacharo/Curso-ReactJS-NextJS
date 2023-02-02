import { Children, cloneElement, useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });

    return newChild;
  });
};

const TurnedOn = ({ isOn, children }) => (isOn ? children : null);

const TurnedOff = ({ isOn, children }) => (isOn ? null : children);

// eslint-disable-next-line react/prop-types
const TurnButton = ({ isOn, onTurn, ...props }) => {
  return (
    <button {...props} onClick={onTurn}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

// eslint-disable-next-line react/prop-types
const P = ({ children }) => <p {...s}>{children}</p>;

const App = () => {
  return (
    <TurnOnOff>
      <TurnedOn>
        <P>Aqui as coisas vão acontecer quando estiver ON.</P>
      </TurnedOn>
      <TurnedOff>
        <P>Aqui vem as coisas do OFF.</P>
      </TurnedOff>
      <TurnButton {...s} />
    </TurnOnOff>
  );
};

export default App;
