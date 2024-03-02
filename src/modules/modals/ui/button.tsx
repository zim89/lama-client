import { MouseEventHandler } from 'react';

type TButtonProps = {
  marginTop?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  title: string;
};

export default function Button(props: TButtonProps) {
  return (
    <button
      className='h-12 w-full rounded-2xl bg-gray-300'
      style={{
        marginTop: props.marginTop,
      }}
      onClick={props.onClick}>
      {props.title}
    </button>
  );
}
