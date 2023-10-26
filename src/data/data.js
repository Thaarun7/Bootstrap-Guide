import bootstrap5 from "../assert/bootstrap-5-templates.jpg"
import importingFile from '../assert/maxresdefault.jpg'
import typography from '../assert/Screenshot_1.png'
import utilities from '../assert/Screenshot_2.jpg'
import grid from '../assert/Screenshot_3.jpg'
import customize from '../assert/create-bootstrap-template.jpg'

export const data = [
  {
    id: 1,
    title: "What is bootstrap",
    details:
      "Bootstrap is a front-end library simplifying web development through responsive design, pre-styled components, and a powerful grid system.",
    images: bootstrap5,
  },

  {
    id: 2,
    title: "Importing bootstrap in Project",
    details:
      "To import Bootstrap into your project, you can use a CDN link or install it via npm and import it into your files.",
    images: importingFile,
  },
  {
    id: 3,
    title: "Forms and Typography",
    details:
      "Forms in Bootstrap simplify form building with various input styles. Typography options offer easy text formatting and styling customization",
    images: typography,
  },
  {
    id: 4,
    title: "Utilities in Bootstrap",
    details:
      "Bootstrap utilities enable quick and efficient application of various styles such as margin, padding, text alignment, and more.",
    images: utilities,
  },
  {
    id: 5,
    title: "Grid System in bootstrap",
    details:
      "Bootstrap's grid system allows for the creation of responsive layouts by dividing the screen into 12 columns for flexible arrangement.",
  images:grid},
  {
    id: 6,
    title: "Customize in bootstrap",
    details:
      "Bootstrap's customization features include theming options, the ability to modify variables, and the option to override default styles easily.",
    images: customize,
  },
];