'use client';
import BoyIcon from '@/components/icons/BoyIcon';
import GirlIcon from '@/components/icons/GirlIcon';
import { useModals } from '@/shared/config/ModalProvider';
import { useStore } from '@/shared/store/store';
import Image from 'next/image';
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

  return (
    <div
      onClick={handleClickClose}
      className='fixed left-0 top-0 z-40 size-full flex-col bg-black bg-opacity-50'>
      <div className='fixed right-0 top-0 z-20 flex h-full w-full flex-col bg-white md:w-[32.4rem] md:items-stretch lg:w-[33.75rem] '>
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
            <div className='px-5 pt-2.5 lg:px-8'>
              <div className='mx-auto grid w-[20.95rem] grid-cols-2 pb-[1.13rem] sm:w-[27.25rem] md:mx-0 md:w-full'>
                <span className='text-base font-medium'>
                  {amountGoods} товарів
                </span>
                <button
                  className='flex justify-end text-base font-medium text-[#727076]'
                  onClick={clearFavorites}>
                  Видалити все
                </button>
              </div>
              <ScrollableComponent>
                <div className='grid w-[20.9rem] grid-cols-2 content-start gap-4 sm:mx-auto sm:w-[27.25rem] sm:gap-5 md:mx-auto md:ms-auto md:flex md:w-[30rem] md:flex-wrap md:pl-0'>
                  {favorites.map((product) => (
                    <div
                      key={product.id}
                      className='relative flex h-[17.7rem] w-[10rem] flex-col justify-between rounded-xl border border-gray-300 sm:w-[13.1rem] md:h-[19.6rem] md:w-[14.35rem] lg:h-[23rem] lg:w-[47.5%]'>
                      <div className='absolute z-20 flex flex-col gap-2 pl-2 pt-2'>
                        <button
                          className='group flex h-8 w-8 items-center justify-center rounded-full bg-gray-100'
                          onClick={() => removeFavorite(product.id)}>
                          <BasketIconFavorite className='h-3 w-2.5 stroke-violet-500 group-hover:stroke-violet-700' />
                        </button>
                        <button className='group flex h-8 w-8 items-center justify-center rounded-full bg-gray-100'>
                          <SuitcaseIconFavorite className='h-3 w-3 stroke-violet-500 group-hover:stroke-violet-700 group-active:fill-violet-700' />
                        </button>
                      </div>
                      <div className='absolute left-[3.75rem] z-20 flex h-8 w-10 justify-center rounded-b-full bg-gray-100 sm:left-[5.25rem] md:left-[6rem]'>
                        <Image src={redHeart} alt={'heart'} />
                      </div>
                      {product.discount && (
                        <div className='absolute right-0 z-20 mr-2 mt-2 flex h-6 w-10 items-center justify-center rounded-2xl bg-amber-500 md:h-7 md:w-16'>
                          <p className='text-xs font-medium md:text-sm'>-20%</p>
                        </div>
                      )}
                      <div className='z-10  h-[13rem] w-full md:h-[14.25rem]'>
                        <Image
                          src={product.product_images[0]?.product_image}
                          alt={product.name}
                          width={230}
                          height={220}
                          className='w-full rounded-t-xl'
                        />
                      </div>
                      <div className='absolute bottom-[5rem] right-2 z-20 md:bottom-[5.5rem] md:right-2.5'>
                        {product.male === 0 && <GirlIcon />}
                        {product.male === 1 && <BoyIcon />}
                      </div>
                      <div className='z-20 flex flex-col content-start justify-center rounded-b-xl bg-white p-2'>
                        <h3 className='line-clamp-2 text-xs md:text-sm'>
                          {product.name}
                        </h3>
                        <div className='flex pt-1'>
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
