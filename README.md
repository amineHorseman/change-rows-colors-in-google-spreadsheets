# Change rows colors in google spreadsheets

A plugin to automatically change lines colors in a google spreasheet after update or form submission, if a certain column contains a certain value.

# Description

ChangeRowColors is a google form/spreadsheet plugin that change the background color of each line when you insert or update it (manually or after a form submission)

The plugin will check a certain column and check its value, then apply a choosen background color to the line according the to column's value. This helps to visually separate between the lines, which is helpful for long todo lists, form submissions, stock inventories...ect.

![Example](examples/example_todo_list.gif)

For existing documents that have already some content, the plugin can check all the lines of the document inserted before and apply the color formating:

![Example](examples/example_parse_all_rows.gif)


# How to use

After installing and activating the plugin, a new menu is created for the plugin settings:


## I. Automatically change line colors:
1. Open the settings panel from the plugin's menu (Add-ons > ChangeRowsColor > Setting).

    A window will appear letting you specify some settings:

    ![Example](examples/example_settings_window.jpg)

- Formating rules: let you specify which `color` to apply to the lines containing the specified `value`.
In case none of these values are found in the `watching column`, the `defaultColor` will be applied. 
- Watching column: the number of the column that the plugin will check to look for the matching values.
- Number of columns: the number of columns in each line that will be colorized.
- Ignore case sensitivity: if checked, the plugin will consider uppercase and lowercase characters as similar.

2. At each modification or line insertion (including incoming form answers), the plugin will automatically check the `watchingColumn`'s value and apply the corresponding color.

Note: You can use color names (red, cyan, green...) or hexadecimal codes (#ff02a3..) in the settings panel.


## II. Parse all document and change line colors:

You can force the plugin to check all the lines and check the color formating by cliking on the `Parse all rows` button in the plugin's menu.
 
This operation is useful if you installed the plugin in an already filled spreadsheet, but may take few moments depending of the size of the document.

![Example](examples/example_parse_all_rows.gif)


# How to install for users

If you just want to use the plugin:
1. Open your google spreadsheet or create one in your google drive
2. Open `Get add-ons` from `Add-ons` menu (Add-ons > Get add-ons)
3. In the search bar type `Change Rows Color`
4. Install the plugin (click `Free` button) and accept the request access 

Note: We do not use, collect, send or store your data, we don't even have access to it :p 


# How to install for developers

Follow these instruction if you want to change the code and test your modifications:
1. Open your google spreadsheet or create one in your google drive
2. Open the spreadsheet script editor from the menu (Tools > Script Editor)
3. Create a new project
4. Create a script file
5. Copy the content of the script from this repository to the file you created in your Spreadsheet script editor
6. Repeat 4 and 5 for every .gs and .html file in this repository (make sure the .html files have the same name as in this repository)
7. Execute the function `OnInstall()` in the `ConfigDialogBox.gs` script to make sure the document properties and menus are created


# Feedback / Ratings

Help us increasing the visibility of the plugin by rating the plugin in the the Google Adds-on catalog or in the Chrome Web Store.

Your feedback is highly important to help us improve the plugin. Do not hesitate to write your feedback comments in the Chrome Web Store and report any bug in the [issues section of this repository](https://github.com/amineHorseman/change-rows-colors-in-google-spreadsheets/issues).


# Contributing

Some ideas for interessted contributors:
- Change the design of the plugin settings window
- Improve the documentation (Rephrase, copywrite, translate, include more examples)
- Add conditional rules (if value greater/lower than a value)?
- Add style formating rules (change text color, font & size)?
- Add multiple watching columns feature?

Feel free to add or suggest more ideas.
