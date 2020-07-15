
# Tags Tools

## Tag Tool panel

The _Tags Tools_ panel shows all the controls to manage files tags in Stylo/Nodio. A tag is a representation of a [Markdown attribute](/nodio/documentation/markdown#mdAttributes) in the form of a token. Markdown attributes are defined in the source text files using the syntax defined in the documentation for [Markdown attributes](/nodio/documentation/markdown#mdAttributes).  

The _Tags Tools_ panel shows all the attributes values defined in the currently selected _Editors Pane_. 

The tags are selectable and when some tags are selected the _editors pane_ will change the display mode to _tags highlight mode_. In this mode, the text parts attributed with the [Markdown attributes](/nodio/documentation/markdown#mdAttributes) represented by the selected tags will become highlighted making them easily identifiable from their context. The visual form that the highlight might take is style dependant.     

The _Tags Tools_ also allow to navigate through the selected tags using the _Tags Tools's Tools Bar_'s _Previous_ and _Next_ buttons temporarly higlighthing the text attributed with the target tag revealing it among the text attributed with the other selected tags.

### Display modes   
[Markdown attributes](/nodio/documentation/markdown#mdAttributes) can be displayed two ways: in _Values_ and in _Attributes_ mode. 

#### Attributes 

In _Attributes_ display mode, the attributes are displayed with their keys, all values for each key being displayed in its own dedicated section.       

This means that if we have defined two tags like: 

```
{.revised}
Tagged text.
```

and:

```
{status=revised}
Another tagged text.
```

In the  _Tags Tools_  panel, the first tag will be shown under the `class` section and the second will be shown under the `status` section. 

#### Values

In _Values_ display mode, only the values of the attributes are shown in the tags list. All attributes with a same value will be represented using only one tag even if they come from different attributes _key_. Using the previous example, in _Values_ display mode, they will both be shown with the `revised` tag in the  _Tags Tools_  panel.
         
{.actions}
### Actions 

#### Open/Close _Tags Tools_

To open the _Tags Tools_ panel:

- From the _Project Tools Sidebar_: Mouse over the left side of the window, the _Project Tools Sidebar_ should appear. Click on the tags symbol. 

- To hide the _Tags Tools_ panel:

- From the _Project Tools Sidebar_: Click on the tags symbol. The tags panel should collapse. 

- From the menu: go to `View` -> `Hide Project Tools`

- From the keyboard: use `⌥⌘1`

{.toptoolsbar}
 ## Tags Tools's Tools Bar
 
The _Tags Tool's Tools Bar_ is located at the top of the _Tags Tools_ panel. 

At the left, it contains the _Select All_ and a _Unselect All_ buttons that allows to select or unselect all tags displayed in the _Tags Tools_ panel. 

At the right, it contains the _Previous_ and _Next_ tags navigation buttons that allows to _navigate_ in the text parts that are _attributed_ using the Markdown attributes represented by the selected tags.

### Actions 

#### Select all tags 

To select all tags: 

- From the _Tags Tool's Tools Bar_: Click on _Select All_ button on the top left. 

- From the menu: go to `Tags` -> `Select All`

- From the keyboard: use `⌃⌘A`


#### Unselect all tags 

To unselect all tags: 

- From the _Tags Tool's Tools Bar_: Click on _Unselect All_ button on the top left, right after _Select All_ button. 

- From the menu: go to `Tags` -> `Unselect All`

- From the keyboard: use `⌃⌘U`


#### Navigate to previous

To navigate to the previous selected tag's _attributed_ text part instance: 

- From the _Tags Tool's Tools Bar_: Click on _Previous_ button on the top right, right before _Next_ button. 

- From the menu: go to `Tags` -> `Go to Previous`

- From the keyboard: use `⌃⌘↑`

#### Navigate to next 

To navigate to the next selected tag's _attributed_ text part instance: 

- From the _Tags Tool's Tools Bar_: Click on _Next_ button on the top right, right after _Previous_ button. 

- From the menu: go to `Tags` -> `Go to Next`

- From the keyboard: use `⌃⌘↓`


{.bottomtoolsbar}
 ## Tags Tools's Bottom Bar

The _Tags Tool's Bottom Bar_ is located at the bottom of the _Tags Tools_ panel. 

At the left, it displays the _filter active_ indicator which takes the system current accent color when the filter is active (when the filter text is not empty).

In the center, there is the _tags filter text field_ which allows to enter a string that will be used to filter the tags values and only show the ones that _contains_ the specified filtering string. 

The _Attribute Display Mode Selector_ button is located at the right of the _Tags Tool's Bottom Bar_. It allows to select the [attributes display mode](#attributesDisplayMode): _Values_ or _Attributes_.

### Actions

#### Filter text 

To filter tags enter any string value in the _tags filter text field_. 

#### Remove filtering

To remove the tags filter delete the string value in the _tags filter text field_. 

#### Set `Values` Tags Display Mode 

To set the `Values` display mode: 

- From the _Tags Tool's Bottom Bar_: Click on _Attribute Display Mode Selector_ button and select the `Values` mode. 

- *From the menu: go to `Tags` -> `Filtering Mode` -> `Values`

*Note: this option is only available if the _Tags Tools_ panel is visible. 


#### Set `Attributes` Tags Display Mode 

To set the `Attributes` display mode: 

- From the _Tags Tool's Bottom Bar_: Click on _Attribute Display Mode Selector_ button and select the `Attributes` mode. 

- *From the menu: go to `Tags` -> `Filtering Mode` -> `Attributes`

*Note: this option is only available if the _Tags Tools_ panel is visible. 







