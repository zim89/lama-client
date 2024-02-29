import { InputHTMLAttributes } from 'react';

type TInputProps = {
  title: string;
  error?: any;
  name: string;
  values: string;
  handleChange?: (e: InputHTMLAttributes<HTMLInputElement>) => void;
  type: string;
  position?: any;
  placeholder: string;
};

export default function Input(props: TInputProps) {
  return (
    <label className=''>
      <span className=''>{props.title}</span>
      <input
        className='h-11	w-full rounded-xl border border-gray-500 bg-gray-100 hover:border-gray-700 active:border-gray-900'
        type={props.type}
        onChange={props.handleChange}
        value={props.values}
        name={props.name}
        placeholder={props.placeholder}
        style={{
          position: props.position,
        }}
      />
    </label>
  );
}
