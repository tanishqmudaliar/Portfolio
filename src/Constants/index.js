import javascript from '../Assets/javascript.png';
import css from '../Assets/css.png';
import html from '../Assets/html.png';
import cprog from '../Assets/cprogram.png';
import asm from '../Assets/asm.png';
import reactjs from '../Assets/reactjs.png';
import tailwind from '../Assets/tailwind.png';
import threejs from '../Assets/threejs.svg';
import kicad from '../Assets/kicad.png';
import mic from '../Assets/8051.png';
import arduino from '../Assets/arduino.png';
import stem from '../Assets/stem32.png';
import embc from '../Assets/embeddedc.png';

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C Program",
    icon: cprog,
  },
];

const technologies1 = [
  {
    name: 'PCB Designing',
    icon: kicad,
  },
  {
    name: '8051 Microcontrollers',
    icon: mic,
  },
  {
    name: 'Arduino',
    icon: arduino,
  },
  {
    name: 'Stem 32',
    icon: stem,
  },
  {
    name: "Assembly Language",
    icon: asm,
  },
  {
    name: 'Embedded Systems',
    icon: embc,
  },
];

const labels = [
  {
    name: 'Web Development'
  },
  {
    name: 'UI/UX Designing'
  },
  {
    name: 'PCB Designing'
  },
  {
    name: 'Microcontroller Programming'
  },
  {
    name: 'Binge Watching a series'
  },
];

const data = {
  labels: ['Web Development', 'UI/UX Designing', 'PCB Designing', 'Microcontroller Programming', 'Binge Watching a series'],
  datasets: [
    {
      label: 'Experience %',
      data: [35, 20, 20, 15, 10],
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

export { technologies, technologies1, labels, data };