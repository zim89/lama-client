import { MouseEventHandler } from 'react';

type TButtonProps = {
  disabled: boolean;
  marginTop?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  title: string;
};

export default function Button(props: TButtonProps) {
  return (
    <button
      className='h-12 w-full rounded-2xl bg-violet-700 hover:bg-violet-500 active:border active:border-violet-700 active:bg-violet-500 disabled:bg-gray-300 disabled:text-gray-900 disabled:active:border-none'
      style={{
        marginTop: props.marginTop,
      }}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.title}
    </button>
  );
}
