import Button from "./components/Button";
import TextInput from "./components/TextInput";
import MobilePageHeader from "./components/MobileOnly/PageHeader";
import MobilePageDescription from "./components/MobileOnly/PageDescription";


const components = [
    {
        component: Button,
        name: "<Button>",
        children: "Test",
        props: [
            {
                name: 'type',
                values: [
                    "primary",
                    "secondary",
                    "flat"
                ]
            },
            {
                name: 'display',
                values: [
                    'block',
                    'inline'
                ]
            },
            {
                name: 'disabled',
                values: [
                    true,
                    false
                ]
            }
        ]
    },
    {
        component: TextInput,
        name: "<TextInput>",
        props: [
            {
                name: "error",
                values: [
                    "",
                    "With error"
                ]
            },
            {
                name: "placeholder",
                values: [
                    "",
                    "With placeholder"
                ]
            }
        ]
    },
    {
        component: MobilePageHeader,
        name: "<MobilePageHeader>",
        children: "This is an example of header",
        props: []
    },
    {
        component: MobilePageDescription,
        name: "<MobilePageDescription>",
        children: "This is an example of description",
        props: []
    }
]

export default components