'use client';
import Image from 'next/image';
import { useState } from 'react';
import GenderButton from './ui/GenderButton';
import {
  getAge,
  getBoyImage,
  getCategory,
  getGirImage,
  hashColors,
  hashHeightText,
} from './ui/helpers';
import TextHeight from './ui/textHeight';
import Title from './ui/title';

export default function HelpYouFind() {
  const [gender, setGender] = useState('girl');
  const [age, setAge] = useState('');
  const [categoryValue, setCategoryValue] = useState({
    clothes: false,
    accessories: false,
    suits: false,
    shoes: false,
    family: false,
    all_goods: false,
  });

  const ageButton = ['0-2', '2-4', '5-7', '8-11', '12-14', '14+'];
  const category = [
    'clothes',
    'shoes',
    'accessories',
    'family',
    'suits',
    'all_goods',
  ];

  const isSameCategoryActive =
    categoryValue.accessories ||
    categoryValue.all_goods ||
    categoryValue.clothes ||
    categoryValue.family ||
    categoryValue.shoes ||
    categoryValue.suits;

  const handleClickGender = (genderValue: string) => {
    setGender(genderValue);
  };

  const handleClickAge = (ageValue: string) => {
    setAge(ageValue);
    if (age == ageValue) {
      setAge('');
    }
  };

  const handleClickCategory = (key: string) => {
    setCategoryValue({ ...categoryValue, [key]: !categoryValue[key] });
  };

  const handleChangeImage = () => {
    if (gender == 'boy') {
      return getBoyImage(categoryValue, age);
    }
    if (gender == 'girl') {
      return getGirImage(categoryValue, age);
    }
  };

  const handleResetAll = () => {
    setGender('girl'),
      setAge(''),
      setCategoryValue({
        clothes: false,
        accessories: false,
        suits: false,
        shoes: false,
        family: false,
        all_goods: false,
      });
  };

  function changeBackground(e) {
    if (e.target.id === age) {
      e.target.style.backgroundColor = hashColors[gender].backgroundColorAge;
      e.target.style.borderColor = '';
    } else {
      e.target.style.background = hashColors[gender].backgroundHover;
      e.target.style.borderColor = hashColors[gender].borderColor;
    }
  }

  function backgroundReset(e) {
    if (e.target.id === age) {
      e.target.style.backgroundColor = hashColors[gender].backgroundColorAge;
      e.target.style.borderColor = '';
    } else {
      e.target.style.backgroundColor = '';
      e.target.style.borderColor = '';
    }
  }

  return (
    <div className='section container'>
      <div className='pb-12'>
        <Title title={'Допоможемо знайти'} />
      </div>
      <div className='flex justify-around'>
        <div className='flex w-full flex-col justify-between'>
          <div className='relative flex w-full'>
            {ageButton.map((name) => (
              <>
                <button
                  className='absolute grid cursor-pointer items-center rounded-full border border-gray-500  text-center text-xs font-medium [word-spacing:1rem]'
                  id={name}
                  onClick={() => handleClickAge(name)}
                  onMouseEnter={changeBackground}
                  onMouseLeave={backgroundReset}
                  style={{
                    backgroundColor:
                      age == `${name}` && hashColors[gender].backgroundColorAge,
                    top: getAge[name].top,
                    left: getAge[name].left,
                    width: getAge[name].width,
                    height: getAge[name].height,
                    border: age == `${name}` && 'none',
                  }}>
                  {getAge[name].name}
                </button>
              </>
            ))}
            <div className='relative left-[75px] top-[83px]'>
              <Image
                src={handleChangeImage() as any}
                alt={'image'}
                style={{ background: age ? '#FAF6FD' : 'white' }}
                className=' size-[12.75rem] rounded-full xl:size-[22.25rem]'
              />
            </div>
            {!isSameCategoryActive && (
              <TextHeight
                title={hashHeightText[age as string]}
                right={'62px'}
                top={'246px'}
              />
            )}
          </div>
          <p className='hidden pb-3.5 text-lg font-normal text-gray-900 md:block'>
            Оберіть стать і вік дитини та оберіть категорію товару
          </p>
        </div>
        <div className='flex flex-col items-end'>
          {age && (
            <TextHeight
              title={hashHeightText[age as string]}
              right={'10px'}
              top={'10px'}
            />
          )}
          <div className='m-[0_auto_2.5rem_auto] flex rounded-full bg-amber-300 '>
            <GenderButton
              backgroundColor={
                gender == 'girl' && hashColors.girl.backgroundColor
              }
              textColor={gender == 'girl' ? '#080709' : '#99969C'}
              onClick={() => handleClickGender('girl')}
              text={'Дівчинка'}
            />
            <GenderButton
              backgroundColor={
                gender == 'boy' && hashColors.boy.backgroundColor
              }
              textColor={gender == 'boy' ? '#080709' : '#99969C'}
              onClick={() => handleClickGender('boy')}
              text={'Хлопчик'}
            />
          </div>
          <div className='mb-16 w-[36.75rem] grid-cols-2 gap-6 xs:hidden md:grid'>
            {category.map((name) => (
              <>
                <button
                  className='min-w-[17.63rem] rounded-[20px] border border-gray-500 px-6 py-7 text-center text-lg font-medium hover:border-violet-500 hover:bg-violet-300 disabled:cursor-auto disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-white'
                  onClick={() => handleClickCategory(name)}
                  disabled={age == '0-2' && getCategory[name].disabled}
                  style={{
                    backgroundColor: categoryValue[name] && '#FAF6FD',
                    borderColor: categoryValue[name] && '#A663EE',
                  }}>
                  {getCategory[name].title}
                </button>
              </>
            ))}
          </div>
          <div className='flex flex-row-reverse'>
            <button
              className='rounded-2xl bg-violet-500 px-8 py-4 text-lg font-medium disabled:bg-gray-300 disabled:text-gray-900'
              disabled={!age || !isSameCategoryActive}>
              Показати результат
            </button>
            {(age || isSameCategoryActive) && (
              <button
                className='py-4 pr-14 text-base font-medium text-[#727076] hover:text-[#080709]'
                onClick={() => handleResetAll()}>
                Скинути обране
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
