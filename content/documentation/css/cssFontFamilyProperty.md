# font-family

The `font-family` property is used to specify the font of an element.

Formal definition: <code>font-family: family-name | <a href="#font-family-generic">generic-family</a> | [initial](/stylo/documentation/css#css-property-values-initial) | [inherit](/stylo/documentation/css#css-property-values-inherit);</code>

To set the value of this property, we should use a comma-separated, prioritized list of specific or generic font family names, or one of the "initial" or "inherit" values, used alone.

For example, to define a _Arial_ or _sans-serif_ font for the element `h1` we could use the following CSS:

CSS:

``` css
h1 {
    font-family: Arial, sans-serif;
}
```

<h2 id="font-family-generic">Generic font names</h2>

Here is the list of generic fonts:

| Generic font name |
| ------ |
|serif|
|sans-serif|
|cursive|
|fantasy|   
|monospace|
