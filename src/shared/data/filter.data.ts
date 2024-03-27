import FilterFormGender from '@/modules/Toolbar/ui/FilterFormGender'

export const categoryList = [
  {
    name: 'clothes',
    label: 'Одяг',
    items: [
      { id: 'Боді, повзунки', label: 'Боді, повзунки' },
      { id: 'Блузки', label: 'Блузки' },
      { id: 'Верхній одяг', label: 'Верхній одяг' },
      { id: 'Джинси, комбінезони', label: 'Джинси, комбінезони' },
      { id: 'Комплекти, костюми', label: 'Комплекти, костюми' },
      { id: 'Конверти', label: 'Конверти' },
      { id: 'Кофти, кардігани', label: 'Кофти, кардігани' }
    ]
  },
  {
    name: 'shoes',
    label: 'Взуття',
    items: [
      { id: 'Балетки, мокасини', label: 'Балетки, мокасини' },
      { id: 'Гумові чоботи', label: 'Гумові чоботи' },
      { id: 'Капці', label: 'Капці' },
      { id: 'Кеди', label: 'Кеди' },
      { id: 'Пінетки', label: 'Пінетки' },
      { id: 'Кросівки', label: 'Кросівки' },
      { id: 'Сліпони, мокасини', label: 'Сліпони, мокасини' }
    ]
  },
  {
    name: 'accessories',
    label: 'Аксесуари',
    items: [
      { id: 'Бананки', label: 'Бананки' },
      { id: 'Біжутерія, заколки', label: 'Біжутерія, заколки' },
      { id: 'Сонцезахисні окуляри', label: 'Сонцезахисні окуляри' },
      { id: 'Рюкзаки', label: 'Рюкзаки' },
      { id: 'Рукавиці', label: 'Рукавиці' },
      { id: 'Сумочки', label: 'Сумочки' },
      { id: 'Шарфи', label: 'Шарфи' }
    ]
  }
] as const

export const filterList = [
  {
    name: 'gender',
    label: 'Стать',
    items: ['Дівчинка', 'Хлопчик'],
    component: FilterFormGender
  },
  {
    name: 'age',
    label: 'Вік',
    items: ['0-2', '2-4', '5-7', '8-11', '12-14', '14+'],
    component: FilterFormGender
  },
  { name: 'brands', label: 'Бренд', items: [], component: FilterFormGender },
  {
    name: 'color',
    label: 'Колір',
    items: [
      { value: '', title: 'Барвистий' },
      { value: '', title: 'Білий' },
      { value: '', title: 'Блакитний' },
      { value: '', title: 'Зелений' },
      { value: '', title: 'Коричневий' },
      { value: '', title: 'Помаранчевий' },
      { value: '', title: 'Сірий' },
      { value: '', title: 'Червоний' },
      { value: '', title: 'Чорний' }
    ],
    component: FilterFormGender
  },
  {
    name: 'material',
    label: 'Матеріал',
    items: [
      'Бавовна',
      'Дерево',
      'Еко-шкіра',
      'Еластан',
      'Льон',
      'Пластик',
      'Поліестер',
      'Синтетичний матеріал',
      'Текстиль',
      'Трикотаж',
      'Фетр',
      'Фліс',
      'Шкіра'
    ],
    component: FilterFormGender
  }
] as const
