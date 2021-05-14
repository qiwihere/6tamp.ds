import React from "react";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import MobilePageHeader from "./components/MobileOnly/PageHeader";
import MobilePageDescription from "./components/MobileOnly/PageDescription";
import MobileModalContent from "./components/MobileOnly/ModalContent";

const components = [
  {
    component: Button,
    name: "<Button>",
    children: "Test",
    props: [
      {
        name: "type",
        values: ["primary", "secondary", "flat"],
      },
      {
        name: "display",
        values: ["block", "inline"],
      },
      {
        name: "disabled",
        values: [true, false],
      },
    ],
  },
  {
    component: TextInput,
    name: "<TextInput>",
    props: [
      {
        name: "error",
        values: ["", "With error"],
      },
      {
        name: "placeholder",
        values: ["", "With placeholder"],
      },
    ],
  },
  {
    component: MobilePageHeader,
    name: "<MobilePageHeader>",
    children: "This is an example of header",
    props: [],
  },
  {
    component: MobilePageDescription,
    name: "<MobilePageDescription>",
    children: "This is an example of description",
    props: [],
  },
  {
    component: MobileModalContent,
    name: "<MobileModalContent>",
    children: (
      <>
        <div>Text1</div>
        <div>Text2Text2</div>
      </>
    ),
    props: [
      {
        name: "height",
        values: ["100px", "200px"],
      },
    ],
  },
];

export default components;
