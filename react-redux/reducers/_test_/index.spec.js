import { getItemsByCatAndFilter } from '../index';

describe('getItemsByCatAndFilter() function', () => {
    let byIDsState;
    let expectedResult;
    it(' filter="empty" && cat="All" => array of all items', () => {
        byIDsState = {
            byIds: {
                '1': {
                    _id: 1,
                    title: 'Gray Hooded Sweatshirt',
                    slogan: 'The top hooded sweatshirt we offer',
                    description: 'Unless you live in a nudist colony, there are moments when the chill you feel demands that you put on something warm, and for those times, there\'s nothing better than this sharp MongoDB hoodie. Made of 100% cotton, this machine washable, mid-weight hoodie is all you need to stay comfortable when the temperature drops. And, since being able to keep your vital stuff with you is important, the hoodie features two roomy kangaroo pockets to ensure nothing you need ever gets lost.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/hoodie.jpg',
                    price: 29.99,
                    reviews: [
                        {
                            name: 'David',
                            comment: 'Cool!!!',
                            stars: 5,
                            date: 1523219044926
                        },
                        {
                            name: 'Silva',
                            comment: 'Nice product!',
                            stars: 4,
                            date: 1524888762138
                        },
                        {
                            name: 'Ember',
                            comment: 'Cool',
                            stars: 5,
                            date: 1526726430610
                        }
                    ]
                },
                '2': {
                    _id: 2,
                    title: 'Coffee Mug',
                    slogan: 'Keep your coffee hot!',
                    description: 'A mug is a type of cup used for drinking hot beverages, such as coffee, tea, hot chocolate or soup. Mugs usually have handles, and hold a larger amount of fluid than other types of cup. Usually a mug holds approximately 12 US fluid ounces (350 ml) of liquid; double a tea cup. A mug is a less formal style of drink container and is not usually used in formal place settings, where a teacup or coffee cup is preferred.',
                    stars: 0,
                    category: 'Kitchen',
                    img_url: '/img/products/mug.jpg',
                    price: 12.5,
                    reviews: []
                },
                '3': {
                    _id: 3,
                    title: 'Stress Ball',
                    slogan: 'Squeeze your stress away',
                    description: 'The moment life piles more onto your already heaping plate and you start feeling hopelessly overwhelmed, take a stress ball in hand and squeeze as hard as you can. Take a deep breath and just let that tension go. Repeat as needed. It will all be OK! Having something small, portable and close at hand is a must for stress management.',
                    stars: 0,
                    category: 'Swag',
                    img_url: '/img/products/stress-ball.jpg',
                    price: 5,
                    reviews: [
                        {
                            name: 'Silva',
                            comment: 'Nice Product',
                            stars: 4,
                            date: 1523184458373
                        }
                    ]
                },
                '4': {
                    _id: 4,
                    title: 'Track Jacket',
                    slogan: 'Go to the track in style!',
                    description: 'Crafted from ultra-soft combed cotton, this essential jacket features sporty contrast tipping and MongoDB\'s signature embroidered leaf.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/track-jacket.jpg',
                    price: 45,
                    reviews: [
                        {
                            name: 'Shannon',
                            comment: 'This is so warm and comfortable.',
                            stars: 2,
                            date: 1455800194995
                        },
                        {
                            name: 'Bob',
                            comment: 'Love this.',
                            stars: 5,
                            date: 1455804800769
                        },
                        {
                            name: 'Jorge',
                            comment: 'Brown. It\'s brown.',
                            stars: 4,
                            date: 1455804825509
                        }
                    ]
                },
                '5': {
                    _id: 5,
                    title: 'Women\'s T-shirt',
                    slogan: 'MongoDB shirt in-style',
                    description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/white-mongo.jpg',
                    price: 45
                },
                '6': {
                    _id: 6,
                    title: 'Brown Carry-all Bag',
                    slogan: 'Keep extra items here',
                    description: 'Let your style speak for itself with this chic brown carry-all bag. Featuring a nylon exterior with solid contrast trim, brown in color, and MongoDB logo',
                    stars: 0,
                    category: 'Swag',
                    img_url: '/img/products/brown-bag.jpg',
                    price: 5
                },
                '7': {
                    _id: 7,
                    title: 'Brown Tumbler',
                    slogan: 'Bring your coffee to go',
                    description: 'The MongoDB Insulated Travel Tumbler is smartly designed to maintain temperatures and go anywhere. Dual wall construction will keep your beverages hot or cold for hours and a slide lock lid helps minimize spills.',
                    stars: 0,
                    category: 'Kitchen',
                    img_url: '/img/products/brown-tumbler.jpg',
                    price: 9
                },
                '8': {
                    _id: 8,
                    title: 'Pen (Green)',
                    slogan: 'The only pen you\'ll ever need',
                    description: 'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
                    stars: 0,
                    category: 'Office',
                    img_url: '/img/products/green-pen.jpg',
                    price: 2
                },
                '9': {
                    _id: 9,
                    title: 'Pen (Black)',
                    slogan: 'The only pen you\'ll ever need',
                    description: 'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
                    stars: 0,
                    category: 'Office',
                    img_url: '/img/products/pen.jpg',
                    price: 2
                },
                '10': {
                    _id: 10,
                    title: 'Green T-shirt',
                    slogan: 'MongoDB community shirt',
                    description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/green-tshirt.jpg',
                    price: 20,
                    reviews: [
                        {
                            name: 'Silva',
                            comment: 'Nice',
                            stars: 5,
                            date: 1523204839933
                        }
                    ]
                },
                '11': {
                    _id: 11,
                    title: 'MongoDB The Definitive Guide',
                    slogan: '2nd Edition',
                    description: 'Manage the huMONGOus amount of data collected through your web application with MongoDB. This authoritative introduction—written by a core contributor to the project—shows you the many advantages of using document-oriented databases, and demonstrates how this reliable, high-performance system allows for almost infinite horizontal scalability.',
                    stars: 0,
                    category: 'Books',
                    img_url: '/img/products/guide-book.jpg',
                    price: 20,
                    reviews: [
                        {
                            name: 'Silva',
                            comment: 'Great',
                            stars: 5,
                            date: 1523205580472
                        }
                    ]
                },
                '12': {
                    _id: 12,
                    title: 'Leaf Sticker',
                    slogan: 'Add to your sticker collection',
                    description: 'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
                    stars: 0,
                    category: 'Stickers',
                    img_url: '/img/products/leaf-sticker.jpg',
                    price: 1
                },
                '13': {
                    _id: 13,
                    title: 'USB Stick (Green)',
                    slogan: '1GB of space',
                    description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                    stars: 0,
                    category: 'Electronics',
                    img_url: '/img/products/greenusb.jpg',
                    price: 20,
                    reviews: [
                        {
                            name: 'Ringo',
                            comment: 'He\'s very green.',
                            stars: 4,
                            date: 1455804902250
                        },
                        {
                            name: 'Silva',
                            comment: 'Ofcourse',
                            stars: 5,
                            date: 1523205491313
                        }
                    ]
                },
                '14': {
                    _id: 14,
                    title: 'USB Stick (Leaf)',
                    slogan: '1GB of space',
                    description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                    stars: 0,
                    category: 'Electronics',
                    img_url: '/img/products/leaf-usb.jpg',
                    price: 20
                },
                '15': {
                    _id: 15,
                    title: 'Scaling MongoDB',
                    slogan: '2nd Edition',
                    description: 'Create a MongoDB cluster that will grow to meet the needs of your application. With this short and concise book, you\'ll get guidelines for setting up and using clusters to store a large volume of data, and learn how to access the data efficiently. In the process, you\'ll understand how to make your application work with a distributed database system.',
                    stars: 0,
                    category: 'Books',
                    img_url: '/img/products/scaling-book.jpg',
                    price: 29,
                    reviews: [
                        {
                            name: 'Horatio',
                            comment: 'This is a pretty good book',
                            stars: 4,
                            date: 1456086633854
                        },
                        {
                            name: 'Silva',
                            comment: 'Difficult to read',
                            stars: 3,
                            date: 1523288047782
                        }
                    ]
                },
                '16': {
                    _id: 16,
                    title: 'Powered by MongoDB Sticker',
                    slogan: 'Add to your sticker collection',
                    description: 'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
                    stars: 0,
                    category: 'Stickers',
                    img_url: '/img/products/sticker.jpg',
                    price: 1
                },
                '17': {
                    _id: 17,
                    title: 'MongoDB Umbrella (Brown)',
                    slogan: 'Premium Umbrella',
                    description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                    stars: 0,
                    category: 'Umbrellas',
                    img_url: '/img/products/umbrella-brown.jpg',
                    price: 21,
                    reviews: [
                        {
                            name: 'Donald Trump',
                            comment: 'This is the best umbrella you will ever use.',
                            stars: 5,
                            date: 1456270097364
                        },
                        {
                            name: 'Shannon',
                            comment: 'Sturdy construction, but a little too big to fit in my bag for work.',
                            stars: 3,
                            date: 1456270240382
                        },
                        {
                            name: 'Silva',
                            comment: 'Nice product',
                            stars: 4,
                            date: 1523121487037
                        }
                    ]
                },
                '18': {
                    _id: 18,
                    title: 'MongoDB Umbrella (Gray)',
                    slogan: 'Premium Umbrella',
                    description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                    stars: 0,
                    category: 'Umbrellas',
                    img_url: '/img/products/umbrella.jpg',
                    price: 21
                },
                '19': {
                    _id: 19,
                    title: 'MongoDB University Book',
                    slogan: 'A concise summary of MongoDB commands',
                    description: 'Keep the MongoDB commands you\'ll need at your fingertips with this concise book.',
                    stars: 0,
                    category: 'Books',
                    img_url: '/img/products/univ-book.jpg',
                    price: 4
                },
                '20': {
                    _id: 20,
                    title: 'MongoDB University T-shirt',
                    slogan: 'Show Your MDBU Alumni Status',
                    description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/univ-tshirt.jpg',
                    price: 45
                },
                '21': {
                    _id: 21,
                    title: 'USB Stick',
                    slogan: '5GB of space',
                    description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                    stars: 0,
                    category: 'Electronics',
                    img_url: '/img/products/leaf-usb.jpg',
                    price: 40
                },
                '22': {
                    _id: 22,
                    title: 'Water Bottle',
                    slogan: 'Glass water bottle',
                    description: 'High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe',
                    stars: 0,
                    category: 'Kitchen',
                    img_url: '/img/products/water-bottle.jpg',
                    price: 23,
                    reviews: [
                        {
                            name: 'Silva',
                            comment: 'good',
                            stars: 5,
                            date: 1523204924799
                        },
                        {
                            name: 'Elder',
                            comment: 'Super nice bottle',
                            stars: 4,
                            date: 1523205039575
                        }
                    ]
                },
                '23': {
                    _id: 23,
                    title: 'WiredTiger T-shirt',
                    slogan: 'Unleash the tiger',
                    description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/wt-shirt.jpg',
                    price: 22
                }
            },
            byCat: {
                All: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23
                ],
                Apparel: [
                    1,
                    4,
                    5,
                    10,
                    20,
                    23
                ],
                Kitchen: [
                    2,
                    7,
                    22
                ],
                Swag: [
                    3,
                    6
                ],
                Office: [
                    8,
                    9
                ],
                Books: [
                    11,
                    15,
                    19
                ],
                Stickers: [
                    12,
                    16
                ],
                Electronics: [
                    13,
                    14,
                    21
                ],
                Umbrellas: [
                    17,
                    18
                ]
            },
            filterText: ''
        };
        expectedResult = [
            {
                _id: 1,
                title: 'Gray Hooded Sweatshirt',
                slogan: 'The top hooded sweatshirt we offer',
                description: 'Unless you live in a nudist colony, there are moments when the chill you feel demands that you put on something warm, and for those times, there\'s nothing better than this sharp MongoDB hoodie. Made of 100% cotton, this machine washable, mid-weight hoodie is all you need to stay comfortable when the temperature drops. And, since being able to keep your vital stuff with you is important, the hoodie features two roomy kangaroo pockets to ensure nothing you need ever gets lost.',
                stars: 0,
                category: 'Apparel',
                img_url: '/img/products/hoodie.jpg',
                price: 29.99,
                reviews: [
                    {
                        name: 'David',
                        comment: 'Cool!!!',
                        stars: 5,
                        date: 1523219044926
                    },
                    {
                        name: 'Silva',
                        comment: 'Nice product!',
                        stars: 4,
                        date: 1524888762138
                    },
                    {
                        name: 'Ember',
                        comment: 'Cool',
                        stars: 5,
                        date: 1526726430610
                    }
                ]
            },
            {
                _id: 2,
                title: 'Coffee Mug',
                slogan: 'Keep your coffee hot!',
                description: 'A mug is a type of cup used for drinking hot beverages, such as coffee, tea, hot chocolate or soup. Mugs usually have handles, and hold a larger amount of fluid than other types of cup. Usually a mug holds approximately 12 US fluid ounces (350 ml) of liquid; double a tea cup. A mug is a less formal style of drink container and is not usually used in formal place settings, where a teacup or coffee cup is preferred.',
                stars: 0,
                category: 'Kitchen',
                img_url: '/img/products/mug.jpg',
                price: 12.5,
                reviews: []
            },
            {
                _id: 3,
                title: 'Stress Ball',
                slogan: 'Squeeze your stress away',
                description: 'The moment life piles more onto your already heaping plate and you start feeling hopelessly overwhelmed, take a stress ball in hand and squeeze as hard as you can. Take a deep breath and just let that tension go. Repeat as needed. It will all be OK! Having something small, portable and close at hand is a must for stress management.',
                stars: 0,
                category: 'Swag',
                img_url: '/img/products/stress-ball.jpg',
                price: 5,
                reviews: [
                    {
                        name: 'Silva',
                        comment: 'Nice Product',
                        stars: 4,
                        date: 1523184458373
                    }
                ]
            },
            {
                _id: 4,
                title: 'Track Jacket',
                slogan: 'Go to the track in style!',
                description: 'Crafted from ultra-soft combed cotton, this essential jacket features sporty contrast tipping and MongoDB\'s signature embroidered leaf.',
                stars: 0,
                category: 'Apparel',
                img_url: '/img/products/track-jacket.jpg',
                price: 45,
                reviews: [
                    {
                        name: 'Shannon',
                        comment: 'This is so warm and comfortable.',
                        stars: 2,
                        date: 1455800194995
                    },
                    {
                        name: 'Bob',
                        comment: 'Love this.',
                        stars: 5,
                        date: 1455804800769
                    },
                    {
                        name: 'Jorge',
                        comment: 'Brown. It\'s brown.',
                        stars: 4,
                        date: 1455804825509
                    }
                ]
            },
            {
                _id: 5,
                title: 'Women\'s T-shirt',
                slogan: 'MongoDB shirt in-style',
                description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                stars: 0,
                category: 'Apparel',
                img_url: '/img/products/white-mongo.jpg',
                price: 45
            },
            {
                _id: 6,
                title: 'Brown Carry-all Bag',
                slogan: 'Keep extra items here',
                description: 'Let your style speak for itself with this chic brown carry-all bag. Featuring a nylon exterior with solid contrast trim, brown in color, and MongoDB logo',
                stars: 0,
                category: 'Swag',
                img_url: '/img/products/brown-bag.jpg',
                price: 5
            },
            {
                _id: 7,
                title: 'Brown Tumbler',
                slogan: 'Bring your coffee to go',
                description: 'The MongoDB Insulated Travel Tumbler is smartly designed to maintain temperatures and go anywhere. Dual wall construction will keep your beverages hot or cold for hours and a slide lock lid helps minimize spills.',
                stars: 0,
                category: 'Kitchen',
                img_url: '/img/products/brown-tumbler.jpg',
                price: 9
            },
            {
                _id: 8,
                title: 'Pen (Green)',
                slogan: 'The only pen you\'ll ever need',
                description: 'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
                stars: 0,
                category: 'Office',
                img_url: '/img/products/green-pen.jpg',
                price: 2
            },
            {
                _id: 9,
                title: 'Pen (Black)',
                slogan: 'The only pen you\'ll ever need',
                description: 'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
                stars: 0,
                category: 'Office',
                img_url: '/img/products/pen.jpg',
                price: 2
            },
            {
                _id: 10,
                title: 'Green T-shirt',
                slogan: 'MongoDB community shirt',
                description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                stars: 0,
                category: 'Apparel',
                img_url: '/img/products/green-tshirt.jpg',
                price: 20,
                reviews: [
                    {
                        name: 'Silva',
                        comment: 'Nice',
                        stars: 5,
                        date: 1523204839933
                    }
                ]
            },
            {
                _id: 11,
                title: 'MongoDB The Definitive Guide',
                slogan: '2nd Edition',
                description: 'Manage the huMONGOus amount of data collected through your web application with MongoDB. This authoritative introduction—written by a core contributor to the project—shows you the many advantages of using document-oriented databases, and demonstrates how this reliable, high-performance system allows for almost infinite horizontal scalability.',
                stars: 0,
                category: 'Books',
                img_url: '/img/products/guide-book.jpg',
                price: 20,
                reviews: [
                    {
                        name: 'Silva',
                        comment: 'Great',
                        stars: 5,
                        date: 1523205580472
                    }
                ]
            },
            {
                _id: 12,
                title: 'Leaf Sticker',
                slogan: 'Add to your sticker collection',
                description: 'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
                stars: 0,
                category: 'Stickers',
                img_url: '/img/products/leaf-sticker.jpg',
                price: 1
            },
            {
                _id: 13,
                title: 'USB Stick (Green)',
                slogan: '1GB of space',
                description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                stars: 0,
                category: 'Electronics',
                img_url: '/img/products/greenusb.jpg',
                price: 20,
                reviews: [
                    {
                        name: 'Ringo',
                        comment: 'He\'s very green.',
                        stars: 4,
                        date: 1455804902250
                    },
                    {
                        name: 'Silva',
                        comment: 'Ofcourse',
                        stars: 5,
                        date: 1523205491313
                    }
                ]
            },
            {
                _id: 14,
                title: 'USB Stick (Leaf)',
                slogan: '1GB of space',
                description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                stars: 0,
                category: 'Electronics',
                img_url: '/img/products/leaf-usb.jpg',
                price: 20
            },
            {
                _id: 15,
                title: 'Scaling MongoDB',
                slogan: '2nd Edition',
                description: 'Create a MongoDB cluster that will grow to meet the needs of your application. With this short and concise book, you\'ll get guidelines for setting up and using clusters to store a large volume of data, and learn how to access the data efficiently. In the process, you\'ll understand how to make your application work with a distributed database system.',
                stars: 0,
                category: 'Books',
                img_url: '/img/products/scaling-book.jpg',
                price: 29,
                reviews: [
                    {
                        name: 'Horatio',
                        comment: 'This is a pretty good book',
                        stars: 4,
                        date: 1456086633854
                    },
                    {
                        name: 'Silva',
                        comment: 'Difficult to read',
                        stars: 3,
                        date: 1523288047782
                    }
                ]
            },
            {
                _id: 16,
                title: 'Powered by MongoDB Sticker',
                slogan: 'Add to your sticker collection',
                description: 'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
                stars: 0,
                category: 'Stickers',
                img_url: '/img/products/sticker.jpg',
                price: 1
            },
            {
                _id: 17,
                title: 'MongoDB Umbrella (Brown)',
                slogan: 'Premium Umbrella',
                description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                stars: 0,
                category: 'Umbrellas',
                img_url: '/img/products/umbrella-brown.jpg',
                price: 21,
                reviews: [
                    {
                        name: 'Donald Trump',
                        comment: 'This is the best umbrella you will ever use.',
                        stars: 5,
                        date: 1456270097364
                    },
                    {
                        name: 'Shannon',
                        comment: 'Sturdy construction, but a little too big to fit in my bag for work.',
                        stars: 3,
                        date: 1456270240382
                    },
                    {
                        name: 'Silva',
                        comment: 'Nice product',
                        stars: 4,
                        date: 1523121487037
                    }
                ]
            },
            {
                _id: 18,
                title: 'MongoDB Umbrella (Gray)',
                slogan: 'Premium Umbrella',
                description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                stars: 0,
                category: 'Umbrellas',
                img_url: '/img/products/umbrella.jpg',
                price: 21
            },
            {
                _id: 19,
                title: 'MongoDB University Book',
                slogan: 'A concise summary of MongoDB commands',
                description: 'Keep the MongoDB commands you\'ll need at your fingertips with this concise book.',
                stars: 0,
                category: 'Books',
                img_url: '/img/products/univ-book.jpg',
                price: 4
            },
            {
                _id: 20,
                title: 'MongoDB University T-shirt',
                slogan: 'Show Your MDBU Alumni Status',
                description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                stars: 0,
                category: 'Apparel',
                img_url: '/img/products/univ-tshirt.jpg',
                price: 45
            },
            {
                _id: 21,
                title: 'USB Stick',
                slogan: '5GB of space',
                description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                stars: 0,
                category: 'Electronics',
                img_url: '/img/products/leaf-usb.jpg',
                price: 40
            },
            {
                _id: 22,
                title: 'Water Bottle',
                slogan: 'Glass water bottle',
                description: 'High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe',
                stars: 0,
                category: 'Kitchen',
                img_url: '/img/products/water-bottle.jpg',
                price: 23,
                reviews: [
                    {
                        name: 'Silva',
                        comment: 'good',
                        stars: 5,
                        date: 1523204924799
                    },
                    {
                        name: 'Elder',
                        comment: 'Super nice bottle',
                        stars: 4,
                        date: 1523205039575
                    }
                ]
            },
            {
                _id: 23,
                title: 'WiredTiger T-shirt',
                slogan: 'Unleash the tiger',
                description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                stars: 0,
                category: 'Apparel',
                img_url: '/img/products/wt-shirt.jpg',
                price: 22
            }
        ] ;
        expect(getItemsByCatAndFilter(byIDsState, 'All')).toEqual(expectedResult);
    })
    it(' filter="empty" && cat="something" => array of just the category ', () => {
        byIDsState = {
            byIds: {
                '1': {
                    _id: 1,
                    title: 'Gray Hooded Sweatshirt',
                    slogan: 'The top hooded sweatshirt we offer',
                    description: 'Unless you live in a nudist colony, there are moments when the chill you feel demands that you put on something warm, and for those times, there\'s nothing better than this sharp MongoDB hoodie. Made of 100% cotton, this machine washable, mid-weight hoodie is all you need to stay comfortable when the temperature drops. And, since being able to keep your vital stuff with you is important, the hoodie features two roomy kangaroo pockets to ensure nothing you need ever gets lost.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/hoodie.jpg',
                    price: 29.99,
                    reviews: [
                        {
                            name: 'David',
                            comment: 'Cool!!!',
                            stars: 5,
                            date: 1523219044926
                        },
                        {
                            name: 'Silva',
                            comment: 'Nice product!',
                            stars: 4,
                            date: 1524888762138
                        },
                        {
                            name: 'Ember',
                            comment: 'Cool',
                            stars: 5,
                            date: 1526726430610
                        }
                    ]
                },
                '2': {
                    _id: 2,
                    title: 'Coffee Mug',
                    slogan: 'Keep your coffee hot!',
                    description: 'A mug is a type of cup used for drinking hot beverages, such as coffee, tea, hot chocolate or soup. Mugs usually have handles, and hold a larger amount of fluid than other types of cup. Usually a mug holds approximately 12 US fluid ounces (350 ml) of liquid; double a tea cup. A mug is a less formal style of drink container and is not usually used in formal place settings, where a teacup or coffee cup is preferred.',
                    stars: 0,
                    category: 'Kitchen',
                    img_url: '/img/products/mug.jpg',
                    price: 12.5,
                    reviews: []
                },
                '3': {
                    _id: 3,
                    title: 'Stress Ball',
                    slogan: 'Squeeze your stress away',
                    description: 'The moment life piles more onto your already heaping plate and you start feeling hopelessly overwhelmed, take a stress ball in hand and squeeze as hard as you can. Take a deep breath and just let that tension go. Repeat as needed. It will all be OK! Having something small, portable and close at hand is a must for stress management.',
                    stars: 0,
                    category: 'Swag',
                    img_url: '/img/products/stress-ball.jpg',
                    price: 5,
                    reviews: [
                        {
                            name: 'Silva',
                            comment: 'Nice Product',
                            stars: 4,
                            date: 1523184458373
                        }
                    ]
                },
                '4': {
                    _id: 4,
                    title: 'Track Jacket',
                    slogan: 'Go to the track in style!',
                    description: 'Crafted from ultra-soft combed cotton, this essential jacket features sporty contrast tipping and MongoDB\'s signature embroidered leaf.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/track-jacket.jpg',
                    price: 45,
                    reviews: [
                        {
                            name: 'Shannon',
                            comment: 'This is so warm and comfortable.',
                            stars: 2,
                            date: 1455800194995
                        },
                        {
                            name: 'Bob',
                            comment: 'Love this.',
                            stars: 5,
                            date: 1455804800769
                        },
                        {
                            name: 'Jorge',
                            comment: 'Brown. It\'s brown.',
                            stars: 4,
                            date: 1455804825509
                        }
                    ]
                },
                '5': {
                    _id: 5,
                    title: 'Women\'s T-shirt',
                    slogan: 'MongoDB shirt in-style',
                    description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/white-mongo.jpg',
                    price: 45
                },
                '6': {
                    _id: 6,
                    title: 'Brown Carry-all Bag',
                    slogan: 'Keep extra items here',
                    description: 'Let your style speak for itself with this chic brown carry-all bag. Featuring a nylon exterior with solid contrast trim, brown in color, and MongoDB logo',
                    stars: 0,
                    category: 'Swag',
                    img_url: '/img/products/brown-bag.jpg',
                    price: 5
                },
                '7': {
                    _id: 7,
                    title: 'Brown Tumbler',
                    slogan: 'Bring your coffee to go',
                    description: 'The MongoDB Insulated Travel Tumbler is smartly designed to maintain temperatures and go anywhere. Dual wall construction will keep your beverages hot or cold for hours and a slide lock lid helps minimize spills.',
                    stars: 0,
                    category: 'Kitchen',
                    img_url: '/img/products/brown-tumbler.jpg',
                    price: 9
                },
                '8': {
                    _id: 8,
                    title: 'Pen (Green)',
                    slogan: 'The only pen you\'ll ever need',
                    description: 'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
                    stars: 0,
                    category: 'Office',
                    img_url: '/img/products/green-pen.jpg',
                    price: 2
                },
                '9': {
                    _id: 9,
                    title: 'Pen (Black)',
                    slogan: 'The only pen you\'ll ever need',
                    description: 'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
                    stars: 0,
                    category: 'Office',
                    img_url: '/img/products/pen.jpg',
                    price: 2
                },
                '10': {
                    _id: 10,
                    title: 'Green T-shirt',
                    slogan: 'MongoDB community shirt',
                    description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/green-tshirt.jpg',
                    price: 20,
                    reviews: [
                        {
                            name: 'Silva',
                            comment: 'Nice',
                            stars: 5,
                            date: 1523204839933
                        }
                    ]
                },
                '11': {
                    _id: 11,
                    title: 'MongoDB The Definitive Guide',
                    slogan: '2nd Edition',
                    description: 'Manage the huMONGOus amount of data collected through your web application with MongoDB. This authoritative introduction—written by a core contributor to the project—shows you the many advantages of using document-oriented databases, and demonstrates how this reliable, high-performance system allows for almost infinite horizontal scalability.',
                    stars: 0,
                    category: 'Books',
                    img_url: '/img/products/guide-book.jpg',
                    price: 20,
                    reviews: [
                        {
                            name: 'Silva',
                            comment: 'Great',
                            stars: 5,
                            date: 1523205580472
                        }
                    ]
                },
                '12': {
                    _id: 12,
                    title: 'Leaf Sticker',
                    slogan: 'Add to your sticker collection',
                    description: 'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
                    stars: 0,
                    category: 'Stickers',
                    img_url: '/img/products/leaf-sticker.jpg',
                    price: 1
                },
                '13': {
                    _id: 13,
                    title: 'USB Stick (Green)',
                    slogan: '1GB of space',
                    description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                    stars: 0,
                    category: 'Electronics',
                    img_url: '/img/products/greenusb.jpg',
                    price: 20,
                    reviews: [
                        {
                            name: 'Ringo',
                            comment: 'He\'s very green.',
                            stars: 4,
                            date: 1455804902250
                        },
                        {
                            name: 'Silva',
                            comment: 'Ofcourse',
                            stars: 5,
                            date: 1523205491313
                        }
                    ]
                },
                '14': {
                    _id: 14,
                    title: 'USB Stick (Leaf)',
                    slogan: '1GB of space',
                    description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                    stars: 0,
                    category: 'Electronics',
                    img_url: '/img/products/leaf-usb.jpg',
                    price: 20
                },
                '15': {
                    _id: 15,
                    title: 'Scaling MongoDB',
                    slogan: '2nd Edition',
                    description: 'Create a MongoDB cluster that will grow to meet the needs of your application. With this short and concise book, you\'ll get guidelines for setting up and using clusters to store a large volume of data, and learn how to access the data efficiently. In the process, you\'ll understand how to make your application work with a distributed database system.',
                    stars: 0,
                    category: 'Books',
                    img_url: '/img/products/scaling-book.jpg',
                    price: 29,
                    reviews: [
                        {
                            name: 'Horatio',
                            comment: 'This is a pretty good book',
                            stars: 4,
                            date: 1456086633854
                        },
                        {
                            name: 'Silva',
                            comment: 'Difficult to read',
                            stars: 3,
                            date: 1523288047782
                        }
                    ]
                },
                '16': {
                    _id: 16,
                    title: 'Powered by MongoDB Sticker',
                    slogan: 'Add to your sticker collection',
                    description: 'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
                    stars: 0,
                    category: 'Stickers',
                    img_url: '/img/products/sticker.jpg',
                    price: 1
                },
                '17': {
                    _id: 17,
                    title: 'MongoDB Umbrella (Brown)',
                    slogan: 'Premium Umbrella',
                    description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                    stars: 0,
                    category: 'Umbrellas',
                    img_url: '/img/products/umbrella-brown.jpg',
                    price: 21,
                    reviews: [
                        {
                            name: 'Donald Trump',
                            comment: 'This is the best umbrella you will ever use.',
                            stars: 5,
                            date: 1456270097364
                        },
                        {
                            name: 'Shannon',
                            comment: 'Sturdy construction, but a little too big to fit in my bag for work.',
                            stars: 3,
                            date: 1456270240382
                        },
                        {
                            name: 'Silva',
                            comment: 'Nice product',
                            stars: 4,
                            date: 1523121487037
                        }
                    ]
                },
                '18': {
                    _id: 18,
                    title: 'MongoDB Umbrella (Gray)',
                    slogan: 'Premium Umbrella',
                    description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                    stars: 0,
                    category: 'Umbrellas',
                    img_url: '/img/products/umbrella.jpg',
                    price: 21
                },
                '19': {
                    _id: 19,
                    title: 'MongoDB University Book',
                    slogan: 'A concise summary of MongoDB commands',
                    description: 'Keep the MongoDB commands you\'ll need at your fingertips with this concise book.',
                    stars: 0,
                    category: 'Books',
                    img_url: '/img/products/univ-book.jpg',
                    price: 4
                },
                '20': {
                    _id: 20,
                    title: 'MongoDB University T-shirt',
                    slogan: 'Show Your MDBU Alumni Status',
                    description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/univ-tshirt.jpg',
                    price: 45
                },
                '21': {
                    _id: 21,
                    title: 'USB Stick',
                    slogan: '5GB of space',
                    description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                    stars: 0,
                    category: 'Electronics',
                    img_url: '/img/products/leaf-usb.jpg',
                    price: 40
                },
                '22': {
                    _id: 22,
                    title: 'Water Bottle',
                    slogan: 'Glass water bottle',
                    description: 'High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe',
                    stars: 0,
                    category: 'Kitchen',
                    img_url: '/img/products/water-bottle.jpg',
                    price: 23,
                    reviews: [
                        {
                            name: 'Silva',
                            comment: 'good',
                            stars: 5,
                            date: 1523204924799
                        },
                        {
                            name: 'Elder',
                            comment: 'Super nice bottle',
                            stars: 4,
                            date: 1523205039575
                        }
                    ]
                },
                '23': {
                    _id: 23,
                    title: 'WiredTiger T-shirt',
                    slogan: 'Unleash the tiger',
                    description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                    stars: 0,
                    category: 'Apparel',
                    img_url: '/img/products/wt-shirt.jpg',
                    price: 22
                }
            },
            byCat: {
                All: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23
                ],
                Apparel: [
                    1,
                    4,
                    5,
                    10,
                    20,
                    23
                ],
                Kitchen: [
                    2,
                    7,
                    22
                ],
                Swag: [
                    3,
                    6
                ],
                Office: [
                    8,
                    9
                ],
                Books: [
                    11,
                    15,
                    19
                ],
                Stickers: [
                    12,
                    16
                ],
                Electronics: [
                    13,
                    14,
                    21
                ],
                Umbrellas: [
                    17,
                    18
                ]
            },
            filterText: ''
        };
        expectedResult = [
            {
                _id: 17,
                title: 'MongoDB Umbrella (Brown)',
                slogan: 'Premium Umbrella',
                description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                stars: 0,
                category: 'Umbrellas',
                img_url: '/img/products/umbrella-brown.jpg',
                price: 21,
                reviews: [
                    {
                        name: 'Donald Trump',
                        comment: 'This is the best umbrella you will ever use.',
                        stars: 5,
                        date: 1456270097364
                    },
                    {
                        name: 'Shannon',
                        comment: 'Sturdy construction, but a little too big to fit in my bag for work.',
                        stars: 3,
                        date: 1456270240382
                    },
                    {
                        name: 'Silva',
                        comment: 'Nice product',
                        stars: 4,
                        date: 1523121487037
                    }
                ]
            },
            {
                _id: 18,
                title: 'MongoDB Umbrella (Gray)',
                slogan: 'Premium Umbrella',
                description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                stars: 0,
                category: 'Umbrellas',
                img_url: '/img/products/umbrella.jpg',
                price: 21
            }
        ];
        expect(getItemsByCatAndFilter(byIDsState, 'Umbrellas')).toEqual(expectedResult);
    })
    
    describe('filter="something" && cat="something" => array of the category and the filter', () => {
        it('filter is nonsense word', () => {
            byIDsState = {
                byIds: {
                    '1': {
                        _id: 1,
                        title: 'Gray Hooded Sweatshirt',
                        slogan: 'The top hooded sweatshirt we offer',
                        description: 'Unless you live in a nudist colony, there are moments when the chill you feel demands that you put on something warm, and for those times, there\'s nothing better than this sharp MongoDB hoodie. Made of 100% cotton, this machine washable, mid-weight hoodie is all you need to stay comfortable when the temperature drops. And, since being able to keep your vital stuff with you is important, the hoodie features two roomy kangaroo pockets to ensure nothing you need ever gets lost.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/hoodie.jpg',
                        price: 29.99,
                        reviews: [
                            {
                                name: 'David',
                                comment: 'Cool!!!',
                                stars: 5,
                                date: 1523219044926
                            },
                            {
                                name: 'Silva',
                                comment: 'Nice product!',
                                stars: 4,
                                date: 1524888762138
                            },
                            {
                                name: 'Ember',
                                comment: 'Cool',
                                stars: 5,
                                date: 1526726430610
                            }
                        ]
                    },
                    '2': {
                        _id: 2,
                        title: 'Coffee Mug',
                        slogan: 'Keep your coffee hot!',
                        description: 'A mug is a type of cup used for drinking hot beverages, such as coffee, tea, hot chocolate or soup. Mugs usually have handles, and hold a larger amount of fluid than other types of cup. Usually a mug holds approximately 12 US fluid ounces (350 ml) of liquid; double a tea cup. A mug is a less formal style of drink container and is not usually used in formal place settings, where a teacup or coffee cup is preferred.',
                        stars: 0,
                        category: 'Kitchen',
                        img_url: '/img/products/mug.jpg',
                        price: 12.5,
                        reviews: []
                    },
                    '3': {
                        _id: 3,
                        title: 'Stress Ball',
                        slogan: 'Squeeze your stress away',
                        description: 'The moment life piles more onto your already heaping plate and you start feeling hopelessly overwhelmed, take a stress ball in hand and squeeze as hard as you can. Take a deep breath and just let that tension go. Repeat as needed. It will all be OK! Having something small, portable and close at hand is a must for stress management.',
                        stars: 0,
                        category: 'Swag',
                        img_url: '/img/products/stress-ball.jpg',
                        price: 5,
                        reviews: [
                            {
                                name: 'Silva',
                                comment: 'Nice Product',
                                stars: 4,
                                date: 1523184458373
                            }
                        ]
                    },
                    '4': {
                        _id: 4,
                        title: 'Track Jacket',
                        slogan: 'Go to the track in style!',
                        description: 'Crafted from ultra-soft combed cotton, this essential jacket features sporty contrast tipping and MongoDB\'s signature embroidered leaf.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/track-jacket.jpg',
                        price: 45,
                        reviews: [
                            {
                                name: 'Shannon',
                                comment: 'This is so warm and comfortable.',
                                stars: 2,
                                date: 1455800194995
                            },
                            {
                                name: 'Bob',
                                comment: 'Love this.',
                                stars: 5,
                                date: 1455804800769
                            },
                            {
                                name: 'Jorge',
                                comment: 'Brown. It\'s brown.',
                                stars: 4,
                                date: 1455804825509
                            }
                        ]
                    },
                    '5': {
                        _id: 5,
                        title: 'Women\'s T-shirt',
                        slogan: 'MongoDB shirt in-style',
                        description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/white-mongo.jpg',
                        price: 45
                    },
                    '6': {
                        _id: 6,
                        title: 'Brown Carry-all Bag',
                        slogan: 'Keep extra items here',
                        description: 'Let your style speak for itself with this chic brown carry-all bag. Featuring a nylon exterior with solid contrast trim, brown in color, and MongoDB logo',
                        stars: 0,
                        category: 'Swag',
                        img_url: '/img/products/brown-bag.jpg',
                        price: 5
                    },
                    '7': {
                        _id: 7,
                        title: 'Brown Tumbler',
                        slogan: 'Bring your coffee to go',
                        description: 'The MongoDB Insulated Travel Tumbler is smartly designed to maintain temperatures and go anywhere. Dual wall construction will keep your beverages hot or cold for hours and a slide lock lid helps minimize spills.',
                        stars: 0,
                        category: 'Kitchen',
                        img_url: '/img/products/brown-tumbler.jpg',
                        price: 9
                    },
                    '8': {
                        _id: 8,
                        title: 'Pen (Green)',
                        slogan: 'The only pen you\'ll ever need',
                        description: 'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
                        stars: 0,
                        category: 'Office',
                        img_url: '/img/products/green-pen.jpg',
                        price: 2
                    },
                    '9': {
                        _id: 9,
                        title: 'Pen (Black)',
                        slogan: 'The only pen you\'ll ever need',
                        description: 'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
                        stars: 0,
                        category: 'Office',
                        img_url: '/img/products/pen.jpg',
                        price: 2
                    },
                    '10': {
                        _id: 10,
                        title: 'Green T-shirt',
                        slogan: 'MongoDB community shirt',
                        description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/green-tshirt.jpg',
                        price: 20,
                        reviews: [
                            {
                                name: 'Silva',
                                comment: 'Nice',
                                stars: 5,
                                date: 1523204839933
                            }
                        ]
                    },
                    '11': {
                        _id: 11,
                        title: 'MongoDB The Definitive Guide',
                        slogan: '2nd Edition',
                        description: 'Manage the huMONGOus amount of data collected through your web application with MongoDB. This authoritative introduction—written by a core contributor to the project—shows you the many advantages of using document-oriented databases, and demonstrates how this reliable, high-performance system allows for almost infinite horizontal scalability.',
                        stars: 0,
                        category: 'Books',
                        img_url: '/img/products/guide-book.jpg',
                        price: 20,
                        reviews: [
                            {
                                name: 'Silva',
                                comment: 'Great',
                                stars: 5,
                                date: 1523205580472
                            }
                        ]
                    },
                    '12': {
                        _id: 12,
                        title: 'Leaf Sticker',
                        slogan: 'Add to your sticker collection',
                        description: 'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
                        stars: 0,
                        category: 'Stickers',
                        img_url: '/img/products/leaf-sticker.jpg',
                        price: 1
                    },
                    '13': {
                        _id: 13,
                        title: 'USB Stick (Green)',
                        slogan: '1GB of space',
                        description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                        stars: 0,
                        category: 'Electronics',
                        img_url: '/img/products/greenusb.jpg',
                        price: 20,
                        reviews: [
                            {
                                name: 'Ringo',
                                comment: 'He\'s very green.',
                                stars: 4,
                                date: 1455804902250
                            },
                            {
                                name: 'Silva',
                                comment: 'Ofcourse',
                                stars: 5,
                                date: 1523205491313
                            }
                        ]
                    },
                    '14': {
                        _id: 14,
                        title: 'USB Stick (Leaf)',
                        slogan: '1GB of space',
                        description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                        stars: 0,
                        category: 'Electronics',
                        img_url: '/img/products/leaf-usb.jpg',
                        price: 20
                    },
                    '15': {
                        _id: 15,
                        title: 'Scaling MongoDB',
                        slogan: '2nd Edition',
                        description: 'Create a MongoDB cluster that will grow to meet the needs of your application. With this short and concise book, you\'ll get guidelines for setting up and using clusters to store a large volume of data, and learn how to access the data efficiently. In the process, you\'ll understand how to make your application work with a distributed database system.',
                        stars: 0,
                        category: 'Books',
                        img_url: '/img/products/scaling-book.jpg',
                        price: 29,
                        reviews: [
                            {
                                name: 'Horatio',
                                comment: 'This is a pretty good book',
                                stars: 4,
                                date: 1456086633854
                            },
                            {
                                name: 'Silva',
                                comment: 'Difficult to read',
                                stars: 3,
                                date: 1523288047782
                            }
                        ]
                    },
                    '16': {
                        _id: 16,
                        title: 'Powered by MongoDB Sticker',
                        slogan: 'Add to your sticker collection',
                        description: 'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
                        stars: 0,
                        category: 'Stickers',
                        img_url: '/img/products/sticker.jpg',
                        price: 1
                    },
                    '17': {
                        _id: 17,
                        title: 'MongoDB Umbrella (Brown)',
                        slogan: 'Premium Umbrella',
                        description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                        stars: 0,
                        category: 'Umbrellas',
                        img_url: '/img/products/umbrella-brown.jpg',
                        price: 21,
                        reviews: [
                            {
                                name: 'Donald Trump',
                                comment: 'This is the best umbrella you will ever use.',
                                stars: 5,
                                date: 1456270097364
                            },
                            {
                                name: 'Shannon',
                                comment: 'Sturdy construction, but a little too big to fit in my bag for work.',
                                stars: 3,
                                date: 1456270240382
                            },
                            {
                                name: 'Silva',
                                comment: 'Nice product',
                                stars: 4,
                                date: 1523121487037
                            }
                        ]
                    },
                    '18': {
                        _id: 18,
                        title: 'MongoDB Umbrella (Gray)',
                        slogan: 'Premium Umbrella',
                        description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                        stars: 0,
                        category: 'Umbrellas',
                        img_url: '/img/products/umbrella.jpg',
                        price: 21
                    },
                    '19': {
                        _id: 19,
                        title: 'MongoDB University Book',
                        slogan: 'A concise summary of MongoDB commands',
                        description: 'Keep the MongoDB commands you\'ll need at your fingertips with this concise book.',
                        stars: 0,
                        category: 'Books',
                        img_url: '/img/products/univ-book.jpg',
                        price: 4
                    },
                    '20': {
                        _id: 20,
                        title: 'MongoDB University T-shirt',
                        slogan: 'Show Your MDBU Alumni Status',
                        description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/univ-tshirt.jpg',
                        price: 45
                    },
                    '21': {
                        _id: 21,
                        title: 'USB Stick',
                        slogan: '5GB of space',
                        description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                        stars: 0,
                        category: 'Electronics',
                        img_url: '/img/products/leaf-usb.jpg',
                        price: 40
                    },
                    '22': {
                        _id: 22,
                        title: 'Water Bottle',
                        slogan: 'Glass water bottle',
                        description: 'High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe',
                        stars: 0,
                        category: 'Kitchen',
                        img_url: '/img/products/water-bottle.jpg',
                        price: 23,
                        reviews: [
                            {
                                name: 'Silva',
                                comment: 'good',
                                stars: 5,
                                date: 1523204924799
                            },
                            {
                                name: 'Elder',
                                comment: 'Super nice bottle',
                                stars: 4,
                                date: 1523205039575
                            }
                        ]
                    },
                    '23': {
                        _id: 23,
                        title: 'WiredTiger T-shirt',
                        slogan: 'Unleash the tiger',
                        description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/wt-shirt.jpg',
                        price: 22
                    }
                },
                byCat: {
                    All: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23
                    ],
                    Apparel: [
                        1,
                        4,
                        5,
                        10,
                        20,
                        23
                    ],
                    Kitchen: [
                        2,
                        7,
                        22
                    ],
                    Swag: [
                        3,
                        6
                    ],
                    Office: [
                        8,
                        9
                    ],
                    Books: [
                        11,
                        15,
                        19
                    ],
                    Stickers: [
                        12,
                        16
                    ],
                    Electronics: [
                        13,
                        14,
                        21
                    ],
                    Umbrellas: [
                        17,
                        18
                    ]
                },
                userSearchText: 'some weird ...'
            };
            expectedResult = [];
            expect(getItemsByCatAndFilter(byIDsState, 'Umbrellas')).toEqual(expectedResult);
        })
        it('filter is good', () => {
            byIDsState = {
                byIds: {
                    '1': {
                        _id: 1,
                        title: 'Gray Hooded Sweatshirt',
                        slogan: 'The top hooded sweatshirt we offer',
                        description: 'Unless you live in a nudist colony, there are moments when the chill you feel demands that you put on something warm, and for those times, there\'s nothing better than this sharp MongoDB hoodie. Made of 100% cotton, this machine washable, mid-weight hoodie is all you need to stay comfortable when the temperature drops. And, since being able to keep your vital stuff with you is important, the hoodie features two roomy kangaroo pockets to ensure nothing you need ever gets lost.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/hoodie.jpg',
                        price: 29.99,
                        reviews: [
                            {
                                name: 'David',
                                comment: 'Cool!!!',
                                stars: 5,
                                date: 1523219044926
                            },
                            {
                                name: 'Silva',
                                comment: 'Nice product!',
                                stars: 4,
                                date: 1524888762138
                            },
                            {
                                name: 'Ember',
                                comment: 'Cool',
                                stars: 5,
                                date: 1526726430610
                            }
                        ]
                    },
                    '2': {
                        _id: 2,
                        title: 'Coffee Mug',
                        slogan: 'Keep your coffee hot!',
                        description: 'A mug is a type of cup used for drinking hot beverages, such as coffee, tea, hot chocolate or soup. Mugs usually have handles, and hold a larger amount of fluid than other types of cup. Usually a mug holds approximately 12 US fluid ounces (350 ml) of liquid; double a tea cup. A mug is a less formal style of drink container and is not usually used in formal place settings, where a teacup or coffee cup is preferred.',
                        stars: 0,
                        category: 'Kitchen',
                        img_url: '/img/products/mug.jpg',
                        price: 12.5,
                        reviews: []
                    },
                    '3': {
                        _id: 3,
                        title: 'Stress Ball',
                        slogan: 'Squeeze your stress away',
                        description: 'The moment life piles more onto your already heaping plate and you start feeling hopelessly overwhelmed, take a stress ball in hand and squeeze as hard as you can. Take a deep breath and just let that tension go. Repeat as needed. It will all be OK! Having something small, portable and close at hand is a must for stress management.',
                        stars: 0,
                        category: 'Swag',
                        img_url: '/img/products/stress-ball.jpg',
                        price: 5,
                        reviews: [
                            {
                                name: 'Silva',
                                comment: 'Nice Product',
                                stars: 4,
                                date: 1523184458373
                            }
                        ]
                    },
                    '4': {
                        _id: 4,
                        title: 'Track Jacket',
                        slogan: 'Go to the track in style!',
                        description: 'Crafted from ultra-soft combed cotton, this essential jacket features sporty contrast tipping and MongoDB\'s signature embroidered leaf.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/track-jacket.jpg',
                        price: 45,
                        reviews: [
                            {
                                name: 'Shannon',
                                comment: 'This is so warm and comfortable.',
                                stars: 2,
                                date: 1455800194995
                            },
                            {
                                name: 'Bob',
                                comment: 'Love this.',
                                stars: 5,
                                date: 1455804800769
                            },
                            {
                                name: 'Jorge',
                                comment: 'Brown. It\'s brown.',
                                stars: 4,
                                date: 1455804825509
                            }
                        ]
                    },
                    '5': {
                        _id: 5,
                        title: 'Women\'s T-shirt',
                        slogan: 'MongoDB shirt in-style',
                        description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/white-mongo.jpg',
                        price: 45
                    },
                    '6': {
                        _id: 6,
                        title: 'Brown Carry-all Bag',
                        slogan: 'Keep extra items here',
                        description: 'Let your style speak for itself with this chic brown carry-all bag. Featuring a nylon exterior with solid contrast trim, brown in color, and MongoDB logo',
                        stars: 0,
                        category: 'Swag',
                        img_url: '/img/products/brown-bag.jpg',
                        price: 5
                    },
                    '7': {
                        _id: 7,
                        title: 'Brown Tumbler',
                        slogan: 'Bring your coffee to go',
                        description: 'The MongoDB Insulated Travel Tumbler is smartly designed to maintain temperatures and go anywhere. Dual wall construction will keep your beverages hot or cold for hours and a slide lock lid helps minimize spills.',
                        stars: 0,
                        category: 'Kitchen',
                        img_url: '/img/products/brown-tumbler.jpg',
                        price: 9
                    },
                    '8': {
                        _id: 8,
                        title: 'Pen (Green)',
                        slogan: 'The only pen you\'ll ever need',
                        description: 'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
                        stars: 0,
                        category: 'Office',
                        img_url: '/img/products/green-pen.jpg',
                        price: 2
                    },
                    '9': {
                        _id: 9,
                        title: 'Pen (Black)',
                        slogan: 'The only pen you\'ll ever need',
                        description: 'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
                        stars: 0,
                        category: 'Office',
                        img_url: '/img/products/pen.jpg',
                        price: 2
                    },
                    '10': {
                        _id: 10,
                        title: 'Green T-shirt',
                        slogan: 'MongoDB community shirt',
                        description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/green-tshirt.jpg',
                        price: 20,
                        reviews: [
                            {
                                name: 'Silva',
                                comment: 'Nice',
                                stars: 5,
                                date: 1523204839933
                            }
                        ]
                    },
                    '11': {
                        _id: 11,
                        title: 'MongoDB The Definitive Guide',
                        slogan: '2nd Edition',
                        description: 'Manage the huMONGOus amount of data collected through your web application with MongoDB. This authoritative introduction—written by a core contributor to the project—shows you the many advantages of using document-oriented databases, and demonstrates how this reliable, high-performance system allows for almost infinite horizontal scalability.',
                        stars: 0,
                        category: 'Books',
                        img_url: '/img/products/guide-book.jpg',
                        price: 20,
                        reviews: [
                            {
                                name: 'Silva',
                                comment: 'Great',
                                stars: 5,
                                date: 1523205580472
                            }
                        ]
                    },
                    '12': {
                        _id: 12,
                        title: 'Leaf Sticker',
                        slogan: 'Add to your sticker collection',
                        description: 'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
                        stars: 0,
                        category: 'Stickers',
                        img_url: '/img/products/leaf-sticker.jpg',
                        price: 1
                    },
                    '13': {
                        _id: 13,
                        title: 'USB Stick (Green)',
                        slogan: '1GB of space',
                        description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                        stars: 0,
                        category: 'Electronics',
                        img_url: '/img/products/greenusb.jpg',
                        price: 20,
                        reviews: [
                            {
                                name: 'Ringo',
                                comment: 'He\'s very green.',
                                stars: 4,
                                date: 1455804902250
                            },
                            {
                                name: 'Silva',
                                comment: 'Ofcourse',
                                stars: 5,
                                date: 1523205491313
                            }
                        ]
                    },
                    '14': {
                        _id: 14,
                        title: 'USB Stick (Leaf)',
                        slogan: '1GB of space',
                        description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                        stars: 0,
                        category: 'Electronics',
                        img_url: '/img/products/leaf-usb.jpg',
                        price: 20
                    },
                    '15': {
                        _id: 15,
                        title: 'Scaling MongoDB',
                        slogan: '2nd Edition',
                        description: 'Create a MongoDB cluster that will grow to meet the needs of your application. With this short and concise book, you\'ll get guidelines for setting up and using clusters to store a large volume of data, and learn how to access the data efficiently. In the process, you\'ll understand how to make your application work with a distributed database system.',
                        stars: 0,
                        category: 'Books',
                        img_url: '/img/products/scaling-book.jpg',
                        price: 29,
                        reviews: [
                            {
                                name: 'Horatio',
                                comment: 'This is a pretty good book',
                                stars: 4,
                                date: 1456086633854
                            },
                            {
                                name: 'Silva',
                                comment: 'Difficult to read',
                                stars: 3,
                                date: 1523288047782
                            }
                        ]
                    },
                    '16': {
                        _id: 16,
                        title: 'Powered by MongoDB Sticker',
                        slogan: 'Add to your sticker collection',
                        description: 'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
                        stars: 0,
                        category: 'Stickers',
                        img_url: '/img/products/sticker.jpg',
                        price: 1
                    },
                    '17': {
                        _id: 17,
                        title: 'MongoDB Umbrella (Brown)',
                        slogan: 'Premium Umbrella',
                        description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                        stars: 0,
                        category: 'Umbrellas',
                        img_url: '/img/products/umbrella-brown.jpg',
                        price: 21,
                        reviews: [
                            {
                                name: 'Donald Trump',
                                comment: 'This is the best umbrella you will ever use.',
                                stars: 5,
                                date: 1456270097364
                            },
                            {
                                name: 'Shannon',
                                comment: 'Sturdy construction, but a little too big to fit in my bag for work.',
                                stars: 3,
                                date: 1456270240382
                            },
                            {
                                name: 'Silva',
                                comment: 'Nice product',
                                stars: 4,
                                date: 1523121487037
                            }
                        ]
                    },
                    '18': {
                        _id: 18,
                        title: 'MongoDB Umbrella (Gray)',
                        slogan: 'Premium Umbrella',
                        description: 'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
                        stars: 0,
                        category: 'Umbrellas',
                        img_url: '/img/products/umbrella.jpg',
                        price: 21
                    },
                    '19': {
                        _id: 19,
                        title: 'MongoDB University Book',
                        slogan: 'A concise summary of MongoDB commands',
                        description: 'Keep the MongoDB commands you\'ll need at your fingertips with this concise book.',
                        stars: 0,
                        category: 'Books',
                        img_url: '/img/products/univ-book.jpg',
                        price: 4
                    },
                    '20': {
                        _id: 20,
                        title: 'MongoDB University T-shirt',
                        slogan: 'Show Your MDBU Alumni Status',
                        description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/univ-tshirt.jpg',
                        price: 45
                    },
                    '21': {
                        _id: 21,
                        title: 'USB Stick',
                        slogan: '5GB of space',
                        description: 'MongoDB\'s Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.',
                        stars: 0,
                        category: 'Electronics',
                        img_url: '/img/products/leaf-usb.jpg',
                        price: 40
                    },
                    '22': {
                        _id: 22,
                        title: 'Water Bottle',
                        slogan: 'Glass water bottle',
                        description: 'High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe',
                        stars: 0,
                        category: 'Kitchen',
                        img_url: '/img/products/water-bottle.jpg',
                        price: 23,
                        reviews: [
                            {
                                name: 'Silva',
                                comment: 'good',
                                stars: 5,
                                date: 1523204924799
                            },
                            {
                                name: 'Elder',
                                comment: 'Super nice bottle',
                                stars: 4,
                                date: 1523205039575
                            }
                        ]
                    },
                    '23': {
                        _id: 23,
                        title: 'WiredTiger T-shirt',
                        slogan: 'Unleash the tiger',
                        description: 'Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB\'s signature leaf.',
                        stars: 0,
                        category: 'Apparel',
                        img_url: '/img/products/wt-shirt.jpg',
                        price: 22
                    }
                },
                byCat: {
                    All: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23
                    ],
                    Apparel: [
                        1,
                        4,
                        5,
                        10,
                        20,
                        23
                    ],
                    Kitchen: [
                        2,
                        7,
                        22
                    ],
                    Swag: [
                        3,
                        6
                    ],
                    Office: [
                        8,
                        9
                    ],
                    Books: [
                        11,
                        15,
                        19
                    ],
                    Stickers: [
                        12,
                        16
                    ],
                    Electronics: [
                        13,
                        14,
                        21
                    ],
                    Umbrellas: [
                        17,
                        18
                    ]
                },
                userSearchText: 'mug'
            };
            expectedResult = [
                {
                    _id: 2,
                    title: 'Coffee Mug',
                    slogan: 'Keep your coffee hot!',
                    description: 'A mug is a type of cup used for drinking hot beverages, such as coffee, tea, hot chocolate or soup. Mugs usually have handles, and hold a larger amount of fluid than other types of cup. Usually a mug holds approximately 12 US fluid ounces (350 ml) of liquid; double a tea cup. A mug is a less formal style of drink container and is not usually used in formal place settings, where a teacup or coffee cup is preferred.',
                    stars: 0,
                    category: 'Kitchen',
                    img_url: '/img/products/mug.jpg',
                    price: 12.5,
                    reviews: []
                }
            ];
            expect(getItemsByCatAndFilter(byIDsState, 'Kitchen')).toEqual(expectedResult);
        })
    })
})