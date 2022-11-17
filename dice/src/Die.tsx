import "./Die.css";

export interface DieProps {
  face: string;
  rolling: boolean;
}

export const Die = (props: DieProps) => {
  return <i className={`Die fas fa-dice-${props.face} ${props.rolling ? 'rolling' : ''}`}></i>
}
