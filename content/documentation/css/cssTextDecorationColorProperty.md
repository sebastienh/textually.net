# text-decoration-color

This property is also used in conjunction with the property `text-decoration-line` and allows to assign a color to the line decorations.

Formal definition: <code>text-decoration-color: [color](/stylo/documentation/css#css-property-values-color) | [initial](/stylo/documentation/css#css-property-values-initial) 
| [inherit](/stylo/documentation/css#css-property-values-inherit);</code>

For example, to decorate the `h1` elements with a red double line, we could use the following CSS:

CSS:

``` css 
h1 {
    text-decoration-line: underline; 
    text-decoration-style: double;
    text-decoration-color: red; 
}
``` 