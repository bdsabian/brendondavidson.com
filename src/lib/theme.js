export const colors = {
  skyBlue: "#1098F7",
  darkBlue: "#0D5D94",
  navy: "#072F4A",
  roma: "#987268",
  orange: "#E0692C",
  burntOrange: "#AD4C20",
  lightGray: "#F6F6F6",
  darkGray: "#444444",
  white: "#FFFFFF",
  black: "#000000"
};

export default {
  /***** Page Sections *****/
  about: {
    backgroundColor: colors.skyBlue,
    color: colors.white
  },
  code: {
    backgroundColor: colors.navy,
    color: colors.white
  },
  contact: {
    backgroundColor: colors.lightGray,
    color: colors.black
  },
  footer: {
    backgroundColor: colors.navy,
    color: colors.white
  },
  intro: {
    helloText: {
      backgroundColor: colors.orange,
      color: colors.white
    },
    subHeading: {
      backgroundColor: colors.burntOrange,
      color: colors.white
    },
    tagLine: {
      backgroundColor: colors.roma,
      color: colors.white
    }
  },
  projects: {
    backgroundColor: colors.white,
    downloadButton: {
      borderColor: colors.darkBlue,
      color: colors.darkBlue
    },
    overlay: {
      backgroundColor: "rgba(81,144,166,0.9)",
      color: colors.white
    }
  },
  quote: {
    backgroundColor: colors.darkBlue,
    color: colors.white
  },
  skills: {
    backgroundColor: colors.white,
    iconBackgroundColor: colors.skyBlue
  },

  /***** Components *****/
  carousel: {
    buttonBackgroundColor: colors.black,
    buttonTextColor: colors.white
  },
  form: {
    submitButtonBackgroundColor: colors.skyBlue
  }
};
