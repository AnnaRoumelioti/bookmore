
/* Fiction - Book Categories */

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781784878689'),
    (SELECT id FROM categories WHERE name = 'Fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781423646792'),
    (SELECT id FROM categories WHERE name = 'Fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780141040332'),
    (SELECT id FROM categories WHERE name = 'Fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780141198897'),
    (SELECT id FROM categories WHERE name = 'Fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780008759773'),
    (SELECT id FROM categories WHERE name = 'Fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781405975735'),
    (SELECT id FROM categories WHERE name = 'Fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780008753832'),
    (SELECT id FROM categories WHERE name = 'Fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780356526201'),
    (SELECT id FROM categories WHERE name = 'Fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781785031137'),
    (SELECT id FROM categories WHERE name = 'Fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781914602948'),
    (SELECT id FROM categories WHERE name = 'Fiction')
);



/* Non-fiction - Book Categories */


INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780857197689'),
    (SELECT id FROM categories WHERE name = 'Non-fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780349010359'),
    (SELECT id FROM categories WHERE name = 'Non-fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781035912483'),
    (SELECT id FROM categories WHERE name = 'Non-fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781788165723'),
    (SELECT id FROM categories WHERE name = 'Non-fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781804992548'),
    (SELECT id FROM categories WHERE name = 'Non-fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781945492525'),
    (SELECT id FROM categories WHERE name = 'Non-fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780745338200'),
    (SELECT id FROM categories WHERE name = 'Non-fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781803996202'),
    (SELECT id FROM categories WHERE name = 'Non-fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781838030025'),
    (SELECT id FROM categories WHERE name = 'Non-fiction')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781408714126'),
    (SELECT id FROM categories WHERE name = 'Non-fiction')
);




/* Children's Literature - Book Categories */


INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781917044523'),
    (SELECT id FROM categories WHERE name = 'Children''s Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781915179395'),
    (SELECT id FROM categories WHERE name = 'Children''s Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781913311988'),
    (SELECT id FROM categories WHERE name = 'Children''s Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780192788658'),
    (SELECT id FROM categories WHERE name = 'Children''s Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780008762322'),
    (SELECT id FROM categories WHERE name = 'Children''s Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780500652930'),
    (SELECT id FROM categories WHERE name = 'Children''s Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781406367430'),
    (SELECT id FROM categories WHERE name = 'Children''s Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780192779045'),
    (SELECT id FROM categories WHERE name = 'Children''s Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781631595202'),
    (SELECT id FROM categories WHERE name = 'Children''s Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780192782656'),
    (SELECT id FROM categories WHERE name = 'Children''s Books')
);




/* Business Literature - Book Categories */


INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781907389986'),
    (SELECT id FROM categories WHERE name = 'Business')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781394377657'),
    (SELECT id FROM categories WHERE name = 'Business')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780241457238'),
    (SELECT id FROM categories WHERE name = 'Business')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781119404507'),
    (SELECT id FROM categories WHERE name = 'Business')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780857198761'),
    (SELECT id FROM categories WHERE name = 'Business')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781473649569'),
    (SELECT id FROM categories WHERE name = 'Business')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781785042416'),
    (SELECT id FROM categories WHERE name = 'Business')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781399737609'),
    (SELECT id FROM categories WHERE name = 'Business')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781539229759'),
    (SELECT id FROM categories WHERE name = 'Business')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781612680217'),
    (SELECT id FROM categories WHERE name = 'Business')
);





/* Medicine - Book Categories */


INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780857522405'),
    (SELECT id FROM categories WHERE name = 'Medicine')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781509858637'),
    (SELECT id FROM categories WHERE name = 'Medicine')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780198867609'),
    (SELECT id FROM categories WHERE name = 'Medicine')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780861542314'),
    (SELECT id FROM categories WHERE name = 'Medicine')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780702081545'),
    (SELECT id FROM categories WHERE name = 'Medicine')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781637744178'),
    (SELECT id FROM categories WHERE name = 'Medicine')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780241488515'),
    (SELECT id FROM categories WHERE name = 'Medicine')
);




/* eBooks - Book Categories */


INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780230739581'),
    (SELECT id FROM categories WHERE name = 'E-books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781529959215'),
    (SELECT id FROM categories WHERE name = 'E-books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781399624053'),
    (SELECT id FROM categories WHERE name = 'E-books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781529061574'),
    (SELECT id FROM categories WHERE name = 'E-books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780008710309'),
    (SELECT id FROM categories WHERE name = 'E-books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781787137868'),
    (SELECT id FROM categories WHERE name = 'E-books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9780241995358'),
    (SELECT id FROM categories WHERE name = 'E-books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781913175757'),
    (SELECT id FROM categories WHERE name = 'E-books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781473560000'),
    (SELECT id FROM categories WHERE name = 'E-books')
);





/* Comic Books - Book Categories */


INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781779503442'),
    (SELECT id FROM categories WHERE name = 'Comic Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781779527493'),
    (SELECT id FROM categories WHERE name = 'Comic Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781799501091'),
    (SELECT id FROM categories WHERE name = 'Comic Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781401277329'),
    (SELECT id FROM categories WHERE name = 'Comic Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '9781779525994'),
    (SELECT id FROM categories WHERE name = 'Comic Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '72513036343502011'),
    (SELECT id FROM categories WHERE name = 'Comic Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '75960621395500111'),
    (SELECT id FROM categories WHERE name = 'Comic Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '76194138584602011'),
    (SELECT id FROM categories WHERE name = 'Comic Books')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn = '75960621563800111'),
    (SELECT id FROM categories WHERE name = 'Comic Books')
);




/* Programming Books - Categories */


INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn='9781593279509'),
    (SELECT id FROM categories WHERE name='Programming')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn='9781718502703'),
    (SELECT id FROM categories WHERE name='Programming')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn='9781593279929'),
    (SELECT id FROM categories WHERE name='Programming')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn='9780132350884'),
    (SELECT id FROM categories WHERE name='Programming')
);

INSERT INTO book_categories (book_id, category_id)
VALUES (
    (SELECT id FROM books WHERE isbn='9781491952023'),
    (SELECT id FROM categories WHERE name='Programming')
);