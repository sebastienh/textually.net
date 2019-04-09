# font-size

The `font-size` property allows to assign a size to a font. 

Formal definition: <code>font-size: <a href="/stylo/documentation/css#css-properties-font-size-absolute">medium</a> 
| <a href="/stylo/documentation/css#css-properties-font-size-absolute">xx-small</a> 
| <a href="/stylo/documentation/css#css-properties-font-size-absolute">x-small</a> 
| <a href="/stylo/documentation/css#css-properties-font-size-absolute">small</a> 
| <a href="/stylo/documentation/css#css-properties-font-size-absolute">large</a> 
| <a href="/stylo/documentation/css#css-properties-font-size-absolute">x-large</a> 
| <a href="/stylo/documentation/css#css-properties-font-size-absolute">xx-large</a> 
| <a href="/stylo/documentation/css#css-properties-font-size-relative">smaller</a> 
| <a href="/stylo/documentation/css#css-properties-font-size-relative">larger</a> 
| <a href="/stylo/documentation/css#css-property-values-length">length</a> 
| <a href="/stylo/documentation/css#css-properties-font-size-percentage">%</a> 
| <a href="/stylo/documentation/css#css-property-values-initial">initial</a> 
| <a href="/stylo/documentation/css#css-property-values-inherit">inherit</a>;</code>

## Keywords

<h3 id="css-properties-font-size-absolute">Absolute</h3>

All these sizes are based on the `medium` size which is set to 16px in Stylo.

| Keyword | Value |
| ----- | ------ |
| xx-small | 9.6px |
| x-small | 12px |
| medium | 16 px |
| wide | 19.2px |
| x-large | 24px |
| xx-large | 32px |

<h3 id="css-properties-font-size-relative">Relative</h3>

The size is based on the size of the parent element.

| Keyword | Value |
| ----- | ------ |
| smaller | 2/3 of the inherited value |
| larger | 3/2 of the inherited value |


<h2 id="css-properties-font-size-percentage">Percentage</h2>


A percentage value, calculated from the value for `font-size` property from the parent element, for example:

CSS:

``` css
body {
    font-size: 16px;
}
h1 {
    font-size: 80%;
}
```


In the following document:

HTML:

``` html
<!doctype html>
<html>
    <body>
        <h1>Title 1</h1>
    </body>
</html>
```

The font size of the `h1` element  would be 12.8px (0.8 x 16px = 12.8px).

_Note_: It is suggested to use the relative sizes in that they adapt to all devices and the design will be more "portable". 