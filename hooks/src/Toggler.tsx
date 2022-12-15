import { useToggle } from './hooks/useToggle';

export const Toggler = () => {
  const [isHappy, toggleIsHappy] = useToggle( true );
  const [isBroken, toggleIsBroken] = useToggle( true );
  return <div>
    <h1 onClick={toggleIsHappy}>
      {isHappy ? ':)' : ':('}
    </h1>
    <h1 onClick={toggleIsBroken}>
      {isBroken ? 'BROKEN' : 'NOT BROKEN'}
    </h1>
  </div>
}
