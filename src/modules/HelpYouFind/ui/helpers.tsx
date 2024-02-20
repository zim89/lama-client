import boy from '@/assets/images/HelpYouFind/Boy/boy.png';
import accessoryBoy from '@/assets/images/help-find/boy/boy_accessories.jpg';
import all__goodsBoy from '@/assets/images/help-find/boy/boy_all_goods.jpg';
import all__godsBabyBoy from '@/assets/images/help-find/boy/boy_baby_all_goods.jpg';
import shoesBabyBoy from '@/assets/images/help-find/boy/boy_baby_shoose.jpg';
import clotheBoy from '@/assets/images/help-find/boy/boy_clothes.jpg';
import familyBoy from '@/assets/images/help-find/boy/boy_family.jpg';
import shoesBoy from '@/assets/images/help-find/boy/boy_shoes.jpg';
import costumeBoy from '@/assets/images/help-find/boy/boy_thematic.jpg';
import girl from '@/assets/images/help-find/girl/girl.jpg';
import accessoryGirl from '@/assets/images/help-find/girl/girl_accessories.jpg';
import all__goodsGirl from '@/assets/images/help-find/girl/girl_all_goods.jpg';
import all__godsBabyGirl from '@/assets/images/help-find/girl/girl_baby_all_goods.jpg';
import shoesBabyGirl from '@/assets/images/help-find/girl/girl_baby_shoes.jpg';
import clotheGirl from '@/assets/images/help-find/girl/girl_clothes.png';
import familyGirl from '@/assets/images/help-find/girl/girl_family.jpg';
import shoesGirl from '@/assets/images/help-find/girl/girl_shoes.jpg';
import costumeGirl from '@/assets/images/help-find/girl/girl_thematic.jpg';
import titleImg from '@/assets/images/help-find/lama.png';

export const getBoyImage = (value, age) => {
  const isBaby = age === '0-2';
  const isKid = age === '2-4';

  switch (true) {
    case !age:
      return boy;
    case value.clothes:
      return clotheBoy;
    case isBaby && value.shoes:
      return shoesBabyBoy;
    case isBaby && value.all_goods:
      return all__godsBabyBoy;
    case isKid && value.shoes:
      return shoesBoy;
    case isKid && value.accessories:
      return accessoryBoy;
    case isKid && value.family:
      return familyBoy;
    case isKid && value.suits:
      return costumeBoy;
    case isKid && value.all_goods:
      return all__goodsBoy;
    default:
      return titleImg;
  }
};

export const getGirImage = (value, age) => {
  const isBaby = age === '0-2';
  const isKid = age === '2-4';

  switch (true) {
    case !age:
      return girl;
    case value.clothes:
      return clotheGirl;
    case isBaby && value.shoes:
      return shoesBabyGirl;
    case isBaby && value.all_goods:
      return all__godsBabyGirl;
    case isKid && value.shoes:
      return shoesGirl;
    case isKid && value.accessories:
      return accessoryGirl;
    case isKid && value.family:
      return familyGirl;
    case isKid && value.suits:
      return costumeGirl;
    case isKid && value.all_goods:
      return all__goodsGirl;
    default:
      return titleImg;
  }
};

export const hashHeightText = {
  '0-2': '45-92 см',
  '2-4': '92-104 см',
  '5-7': '105-122 см',
  '8-11': '123-145 см',
  '12-14': '146-164  см',
  '14+': '165 см+',
};

export const getAge = {
  '0-2': {
    name: '0-2 років',
    top: '223px',
    width: '58px',
    height: '58px',
  },
  '2-4': {
    name: '2-4 років',
    top: '131px',
    left: '15px',
    width: '58px',
    height: '58px',
  },
  '5-7': {
    name: '5-7 років',
    top: '49px',
    left: '73px',
    width: '62px',
    height: '62px',
  },
  '8-11': {
    name: '8-11 років',
    top: '2px',
    left: '159px',
    width: '64px',
    height: '64px',
  },
  '12-14': {
    name: '12-14 років',
    left: '261px',
    width: '66px',
    height: '66px',
  },
  '14+': {
    name: '14+ років',
    top: '44px',
    left: '361px',
    width: '68px',
    height: '68px',
  },
};

export const getCategory = {
  clothes: {
    title: 'Одяг',
  },
  accessories: {
    title: 'Аксесуари',
    disabled: true,
  },
  suits: {
    title: 'Тематичні костюми',
    disabled: true,
  },
  shoes: {
    title: 'Взуття',
  },
  family: {
    title: 'Фемелі лук',
    disabled: true,
  },
  all_goods: {
    title: 'Всі товари',
  },
};

export const hashColors = {
  girl: {
    backgroundColor: '#FBBBD7',
    backgroundHover: '#FBE9F1',
    backgroundColorAge: '#EB92B9',
    borderColor: '#EB92B9',
  },
  boy: {
    backgroundColor: '#BFCCF8',
    backgroundHover: '#EBEEFA',
    backgroundColorAge: '#BFCCF8',
    borderColor: '#BFCCF8',
  },
};
