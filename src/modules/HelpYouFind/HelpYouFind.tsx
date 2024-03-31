'use client';
import Title from '@/components/Title';
import Image from 'next/image';
import { useState } from 'react';
import GenderButton from './ui/GenderButton';
import {
  categoryHash,
  getBoyImage,
  getGirImage,
  hashAge,
  hashAgeFor1024,
  hashAgeFor375,
  hashAgeFor480,
  hashAgeFor768,
  hashColors,
  hashHeightText,
  useMediaQuery,
} from './ui/helpers';

export default function HelpYouFind() {
  const [gender, setGender] = useState('girl');
  const [age, setAge] = useState('');
  const [isActive, setIsActive] = useState(false);
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
    console.log(gender);
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
    setIsActive(false);
  };

  function changeBackground(e: any) {
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

  const isDesktopSmallest = useMediaQuery('(max-width: 479px)');
  const isDesktopSmall = useMediaQuery('(max-width: 767px)');
  const isDesktopTablet = useMediaQuery('(max-width: 1023px)');
  const isDesktopHD = useMediaQuery('(max-width: 1439px)');
  const isDesktopFullHD = useMediaQuery('(min-width: 1440px)');
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const isAgeButtonTop = (name: string) => {
    if (isDesktopSmall) {
      return hashAgeFor375[name].top;
    } else if (isDesktopTablet) {
      return hashAgeFor768[name].top;
    } else if (isDesktopHD) {
      return hashAgeFor1024[name].top;
    } else if (isDesktopFullHD) {
      return hashAge[name].top;
    }
  };
  const isAgeButtonLeft = (name: string) => {
    if (isDesktopSmallest) {
      return hashAgeFor375[name].left;
    } else if (isDesktopSmall) {
      return hashAgeFor480[name].left;
    } else if (isDesktopTablet) {
      return hashAgeFor768[name].left;
    } else if (isDesktopHD) {
      return hashAgeFor1024[name].left;
    } else if (isDesktopFullHD) {
      return hashAge[name].left;
    }
  };

  const isBackgroundChange = (name: string) => {
    const isBaby = age === '0-2';
    if (gender == 'boy') {
      if (isBaby) {
        return `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)),url(${categoryHash[name].backgroundBobbyBoy?.src})`;
      } else {
        return `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)),url(${categoryHash[name].backgroundBoy?.src})`;
      }
    } else if (gender == 'girl') {
      if (isBaby) {
        return `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)),url(${categoryHash[name].backgroundBobbyGirl?.src})`;
      } else {
        return `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)),url(${categoryHash[name].backgroundGirl?.src})`;
      }
    }
  };

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='section container'>
      <Title title={'Допоможемо знайти'} titleLinkHidden={true} />
      <div className='flex flex-col justify-around md:flex-row'>
        <div className='w-full flex-col items-center justify-between'>
          <div className='flex flex-col items-center'>
            <p className='pb-6 text-sm font-normal text-gray-900 md:hidden'>
              Оберіть стать і вік дитини та оберіть категорію товару
            </p>
            <div className='mb-[2.13rem] flex rounded-3xl bg-amber-300 md:hidden'>
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
          </div>
          {!isDesktop && (
            <div className='relative bottom-[65px] h-0 xs:left-[17.15rem] sm:left-0'>
              <p className='w-16 text-sm font-medium text-gray-900 md:text-lg'>
                {hashHeightText[age]}
              </p>
            </div>
          )}
          {isActive && !isDesktop ? (
            <div className='mb-16 grid grid-cols-2 gap-4'>
              {category.map((name) => (
                <>
                  <button
                    className='flex h-20 w-[10.25rem] items-center justify-center rounded-[20px] border border-gray-500 text-center text-sm font-medium hover:border-violet-500 hover:bg-violet-300 disabled:cursor-auto disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-white sm:w-[13.13rem] md:text-lg'
                    onClick={() => handleClickCategory(name)}
                    disabled={age == '0-2' && categoryHash[name].disabled}
                    style={{
                      backgroundImage:
                        categoryValue[name] && isBackgroundChange(name),
                      backgroundPosition: 'center',
                      backgroundColor:
                        (gender == 'boy' && categoryValue[name] && '#EFF2FD') ||
                        (gender == 'girl' && categoryValue[name] && '#FEEEF5'),
                      borderColor: categoryValue[name] && '#A663EE',
                    }}>
                    {categoryHash[name].title}
                  </button>
                </>
              ))}
            </div>
          ) : (
            <div className='relative flex h-[18.5rem] w-full lg:h-[26em]'>
              {ageButton.map((name) => (
                <>
                  <button
                    className='absolute z-20 grid cursor-pointer items-center rounded-full border  border-gray-500 text-center text-xs font-medium [word-spacing:1rem]'
                    id={name}
                    onClick={() => handleClickAge(name)}
                    onMouseEnter={changeBackground}
                    onMouseLeave={backgroundReset}
                    style={{
                      backgroundColor:
                        age == `${name}` &&
                        hashColors[gender].backgroundColorAge,
                      top: isAgeButtonTop(name),
                      left: isAgeButtonLeft(name),
                      width: isDesktopTablet
                        ? hashAgeFor375[name].width
                        : hashAge[name].width,
                      height: isDesktopTablet
                        ? hashAgeFor375[name].height
                        : hashAge[name].height,
                      border: age == `${name}` && 'none',
                    }}>
                    {name}
                    <br /> років
                  </button>
                </>
              ))}
              <div className='relative left-[70px] top-[60px] z-10 xs:h-[12.75rem] sm:left-[118.5px] md:left-[75px] md:top-[83px]'>
                <Image
                  src={handleChangeImage() as any}
                  alt={'image'}
                  style={{ background: age ? '#FAF6FD' : 'white' }}
                  className=' size-[12.75rem] rounded-full lg:size-[20.56rem] xl:size-[22.25rem]'
                />
              </div>
              {!isSameCategoryActive && (
                <>
                  <div className='md:rights-[246px] relative right-[8px] top-[155px] h-0 sm:left-[35.88px] md:left-[-10px] md:top-[174px] lg:left-[-45px] lg:top-[231px] xl:top-[246px]'>
                    <p className='text-sm font-medium text-gray-900 lg:text-lg'>
                      {hashHeightText[age]}
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
          {(isDesktopHD || isDesktopFullHD) && !isDesktopTablet && (
            <p className='pt-[1.2rem] text-sm font-normal text-gray-900 xl:pt-[1.9rem] xl:text-lg'>
              Оберіть стать і вік дитини та оберіть категорію товару
            </p>
          )}
          {!isDesktopSmall && isDesktopTablet && (
            <p className='pt-9 text-sm font-normal text-gray-900 lg:pt-6 xl:text-lg'>
              Оберіть стать і вік дитини та оберіть <br />
              категорію товару
            </p>
          )}
        </div>
        <div className='flex-col items-end md:flex'>
          <div className='hidden md:flex md:flex-col md:items-center'>
            {age && (
              <div className='relative right-[100px] top-[13px] h-0 lg:right-[175px] lg:top-[25px] xl:right-[230px] xl:top-[8px]'>
                <p className='text-sm font-medium text-gray-900 lg:text-lg'>
                  {hashHeightText[age]}
                </p>
              </div>
            )}
            <div className='flex rounded-full bg-amber-300 md:mb-6 md:ml-[4rem] lg:m-[1.25rem_auto_2.5rem_auto] xl:lg:m-[0_auto_2.5rem_auto]'>
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
            <div className='hidden grid-cols-2 md:mb-8 md:grid md:w-[22.13rem] md:gap-5 md:pl-10 lg:w-[29.38rem] lg:pl-0 xl:mb-16 xl:w-[36.75rem] xl:gap-6 '>
              {category.map((name) => (
                <>
                  <button
                    className='rounded-[20px] border border-gray-500 text-center text-sm font-medium hover:border-violet-500 hover:bg-violet-300 disabled:cursor-auto disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-white md:w-[9.25rem] md:py-5 lg:h-20 lg:w-[14rem] xl:min-w-[17.63rem] xl:py-7 xl:text-lg'
                    onClick={() => handleClickCategory(name)}
                    disabled={age == '0-2' && categoryHash[name].disabled}
                    style={{
                      backgroundColor: categoryValue[name] ? '#FAF6FD' : '',
                      borderColor: categoryValue[name] ? '#A663EE' : '',
                    }}>
                    {categoryHash[name].title}
                  </button>
                </>
              ))}
            </div>
          </div>
          <div className='flex flex-row-reverse justify-center'>
            {isDesktop ? (
              <button
                className='flex w-[10rem] items-center justify-center rounded-2xl bg-violet-500 py-3 font-medium disabled:bg-gray-300 disabled:text-gray-900 md:text-sm lg:h-12 lg:w-[14.69rem] lg:text-lg xl:w-[15.69rem] xl:py-4'
                disabled={!age || !isSameCategoryActive}>
                Показати результат
              </button>
            ) : (
              <>
                {isActive ? (
                  <button
                    className='rounded-2xl bg-violet-500 px-6 py-3 text-sm font-medium disabled:bg-gray-300 disabled:text-gray-900 md:px-8 md:py-4 md:text-lg'
                    disabled={!age || !isSameCategoryActive}>
                    Показати результат
                  </button>
                ) : (
                  <button
                    className='h-[2.75rem] rounded-2xl bg-violet-500 px-6 py-3 text-sm font-medium disabled:bg-gray-300 disabled:text-gray-900'
                    disabled={!age}
                    onClick={handleActive}>
                    Обрати категорію
                  </button>
                )}
              </>
            )}
            {(age || isSameCategoryActive) && (
              <button
                className='mr-8 flex h-[2.75rem] items-center justify-center py-4 text-sm font-medium text-[#727076] hover:text-[#080709] sm:mr-[2.75rem] md:mr-8 md:h-11 md:text-base lg:h-12 xl:text-lg'
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
