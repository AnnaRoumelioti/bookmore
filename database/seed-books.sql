
/* FICTION */

INSERT INTO books (
    title,
    isbn,
    description,
    price,
    publication_year,
    book_language,
    format,
    stock_quantity,
    cover_image_url,
    publisher_id
)
VALUES

/* Angela Carter */
(
'The Bloody Chamber and Other Stories',
'9781784878689',
'A celebrated collection of dark, imaginative retellings of classic fairy tales exploring power, desire and identity.',
14.99,
2018,
'English',
'Paperback',
20,
'images/books/bloody-chamber-and-other-stories.jpg',
(SELECT id FROM publishers WHERE name='Vintage Classics')
),

/* Henry David Thoreau */
(
'Walden: Life in the Woods',
'9781423646792',
'Henry David Thoreau''s timeless reflections on simple living, nature and self-reliance.',
18.99,
2017,
'English',
'Hardcover',
15,
'images/books/walden-life-in-the-woods-life.jpg',
(SELECT id FROM publishers WHERE name='Gibbs M. Smith Inc')
),

/* Thomas Hardy */ 
(
'Tess of the d''Urbervilles',
'9780141040332',
'Thomas Hardy''s tragic masterpiece following Tess as she struggles against fate and Victorian society.',
10.99,
2003,
'English',
'Paperback',
18,
'images/books/tess-of-the-d-urbervilles.jpg',
(SELECT id FROM publishers WHERE name='Penguin Classics')
),

/* Charles Dickens */
(
'Great Expectations',
'9780141198897',
'Charles Dickens'' coming-of-age classic about ambition, love and redemption.',
9.99,
2012,
'English',
'Paperback',
25,
'images/books/great-expectations.jpg',
(SELECT id FROM publishers WHERE name='Penguin Classics')
),

/* Imani Thompson */
(
'Honey',
'9780008759773',
'A contemporary coming-of-age novel exploring identity, family and belonging.',
16.99,
2025,
'English',
'Paperback',
20,
'images/books/honey.jpg',
(SELECT id FROM publishers WHERE name='Farshore')
),

/* Richard Osman */
(
'The Impossible Fortune',
'9781405975735',
'The latest mystery featuring the Thursday Murder Club, filled with humour, suspense and unforgettable characters.',
22.99,
2025,
'English',
'Hardcover',
15,
'images/books/impossible-fortune.jpg',
(SELECT id FROM publishers WHERE name='Penguin Classics')
),

/* Asako Yuzuki */
(
'Hooked',
'9780008753832',
'A gripping literary novel inspired by Japanese folklore and contemporary life.',
17.99,
2025,
'English',
'Hardcover',
15,
'images/books/hooked.jpg',
(SELECT id FROM publishers WHERE name='Fourth Estate Ltd')
),

/* Claire North */
(
'Slow Gods',
'9780356526201',
'A sweeping space opera exploring humanity, technology and distant civilizations.',
22.99,
2025,
'English',
'Hardcover',
15,
'images/books/slow-gods.jpg',
(SELECT id FROM publishers WHERE name='Orbit')
),

/* Andy Weir */
(
'The Martian',
'9781785031137',
'An astronaut stranded on Mars must rely on science and ingenuity to survive.',
10.99,
2014,
'English',
'Paperback',
25,
'images/books/martian.jpg',
(SELECT id FROM publishers WHERE name='Del Rey')
),

/* Bram Stoker */ 
(
'Dracula',
'9781914602948',
'Bram Stoker''s legendary Gothic horror novel introducing one of literature''s most enduring vampires.',
20.00,
2023,
'English',
'Hardcover',
18,
'images/books/dracula.jpg',
(SELECT id FROM publishers WHERE name='Chiltern Publishing')
);



/* NON-FICTION */


INSERT INTO books (
    title,
    isbn,
    description,
    price,
    publication_year,
    book_language,
    format,
    stock_quantity,
    cover_image_url,
    publisher_id
)
VALUES 

/* Morgan Housel */
(
    'The Psychology of Money',
    '9780857197689',
    'A bestselling exploration of how behaviour, emotions and decision-making shape financial success more than technical knowledge or intelligence.',
    14.99,
    2020,
    'English',
    'Paperback',
    20,
    'images/books/psychology-of-money.jpg',
    (SELECT id FROM publishers WHERE name='Harriman House Publishing')
),

/* Nora Ephron */
 (
    'Heartburn',
    '9780349010359',
    'Nora Ephron''s witty semi-autobiographical novel blending humour, relationships and personal resilience into a timeless modern classic.',
    10.99,
    2023,
    'English',
    'Paperback',
    18,
    'images/books/heartburn.jpg',
    (SELECT id FROM publishers WHERE name='Virago Press Ltd')
),

/* Frank McDonough */
 (
    'The Hitler Years: Holocaust',
    '9781035912483',
    'An extensively researched account of the Holocaust during the Nazi era, examining policies, events and the human impact of one of history''s darkest periods.',
    30.00,
    2024,
    'English',
    'Hardcover',
    12,
    'images/books/hitler-years-holocaust.jpg',
    (SELECT id FROM publishers WHERE name='Apollo')
),

/* Elif Shafak */
 (
    'How to Stay Sane in an Age of Division',
    '9781788165723',
    'A thoughtful manifesto encouraging empathy, critical thinking and hope during times of political and social division.',
    9.99,
    2020,
    'English',
    'Paperback',
    20,
    'images/books/how-to-stay-sane.jpg',
    (SELECT id FROM publishers WHERE name='Wellcome Collection')
),

/* John, Ph.D. O'Donohue */
 (
    'Anam Cara: Spiritual Wisdom from the Celtic World',
    '9781804992548',
    'A reflective exploration of Celtic spirituality, friendship and personal growth through timeless wisdom and poetic storytelling.',
    16.99,
    2024,
    'English',
    'Paperback',
    15,
    'images/books/anam-cara.jpg',
    (SELECT id FROM publishers WHERE name='Penguin Business')
),

/* Mariana Oliver */
 (
    'Migratory Birds',
    '9781945492525',
    'A thoughtful exploration of migration, borders and identity, combining personal narrative with social and political reflection.',
    17.99,
    2020,
    'English',
    'Paperback',
    15,
    'images/books/migratory-birds.jpg',
    (SELECT id FROM publishers WHERE name='Transit Books')
),

/* Dalia Gebrial */
 (
    'Decolonising the University',
    '9780745338200',
    'An important collection examining higher education through the perspectives of race, equality and decolonisation.',
    21.99,
    2018,
    'English',
    'Paperback',
    12,
    'images/books/decolonising-the-university.jpg',
    (SELECT id FROM publishers WHERE name='Pluto Press')
),

/* Patricia Gregory */
 (
    'Breaking the Grass Ceiling: The History of the Women''s Football Association',
    '9781803996202',
    'The fascinating history of the Women''s Football Association and the pioneers who helped shape the modern women''s game.',
    18.99,
    2024,
    'English',
    'Paperback',
    12,
    'images/books/breaking-the-grass-ceiling.jpg',
    (SELECT id FROM publishers WHERE name='The History Press Ltd')
),

/* Dalia Gebrial */
 (
    'Football She Wrote: An Anthology of Women''s Writing on the Game',
    '9781838030025',
    'A diverse anthology celebrating women''s voices, experiences and perspectives on football from writers across the sport.',
    16.99,
    2024,
    'English',
    'Paperback',
    15,
    'images/books/football-she-wrote.jpg',
    (SELECT id FROM publishers WHERE name='Floodlit Dreams Ltd')
),

/* David Sedaris */
 (
    'The Land and Its People',
    '9781408714126',
    'David Sedaris reflects on travel, culture and everyday life with his signature wit, humour and sharp observations.',
    22.99,
    2025,
    'English',
    'Hardcover',
    10,
    'images/books/land-and-its-people.jpg',
    (SELECT id FROM publishers WHERE name='Abacus')
);



 /* Children's Literature Books */

INSERT INTO books (
    title,
    isbn,
    description,
    price,
    publication_year,
    book_language,
    format,
    stock_quantity,
    cover_image_url,
    publisher_id
)
VALUES

/* Robert Macfarlane */
 (
    'Firefly',
    '9781917044523',
    'A beautifully illustrated picture book celebrating the mystery and wonder of the natural world after dark, encouraging children to explore nature with curiosity and imagination.',
    16.99,
    2024,
    'English',
    'Hardcover',
    15,
    'images/books/firefly.jpg',
    (SELECT id FROM publishers WHERE name='Magic Cat Publishing')
),

/* S F Layzell */ 
(
    'Cottonopolis',
    '9781915179395',
    'An exciting middle-grade adventure combining mystery, friendship and history in a richly imagined industrial city.',
    9.99,
    2025,
    'English',
    'Paperback',
    20,
    'images/books/cottonopolis.jpg',
    (SELECT id FROM publishers WHERE name='Northodox Press')
),


/* Elle McNicoll */
 (
    'Keedie',
    '9781913311988',
    'A heartfelt novel exploring friendship, family and neurodiversity through memorable characters and an inspiring story.',
    8.99,
    2024,
    'English',
    'Paperback',
    18,
    'images/books/keedie.jpg',
    (SELECT id FROM publishers WHERE name='Knights Of Media')
),

/* Alex Latimer */
 (
    'Gordon: The Meanest Goose on Earth',
    '9780192788658',
    'A humorous picture book about kindness, friendship and learning that everyone deserves a second chance.',
    7.99,
    2025,
    'English',
    'Paperback',
    20,
    'images/books/gordon-goose.jpg',
    (SELECT id FROM publishers WHERE name='Oxford University Press')
),

/* Linda Papadopoulos */
 (
    'A Buffalo Named Brave',
    '9780008762322',
    'A touching picture book helping young readers develop confidence, resilience and emotional wellbeing through an engaging animal story.',
    12.99,
    2025,
    'English',
    'Hardcover',
    15,
    'images/books/buffalo-named-brave.jpg',
    (SELECT id FROM publishers WHERE name='Farshore')
),

/* Yuval Zommer */
 (
    'The Big Book of Nature Art',
    '9780500652930',
    'An inspiring activity book filled with creative nature-based art projects that encourage children to explore the outdoors through drawing, painting and crafts.',
    18.99,
    2024,
    'English',
    'Hardcover',
    15,
    'images/books/big-book-of-nature-art.jpg',
    (SELECT id FROM publishers WHERE name='Thames & Hudson Ltd')
),


/* Julia Sarda */
 (
    'The Queen in the Cave',
    '9781406367430',
    'A beautifully illustrated picture book about courage, imagination and discovering the strength to face the unknown.',
    13.99,
    2023,
    'English',
    'Hardcover',
    15,
    'images/books/queen-in-the-cave.jpg',
    (SELECT id FROM publishers WHERE name='Walker Studio')
),

/* Naomi Jones */ 
(
    'How to Make a Story',
    '9780192779045',
    'A fun and imaginative picture book encouraging children to create their own stories while learning about storytelling and creativity.',
    7.99,
    2024,
    'English',
    'Paperback',
    20,
    'images/books/how-to-make-a-story.jpg',
    (SELECT id FROM publishers WHERE name='Oxford University Press')
),

/* Shannon Merenstein */
 (
    'Collage Workshop for Kids',
    '9781631595202',
    'A creative activity book introducing children to collage techniques through colourful projects inspired by the Eric Carle Museum.',
    19.99,
    2018,
    'English',
    'Paperback',
    12, 
    'images/books/collage-workshop-for-kids.jpg',
    (SELECT id FROM publishers WHERE name='Quarry Books')
),

/* Yuval Zommer */ 
 (
    'The Whale That Sings in the Deep',
    '9780192782656',
    'A beautifully illustrated story celebrating marine life, friendship and the importance of protecting our oceans.',
    14.99,
    2024,
    'English',
    'Hardcover',
    18,
    'images/books/whale-that-sings-in-the-deep.jpg',
    (SELECT id FROM publishers WHERE name='Oxford University Press')
);




/* Business Books */


INSERT INTO books (
    title,
    isbn,
    description,
    price,
    publication_year,
    book_language,
    format,
    stock_quantity,
    cover_image_url,
    publisher_id
)
VALUES 

/* Alastair Smith */
(
    'Life in the UK Test: Study Guide 2026',
    '9781907389986',
    'The official study guide designed to help candidates prepare for the British citizenship and Life in the UK test with clear explanations and practice material.',
    14.99,
    2025,
    'English',
    'Paperback',
    20,
    'images/books/life-in-the-uk-test-study-guide-2026.jpg',
    (SELECT id FROM publishers WHERE name='Red Squirrel Publishing')
),

/* David Leiter */
 (
    'Stop Making Stupid Investments',
    '9781394377657',
    'David Leiter explains how investors can avoid common financial mistakes, ignore market hype and build long-term wealth using practical investment principles.',
    24.99,
    2025,
    'English',
    'Hardcover',
    15,
    'images/books/stop-making-stupid-investments.jpg',
    (SELECT id FROM publishers WHERE name='John Wiley & Sons Inc')
),

/* Alice Ross */
 (
    'Investing to Save the Planet',
    '9780241457238',
    'A practical guide showing how personal investments can support environmental sustainability while building long-term financial returns.',
    15.99,
    2023,
    'English',
    'Paperback',
    18,
    'images/books/investing-to-save-the-planet.jpg',
    (SELECT id FROM publishers WHERE name='Penguin Business')
),

/* John C. Bogle */
 (
    'The Little Book of Common Sense Investing',
    '9781119404507',
    'John C. Bogle presents a straightforward investment strategy based on low-cost index funds and long-term investing for consistent financial success.',
    19.99,
    2017,
    'English',
    'Paperback',
    20,
    'images/books/the-little-book-of-common-sense-investing.jpg',
    (SELECT id FROM publishers WHERE name='John Wiley & Sons Inc')
),

/* Joe Wiggins */
 (
    'The Intelligent Fund Investor',
    '9780857198761',
    'Joe Wiggins explains how to evaluate investment funds, reduce costly mistakes and make better long-term investment decisions.',
    18.99,
    2024,
    'English',
    'Paperback',
    16,
    'images/books/the-intelligent-fund-investor.jpg',
    (SELECT id FROM publishers WHERE name='Harriman House Publishing')
),

/* Jen Sincero */
 (
    'You Are a Badass at Making Money',
    '9781473649569',
    'Jen Sincero shares practical advice and motivational strategies to help readers transform their mindset about money, overcome limiting beliefs and build lasting financial confidence.',
    14.99,
    2018,
    'English',
    'Paperback',
    20,
    'images/books/you-are-a-badass-at-making-money.jpg',
    (SELECT id FROM publishers WHERE name='John Murray One')
),


/* Napoleon Hill */
 (
    'Think and Grow Rich',
    '9781785042416',
    'One of the most influential personal finance classics, teaching timeless principles of success, wealth creation and personal achievement.',
    10.99,
    2018,
    'English',
    'Paperback',
    25,
    'images/books/think-and-grow-rich.jpg',
    (SELECT id FROM publishers WHERE name='Vermilion')
),

/* Corinne Low */
(
    'Femonomics',
    '9781399737609',
    'Corinne Low explores how economic thinking can improve everyday decision-making, careers and financial wellbeing while highlighting the role of data in achieving gender equality.',
    22.99,
    2025,
    'English',
    'Hardcover',
    12,
    'images/books/femonomics.jpg',
    (SELECT id FROM publishers WHERE name='Hodder & Stoughton')
),

/* Bryan A. Garner */
(
    'Black''s Law Dictionary (11th Edition)',
    '9781539229759',
    'The definitive legal dictionary trusted by lawyers, judges and students, containing thousands of legal definitions, terms and references.',
    59.99,
    2019,
    'English',
    'Hardcover',
    8,
    'images/books/blacks-law-dictionary.jpg',
    (SELECT id FROM publishers WHERE name='John Murray One')
),

/* Robert T. Kiyosaki */
 (
    'Rich Dad''s Guide to Investing',
    '9781612680217',
    'Robert T. Kiyosaki explains the investing principles used by wealthy individuals and provides practical guidance for building long-term financial independence.',
    16.99,
    2014,
    'English',
    'Paperback',
    18,
    'images/books/rich-dads-guide-to-investing.jpg',
    (SELECT id FROM publishers WHERE name='Plata Publishing')
);





/* Medicine Books */


INSERT INTO books (
    title,
    isbn,
    description,
    price,
    publication_year,
    book_language,
    format,
    stock_quantity,
    cover_image_url,
    publisher_id
)
VALUES 

/* Bill Bryson */
(
    'The Body: A Guide for Occupants',
    '9780857522405',
    'Bill Bryson explores the extraordinary human body with his trademark humour and curiosity, explaining how our bodies function through fascinating scientific discoveries.',
    14.99,
    2019,
    'English',
    'Paperback',
    20,
    'images/books/the-body-a-guide-for-occupants.jpg',
    (SELECT id FROM publishers WHERE name='Wellcome Collection')
),

/* Adam Kay */
(
    'This Is Going to Hurt',
    '9781509858637',
    'A bestselling memoir from former junior doctor Adam Kay, offering an honest, moving and often hilarious insight into life inside the NHS.',
    10.99,
    2018,
    'English',
    'Paperback',
    25,
    'images/books/this-is-going-to-hurt.jpg',
    (SELECT id FROM publishers WHERE name='Picador')
),

/* Dearbhla Kelly, Tim Raine, Peter Hateley */
 (
    'Oxford Handbook of Clinical Medicine',
    '9780198867609',
    'One of the most trusted medical reference books, providing concise guidance on clinical practice, diagnosis and patient care.',
    39.99,
    2023,
    'English',
    'Paperback',
    12,
    'images/books/oxford-handbook-of-clinical-medicine.jpg',
    (SELECT id FROM publishers WHERE name='Oxford University Press')
),

/* John S. Tregoning */
 (
    'Infectious: Pathogens and How We Fight Them',
    '9780861542314',
    'Professor John Tregoning explains how viruses, bacteria and the immune system interact, offering an accessible introduction to infectious diseases and vaccines.',
    16.99,
    2023,
    'English',
    'Paperback',
    15,
    'images/books/infectious-pathogens-and-how-we-fight-them.jpg',
    (SELECT id FROM publishers WHERE name='Hodder & Stoughton')
),

/* Andrew W. Hitchings */
 (
    'The Top 100 Drugs',
    '9780702081545',
    'A practical prescribing guide covering the most commonly used medicines, their clinical applications and safe prescribing principles.',
    34.99,
    2021,
    'English',
    'Paperback',
    10,
    'images/books/the-top-100-drugs.jpg',
    (SELECT id FROM publishers WHERE name='Thames & Hudson Ltd')
),

/* Marty Makary */
 (
    'Blind Spots',
    '9781637744178',
    'Dr. Marty Makary examines weaknesses within modern healthcare and proposes practical solutions to improve patient safety and medical decision-making.',
    19.99,
    2024,
    'English',
    'Hardcover',
    12,
    'images/books/blind-spots.jpg',
    (SELECT id FROM publishers WHERE name='Northodox Press')
),

/* Rahul Jandial */ 
 (
    'Life on a Knife''s Edge',
    '9780241488515',
    'Neurosurgeon Rahul Jandial shares remarkable stories from the operating theatre while exploring the science, ethics and humanity behind brain surgery.',
    15.99,
    2022,
    'English',
    'Paperback',
    18,
    'images/books/life-on-a-knifes-edge.jpg',
    (SELECT id FROM publishers WHERE name='Fourth Estate Ltd')
);




/* E-books */


INSERT INTO books (
    title,
    isbn,
    description,
    price,
    publication_year,
    book_language,
    format,
    stock_quantity,
    cover_image_url,
    publisher_id
)
VALUES

/* Adrian Tchaikovsky */
(
    'Dragonfly Falling',
    '9780230739581',
    'The second novel in Adrian Tchaikovsky''s acclaimed Shadows of the Apt fantasy series, continuing the epic war between empires with unforgettable characters and imaginative world-building.',
    8.99,
    2010,
    'English',
    'E-books',
    999,
    'images/books/dragonfly-falling.jpg',
    (SELECT id FROM publishers WHERE name='Tor')
),

/* Ian McEwan */
 (
    'What We Can Know',
    '9781529959215',
    'Ian McEwan explores science, truth and human understanding in a thought-provoking work examining the limits and possibilities of knowledge.',
    12.99,
    2025,
    'English',
    'E-books',
    999,
    'images/books/what-we-can-know.jpg',
    (SELECT id FROM publishers WHERE name='Vintage Digital')
),

/* Florence Knapp */
 (
    'The Names',
    '9781399624053',
    'Florence Knapp''s acclaimed debut novel explores identity, memory and family through beautifully written literary fiction.',
    11.99,
    2025,
    'English',
    'E-books',
    999,
    'images/books/the-names.jpg',
    (SELECT id FROM publishers WHERE name='Phoenix')
),

/* Natalie Haynes */
 (
    'No Friend to This House',
    '9781529061574',
    'Natalie Haynes retells a timeless Greek myth with wit, compassion and dramatic storytelling, bringing classical characters vividly to life.',
    10.99,
    2024,
    'English',
    'E-books',
    999,
    'images/books/no-friend-to-this-house.jpg',
    (SELECT id FROM publishers WHERE name='Mantle')
),

/* Map Men */
 (
    'This Way Up',
    '9780008710309',
    'Map Men explain the fascinating history of maps, cartography and geographical mistakes in an entertaining and informative exploration of how maps shape our understanding of the world.',
    11.99,
    2025,
    'English',
    'E-books',
    999,
    'images/books/this-way-up.jpg',
    (SELECT id FROM publishers WHERE name='Mudlark')
),

/* Claire Thomson */
 (
    'Tomato: 80 Recipes Celebrating the Extraordinary Tomato',
    '9781787137868',
    'Claire Thomson presents eighty creative recipes celebrating one of the world''s most versatile ingredients, from simple everyday meals to impressive seasonal dishes.',
    13.99,
    2025,
    'English',
    'E-books',
    999,
    'images/books/tomato-80-recipes.jpg',
    (SELECT id FROM publishers WHERE name='Quadrille')
),

/* Emily Henry */
 (
    'Book Lovers',
    '9780241995358',
    'Emily Henry''s bestselling romantic comedy follows two rivals whose unexpected holiday encounters challenge everything they thought they wanted from life and love.',
    9.99,
    2022,
    'English',
    'E-books',
    999,
    'images/books/book-lovers.jpg',
    (SELECT id FROM publishers WHERE name='Penguin Classics')
),

/* Marcia Hutchinson */
 (
    'The Mercy Step',
    '9781913175757',
    'Marcia Hutchinson tells a compelling story of resilience, justice and hope through memorable characters facing difficult personal and social challenges.',
    9.99,
    2024,
    'English',
    'E-books',
    999,
    'images/books/the-mercy-step.jpg',
    (SELECT id FROM publishers WHERE name='Floodlit Dreams Ltd')
),

/* Joseph O'Connor */ 
(
    'My Father''s House',
    '9781473560000',
    'Joseph O''Connor''s bestselling historical novel tells the remarkable true story of courage and resistance in Nazi-occupied Rome during the Second World War.',
    10.99,
    2023,
    'English',
    'E-books',
    999,
    'images/books/my-fathers-house.jpg',
    (SELECT id FROM publishers WHERE name='Vintage Digital')
);





/*  Comic Books */


INSERT INTO books (
    title,
    isbn,
    description,
    price,
    publication_year,
    book_language,
    format,
    stock_quantity,
    cover_image_url,
    publisher_id
)
VALUES 

/* Geoff Johns */
(
    'Infinite Crisis Omnibus (2020 Edition)',
    '9781779503442',
    'A massive collection of DC''s landmark Infinite Crisis event, bringing together Earth''s greatest heroes in an epic battle that reshaped the DC Universe.',
    125.00,
    2020,
    'English',
    'Hardcover',
    8,
    'images/books/infinite-crisis-omnibus.jpg',
    (SELECT id FROM publishers WHERE name='DC Comics')
),

/* Brad Meltzer */
(
    'Identity Crisis: 20th Anniversary Deluxe Edition',
    '9781779527493',
    'A modern DC Comics classic exploring mystery, loss and the hidden secrets of the Justice League.',
    39.99,
    2024,
    'English',
    'Hardcover',
    12,
    'images/books/identity-crisis-deluxe.jpg',
    (SELECT id FROM publishers WHERE name='DC Comics')
),


/* Joshua Williamson */
(
    'Knight Terrors Omnibus',
    '9781799501091',
    'Collecting the complete Knight Terrors crossover event featuring Batman, Superman and the DC Universe facing their darkest nightmares.',
    150.00,
    2025,
    'English',
    'Hardcover',
    6,
    'images/books/knight-terrors-omnibus.jpg',
    (SELECT id FROM publishers WHERE name='DC Comics')
),


/* Grant Morrison, Peter J. Tomasi, Scott Snyder */
 (
    'Dark Nights: Metal – Dark Knights Rising',
    '9781401277329',
    'The Dark Multiverse unleashes terrifying new versions of Batman in this companion volume to Dark Nights: Metal.',
    24.99,
    2018,
    'English',
    'Paperback',
    15,
    'images/books/dark-knights-rising.jpg',
    (SELECT id FROM publishers WHERE name='DC Comics')
),

/* Grant Morrison */
 (
    'The Absolute Multiversity',
    '9781779525994',
    'Grant Morrison''s ambitious exploration of the DC Multiverse presented in a deluxe Absolute Edition with oversized artwork.',
    110.00,
    2024,
    'English',
    'Hardcover',
    7,
    'images/books/the-absolute-multiversity.jpg',
    (SELECT id FROM publishers WHERE name='DC Comics')
),

/* Joe Casey */
 (
    'Ben 10 #2',
    '72513036343502011',
    'The second issue of the Ben 10 comic series featuring exciting adventures with Ben Tennyson and the Omnitrix.',
    4.99,
    2025,
    'English',
    'Comic',
    25,
    'images/books/ben-10-2.jpg',
    (SELECT id FROM publishers WHERE name='DYNAMITE Entertainment')
),

/* Pepe Larraz */
(
    'Marvel/DC: Spider-Man/Superman #1',
    '75960621395500111',
    'An exciting crossover bringing together Spider-Man and Superman in a story written by Brad Meltzer.',
    6.99,
    2025,
    'English',
    'Comic',
    30,
    'images/books/spiderman-superman-1.jpg',
    (SELECT id FROM publishers WHERE name='Marvel')
),

/* Scott Snyder */
 (
    'Absolute Batman #20',
    '76194138584602011',
    'Batman continues his fight against Gotham''s greatest threats in this latest issue of the acclaimed Absolute Batman series.',
    5.99,
    2025,
    'English',
    'Comic',
    40,
    'images/books/absolute-batman-20.jpg',
    (SELECT id FROM publishers WHERE name='DC Comics')
),

/* Delio Diaz */
 (
    'Avengers: Armageddon #1',
    '75960621563800111',
    'The Avengers face a devastating new threat in the opening chapter of Marvel''s Armageddon storyline.',
    5.99,
    2025,
    'English',
    'Comic',
    40,
    'images/books/avengers-armageddon-1.jpg',
    (SELECT id FROM publishers WHERE name='Marvel')
);




/* Programming Books */


INSERT INTO books (
    title,
    isbn,
    description,
    price,
    publication_year,
    book_language,
    format,
    stock_quantity,
    cover_image_url,
    publisher_id
)
VALUES 

(
    'Eloquent JavaScript (4th Edition)',
    '9781593279509',
    'A modern introduction to JavaScript covering programming fundamentals, browser development and advanced concepts through practical examples and exercises.',
    34.99,
    2024,
    'English',
    'Paperback',
    20,
    'images/books/eloquent-javascript-4th-edition.jpg',
    (SELECT id FROM publishers WHERE name='No Starch Press')
),

 (
    'Python Crash Course (3rd Edition)',
    '9781718502703',
    'A hands-on introduction to Python programming that guides beginners from the fundamentals to creating practical projects and applications.',
    39.99,
    2023,
    'English',
    'Paperback',
    18,
    'images/books/python-crash-course-3rd-edition.jpg',
    (SELECT id FROM publishers WHERE name='No Starch Press')
),

 (
    'Automate the Boring Stuff with Python (2nd Edition)',
    '9781593279929',
    'Learn Python by automating repetitive tasks including file management, spreadsheets, web scraping and everyday office work.',
    37.99,
    2020,
    'English',
    'Paperback',
    16,
    'images/books/automate-the-boring-stuff-with-python-2nd-edition.jpg',
    (SELECT id FROM publishers WHERE name='No Starch Press')
),

(
    'Clean Code',
    '9780132350884',
    'One of the most influential software engineering books ever written, teaching principles and best practices for writing readable, maintainable and professional code.',
    44.99,
    2008,
    'English',
    'Paperback',
    25,
    'images/books/clean-code.jpg',
    (SELECT id FROM publishers WHERE name='Pearson')
),

 (
    'JavaScript: The Definitive Guide (7th Edition)',
    '9781491952023',
    'A comprehensive reference covering the JavaScript language, modern web APIs and best practices for professional web development.',
    54.99,
    2020,
    'English',
    'Paperback',
    15,
    'images/books/javascript-the-definitive-guide-7th-edition.jpg',
    (SELECT id FROM publishers WHERE name='O''Reilly Media')
);