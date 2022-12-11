export type BlogPost = {
  id: string;
  title: string;
  lead: string;
  post: string;
  date: number;
  authorID: string;
  tag: "Beginners" | "Fitness & Mobility" | "Technique";
  picture: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "0",
    title: "20 Pro Tips EVERY Climber should know",
    lead: "Qui delectus quis qui nostrum doloremque ad consequatur architecto. Sit galisum minus ea doloribus nihil qui numquam laboriosam. Est inventore quia et rerum sunt non maiores cupiditate eum quia tempore et consectetur quis est quam autem ut minus officiis.",
    post: "<p>Lorem ipsum dolor sit amet. Aut consequatur reiciendis qui illum eligendi et ipsam vero ut odio illo ut beatae tenetur aut sint molestiae. Ad esse cupiditate ut aspernatur odio et repudiandae sequi vel possimus odio ex consectetur voluptatem sit aspernatur accusantium.</p><p>Eum autem expedita id rerum dolorem ut placeat consequatur sed tenetur deleniti eum rerum galisum 33 illo doloribus non provident fugiat. Ut nulla corrupti qui aliquam excepturi cum dolorem incidunt At quisquam aspernatur sed vitae maiores id placeat reprehenderit rem expedita inventore. Ut explicabo ratione ea praesentium aspernatur sit deleniti animi qui dolores fuga ut internos obcaecati. At quae ducimus ut eius dolor qui labore optio ut alias nobis ea quod alias.</p></p><p>Aut earum magnam eos accusantium corrupti in libero sunt qui earum labore qui reiciendis eaque eos similique maiores ut adipisci mollitia. Cum veniam doloribus hic quisquam quasi in autem vitae ut distinctio quas sed expedita dolores et rerum illo rem velit harum!",
    date: 1670624287,
    authorID: "0",
    tag: "Beginners",
    picture: "",
  },
];
