'use client';
import BoyIcon from '@/components/icons/BoyIcon';
import GirlIcon from '@/components/icons/GirlIcon';
import { useModals } from '@/shared/config/ModalProvider';
import { useStore } from '@/shared/store/store';
import axios from 'axios';
import Image from 'next/image';
import { useMemo } from 'react';
import cross from '../../assets/icons/additional/exit.svg';
import heart from '../../assets/icons/additional/heart.svg';
import redHeart from '../../assets/icons/additional/redHeart.svg';
import ScrollableComponent from './ui/ScrollableComponent';
import BasketIconFavorite from './ui/icon/basket';
import SuitcaseIconFavorite from './ui/icon/suitcase';

export default function Favorite() {
  const dataModal = useModals();
  const { addFavorite, removeFavorite, clearFavorites, favorites } = useStore();

  function handleClickClose() {
    dataModal?.setFavoriteShow(!dataModal.favoriteShow);
  }

  const amountGoods = Object.keys(favorites).length;
  function displays() {
    if (amountGoods >= 1) {
      return true;
    } else {
      return false;
    }
  }
  useMemo(() => {
    axios.get('http://localhost:8000/api/products/1').then((data) => {
      console.log(data.data);
      addFavorite(data.data);
    });
  }, []);

  return (
    <div
      onClick={handleClickClose}
      className='fixed left-0 top-0 z-40 flex size-full flex-col bg-black bg-opacity-50'>
      <div className='fixed right-0 top-0 z-20 m-[0_auto] flex h-full w-[33.75rem] flex-col bg-white md:items-stretch '>
        <div onClick={(e) => e.stopPropagation()}>
          <div className='flex w-full justify-between border-b border-gray-500 bg-gray-100'>
            <h5 className='text-grey-900 py-5 pl-5 text-sm font-normal'>
              Обране
            </h5>
            <button className='pr-3.5' onClick={handleClickClose}>
              <Image src={cross} alt={'cancellation'} />
            </button>
          </div>
          {displays() ? (
            <div className='px-8 pt-2.5'>
              <div className='flex justify-between'>
                <span className='text-base font-medium'>
                  {amountGoods} товарів
                </span>
                <button
                  className='flex items-center text-base font-medium text-[#727076]'
                  onClick={clearFavorites}>
                  Видалити все
                </button>
              </div>
              <ScrollableComponent>
                <div className='flex w-[30.4rem] flex-wrap content-start gap-5'>
                  {favorites.map((product) => (
                    <div
                      key={product.id}
                      className='relative h-[23rem] w-[47.5%] rounded-xl border border-gray-300'>
                      <div className='absolute flex flex-col gap-2 pl-2 pt-2'>
                        <button
                          className='group flex h-8 w-8 items-center justify-center rounded-full bg-gray-100'
                          onClick={() => removeFavorite(product.id)}>
                          <BasketIconFavorite className='h-3 w-2.5 stroke-violet-500 group-hover:stroke-violet-700' />
                        </button>
                        <button className='group flex h-8 w-8 items-center justify-center rounded-full bg-gray-100'>
                          <SuitcaseIconFavorite className='h-3 w-3 stroke-violet-500 group-hover:stroke-violet-700 group-active:fill-violet-700' />
                        </button>
                      </div>
                      <div className='absolute left-[5.75rem] flex h-8 w-10 justify-center rounded-b-full bg-gray-100'>
                        <Image src={redHeart} alt={'heart'} />
                      </div>
                      {product.discount && (
                        <div className='absolute right-0 mr-2 mt-2 flex h-7 w-16 items-center justify-center rounded-2xl bg-amber-500'>
                          <p className='text-sm font-medium'>-20%</p>
                        </div>
                      )}
                      <Image
                        src={product.product_images[1]?.product_image}
                        alt={product.name}
                        width={230}
                        height={220}
                        className='rounded-t-xl bg-[#f2f2f4]'
                      />
                      <div className='absolute bottom-[4.25rem] right-[0.75rem]'>
                        {product.male === 0 && <GirlIcon />}
                        {product.male === 1 && <BoyIcon />}
                      </div>
                      <div className='px-3'>
                        <h3 className='pt-2 text-sm'>{product.name}</h3>
                        <div className='flex pb-3 pt-1 '>
                          <p className='text-sm font-medium'>
                            {product.price}₴
                          </p>
                          {product.discount && (
                            <div className='pl-2 text-sm font-medium text-gray-500 line-through'>
                              <p>{product.price - product.id}</p>
                              {/* change for normal after back changes */}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollableComponent>
            </div>
          ) : (
            <div className='flex flex-col items-center pt-8'>
              <Image src={heart} alt={'heart'} className='pb-4' />
              <span className='pb-4 text-base font-medium'>
                У вас немає товарів в «Обраному»
              </span>
              <p className='pb-8 text-sm'>
                Подивіться наші актуальні пропозиції.
                <br />
                Ми впевнені, Ви знайдете щось цікаве!
              </p>
              <button className='btn-primary'>До каталогу</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
