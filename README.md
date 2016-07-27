# InputfieldFileFilter
Add a text box for searching through the list of files to ProcessWire's InputfieldFile

## Status

Alpha release, use at your own risk

## Compatibility

Should work with PW Versions >= 2.6. Tested with 2.8.

## Description

This is a module for the ProcessWire CMS.

It adds a textbox on top of file input fields which allows you to perform a (jQuery based) live search through the names of the files attached to the field. Hides non-matching files and displays the numbers of visible / total files.

## Install

Download the repository as a zip file and extract the contained folder into site/modules. Klick "Modules" => "Refresh" in the PW backend, then "Install" next to the module. Open any page for editing that has a populated file inputfield attached and test.

## Screenshot

![Screenshot InputfieldFileFilter](https://bitpoet.github.io/img/screenshot-inputfieldfilefilter-1.png)

## ToDo

- optimize look&feel
- add option to choose which derived inputfield types can be filtered in module settings
- check that no issues arise through the hiding of file items
- filtering should not trigger "unsaved changes" warnings when leaving the page editor
- check behavior when frontend editing
- add configurable option to also filter description fields

