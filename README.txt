MITHAI BHANDAR
==============

A simple HTML + CSS + JavaScript pre-order website for an Indian sweets and snacks shop.

FILES
-----
- index.html  -> page structure
- style.css   -> design and responsive layout
- script.js   -> products, search, cart, checkout, and EmailJS
- README.txt  -> setup notes

EASY CODE EDITING
-----------------
All three code files contain section comments using:

<..!..>

Search for "<..!..>" in VS Code to quickly find the part you want to change.

PRODUCTS
--------
There are 42 products:
- 12 sweets
- 6 chocolates
- 10 snacks
- 4 cakes
- 4 dry-fruit items
- 6 special items

To change a product, open script.js and edit the product inside the PRODUCTS DATA section.

Each product has:
- id
- name
- category
- price
- unit
- emoji
- description

SEARCH
------
The menu search bar searches product names, categories, descriptions and units.

CART
----
The cart is saved using browser localStorage.

EMAILJS
-------
The existing EmailJS values are kept in script.js.

The EmailJS template should contain:
{{customer_name}}
{{customer_phone}}
{{pickup_date}}
{{pickup_time}}
{{order_id}}
{{order_items}}
{{order_total}}
{{customer_note}}
{{payment_note}}

PAYMENT
-------
This version does not take online payments.
Customers pay at the shop during collection.

RUNNING
-------
Open index.html in a browser.

For a smoother local-development experience, use VS Code with Live Server.
