import { Settings } from "frontity/types";

const settings: Settings = {
  "name": "links-web-frontend",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "LINKS Club",
      "description": "Help each other help the world."
    }
  },
  "packages": [
    {
      "name": "links-editorial",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
