const { faker } = require("@faker-js/faker");

const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]
const collections = ['street', 'black', 'casual', 'orange', 'line']
const colors = ['purpure', 'yellow', 'orange', 'black', 'white']
const compositions = ['cotton', 'synthetics', 'polyester']
const clothTypes = ['bomber','jacket']

const images = [
  '/img/clothes/clothes-bomber-1.webp',
  '/img/clothes/clothes-bomber-2.webp',
  '/img/clothes/clothes-bomber-3.webp',
  '/img/clothes/clothes-jacket-1.webp',
  '/img/clothes/clothes-jacket-2.webp',
  '/img/clothes/clothes-jacket-3.webp',
  '/img/clothes/clothes-jacket-4.webp',
]
const fabricTypes = [
  'natural',
  'non-natural',
  'mixed',
  'non-woven',
  'stockinette',
]
const collars = [
  'blue',
  'red',
  'black'
]
const sleeves = ['long', 'short']
const seasons = ['demi-season', 'all season']



module.exports = {
  async up(db) {
    return db.collection('cloth').insertMany([...Array(50)].map(()=>{
      const type = clothTypes[Math.floor(Math.random() * clothTypes.length)]
      const characteristics =[
        {
          type: 'bomber',
          color: getRandomArrayValue(colors),
          collar: getRandomArrayValue(collars),
          silhouette: 'straight',
          print: 'chocolate, print, melange',
          decor: faker.datatype.boolean(),
          composition: getRandomArrayValue(compositions),
          season: getRandomArrayValue(seasons),
          collection:
            collections[Math.floor(Math.random() * collections.length)],
        },
        {
          type: 'jacket',
          color: getRandomArrayValue(colors),
          collar: getRandomArrayValue(collars),
          silhouette: 'straight',
          print: 'chocolate, print, melange',
          decor: faker.datatype.boolean(),
          composition: getRandomArrayValue(compositions),
          fabricType: getRandomArrayValue(fabricTypes),
          sleeve: getRandomArrayValue(sleeves),
          season: getRandomArrayValue(seasons),
          collection:
            collections[Math.floor(Math.random() * collections.length)],
        },
      ]
      const currentCharacteristics = characteristics.find(
        item=>item.type === type
      )
      return {
        category: 'cloth',
        type,
        price: +faker.string.numeric(4).replace(/.{0,2}$/, 99),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        characteristics: currentCharacteristics,
        images: images.filter((item) => item.includes(type)),
        vendorCode: faker.string.numeric(4),
        inStock: faker.string.numeric(2),
        isBestseller: faker.datatype.boolean(),
        isNew: faker.datatype.boolean(),
        popularity: +faker.string.numeric(3),
        sizes: {
          s: faker.datatype.boolean(),
          l: faker.datatype.boolean(),
          m: faker.datatype.boolean(),
          xl: faker.datatype.boolean(),
          xxl: faker.datatype.boolean(),
        },
      }
    }))
  },

  async down(db) {
    db.collection('cloth').updateMany([]);
  }
};
