// import tick from "../../../assets/svg/tick.svg"

// export const WiatechData = [
//     [
//         {
//             label: "we’ve 10+ Years of Experience in Tech Services",
//             content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ."
//         }
//     ],
//     [
//         {
//             svg: tick,
//             decp: "Professinal Team Member"
//         },
//         {
//             svg: tick,
//             decp: "Awards Winning IT Solutions Company"
//         },
//         {
//             svg: tick,
//             decp: "Dedicated Tech Services"
//         },
//     ]
// ]

import tick from "../../../assets/svg/tick.svg";

type WiatechDescription = {
  label: string;
  content: string;
};

type WiatechListItem = {
  svg: string;
  decp: string;
};

export const WiatechData: [WiatechDescription[], WiatechListItem[]] = [
  [
    {
      label: "we’ve 10+ Years of Experience in Tech Services",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex .",
    },
  ],
  [
    {
      svg: tick,
      decp: "Professional Team Member",
    },
    {
      svg: tick,
      decp: "Award-Winning IT Solutions Company",
    },
    {
      svg: tick,
      decp: "Dedicated Tech Services",
    },
  ],
];
