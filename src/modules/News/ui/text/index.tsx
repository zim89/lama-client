import { ReactNode } from 'react';

type TextProps = {
  className: string | undefined;
  text: ReactNode;
};

const TextContent: React.FC<TextProps> = (props) => {
  return <h1 className={props.className}>{props.text}</h1>;
};
export default TextContent;
