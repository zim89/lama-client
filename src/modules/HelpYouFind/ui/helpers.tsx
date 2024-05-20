import { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
//Boy images
import accessoriesBgBoy from '@/assets/images/help-find/backgroundImg/accessories__boy.svg'
//Girl images
import accessoriesBgGirl from '@/assets/images/help-find/backgroundImg/accessories__girl.svg'
import all_goodsBgBoy from '@/assets/images/help-find/backgroundImg/allGoods__boy.svg'
import all_goodsBgGirl from '@/assets/images/help-find/backgroundImg/allGoods__girl.svg'
import babyAllGoodsBgBoy from '@/assets/images/help-find/backgroundImg/babyAllGoods__boy.svg'
import babyAllGoodsBgGirl from '@/assets/images/help-find/backgroundImg/babyAllGoods__girl.svg'
import babyShoesBoy from '@/assets/images/help-find/backgroundImg/babyShoes__boy.svg'
import babyShoesGirl from '@/assets/images/help-find/backgroundImg/babyShoes__girl.svg'
import clotheBgBoy from '@/assets/images/help-find/backgroundImg/clothe__boy.svg'
import clotheBgGirl from '@/assets/images/help-find/backgroundImg/clothe__girl.svg'
import familyBgBoy from '@/assets/images/help-find/backgroundImg/family__boy.svg'
import familyBgGirl from '@/assets/images/help-find/backgroundImg/family__girl.svg'
import shoesBgBoy from '@/assets/images/help-find/backgroundImg/shoes__boy.svg'
import shoesBgGirl from '@/assets/images/help-find/backgroundImg/shoes__girl.svg'
import suitsBgBoy from '@/assets/images/help-find/backgroundImg/suits__boy.svg'
import suitsBgGirl from '@/assets/images/help-find/backgroundImg/suits__girl.svg'
import boy from '@/assets/images/help-find/boy/boy.jpg'
import accessoryBoy from '@/assets/images/help-find/boy/boy_accessories.jpg'
import all__goodsBoy from '@/assets/images/help-find/boy/boy_all_goods.jpg'
import all__godsBabyBoy from '@/assets/images/help-find/boy/boy_baby_all_goods.jpg'
import shoesBabyBoy from '@/assets/images/help-find/boy/boy_baby_shoose.jpg'
import clotheBoy from '@/assets/images/help-find/boy/boy_clothes.jpg'
import familyBoy from '@/assets/images/help-find/boy/boy_family.jpg'
import shoesBoy from '@/assets/images/help-find/boy/boy_shoes.jpg'
import costumeBoy from '@/assets/images/help-find/boy/boy_thematic.jpg'
import girl from '@/assets/images/help-find/girl/girl.jpg'
import accessoryGirl from '@/assets/images/help-find/girl/girl_accessories.jpg'
import all__goodsGirl from '@/assets/images/help-find/girl/girl_all_goods.jpg'
import all__godsBabyGirl from '@/assets/images/help-find/girl/girl_baby_all_goods.jpg'
import shoesBabyGirl from '@/assets/images/help-find/girl/girl_baby_shoes.jpg'
import clotheGirl from '@/assets/images/help-find/girl/girl_clothes.png'
import familyGirl from '@/assets/images/help-find/girl/girl_family.jpg'
import shoesGirl from '@/assets/images/help-find/girl/girl_shoes.jpg'
import costumeGirl from '@/assets/images/help-find/girl/girl_thematic.jpg'
import titleImg from '@/assets/images/help-find/lama.png'

enum Age {
  '0-2' = '0-2',
  '2-4' = '2-4',
  '5-7' = '5-7',
  '8-11' = '8-11',
  '12-14' = '12-14',
  '14+' = '14+'
}

enum Category {
  'accessories' = 'accessories',
  'all_goods' = 'all_goods',
  'clothes' = 'clothes',
  'family' = 'family',
  'shoes' = 'shoes',
  'suits' = 'suits'
}

type CategoryFlags = {
  [key in Category]: boolean
}

type AgeGroup = keyof typeof Age
type CategoryGroup = keyof typeof Category

type GirlsImages = {
  [key in AgeGroup]: {
    [category in CategoryGroup]: StaticImageData | null
  }
}

const girlsImages: GirlsImages = {
  '0-2': {
    clothes: babyShoesGirl,
    shoes: babyShoesGirl,
    all_goods: babyAllGoodsBgGirl,
    accessories: null,
    family: null,
    suits: null
  },
  '2-4': {
    clothes: clotheBgGirl,
    shoes: shoesBgGirl,
    all_goods: all_goodsBgGirl,
    accessories: accessoriesBgGirl,
    family: familyGirl,
    suits: costumeGirl
  },
  '5-7': {
    clothes: null,
    shoes: null,
    all_goods: null,
    accessories: null,
    family: null,
    suits: null
  },
  '8-11': {
    clothes: null,
    shoes: null,
    all_goods: null,
    accessories: null,
    family: null,
    suits: null
  },
  '12-14': {
    clothes: null,
    shoes: null,
    all_goods: null,
    accessories: null,
    family: null,
    suits: null
  },
  '14+': {
    clothes: null,
    shoes: null,
    all_goods: null,
    accessories: null,
    family: null,
    suits: null
  }
}

const boysImages: GirlsImages = {
  '0-2': {
    clothes: babyShoesGirl,
    shoes: babyShoesGirl,
    all_goods: babyAllGoodsBgGirl,
    accessories: null,
    family: null,
    suits: null
  },
  '2-4': {
    clothes: clotheBgGirl,
    shoes: shoesBgGirl,
    all_goods: all_goodsBgGirl,
    accessories: accessoriesBgGirl,
    family: familyGirl,
    suits: costumeGirl
  },
  '5-7': {
    clothes: null,
    shoes: null,
    all_goods: null,
    accessories: null,
    family: null,
    suits: null
  },
  '8-11': {
    clothes: null,
    shoes: null,
    all_goods: null,
    accessories: null,
    family: null,
    suits: null
  },
  '12-14': {
    clothes: null,
    shoes: null,
    all_goods: null,
    accessories: null,
    family: null,
    suits: null
  },
  '14+': {
    clothes: null,
    shoes: null,
    all_goods: null,
    accessories: null,
    family: null,
    suits: null
  }
}

export const getBoyImage = (value, age) => {
  const isBaby = age === '0-2'
  const isKid = age === '2-4'

  switch (true) {
    case !age:
      return boy
    case value.clothes:
      return clotheBoy
    case isBaby && value.shoes:
      return shoesBabyBoy
    case isBaby && value.all_goods:
      return all__godsBabyBoy
    case isKid && value.shoes:
      return shoesBoy
    case isKid && value.accessories:
      return accessoryBoy
    case isKid && value.family:
      return familyBoy
    case isKid && value.suits:
      return costumeBoy
    case isKid && value.all_goods:
      return all__goodsBoy
    default:
      return titleImg
  }
}

export const getGirImage = (value, age) => {
  const isBaby = age === '0-2'
  const isKid = age === '2-4'

  switch (true) {
    case !age:
      return girl
    case value.clothes:
      return clotheGirl
    case isBaby && value.shoes:
      return shoesBabyGirl
    case isBaby && value.all_goods:
      return all__godsBabyGirl
    case isKid && value.shoes:
      return shoesGirl
    case isKid && value.accessories:
      return accessoryGirl
    case isKid && value.family:
      return familyGirl
    case isKid && value.suits:
      return costumeGirl
    case isKid && value.all_goods:
      return all__goodsGirl
    default:
      return titleImg
  }
}

export const hashHeightText = {
  '0-2': '45-92 см',
  '2-4': '92-104 см',
  '5-7': '105-122 см',
  '8-11': '123-145 см',
  '12-14': '146-164  см',
  '14+': '165 см+'
}

export const hashAge = {
  '0-2': {
    top: '223px',
    width: '58px',
    height: '58px'
  },
  '2-4': {
    top: '131px',
    left: '15px',
    width: '58px',
    height: '58px'
  },
  '5-7': {
    top: '49px',
    left: '73px',
    width: '62px',
    height: '62px'
  },
  '8-11': {
    top: '2px',
    left: '159px',
    width: '64px',
    height: '64px'
  },
  '12-14': {
    left: '261px',
    width: '66px',
    height: '66px'
  },
  '14+': {
    top: '44px',
    left: '361px',
    width: '68px',
    height: '68px'
  }
}

export const hashAgeFor375 = {
  '0-2': {
    top: '140px',
    left: '0px',
    width: '48px',
    height: '48px'
  },
  '2-4': {
    top: '70px',
    left: '21px',
    width: '48px',
    height: '48px'
  },
  '5-7': {
    top: '14px',
    left: '74px',
    width: '52px',
    height: '52px'
  },
  '8-11': {
    top: '-10px',
    left: '151px',
    width: '54px',
    height: '54px'
  },
  '12-14': {
    top: '8px',
    left: '229px',
    width: '56px',
    height: '56px'
  },
  '14+': {
    top: '60px',
    left: '285px',
    width: '58px',
    height: '58px'
  }
}
export const hashAgeFor480 = {
  '0-2': {
    left: '48px'
  },
  '2-4': {
    left: '69px'
  },
  '5-7': {
    left: '122px'
  },
  '8-11': {
    left: '199px'
  },
  '12-14': {
    left: '277px'
  },
  '14+': {
    left: '333px'
  }
}

export const hashAgeFor768 = {
  '0-2': {
    top: '168px'
  },
  '2-4': {
    top: '98px',
    left: '21px'
  },
  '5-7': {
    top: '42px',
    left: '74px'
  },
  '8-11': {
    top: '20px',
    left: '151px'
  },
  '12-14': {
    top: '36px',
    left: '229px'
  },
  '14+': {
    top: '88px',
    left: '285px'
  }
}

export const hashAgeFor1024 = {
  '0-2': {
    top: '223px'
  },
  '2-4': {
    top: '131px',
    left: '15px'
  },
  '5-7': {
    top: '49px',
    left: '73px'
  },
  '8-11': {
    top: '2px',
    left: '159px'
  },
  '12-14': {
    left: '261px'
  },
  '14+': {
    top: '44px',
    left: '361px'
  }
}

export const categoryHash = {
  clothes: {
    title: 'Одяг',
    backgroundBoy: clotheBgBoy,
    backgroundBobbyBoy: clotheBgBoy,
    backgroundGirl: clotheBgGirl,
    backgroundBobbyGirl: clotheBgGirl
  },
  accessories: {
    title: 'Аксесуари',
    backgroundBoy: accessoriesBgBoy,
    backgroundGirl: accessoriesBgGirl,
    disabled: true
  },
  suits: {
    title: 'Тематичні костюми',
    backgroundBoy: suitsBgBoy,
    backgroundGirl: suitsBgGirl,
    disabled: true
  },
  shoes: {
    title: 'Взуття',
    backgroundBoy: shoesBgBoy,
    backgroundBobbyBoy: babyShoesBoy,
    backgroundGirl: shoesBgGirl,
    backgroundBobbyGirl: babyShoesGirl
  },
  family: {
    title: 'Фемелі лук',
    backgroundBoy: familyBgBoy,
    backgroundGirl: familyBgGirl,
    disabled: true
  },
  all_goods: {
    title: 'Всі товари',
    backgroundBoy: all_goodsBgBoy,
    backgroundBobbyBoy: babyAllGoodsBgBoy,
    backgroundGirl: all_goodsBgGirl,
    backgroundBobbyGirl: babyAllGoodsBgGirl
  }
}

export const hashColors = {
  girl: {
    backgroundColor: '#FBBBD7',
    backgroundHover: '#FBE9F1',
    backgroundColorAge: '#EB92B9',
    borderColor: '#EB92B9'
  },
  boy: {
    backgroundColor: '#BFCCF8',
    backgroundHover: '#EBEEFA',
    backgroundColorAge: '#BFCCF8',
    borderColor: '#BFCCF8'
  }
}

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}
