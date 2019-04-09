# Attributes

An element can have multiple attributes. An attribute has a name and a value. The name of an attribute must always be separated from the element name by at least one space. The value of an attribute is defined by  the name of the attribute followed by the `=` sign and then the value itself enclosed in quotation marks (`"`). The value contains a list of one or more value (word) separated by one or more space. In the following example we define the attribute `valid` with a value `true` for the `h1` element:

HTML:

``` html
<h1 valid="true">title 1</h1>
```

Here is another example with a list of words: 

HTML:

``` html
<h1 authors="john marc">title 1</h1>
```

Two attributes names are reserved and have special meaning in HTML, `id` and `class`.
