import type { Config } from "tailwindcss";

const safeColors=[
  //change color
    'Sushi',
    'Pelorous',
    'Shamrock',
    'Blue',
    'Potion',
    'Veronica',
    'Rajah',

  //bg colors
    "snowy-mint",
    "bisque",
    "mauve",
    "drover",
]

const config: Config = {
  safelist:[
    ...safeColors.map(color=>`bg-${color}`)
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm:"100vw",
      "tablet": '900px',
      "desktop": '1320px',
    },
    container:{
      padding:{
        sm: "16px",
        "tablet":"24px",
        "desktop":"0"
      },
      center:true,

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-primary": "#eb6d20",
        "main-white": "#fff",
        "main--middle-black": "#0b0b0b",
        "main-medium": "#5f5f5f",
        subtext: "#9a9a9a",
        "system-error": "#dd5e5e",
        "text--text": "#3e3e3e",
        "text--paragraph": "#292929",
        "base--gray-background": "#f5f6f8",

        //products cards colors
        'Sushi':'#7CB93E',
        'Pelorous':'#33ABC6',
        'Shamrock':'#1CCD8D',
        'Blue':'#3F65EA',
        'Potion':'#F74A69',
        'Veronica':'#A635EC',
        'Rajah':'#F9A85D',
        "snowy-mint": "#d3fbd9",
        "bisque": "#FFE4BD",
        "mauve": "#D9ABFD",
        "drover": "#FDF0AB",
      },
      
    },
    
  },
  plugins: [],
};
export default config;
