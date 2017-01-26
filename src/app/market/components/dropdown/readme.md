### Dropdown properties
- `isOpen` (`?boolean=false`) - if `true` dropdown will be opened
- `autoClose` (`?string='nonInput'`) - behaviour vary:
    * `nonInput` - (default) automatically closes the dropdown when any of its elements is clicked — as long as the clicked element is not an `input` or a `textarea`.
    * `always` - automatically closes the dropdown when any of its elements is clicked
    * `outsideClick` - closes the dropdown automatically only when the user clicks any element outside the dropdown
    * `disabled` - disables the auto close. You can then control the open/close status of the dropdown manually, by using `is-open`. Please notice that the dropdown will still close if the toggle is clicked, the `esc` key is pressed or another dropdown is open
- `keyboardNav` (`?boolean=false`) - if `true` will enable navigation of dropdown list elements with the arrow keys
- `appendToBody` (*not yet tested*) (`?boolean=false`) - if `true` `dropdownMenu` content will be appended to the body. This is useful when the dropdown button is inside a div with `overflow: hidden`, and the menu would otherwise be hidden

### Dropdown events
- `onToggle` - fired when `dropdown` toggles, `$event:boolean` equals dropdown `isOpen` state

### Dropdown toggle properties
- `isDisabled` (`?boolean=false`) - if `true` dropdown toggle will be disabled
- `addToggleClass` (`?boolean=false`) - if `true` the `dropdown-toggle` class will be added to the element
