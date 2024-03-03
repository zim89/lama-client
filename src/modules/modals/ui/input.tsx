import { FocusEventHandler, InputHTMLAttributes } from 'react';

type TInputProps = {
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  title: string;
  error?: string;
  name: string;
  values: string;
  handleChange?: (e: InputHTMLAttributes<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
};

export default function Input(props: TInputProps) {
  return (
    <label>
      <span className='text-xs font-normal text-gray-900'>{props.title}</span>
      <div className='flex flex-col items-end'>
        <input
          className='h-11 w-full rounded-lg border border-gray-500 bg-gray-100 pl-5 hover:border-gray-700 focus:border-gray-700 focus:shadow-indigo-500/50 focus:outline-none'
          type={props.type}
          onChange={props.handleChange}
          value={props.values}
          name={props.name}
          placeholder={props.placeholder}
          onBlur={props.onBlur}
        />
        {props.error ? (
          <span className='flex items-end pt-1 text-xs text-gray-700'>
            {props.error}
          </span>
        ) : (
          ''
        )}
      </div>
    </label>
  );
}
