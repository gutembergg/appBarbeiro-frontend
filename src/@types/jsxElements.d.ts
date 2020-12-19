declare namespace JSX {
  interface ElementAttributesProperty {
    props: {
      onChange: IntrinsicAttributes;
    }; // specify the property name to use
  }
}

declare namespace JSX {
  interface IntrinsicAttributes {
    keyboardHidesTabBar?: boolean;
  }
}
