export type Product = {
	id: string;
	name: string;
	category: string;
	handle: string;
	price: number;
	availableStock: number;
	images: string[];
	descriptions: { lang: string; description: string }[];
	quantity?: number;
};

export const mockProductData = [
	{
		id: '1',
		name: 'Spicy Dragon Noodles',
		category: 'Spicy',
		handle: 'spicy-dragon-noodles',
		price: 5.99,
		availableStock: 10,
		images: [
			'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
			'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Experience the fiery blast of the Spicy Dragon Noodles, which bring a warming heat that dances on your palate with a distinctive blend of peppers and spices for an unforgettable noodle experience.'
			},
			{
				lang: 'es',
				description:
					'Experimenta la explosión ardiente de los Spicy Dragon Noodles, que aportan un calor reconfortante que danza en tu paladar con una mezcla distintiva de pimientos y especias para una experiencia de fideos inolvidable.'
			},
			{
				lang: 'it',
				description:
					'Vivi l’esplosione infuocata dei Spicy Dragon Noodles, che offrono un calore avvolgente che danza sul palato con una miscela distintiva di peperoni e spezie per un’esperienza di noodles indimenticabile.'
			}
		]
	},
	{
		id: '2',
		name: 'Seaweed Whisper',
		category: 'Seafood',
		handle: 'seaweed-whisper',
		price: 6.49,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/pLkB3drp/DALL-E-2025-03-05-09-21-16-A-vibrant-and-traditional-noodle-packet-labeled-Seaweed-Soy-Delight.webp',
			'https://i.postimg.cc/YS9x7wL8/DALL-E-2025-03-05-09-21-18-A-realistic-photograph-of-a-steaming-bowl-of-Seaweed-Soy-Delight-rame.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					"Dive into the ocean's embrace with Seaweed Whisper, instant noodles that capture the subtle sweetness of seaweed and the savory essence of seafood in every bite."
			},
			{
				lang: 'es',
				description:
					'Sumérgete en el abrazo del océano con Seaweed Whisper, fideos instantáneos que capturan la sutil dulzura de las algas y la esencia sabrosa de los mariscos en cada bocado.'
			},
			{
				lang: 'it',
				description:
					"Immergiti nell'abbraccio dell’oceano con Seaweed Whisper, noodles istantanei che catturano la dolcezza sottile delle alghe e l’essenza saporita dei frutti di mare in ogni morso."
			}
		]
	},
	{
		id: '3',
		name: 'Curry Carnival',
		category: 'Curry',
		handle: 'curry-carnival',
		price: 6.99,
		availableStock: 50,
		images: [
			'https://i.postimg.cc/GpyHGMWd/DALL-E-2025-03-04-22-13-17-A-vibrant-and-aromatic-noodle-packet-labeled-Coconut-Curry-Bliss-The.webp',
			'https://i.postimg.cc/9Qz4FX14/DALL-E-2025-03-04-22-13-19-A-realistic-photograph-of-a-steaming-bowl-of-Coconut-Curry-Bliss-ramen.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Join the Curry Carnival with these unforgettable noodles that blend exotic spices and the creamy tang of coconut milk for a flavor journey through the heart of Asia.'
			},
			{
				lang: 'es',
				description:
					'Únete al Curry Carnival con estos fideos inolvidables que combinan especias exóticas y el cremoso toque del coco para un viaje de sabor a través del corazón de Asia.'
			},
			{
				lang: 'it',
				description:
					'Partecipa al Curry Carnival con questi noodles indimenticabili che fondono spezie esotiche e il tocco cremoso del latte di cocco per un viaggio di sapori nel cuore dell’Asia.'
			}
		]
	},
	{
		id: '4',
		name: 'Soy Serenity',
		category: 'Vegan',
		handle: 'soy-serenity',
		price: 5.49,
		availableStock: 2,
		images: [
			'https://i.postimg.cc/ZnkP6B7D/DALL-E-2025-03-05-09-21-24-A-vibrant-and-creamy-noodle-packet-labeled-Truffle-Parmesan-Ramen-Th.webp',
			'https://i.postimg.cc/yxFmj126/DALL-E-2025-03-05-09-21-25-A-realistic-photograph-of-a-steaming-bowl-of-Truffle-Parmesan-Ramen-Th.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Let Soy Serenity lull you into a tranquil state with its rich umami flavor and a hint of mirin that adds a touch of sweetness to the wholesome vegan delight.'
			},
			{
				lang: 'es',
				description:
					'Deja que Soy Serenity te lleve a un estado de tranquilidad con su rico sabor umami y un toque de mirin que añade un matiz de dulzura a esta deliciosa opción vegana.'
			},
			{
				lang: 'it',
				description:
					'Lascia che Soy Serenity ti culli in uno stato di tranquillità con il suo ricco sapore umami e un accenno di mirin che aggiunge un tocco di dolcezza a questo delizioso piatto vegano.'
			}
		]
	},
	{
		id: '5',
		name: 'Chili Twister',
		category: 'Spicy',
		handle: 'chili-twister',
		price: 5.99,
		availableStock: 25,
		images: [
			'https://i.postimg.cc/3Jt4T0j5/DALL-E-2025-03-04-22-13-20-A-bold-and-intense-noodle-packet-labeled-Wasabi-Inferno-Ramen-The-pa.webp',
			'https://i.postimg.cc/8PpJ9m6m/DALL-E-2025-03-04-22-13-22-A-realistic-photograph-of-a-steaming-bowl-of-Wasabi-Inferno-Ramen-The.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					"Spice up your meal with Chili Twister, where the bold flavors of chili peppers and garlic create a tantalizing taste that's not for the faint-hearted."
			},
			{
				lang: 'es',
				description:
					'Da un toque picante a tu comida con Chili Twister, donde los sabores intensos de chiles y ajo crean un gusto tentador que no es para los débiles de corazón.'
			},
			{
				lang: 'it',
				description:
					'Ravviva il tuo pasto con Chili Twister, dove i sapori decisi dei peperoncini e dell’aglio creano un gusto allettante, non per i deboli di cuore.'
			}
		]
	},
	{
		id: '6',
		name: 'Ocean Bliss',
		category: 'Seafood',
		handle: 'ocean-bliss',
		price: 5.99,
		availableStock: 100,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Feel the ocean breeze with Ocean Bliss noodles, a delightful dish bringing the harmonizing flavors of shrimp and kelp to your kitchen in a blink of time.'
			},
			{
				lang: 'es',
				description:
					'Siente la brisa marina con Ocean Bliss noodles, un plato delicioso que trae los sabores armoniosos de camarones y algas a tu cocina en un abrir y cerrar de ojos.'
			},
			{
				lang: 'it',
				description:
					'Senti la brezza marina con Ocean Bliss noodles, un piatto delizioso che porta in cucina i sapori armoniosi di gamberi e alghe in un batter d’occhio.'
			}
		]
	},
	{
		id: '7',
		name: 'Coconut Craze',
		category: 'Curry',
		handle: 'coconut-craze',
		price: 7.29,
		availableStock: 18,
		images: [
			'https://i.postimg.cc/Gtr8ckSr/DALL-E-2025-03-04-22-13-33-A-vibrant-and-flavorful-noodle-packet-labeled-Tikka-Masala-Noodles-T.webp',
			'https://i.postimg.cc/fbGSP4cV/DALL-E-2025-03-04-22-13-35-A-realistic-photograph-of-a-steaming-bowl-of-Tikka-Masala-Noodles-The.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Indulge in the silky smoothness of Coconut Craze noodles, where exuberant curry spices meet the soothing texture of coconut milk for the perfect tropical escape.'
			},
			{
				lang: 'es',
				description:
					'Deléitate con la suavidad sedosa de los Coconut Craze noodles, donde las exuberantes especias del curry se fusionan con la textura reconfortante de la leche de coco para una escapada tropical perfecta.'
			},
			{
				lang: 'it',
				description:
					'Concediti la morbidezza setosa dei Coconut Craze noodles, dove le esuberanti spezie del curry incontrano la texture avvolgente del latte di cocco per una perfetta fuga tropicale.'
			}
		]
	},
	{
		id: '8',
		name: 'Bamboo Zen',
		category: 'Vegan',
		handle: 'bamboo-zen',
		price: 5.49,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Embrace a moment of peace with Bamboo Zen noodles. Nutty sesame seeds perfectly balance the gentle crunch of bamboo shoots and tender noodles for a wholesome meal.'
			},
			{
				lang: 'es',
				description:
					'Abraza un momento de paz con Bamboo Zen noodles. Las semillas de sésamo aportan un toque a nuez que equilibra el suave crujir de los brotes de bambú y los tiernos fideos para una comida completa.'
			},
			{
				lang: 'it',
				description:
					'Abbraccia un momento di pace con Bamboo Zen noodles. I semi di sesamo, dal gusto nocciolato, bilanciano perfettamente la leggera croccantezza dei germogli di bambù e dei noodles teneri per un pasto sano.'
			}
		]
	},
	{
		id: '9',
		name: 'Inferno Wave',
		category: 'Spicy',
		handle: 'inferno-wave',
		price: 6.39,
		availableStock: 3,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Riding on an Inferno Wave, these noodles pack a punch with their fiery blend of chilies and smoky paprika, challenging even the bravest of spice enthusiasts.'
			},
			{
				lang: 'es',
				description:
					'Surcando la Inferno Wave, estos fideos impactan con su explosiva mezcla de chiles y pimentón ahumado, desafiando incluso a los amantes del picante más valientes.'
			},
			{
				lang: 'it',
				description:
					'Sfrecciando su un’onda infernale, questi noodles offrono un colpo potente con la loro miscela infuocata di peperoncini e paprika affumicata, sfidando anche i palati più coraggiosi.'
			}
		]
	},
	{
		id: '10',
		name: 'Pearl Diver',
		category: 'Seafood',
		handle: 'pearl-diver',
		price: 6.59,
		availableStock: 95,
		images: [
			'https://i.postimg.cc/Bvk2GP0Q/DALL-E-2025-03-04-22-13-13-A-vibrant-and-traditional-noodle-packet-labeled-Miso-Samurai-Bowl-Th.webp',
			'https://i.postimg.cc/qvYNtfZ1/DALL-E-2025-03-04-22-13-14-A-realistic-photograph-of-a-steaming-bowl-of-Miso-Samurai-Bowl-ramen-T.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Uncover the treasures of the sea with Pearl Diver noodles. Infused with the robust flavor of clams and scallions, each bite takes you on a maritime adventure.'
			},
			{
				lang: 'es',
				description:
					'Descubre los tesoros del mar con Pearl Diver noodles. Infundidos con el sabor robusto de almejas y cebollín, cada bocado te lleva a una aventura marítima.'
			},
			{
				lang: 'it',
				description:
					'Scopri i tesori del mare con i Pearl Diver noodles. Infusi con il sapore deciso delle vongole e degli scalogni, ogni morso ti conduce in un’avventura marina.'
			}
		]
	},
	{
		id: '11',
		name: 'Pumpkin Spice Rhapsody',
		category: 'Vegan',
		handle: 'pumpkin-spice-rhapsody',
		price: 5.89,
		availableStock: 5,
		images: [
			'https://i.postimg.cc/GpyHGMWd/DALL-E-2025-03-04-22-13-17-A-vibrant-and-aromatic-noodle-packet-labeled-Coconut-Curry-Bliss-The.webp',
			'https://i.postimg.cc/9Qz4FX14/DALL-E-2025-03-04-22-13-19-A-realistic-photograph-of-a-steaming-bowl-of-Coconut-Curry-Bliss-ramen.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Embrace the flavors of autumn with Pumpkin Spice Rhapsody noodles, where rich, roasted pumpkin meets aromatic spices for a cozy culinary delight.'
			},
			{
				lang: 'es',
				description:
					'Abraza los sabores del otoño con Pumpkin Spice Rhapsody noodles, donde la calabaza asada y las especias aromáticas se unen para crear un deleite culinario acogedor.'
			},
			{
				lang: 'it',
				description:
					'Accogli i sapori dell’autunno con i Pumpkin Spice Rhapsody noodles, dove la ricca zucca arrosto incontra spezie aromatiche per un comfort food avvolgente.'
			}
		]
	},
	{
		id: '12',
		name: 'Wasabi Rush',
		category: 'Spicy',
		handle: 'wasabi-rush',
		price: 6.29,
		availableStock: 12,
		images: [
			'https://i.postimg.cc/3Jt4T0j5/DALL-E-2025-03-04-22-13-20-A-bold-and-intense-noodle-packet-labeled-Wasabi-Inferno-Ramen-The-pa.webp',
			'https://i.postimg.cc/8PpJ9m6m/DALL-E-2025-03-04-22-13-22-A-realistic-photograph-of-a-steaming-bowl-of-Wasabi-Inferno-Ramen-The.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Brace yourself for the Wasabi Rush, an explosion of bold, intense flavors that bring a fresh, zesty kick with every bite of these dynamic noodles.'
			},
			{
				lang: 'es',
				description:
					'Prepárate para el Wasabi Rush, una explosión de sabores intensos y audaces que te brindan un toque fresco y vibrante en cada bocado.'
			},
			{
				lang: 'it',
				description:
					'Preparati per il Wasabi Rush, un’esplosione di sapori decisi e intensi che offre una carica fresca e piccante ad ogni morso.'
			}
		]
	},
	{
		id: '13',
		name: 'Coral Reef Chowder',
		category: 'Seafood',
		handle: 'coral-reef-chowder',
		price: 7.69,
		availableStock: 60,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Coral Reef Chowder noodles are a symphony of ocean treasures, mingling creamy broth with succulent seafood pieces that transport your taste buds seaside.'
			},
			{
				lang: 'es',
				description:
					'Los Coral Reef Chowder noodles son una sinfonía de tesoros marinos, combinando un caldo cremoso con trozos jugosos de mariscos que te transportan al mar.'
			},
			{
				lang: 'it',
				description:
					'I Coral Reef Chowder noodles sono una sinfonia di tesori marini, che uniscono un brodo cremoso a succulenti pezzi di frutti di mare, trasportando il tuo palato in riva al mare.'
			}
		]
	},
	{
		id: '14',
		name: 'Golden Turmeric Bliss',
		category: 'Curry',
		handle: 'golden-turmeric-bliss',
		price: 6.49,
		availableStock: 81,
		images: [
			'https://i.postimg.cc/Gtr8ckSr/DALL-E-2025-03-04-22-13-33-A-vibrant-and-flavorful-noodle-packet-labeled-Tikka-Masala-Noodles-T.webp',
			'https://i.postimg.cc/fbGSP4cV/DALL-E-2025-03-04-22-13-35-A-realistic-photograph-of-a-steaming-bowl-of-Tikka-Masala-Noodles-The.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Bask in the healing glow of Golden Turmeric Bliss noodles, where golden spices meld with a savory curry base for an invigorating and tasty meal.'
			},
			{
				lang: 'es',
				description:
					'Sumérgete en el resplandor sanador de los Golden Turmeric Bliss noodles, donde las especias doradas se combinan con una base de curry sabroso para una comida estimulante y deliciosa.'
			},
			{
				lang: 'it',
				description:
					'Lasciati avvolgere dal bagliore curativo dei Golden Turmeric Bliss noodles, dove le spezie dorate si fondono con una base di curry saporita per un pasto rinvigorente e gustoso.'
			}
		]
	},
	{
		id: '15',
		name: 'Volcano Burst',
		category: 'Spicy',
		handle: 'volcano-burst',
		price: 7.29,
		availableStock: 4,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Feel the fury of nature with Volcano Burst noodles, an eruption of spice and savory goodness that’s as thrilling as descending into a fiery crater.'
			},
			{
				lang: 'es',
				description:
					'Siente la furia de la naturaleza con Volcano Burst noodles, una erupción de especias y delicias sabrosas tan emocionante como descender a un cráter en llamas.'
			},
			{
				lang: 'it',
				description:
					"Senti la furia della natura con i Volcano Burst noodles, un'eruzione di spezie e bontà saporita, emozionante come discendere in un cratere infuocato."
			}
		]
	},
	{
		id: '16',
		name: 'Sakura Sea Breeze',
		category: 'Seafood',
		handle: 'sakura-sea-breeze',
		price: 6.59,
		availableStock: 7,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Whisk yourself away to a seaside escape with Sakura Sea Breeze noodles, where floral notes of cherry blossom meld delicately with seafood to soothe your soul.'
			},
			{
				lang: 'es',
				description:
					'Llévate a una escapada costera con Sakura Sea Breeze noodles, donde las notas florales del cerezo se fusionan delicadamente con mariscos para calmar tu alma.'
			},
			{
				lang: 'it',
				description:
					'Lasciati trasportare verso una fuga sul mare con i Sakura Sea Breeze noodles, dove le note floreali dei fiori di ciliegio si fondono delicatamente con i frutti di mare per lenire l’anima.'
			}
		]
	},
	{
		id: '17',
		name: 'Mango Masala',
		category: 'Curry',
		handle: 'mango-masala',
		price: 6.89,
		availableStock: 15,
		images: [
			'https://i.postimg.cc/5NBgqgM5/DALL-E-2025-03-05-09-21-13-A-vibrant-and-tangy-noodle-packet-labeled-Tom-Yum-Zest-Ramen-The-pac.webp',
			'https://i.postimg.cc/Qdjb67X2/DALL-E-2025-03-05-09-21-14-A-realistic-photograph-of-a-steaming-bowl-of-Tom-Yum-Zest-Ramen-The-bo.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Tantalize your taste buds with Mango Masala noodles, blending the sweet essence of ripe mangoes with aromatic spices to stir up delicious memories of a tropical paradise.'
			},
			{
				lang: 'es',
				description:
					'Estimula tus papilas gustativas con Mango Masala noodles, que combinan la dulzura de mangos maduros y especias aromáticas para evocar recuerdos deliciosos de un paraíso tropical.'
			},
			{
				lang: 'it',
				description:
					'Stuzzica il tuo palato con i Mango Masala noodles, che uniscono la dolcezza dei mango maturi e spezie aromatiche per risvegliare ricordi deliziosi di un paradiso tropicale.'
			}
		]
	},
	{
		id: '18',
		name: 'Almond Graze',
		category: 'Vegan',
		handle: 'almond-graze',
		price: 5.79,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Savor the nourishing crunch of Almond Graze, with sliced almonds and fresh greens combining flawlessly in these vegan-friendly noodles for a revitalizing dish.'
			},
			{
				lang: 'es',
				description:
					'Saborea el crujido nutritivo de Almond Graze, donde almendras en láminas y verduras frescas se unen perfectamente en estos fideos veganos para un plato revitalizante.'
			},
			{
				lang: 'it',
				description:
					'Assapora la croccantezza nutriente di Almond Graze, con mandorle affettate e verdure fresche che si combinano perfettamente in questi noodles vegani per un piatto rivitalizzante.'
			}
		]
	},
	{
		id: '19',
		name: 'Crimson Heat',
		category: 'Spicy',
		handle: 'crimson-heat',
		price: 6.99,
		availableStock: 8,
		images: [
			'https://i.postimg.cc/ZnkP6B7D/DALL-E-2025-03-05-09-21-24-A-vibrant-and-creamy-noodle-packet-labeled-Truffle-Parmesan-Ramen-Th.webp',
			'https://i.postimg.cc/yxFmj126/DALL-E-2025-03-05-09-21-25-A-realistic-photograph-of-a-steaming-bowl-of-Truffle-Parmesan-Ramen-Th.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Prepare yourself for an adventure through spicy nirvana with Crimson Heat noodles, where a radiant blend of scarlet peppers ignites an unapologetic flavor extravaganza.'
			},
			{
				lang: 'es',
				description:
					'Prepárate para una aventura a través del nirvana picante con Crimson Heat noodles, donde una mezcla radiante de pimientos escarlata enciende una extravagancia de sabor sin límites.'
			},
			{
				lang: 'it',
				description:
					'Preparati per un’avventura nel nirvana piccante con i Crimson Heat noodles, dove una vibrante miscela di peperoni scarlatti scatena un’esplosione di sapori.'
			}
		]
	},
	{
		id: '20',
		name: 'Tidal Wave',
		category: 'Seafood',
		handle: 'tidal-wave',
		price: 6.29,
		availableStock: 90,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Tidal Wave noodles offer a briny surge of flavors with each mouthful, where waves of prawns and crisp seaweed leave you refreshed like a seaside breeze.'
			},
			{
				lang: 'es',
				description:
					'Los Tidal Wave noodles ofrecen una oleada de sabores salinos en cada bocado, donde olas de gambas y algas crujientes te dejan renovado como la brisa marina.'
			},
			{
				lang: 'it',
				description:
					'I Tidal Wave noodles offrono un’ondata salina di sapori ad ogni morso, dove onde di gamberi e alghe croccanti ti rinfrescano come una brezza marina.'
			}
		]
	},
	{
		id: '21',
		name: 'Ginger Zing',
		category: 'Vegan',
		handle: 'ginger-zing',
		price: 5.59,
		availableStock: 1,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Elevate your taste buds with Ginger Zing noodles, presenting a radiant yet zesty gingery punch alongside tender noodles for a refreshingly crisp meal experience.'
			},
			{
				lang: 'es',
				description:
					'Eleva tus papilas gustativas con Ginger Zing noodles, que ofrecen un golpe de jengibre vibrante y picante junto a fideos tiernos para una experiencia de comida fresca y crujiente.'
			},
			{
				lang: 'it',
				description:
					'Eleva il tuo palato con i Ginger Zing noodles, che offrono un colpo di zenzero radiante e vivace insieme a noodles teneri per un pasto rinfrescante e croccante.'
			}
		]
	},
	{
		id: '22',
		name: 'Thai Basil Blast',
		category: 'Curry',
		handle: 'thai-basil-blast',
		price: 7.39,
		availableStock: 65,
		images: [
			'https://i.postimg.cc/5NBgqgM5/DALL-E-2025-03-05-09-21-13-A-vibrant-and-tangy-noodle-packet-labeled-Tom-Yum-Zest-Ramen-The-pac.webp',
			'https://i.postimg.cc/Qdjb67X2/DALL-E-2025-03-05-09-21-14-A-realistic-photograph-of-a-steaming-bowl-of-Tom-Yum-Zest-Ramen-The-bo.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Dive into the fragrant world of Thai Basil Blast noodles, where vibrant pieces of Thai basil entwine with the creamy delight of curry-infused noodles.'
			},
			{
				lang: 'es',
				description:
					'Sumérgete en el mundo fragante de los Thai Basil Blast noodles, donde trozos vibrantes de albahaca tailandesa se entrelazan con la cremosa delicia de fideos infusionados con curry.'
			},
			{
				lang: 'it',
				description:
					'Immergiti nel mondo profumato dei Thai Basil Blast noodles, dove vivaci pezzi di basilico tailandese si intrecciano con la cremosità dei noodles al curry.'
			}
		]
	},
	{
		id: '23',
		name: 'Midnight Heat',
		category: 'Spicy',
		handle: 'midnight-heat',
		price: 6.79,
		availableStock: 11,
		images: [
			'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
			'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Whether the clock strikes midnight or midday, these Midnight Heat noodles set the scene for a mystery of flavor, clad in a veil of spicy allure.'
			},
			{
				lang: 'es',
				description:
					'Ya sea medianoche o mediodía, los Midnight Heat noodles crean un ambiente misterioso de sabor, envueltos en un velo de atracción picante.'
			},
			{
				lang: 'it',
				description:
					'Che sia a mezzanotte o a mezzogiorno, questi Midnight Heat noodles creano un’atmosfera di mistero gustativo, avvolti in un velo di seduzione piccante.'
			}
		]
	},
	{
		id: '24',
		name: 'Neptune’s Feast',
		category: 'Seafood',
		handle: 'neptunes-feast',
		price: 7.49,
		availableStock: 100,
		images: [
			'https://i.postimg.cc/pLkB3drp/DALL-E-2025-03-05-09-21-16-A-vibrant-and-traditional-noodle-packet-labeled-Seaweed-Soy-Delight.webp',
			'https://i.postimg.cc/YS9x7wL8/DALL-E-2025-03-05-09-21-18-A-realistic-photograph-of-a-steaming-bowl-of-Seaweed-Soy-Delight-rame.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Offer your palate a regal banquet beneath the waves with Neptune’s Feast noodles, a divine orchestration of succulent crab and oceanic flavors.'
			},
			{
				lang: 'es',
				description:
					'Ofrece a tu paladar un banquete real bajo las olas con Neptune’s Feast noodles, una orquestación divina de cangrejo jugoso y sabores oceánicos.'
			},
			{
				lang: 'it',
				description:
					'Offri al tuo palato un banchetto regale sotto le onde con i Neptune’s Feast noodles, un’orchestrazione divina di granchio succulento e sapori marini.'
			}
		]
	},
	{
		id: '25',
		name: 'Saffron Mist',
		category: 'Curry',
		handle: 'saffron-mist',
		price: 7.19,
		availableStock: 45,
		images: [
			'https://i.postimg.cc/GpyHGMWd/DALL-E-2025-03-04-22-13-17-A-vibrant-and-aromatic-noodle-packet-labeled-Coconut-Curry-Bliss-The.webp',
			'https://i.postimg.cc/9Qz4FX14/DALL-E-2025-03-04-22-13-19-A-realistic-photograph-of-a-steaming-bowl-of-Coconut-Curry-Bliss-ramen.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Unlock the mystical aura of Saffron Mist noodles, crafted with precious saffron threads to bring an exotic elegance to every spice-touched bite of curry noodles.'
			},
			{
				lang: 'es',
				description:
					'Descubre el aura mística de los Saffron Mist noodles, elaborados con hilos de azafrán que aportan una elegancia exótica a cada bocado condimentado.'
			},
			{
				lang: 'it',
				description:
					'Svela l’aura mistica dei Saffron Mist noodles, realizzati con preziosi fili di zafferano per infondere un’eleganza esotica in ogni morso speziato.'
			}
		]
	},
	{
		id: '26',
		name: 'Herbal Harmony',
		category: 'Vegan',
		handle: 'herbal-harmony',
		price: 5.49,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Embark on a soothing culinary odyssey with Herbal Harmony noodles, highlighting a gentle balance of aromatic herbs and garden greens for a wholesome vegan delight.'
			},
			{
				lang: 'es',
				description:
					'Emprende una odisea culinaria reconfortante con Herbal Harmony noodles, resaltando el equilibrio suave de hierbas aromáticas y verduras frescas para un deleite vegano completo.'
			},
			{
				lang: 'it',
				description:
					'Intraprendi un’odissea culinaria rilassante con Herbal Harmony noodles, mettendo in risalto un delicato equilibrio di erbe aromatiche e verdure per un piatto vegano salutare.'
			}
		]
	},
	{
		id: '27',
		name: 'Searing Sun',
		category: 'Spicy',
		handle: 'searing-sun',
		price: 6.69,
		availableStock: 13,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Bask in the vibrant warmth of Searing Sun noodles, inspired by the fiery glow of the sun, and encounter a spice-forward escapade in each satisfying slurp.'
			},
			{
				lang: 'es',
				description:
					'Sumérgete en el cálido resplandor de los Searing Sun noodles, inspirados por el fulgor ardiente del sol, y disfruta de una escapada especiada en cada sorbo.'
			},
			{
				lang: 'it',
				description:
					'Lasciati avvolgere dal calore vibrante dei Searing Sun noodles, ispirati dall’ardente bagliore del sole, e vivi un’avventura speziata ad ogni sorso.'
			}
		]
	},
	{
		id: '28',
		name: 'Poseidon’s Ellipse',
		category: 'Seafood',
		handle: 'poseidons-ellipse',
		price: 7.49,
		availableStock: 72,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Sail on a delicious journey with Poseidon’s Ellipse noodles, where tender shrimp bathe in a luxurious broth, embellished with swirling strokes of oceanic brilliance.'
			},
			{
				lang: 'es',
				description:
					'Navega en un delicioso viaje con Poseidon’s Ellipse noodles, donde camarones tiernos se bañan en un caldo lujoso y remolinos de brillantez oceánica.'
			},
			{
				lang: 'it',
				description:
					'Naviga in un delizioso viaggio con i Poseidon’s Ellipse noodles, dove gamberi teneri si immergono in un brodo lussuoso, impreziositi da vortici di brillantezza oceanica.'
			}
		]
	},
	{
		id: '29',
		name: 'Pineapple Krave',
		category: 'Curry',
		handle: 'pineapple-krave',
		price: 6.59,
		availableStock: 19,
		images: [
			'https://i.postimg.cc/5NBgqgM5/DALL-E-2025-03-05-09-21-13-A-vibrant-and-tangy-noodle-packet-labeled-Tom-Yum-Zest-Ramen-The-pac.webp',
			'https://i.postimg.cc/Qdjb67X2/DALL-E-2025-03-05-09-21-14-A-realistic-photograph-of-a-steaming-bowl-of-Tom-Yum-Zest-Ramen-The-bo.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Revel in the unexpected delight of Pineapple Krave noodles, uplifting your taste buds with their tangy balance of sweet pineapple and savory curry.'
			},
			{
				lang: 'es',
				description:
					'Disfruta del inesperado placer de los Pineapple Krave noodles, que elevan tus papilas gustativas con el equilibrio entre la dulzura de la piña y el curry sabroso.'
			},
			{
				lang: 'it',
				description:
					'Goditi il sorprendente piacere dei Pineapple Krave noodles, che sollevano il tuo palato con il perfetto equilibrio tra la dolcezza dell’ananas e il curry saporito.'
			}
		]
	},
	{
		id: '30',
		name: 'Autumn Harvest',
		category: 'Vegan',
		handle: 'autumn-harvest',
		price: 5.79,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/pT3Ck1TC/DALL-E-2025-03-05-09-21-04-A-vibrant-and-rich-noodle-packet-labeled-Honey-Butter-Ramen-The-pack.webp',
			'https://i.postimg.cc/T2WChG74/DALL-E-2025-03-05-09-21-06-A-realistic-photograph-of-a-steaming-bowl-of-Honey-Butter-Ramen-The-di.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Celebrate the bounty of the season with Autumn Harvest noodles, a medley of roasted root vegetables and wholesome grains in a comforting vegan mélange.'
			},
			{
				lang: 'es',
				description:
					'Celebrar la abundancia de la temporada con Autumn Harvest noodles, una mezcla de verduras asadas y granos integrales en un reconfortante ensamblaje vegano.'
			},
			{
				lang: 'it',
				description:
					'Festeggia l’abbondanza della stagione con i Autumn Harvest noodles, una miscela di verdure arrosto e cereali integrali in un confortante mélange vegano.'
			}
		]
	},
	{
		id: '31',
		name: 'Fiery Comet',
		category: 'Spicy',
		handle: 'fiery-comet',
		price: 6.99,
		availableStock: 10,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Swooshing from the cosmos, Fiery Comet noodles unleash a heated rush of tantalizing spices that impact your taste universe with bright bursts of flavor.'
			},
			{
				lang: 'es',
				description:
					'Surcando el cosmos, Fiery Comet noodles desatan una explosión de especias tentadoras que iluminan tu universo de sabor con estallidos de intensidad.'
			},
			{
				lang: 'it',
				description:
					'Sfrecciando dallo spazio, i Fiery Comet noodles scatenano un’ondata di spezie che illuminano il tuo universo gustativo con esplosioni di sapore.'
			}
		]
	},
	{
		id: '32',
		name: 'Lagoon Creole',
		category: 'Seafood',
		handle: 'lagoon-creole',
		price: 7.39,
		availableStock: 47,
		images: [
			'https://i.postimg.cc/pLkB3drp/DALL-E-2025-03-05-09-21-16-A-vibrant-and-traditional-noodle-packet-labeled-Seaweed-Soy-Delight.webp',
			'https://i.postimg.cc/YS9x7wL8/DALL-E-2025-03-05-09-21-18-A-realistic-photograph-of-a-steaming-bowl-of-Seaweed-Soy-Delight-rame.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Journey through culinary traditions with Lagoon Creole noodles, serving up vibrant notes of spices and seafood reminiscent of a rich Creole heritage.'
			},
			{
				lang: 'es',
				description:
					'Embárcate en un viaje culinario con Lagoon Creole noodles, donde notas vibrantes de especias y mariscos evocan una rica herencia criolla.'
			},
			{
				lang: 'it',
				description:
					'Viaggia attraverso le tradizioni culinarie con i Lagoon Creole noodles, che offrono note vibranti di spezie e frutti di mare, evocando un ricco patrimonio creolo.'
			}
		]
	},
	{
		id: '33',
		name: 'Purple Majesty',
		category: 'Vegan',
		handle: 'purple-majesty',
		price: 5.89,
		availableStock: 2,
		images: [
			'https://i.postimg.cc/GpyHGMWd/DALL-E-2025-03-04-22-13-17-A-vibrant-and-aromatic-noodle-packet-labeled-Coconut-Curry-Bliss-The.webp',
			'https://i.postimg.cc/9Qz4FX14/DALL-E-2025-03-04-22-13-19-A-realistic-photograph-of-a-steaming-bowl-of-Coconut-Curry-Bliss-ramen.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Celebrate regality with Purple Majesty noodles, featuring nutrient-rich purple cabbage and wholesome ingredients enhancing the splendor of this vegan dish.'
			},
			{
				lang: 'es',
				description:
					'Celébralo con Purple Majesty noodles, que combinan repollo morado rico en nutrientes e ingredientes saludables para realzar el esplendor de este plato vegano.'
			},
			{
				lang: 'it',
				description:
					'Festeggia la regalità con i Purple Majesty noodles, arricchiti da cavolo viola nutriente e ingredienti genuini che esaltano lo splendore di questo piatto vegano.'
			}
		]
	},
	{
		id: '34',
		name: 'Lemon Inferno',
		category: 'Spicy',
		handle: 'lemon-inferno',
		price: 6.59,
		availableStock: 14,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Ignite your taste buds with the Lemon Inferno, a stunning fusion of citrus zest and fiery chili that’s as bold as a bonfire on a summer’s eve.'
			},
			{
				lang: 'es',
				description:
					'Enciende tus papilas gustativas con el Lemon Inferno, una fusión asombrosa de ralladura cítrica y chile picante, tan audaz como una hoguera en una noche de verano.'
			},
			{
				lang: 'it',
				description:
					"Accendi il tuo palato con il Lemon Inferno, una straordinaria fusione di scorza di limone e peperoncino infuocato, audace come un falò in una sera d'estate."
			}
		]
	},
	{
		id: '35',
		name: 'Ocean Symphony',
		category: 'Seafood',
		handle: 'ocean-symphony',
		price: 7.29,
		availableStock: 100,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Conduct an orchestra of flavors with Ocean Symphony noodles where notes of lush lobster and savory fish participate harmoniously in this sea-inspired creation.'
			},
			{
				lang: 'es',
				description:
					'Dirige una orquesta de sabores con Ocean Symphony noodles, donde notas de langosta y pescado sabroso se combinan en perfecta armonía para crear una obra maestra marina.'
			},
			{
				lang: 'it',
				description:
					"Dirigi un'orchestra di sapori con i Ocean Symphony noodles, dove le note di aragosta e pesce si fondono armoniosamente in questa creazione ispirata al mare."
			}
		]
	},
	{
		id: '36',
		name: 'Rosemary Reverie',
		category: 'Curry',
		handle: 'rosemary-reverie',
		price: 6.99,
		availableStock: 53,
		images: [
			'https://i.postimg.cc/5NBgqgM5/DALL-E-2025-03-05-09-21-13-A-vibrant-and-tangy-noodle-packet-labeled-Tom-Yum-Zest-Ramen-The-pac.webp',
			'https://i.postimg.cc/Qdjb67X2/DALL-E-2025-03-05-09-21-14-A-realistic-photograph-of-a-steaming-bowl-of-Tom-Yum-Zest-Ramen-The-bo.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Be enthralled by fragrant Rosemary Reverie noodles, marrying savory curry spices with the distinctive aromatic quality of rosemary for a botanical delight.'
			},
			{
				lang: 'es',
				description:
					'Déjate cautivar por los Rosemary Reverie noodles, donde las especias de curry se unen con el distintivo aroma del romero para un deleite botánico.'
			},
			{
				lang: 'it',
				description:
					"Lasciati incantare dai fragranti Rosemary Reverie noodles, che uniscono le spezie del curry con l'aroma inconfondibile del rosmarino per un piacere botanico."
			}
		]
	},
	{
		id: '37',
		name: 'Scorching Ember',
		category: 'Spicy',
		handle: 'scorching-ember',
		price: 6.79,
		availableStock: 5,
		images: [
			'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
			'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Embrace the warmth of Scorching Ember noodles, featuring charring spices that ripple through your palate with searing ardor, harnessing the power of fire.'
			},
			{
				lang: 'es',
				description:
					'Abraza el calor de los Scorching Ember noodles, con especias tostadas que recorren tu paladar con un ardor abrasador, aprovechando el poder del fuego.'
			},
			{
				lang: 'it',
				description:
					'Abbraccia il calore dei Scorching Ember noodles, caratterizzati da spezie bruciate che attraversano il tuo palato con ardore, sfruttando il potere del fuoco.'
			}
		]
	},
	{
		id: '38',
		name: 'Azure Coast',
		category: 'Seafood',
		handle: 'azure-coast',
		price: 7.69,
		availableStock: 29,
		images: [
			'https://i.postimg.cc/Bvk2GP0Q/DALL-E-2025-03-04-22-13-13-A-vibrant-and-traditional-noodle-packet-labeled-Miso-Samurai-Bowl-Th.webp',
			'https://i.postimg.cc/qvYNtfZ1/DALL-E-2025-03-04-22-13-14-A-realistic-photograph-of-a-steaming-bowl-of-Miso-Samurai-Bowl-ramen-T.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Immerse yourself in the infinite blue with Azure Coast Noodles, offering a superb medley of tender seafood melded into a brilliant coastal culinary delight.'
			},
			{
				lang: 'es',
				description:
					'Sumérgete en el azul infinito con Azure Coast Noodles, que ofrecen una mezcla extraordinaria de mariscos tiernos en un brillante deleite costero.'
			},
			{
				lang: 'it',
				description:
					'Immergiti nell’azzurro infinito con gli Azure Coast Noodles, che offrono una squisita miscela di frutti di mare teneri in un delizioso piacere costiero.'
			}
		]
	},
	{
		id: '39',
		name: 'Tangerine Whirl',
		category: 'Vegan',
		handle: 'tangerine-whirl',
		price: 5.69,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/pT3Ck1TC/DALL-E-2025-03-05-09-21-04-A-vibrant-and-rich-noodle-packet-labeled-Honey-Butter-Ramen-The-pack.webp',
			'https://i.postimg.cc/T2WChG74/DALL-E-2025-03-05-09-21-06-A-realistic-photograph-of-a-steaming-bowl-of-Honey-Butter-Ramen-The-di.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Elevate your noodle experience with Tangerine Whirl noodles, infusing tangy citrus notes with light, crisp vegetables into the never-ending whirl of flavor.'
			},
			{
				lang: 'es',
				description:
					'Eleva tu experiencia de fideos con Tangerine Whirl noodles, que infunden notas cítricas ácidas y verduras frescas en un torbellino interminable de sabor.'
			},
			{
				lang: 'it',
				description:
					'Eleva la tua esperienza con i Tangerine Whirl noodles, che uniscono note agrumate acidule a verdure croccanti in un vortice infinito di sapore.'
			}
		]
	},
	{
		id: '40',
		name: 'Sapphire Tide',
		category: 'Seafood',
		handle: 'sapphire-tide',
		price: 7.19,
		availableStock: 12,
		images: [
			'https://i.postimg.cc/Bvk2GP0Q/DALL-E-2025-03-04-22-13-13-A-vibrant-and-traditional-noodle-packet-labeled-Miso-Samurai-Bowl-Th.webp',
			'https://i.postimg.cc/qvYNtfZ1/DALL-E-2025-03-04-22-13-14-A-realistic-photograph-of-a-steaming-bowl-of-Miso-Samurai-Bowl-ramen-T.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Navigate the Sapphire Tide with these exquisite noodles, where the brilliance of scallops and crab meat cascade gloriously in an ocean-inspired dish.'
			},
			{
				lang: 'es',
				description:
					'Navega la Sapphire Tide con estos exquisitos fideos, donde vieiras y carne de cangrejo se unen en un plato inspirado en el océano.'
			},
			{
				lang: 'it',
				description:
					'Naviga la Sapphire Tide con questi squisiti noodles, dove la brillantezza delle capesante e della carne di granchio si riversa in un piatto ispirato al mare.'
			}
		]
	},
	{
		id: '41',
		name: 'Emerald Heat',
		category: 'Spicy',
		handle: 'emerald-heat',
		price: 6.49,
		availableStock: 10,
		images: [
			'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
			'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Adventure awaits with Emerald Heat noodles, which herald a verdant explosion of spice and flavor akin to a vibrant, flourishing garden.'
			},
			{
				lang: 'es',
				description:
					'La aventura te espera con Emerald Heat noodles, que anuncian una explosión de sabores y especias, como un jardín vibrante y floreciente.'
			},
			{
				lang: 'it',
				description:
					"L'avventura ti attende con i Emerald Heat noodles, che annunciano un'esplosione verde di spezie e sapori, simile a un giardino rigoglioso."
			}
		]
	},
	{
		id: '42',
		name: 'Ricotta Revive',
		category: 'Vegan',
		handle: 'ricotta-revive',
		price: 5.99,
		availableStock: 95,
		images: [
			'https://i.postimg.cc/pT3Ck1TC/DALL-E-2025-03-05-09-21-04-A-vibrant-and-rich-noodle-packet-labeled-Honey-Butter-Ramen-The-pack.webp',
			'https://i.postimg.cc/T2WChG74/DALL-E-2025-03-05-09-21-06-A-realistic-photograph-of-a-steaming-bowl-of-Honey-Butter-Ramen-The-di.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Revitalize your day with Ricotta Revive noodles, harmonizing tender grains with homemade cashew-based ricotta for a splendidly smooth and creamy vegan delight.'
			},
			{
				lang: 'es',
				description:
					'Revitaliza tu día con Ricotta Revive noodles, que armonizan granos tiernos con una ricotta casera a base de anacardos para un deleite vegano suave y cremoso.'
			},
			{
				lang: 'it',
				description:
					'Rivitalizza la tua giornata con i Ricotta Revive noodles, che uniscono cereali teneri e una ricotta fatta in casa a base di anacardi per un piatto vegano, liscio e cremoso.'
			}
		]
	},
	{
		id: '43',
		name: 'Lavender Storm',
		category: 'Curry',
		handle: 'lavender-storm',
		price: 6.79,
		availableStock: 71,
		images: [
			'https://i.postimg.cc/5NBgqgM5/DALL-E-2025-03-05-09-21-13-A-vibrant-and-tangy-noodle-packet-labeled-Tom-Yum-Zest-Ramen-The-pac.webp',
			'https://i.postimg.cc/Qdjb67X2/DALL-E-2025-03-05-09-21-14-A-realistic-photograph-of-a-steaming-bowl-of-Tom-Yum-Zest-Ramen-The-bo.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Whirl into the floral gusts of Lavender Storm noodles, where curry spices and delicately aromatic lavender intertwine with vivid harmony.'
			},
			{
				lang: 'es',
				description:
					'Sumérgete en las ráfagas florales de Lavender Storm noodles, donde las especias del curry y la delicada lavanda se unen en perfecta armonía.'
			},
			{
				lang: 'it',
				description:
					'Lasciati avvolgere dalle raffiche floreali dei Lavender Storm noodles, dove le spezie al curry e la lavanda si intrecciano in perfetta armonia.'
			}
		]
	},
	{
		id: '44',
		name: 'Burning Comet',
		category: 'Spicy',
		handle: 'burning-comet',
		price: 6.99,
		availableStock: 3,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Journey through time and space with Burning Comet noodles, as spices light up like meteors crossing the cosmic threshold in this astronomical adventure.'
			},
			{
				lang: 'es',
				description:
					'Viaja a través del tiempo y el espacio con Burning Comet noodles, donde las especias se iluminan como meteoritos en una aventura cósmica.'
			},
			{
				lang: 'it',
				description:
					"Viaggia attraverso il tempo e lo spazio con i Burning Comet noodles, mentre le spezie si accendono come meteoriti in un'avventura astronomica."
			}
		]
	},
	{
		id: '45',
		name: 'Platinum Coral',
		category: 'Seafood',
		handle: 'platinum-coral',
		price: 7.59,
		availableStock: 93,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Explore the opulent depths of Platinum Coral noodles, where succulent ocean treasures shimmer and dance in tandem with this lavish flavor concoction.'
			},
			{
				lang: 'es',
				description:
					'Explora las profundas opulencias de Platinum Coral noodles, donde tesoros marinos se iluminan y bailan en una lujosa sinfonía de sabor.'
			},
			{
				lang: 'it',
				description:
					'Esplora le opulente profondità dei Platinum Coral noodles, dove tesori marini succulenti scintillano e danzano in un sontuoso concerto di sapori.'
			}
		]
	},
	{
		id: '46',
		name: 'Teardrop Delight',
		category: 'Vegan',
		handle: 'teardrop-delight',
		price: 5.89,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/Bvk2GP0Q/DALL-E-2025-03-04-22-13-13-A-vibrant-and-traditional-noodle-packet-labeled-Miso-Samurai-Bowl-Th.webp',
			'https://i.postimg.cc/qvYNtfZ1/DALL-E-2025-03-04-22-13-14-A-realistic-photograph-of-a-steaming-bowl-of-Miso-Samurai-Bowl-ramen-T.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Indulge in serene satisfaction with Teardrop Delight noodles, where dewdrops of freshness captured in every veggie grant you culinary poetry.'
			},
			{
				lang: 'es',
				description:
					'Deléitate con la serena satisfacción de Teardrop Delight noodles, donde gotas de frescura en cada verdura te regalan una poesía culinaria.'
			},
			{
				lang: 'it',
				description:
					'Concediti il piacere sereno dei Teardrop Delight noodles, dove ogni goccia di freschezza in ogni verdura regala una poesia culinaria.'
			}
		]
	},
	{
		id: '47',
		name: 'Scorching Sunflower',
		category: 'Spicy',
		handle: 'scorching-sunflower',
		price: 6.59,
		availableStock: 17,
		images: [
			'https://i.postimg.cc/3Jt4T0j5/DALL-E-2025-03-04-22-13-20-A-bold-and-intense-noodle-packet-labeled-Wasabi-Inferno-Ramen-The-pa.webp',
			'https://i.postimg.cc/8PpJ9m6m/DALL-E-2025-03-04-22-13-22-A-realistic-photograph-of-a-steaming-bowl-of-Wasabi-Inferno-Ramen-The.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Let the Scorching Sunflower noodles warm you with its solar flares of spice, fueled by the brilliant intensity of hot peppers and fragrant herbs.'
			},
			{
				lang: 'es',
				description:
					'Deja que los Scorching Sunflower noodles te calienten con sus erupciones solares de especias, impulsadas por la intensa fuerza de pimientos picantes y hierbas aromáticas.'
			},
			{
				lang: 'it',
				description:
					"Lasciati riscaldare dai Scorching Sunflower noodles, con le loro esplosioni solari di spezie, alimentate dall'intensa forza dei peperoncini e delle erbe profumate."
			}
		]
	},
	{
		id: '48',
		name: 'Siren’s Call',
		category: 'Seafood',
		handle: 'sirens-call',
		price: 7.19,
		availableStock: 200,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					"Answer Siren's Call with these enchanting noodles, where lavish seafood notes beckon you to delight in a savory embrace under ocean’s spell."
			},
			{
				lang: 'es',
				description:
					"Responde al llamado de Siren's Call con estos encantadores noodles, donde ricas notas de mariscos te invitan a disfrutar de un abrazo sabroso bajo el hechizo del océano."
			},
			{
				lang: 'it',
				description:
					'Rispondi al richiamo di Siren’s Call con questi noodles incantevoli, dove le ricche note di frutti di mare ti invitano a lasciarti avvolgere da un abbraccio saporito sotto l’incantesimo del mare.'
			}
		]
	},
	{
		id: '49',
		name: 'Caribbean Coconut',
		category: 'Curry',
		handle: 'caribbean-coconut',
		price: 6.89,
		availableStock: 67,
		images: [
			'https://i.postimg.cc/pT3Ck1TC/DALL-E-2025-03-05-09-21-04-A-vibrant-and-rich-noodle-packet-labeled-Honey-Butter-Ramen-The-pack.webp',
			'https://i.postimg.cc/T2WChG74/DALL-E-2025-03-05-09-21-06-A-realistic-photograph-of-a-steaming-bowl-of-Honey-Butter-Ramen-The-di.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Escape to paradise with Caribbean Coconut noodles, infusing creamy coconut milk and tantalizing spices with the essence of a sun-kissed Caribbean breeze.'
			},
			{
				lang: 'es',
				description:
					'Escapa al paraíso con Caribbean Coconut noodles, que infusionan leche de coco cremosa y especias tentadoras con la esencia de una brisa caribeña bañada por el sol.'
			},
			{
				lang: 'it',
				description:
					'Fuggi verso il paradiso con i Caribbean Coconut noodles, che infondono latte di cocco cremoso e spezie invitanti con l’essenza di una brezza caraibica baciata dal sole.'
			}
		]
	},
	{
		id: '50',
		name: 'Scarlet Blaze',
		category: 'Spicy',
		handle: 'scarlet-blaze',
		price: 7.29,
		availableStock: 4,
		images: [
			'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
			'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
		],
		descriptions: [
			{
				lang: 'en',
				description:
					'Set your senses aflame with Scarlet Blaze noodles, exuding an aura of intensity and warmth that challenges your taste buds to bask in red-hot fervor.'
			},
			{
				lang: 'es',
				description:
					'Enciende tus sentidos con Scarlet Blaze noodles, que irradian una intensidad y calidez que retan a tu paladar a deleitarse en un fervor ardiente.'
			},
			{
				lang: 'it',
				description:
					'Accendi i tuoi sensi con i Scarlet Blaze noodles, che emanano un’aura intensa e calda, sfidando il tuo palato a immergersi in un fervore infuocato.'
			}
		]
	}
];

export default mockProductData;
