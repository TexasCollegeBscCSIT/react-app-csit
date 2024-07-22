const people = [
  {
    name: "Rohan Shreshta",
    role: "Fullstack Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQEd4WgVaUX8Jg/profile-displayphoto-shrink_200_200/0/1709307661564?e=1727308800&v=beta&t=G1mtByI1gMEX6PnQG57x_ii3EkBcDkz0Py9hzV5A-UM",
    link: "https://www.linkedin.com/in/rohan-shrestha07/",
  },
  {
    name: "Deepesh Sunuwar",
    role: "DBA/Backend/Fontend",
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQEBB3hnTksLvg/profile-displayphoto-shrink_800_800/0/1718269561668?e=1727308800&v=beta&t=tBcTZVoZ49x8a_JXUzo1IR_p3nD6XN3aGL4-fOQB7cA",
    link: "https://www.linkedin.com/in/deepeshsunuwar/",
  },
  {
    name: "Nishan Dhakal",
    role: "Backend Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/121103713?v=4",
    link: "https://www.linkedin.com/in/nishandhakal023/",
  },
  {
    name: "Amit Niraula",
    role: "Backend Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQFwJ9Prj8Wrow/profile-displayphoto-shrink_800_800/0/1718308063170?e=1727308800&v=beta&t=XdpNIH8kmk-YwEFEKy0Umlp8cH5bG3xIXSMCFpTP3tQ",
    link: "https://www.linkedin.com/in/theamitniraula/",
  },
  {
    name: "Subodh Nepal",
    role: "Ctrl+C Ctrl+V Developer",
    imageUrl: "./src/assets/devin.png",
    link: "",
  },
  {
    name: "Kushal Kharel",
    role: "Frontend Developer",
    imageUrl: "./src/assets/kushal.jpg",
    link: "",
  },
  {
    name: "Tulsi Sharma",
    role: "Frontend Developer",
    imageUrl: "",
    link: "",
  },
  {
    name: "Srizma Poudel",
    role: "Frontend Developer",
    imageUrl: "",
    link: "",
  },
  {
    name: "Sushmita Ghimire",
    role: "Frontend Developer",
    imageUrl: "",
    link: "",
  },
];

export default function TeamList() {
  return (
    <div className="bg-white h-full pb-20">
      <img
        className="h-96 w-96 mx-auto"
        src="./src/assets/teamwork.png"
        alt="Team work photo"
      />
      <div className="grid grid-flow-row mx-5 py-10 ">
        <div className="flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl text-black font-bold tracking-tight uppercase">
              Meet our <span className=" text-red-600">Team</span>
            </h1>
            <p className="mt-6 text-lg px-20 leading-8 italic text-gray-600">
              Our team is composed of a diverse group of skilled developers
              dedicated to creating innovative and efficient solutions. We bring
              together expertise in fullstack development, backend, frontend,
              and database management, allowing us to handle a wide range of
              projects with proficiency and precision.
            </p>
          </div>
        </div>
        <ul role="list" className="grid gap-1 ml-5 gap-y-12 sm:grid-cols-4">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6 ml-10 mt-16">
                <img
                  alt="Team Member Name"
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <a target="_blank" href={person.link}>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                  </a>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
