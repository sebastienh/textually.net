# Properties 

Currently, Stylo supports the following properties:

- [color](/stylo/documentation/css#css-color-property)
- [background-color](/stylo/documentation/css#css-background-color-property)
- [font-size](/stylo/documentation/css#css-font-size-property)
- [font-family](/stylo/documentation/css#css-font-family-property)
- [font-weight](/stylo/documentation/css#css-font-weight-property)
- [font-style](/stylo/documentation/css#css-font-style-property)
- [text-decoration-style](/stylo/documentation/css#css-text-decoration-style-property)
- [text-decoration-line](/stylo/documentation/css#css-text-decoration-line-property)
- [text-decoration-color](/stylo/documentation/css#css-text-decoration-color-property)

A property declaration takes the following general form:

CSS:

``` css
<property name>: <property value>;
```

To define a property, we must enter the property name, followed by a colon (':'), followed by the property value and, finally, end the declaration with a semicolon. 

It is possible to add the qualifier "!important" after the value of a property in order to increase its priority compared to the other values ​​assigned to this property (see [_Priority rules_](/stylo/documentation/css#priority-rules)). Here is an example that uses "!important":

CSS:

``` css
body {
    color: red! important;
}
```