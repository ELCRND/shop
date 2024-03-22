const { faker } = require("@faker-js/faker");

const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]
const collections = ['street', 'black', 'casual', 'orange', 'white']
const colors = ['purpure', 'yellow', 'orange', 'black', 'white']
const accessoriesTypes = ['glasses', 'rings']

const images = [
  '/img/accessories/accessories-glasses-1.webp',
  '/img/accessories/accessories-glasses-2.webp',
  '/img/accessories/accessories-glasses-3.webp',
  '/img/accessories/accessories-glasses-4.webp',
  '/img/accessories/accessories-rings-1.webp',
  '/img/accessories/accessories-rings-2.webp',
  '/img/accessories/accessories-rings-3.webp',
  '/img/accessories/accessories-rings-4.webp',
]




module.exports = {
  async up(db) {
    return db.collection('accessories').insertMany(
      [...Array(50)].map(()=>{
        const type = accessoriesTypes[Math.floor(Math.random() * accessoriesTypes.length)]
      const characteristics =[
        {
          type: 'glasses',
          color: getRandomArrayValue(colors),
          collection: getRandomArrayValue(collections),

        },
        {
          type: 'rings',
          color: getRandomArrayValue(colors),
          collection: getRandomArrayValue(collections),

        },
      ]
      return {
        category: 'accessories',
        type,
        price: +faker.string.numeric(4).replace(/.{0,2}$/, 99),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        characteristics: characteristics.find((item) => item.type === type),
        images: images.filter((item) => item.includes(type)),
        vendorCode: faker.string.numeric(4),
        inStock: faker.string.numeric(2),
        isBestseller: faker.datatype.boolean(),
        isNew: faker.datatype.boolean(),
        popularity: +faker.string.numeric(3),
        sizes:
           {
                s: faker.datatype.boolean(),
                l: faker.datatype.boolean(),
                m: faker.datatype.boolean(),
                xl: faker.datatype.boolean(),
                xxl: faker.datatype.boolean(),
              },
      }
      })

      
    )
  },

  async down(db) {
    return db.collection('accessories').updateMany([])
  }
};
