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
  ],

  business: [
    {
      title: "Profile",
      classname: "-filled",
      type: "simple",
      size: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dignissim mauris, ornare semper lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed lacus id velit malesuada posuere non eu enim. Proin aliquet, nibh et ornare vehicula, nulla nisi ultrices sapien, id facilisis enim ligula quis dolor. Nulla facilisi. Etiam facilisis enim ut tellus varius efficitur. Donec ut libero magna. Donec vel ligula viverra ve  condimentum pellentesque. Pellentesque blandit, ex imperdiet viverra interdum, nulla ante venenatis nisi, sit amet sollicitudin risus velit at augue. Vestibulum tempus semper nisl vitae rhoncus. In hac habitasse platea dictumst.",
      data: []
    },
    {
      title: "Skills",
      classname: "",
      type: "simple",
      size: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dignissim mauris, ornare semper lorem.",
      data: []
    },
    {
      title: "Work Experience",
      classname: "-filled",
      type: "timeline",
      size: 12,
      description: "",
      data: [
        {
          year: "2011",
          title: "Vinco Orbis",
          subtitle: "Desarrollador frontend",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dignissim mauris, ornare semper lorem."
        },
        {
          year: "2011",
          title: "Otro",
          subtitle: "Desarrollador frontend",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dignissim mauris, ornare semper lorem."
        }
      ]
    },
    {
      title: "Education",
      classname: "-filled",
      type: "timeline",
      size: 12,
      description: "",
      data: [
        {
          year: "2011",
          title: "Instituto Politécnico",
          subtitle: "Desarrollador frontend",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dignissim mauris, ornare semper lorem."
        },
        {
          year: "2011",
          title: "Otro",
          subtitle: "Desarrollador frontend",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dignissim mauris, ornare semper lorem."
        }
      ]
    }
  ]
};

export default ProfileData;
