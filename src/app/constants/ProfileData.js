/* ---------------------------------------------------------
* This contains a json file with all my profile data
------------------------------------------------------------ */

const ProfileData = {
  presentation: [
    {
      title: "Personal information",
      type: "list",
      items: [
        { title: "Birth", description: "23-06-1993", icon: "fa-birthday-cake" },
        { title: "Nacionality", description: "Mexican", icon: "fa-flag" }
      ]
    },
    {
      title: "Contact",
      type: "list",
      items: [
        {
          title: "Email",
          description: "aggarreola@gmail.com",
          icon: "fa-envelope"
        },
        {
          title: "Github",
          description: "@alegabo93",
          icon: "fa-github",
          link: "https://github.com/alegabo93"
        },
        {
          title: "LinkedIn",
          description: "in/aggarreola",
          icon: "fa-linkedin-square",
          link: "https://mx.linkedin.com/in/aggarreola"
        }
      ]
    },
    {
      title: "Professional Skills",
      type: "list",
      items: [
        { description: "Communication" },
        { description: "Teamwork" },
        { description: "Time Managment" },
        { description: "Leadership" },
        { description: "Flexibility" }
      ]
    }
  ]
};

export default ProfileData;
