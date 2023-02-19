# React easy modale

## Description

react-easy-modale is a simple React component that allows you to add a customizable modal window to your React application.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install React Easy Modale in your project, you can use NPM:

```
npm i react-easy-modale

```

## Usage

To use EasyModale in your React project, you need to import it into your component and use it as a regular React component. Here's an example:

```

import EasyModale from "react-easy-modale/dist/components/EasyModale";
import { useState } from "react";


function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={showModal}>Show Modal</button>
      <EasyModale
        isOpen={isModalOpen}
        closeModal={hideModal}
        text="This is the modal content."
      />
    </div>
  );
}


```

In the example above, we're importing the EasyModale component from the easymodale module, and using it inside a parent component. The isOpen prop determines whether the modal is visible or hidden, and the closeModal function is used to hide the modal when the user clicks on the close button.

You can customize the appearance and behavior of the modal by passing additional props to the EasyModale component. Here are some of the available props:

## Customizable properties

The following properties can be used to customize the EasyModale component:

- `isOpen` (boolean): Determines whether the modal is currently open or not.

- `closeModal` (function): A callback function that is executed when the user clicks on the close button.

- `text` (string): The text to be displayed inside the modal.

- `animated1` (boolean): Determines whether the text inside the modal should be animated to appear.

- `animated2` (boolean): Determines whether the text inside the modal should be animated as if it is being typed.

- `animated3` (boolean): Determines whether the text inside the modal should be animated to scroll from left to right.

- `modalBackgroundColor` (string): The background color of the modal.

- `modalBorder` (string): The CSS border property of the modal.

- `modalBorderRadius` (string): The CSS border-radius property of the modal.

- `modalPadding` (string): The padding inside the modal.

- `modalWidth` (string): The width of the modal.

- `modalHeight` (string): The height of the modal.

- `modaleStyle` (object): An object containing additional styles to be applied to the modal.

- `textColor` (string): The color of the text inside the modal.

- `fontFamily` (string): The font family of the text inside the modal.

- `fontSize` (string): The font size of the text inside the modal.

- `fontWeight` (string): The font weight of the text inside the modal.

- `lineHeight` (string): The line height of the text inside the modal.

- `textStyle` (object): An object containing additional styles to be applied to the text inside the modal.

## Contributing

Not yet available

## License

Not yet avalaible

Conclusion
With ReactEasyModale, you can easily create customizable and animated modals for your React project. Just import the EasyModale component and use it as a regular React component with your preferred props.
