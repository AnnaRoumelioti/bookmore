
/* Fiction - Book Authors */

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781784878689'),
    (SELECT id FROM authors WHERE slug = 'angela-carter')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781423646792'),
    (SELECT id FROM authors WHERE slug = 'henry-david-thoreau')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780141040332'),
    (SELECT id FROM authors WHERE slug = 'thomas-hardy')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780141198897'),
    (SELECT id FROM authors WHERE slug = 'charles-dickens')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780008759773'),
    (SELECT id FROM authors WHERE slug = 'imani-thompson')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781405975735'),
    (SELECT id FROM authors WHERE slug = 'richard-osman')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780008753832'),
    (SELECT id FROM authors WHERE slug = 'asako-yuzuki')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780356526201'),
    (SELECT id FROM authors WHERE slug = 'claire-north')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781785031137'),
    (SELECT id FROM authors WHERE slug = 'andy-weir')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781914602948'),
    (SELECT id FROM authors WHERE slug = 'bram-stoker')
);


/* Non-fiction - Book Authors */


INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780857197689'),
    (SELECT id FROM authors WHERE slug = 'morgan-housel')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780349010359'),
    (SELECT id FROM authors WHERE slug = 'nora-ephron')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781035912483'),
    (SELECT id FROM authors WHERE slug = 'frank-mcdonough')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781788165723'),
    (SELECT id FROM authors WHERE slug = 'elif-shafak')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781804992548'),
    (SELECT id FROM authors WHERE slug = 'john-odonohue')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781945492525'),
    (SELECT id FROM authors WHERE slug = 'mariana-oliver')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780745338200'),
    (SELECT id FROM authors WHERE slug = 'dalia-gebrial')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781803996202'),
    (SELECT id FROM authors WHERE slug = 'patricia-gregory')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781838030025'),
    (SELECT id FROM authors WHERE slug = 'dalia-gebrial')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781408714126'),
    (SELECT id FROM authors WHERE slug = 'david-sedaris')
);





/* Children's Literature - Book Authors */


INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781917044523'),
    (SELECT id FROM authors WHERE slug = 'robert-macfarlane')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781915179395'),
    (SELECT id FROM authors WHERE slug = 's-f-layzell')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781913311988'),
    (SELECT id FROM authors WHERE slug = 'elle-mcnicoll')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780192788658'),
    (SELECT id FROM authors WHERE slug = 'alex-latimer')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780008762322'),
    (SELECT id FROM authors WHERE slug = 'linda-papadopoulos')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780500652930'),
    (SELECT id FROM authors WHERE slug = 'yuval-zommer')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781406367430'),
    (SELECT id FROM authors WHERE slug = 'julia-sarda')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780192779045'),
    (SELECT id FROM authors WHERE slug = 'naomi-jones')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781631595202'),
    (SELECT id FROM authors WHERE slug = 'shannon-merenstein')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780192782656'),
    (SELECT id FROM authors WHERE slug = 'yuval-zommer')
);




/* Business Literature - Book Authors */


INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781907389986'),
    (SELECT id FROM authors WHERE slug = 'alastair-smith')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781394377657'),
    (SELECT id FROM authors WHERE slug = 'david-leiter')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780241457238'),
    (SELECT id FROM authors WHERE slug = 'alice-ross')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781119404507'),
    (SELECT id FROM authors WHERE slug = 'john-c-bogle')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780857198761'),
    (SELECT id FROM authors WHERE slug = 'joe-wiggins')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781473649569'),
    (SELECT id FROM authors WHERE slug = 'jen-sincero')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781785042416'),
    (SELECT id FROM authors WHERE slug = 'napoleon-hill')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781399737609'),
    (SELECT id FROM authors WHERE slug = 'corinne-low')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781539229759'),
    (SELECT id FROM authors WHERE slug = 'bryan-a-garner')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781612680217'),
    (SELECT id FROM authors WHERE slug = 'robert-t-kiyosaki')
);




/* Medicine - Book Authors */


INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780857522405'),
    (SELECT id FROM authors WHERE slug = 'bill-bryson')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781509858637'),
    (SELECT id FROM authors WHERE slug = 'adam-kay')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780198867609'),
    (SELECT id FROM authors WHERE slug = 'dearbhla-kelly')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780198867609'),
    (SELECT id FROM authors WHERE slug = 'tim-raine')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780198867609'),
    (SELECT id FROM authors WHERE slug = 'peter-hateley')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780198867609'),
    (SELECT id FROM authors WHERE slug = 'kate-wiles')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780198867609'),
    (SELECT id FROM authors WHERE slug = 'ian-b-wilkinson')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780198867609'),
    (SELECT id FROM authors WHERE slug = 'iain-mcgurgan')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780861542314'),
    (SELECT id FROM authors WHERE slug = 'john-s-tregoning')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780702081545'),
    (SELECT id FROM authors WHERE slug = 'andrew-w-hitchings')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781637744178'),
    (SELECT id FROM authors WHERE slug = 'marty-makary')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780241488515'),
    (SELECT id FROM authors WHERE slug = 'rahul-jandial')
);





/* eBooks - Book Authors */


INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780230739581'),
    (SELECT id FROM authors WHERE slug = 'adrian-tchaikovsky')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781529959215'),
    (SELECT id FROM authors WHERE slug = 'ian-mcewan')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781399624053'),
    (SELECT id FROM authors WHERE slug = 'florence-knapp')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781529061574'),
    (SELECT id FROM authors WHERE slug = 'natalie-haynes')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780008710309'),
    (SELECT id FROM authors WHERE slug = 'map-men')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781787137868'),
    (SELECT id FROM authors WHERE slug = 'claire-thomson')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780241995358'),
    (SELECT id FROM authors WHERE slug = 'emily-henry')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781913175757'),
    (SELECT id FROM authors WHERE slug = 'marcia-hutchinson')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781473560000'),
    (SELECT id FROM authors WHERE slug = 'joseph-oconnor')
);





-- Comic Books - Book Authors


INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781779503442'),
    (SELECT id FROM authors WHERE slug = 'geoff-johns')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781779527493'),
    (SELECT id FROM authors WHERE slug = 'brad-meltzer')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781799501091'),
    (SELECT id FROM authors WHERE slug = 'joshua-williamson')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781401277329'),
    (SELECT id FROM authors WHERE slug = 'scott-snyder')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781401277329'),
    (SELECT id FROM authors WHERE slug = 'peter-j-tomasi')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781401277329'),
    (SELECT id FROM authors WHERE slug = 'grant-morrison')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781779525994'),
    (SELECT id FROM authors WHERE slug = 'grant-morrison')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '72513036343502011'),
    (SELECT id FROM authors WHERE slug = 'joe-casey')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '75960621395500111'),
    (SELECT id FROM authors WHERE slug = 'pepe-larraz')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '76194138584602011'),
    (SELECT id FROM authors WHERE slug = 'scott-snyder')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '75960621563800111'),
    (SELECT id FROM authors WHERE slug = 'delio-diaz')
);




/* Programming Books - Book Authors */


INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn='9781593279509'),
    (SELECT id FROM authors WHERE slug='marijn-haverbeke')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn='9781718502703'),
    (SELECT id FROM authors WHERE slug='eric-matthes')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn='9781593279929'),
    (SELECT id FROM authors WHERE slug='al-sweigart')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn='9780132350884'),
    (SELECT id FROM authors WHERE slug='robert-c-martin')
);

INSERT INTO book_authors (book_id, author_id)
VALUES (
    (SELECT id FROM books WHERE isbn='9781491952023'),
    (SELECT id FROM authors WHERE slug='david-flanagan')
);