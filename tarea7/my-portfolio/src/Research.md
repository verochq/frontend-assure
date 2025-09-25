+ +  + Controlled vs Uncontrolled Components in ReactJS

+ Controlled components: 
-> Managed by react state (easier handling and validation, so easier to debug and consistent)
-> The component's state is stored in React component's state
It is usually use for: consistency, flexibilty, debugging, forms.

Features of controlled:

State Management: By the using React's useState hook or this.state in class components.
Data Flow: The input elements' values are set by the state.
Predictability: The component's behavior is predictable and consistent.
Real-Time Validation: Enables immediate validation and formatting of user input.
Single Source of Truth: The state serves as the single source of truth for the form data.

+ Uncontrolled components: 
-> Managed its own state

Feature of uncontrolled:

DOM-Managed State: Form data is handled by the DOM itself.
Use of Refs: Access to form values is achieved using React's useRef() or createRef() to reference DOM elements directly.
No State Management: Eliminates the need for state variables and event handlers for each input field.
Simpler Implementation: Suitable for simple forms or when integrating with non-React libraries.
Less Predictable: Less predictable behavior.
Manual Validation: Validation and formatting need to be handled manually.