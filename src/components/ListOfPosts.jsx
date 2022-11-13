import Post from "./Post";
const ironMan = "https://klike.net/uploads/posts/2022-05/1652790137_3.jpg";
const team = "https://klike.net/uploads/posts/2019-02/1550992713_2.jpg";
const tanos = "https://klike.net/uploads/posts/2019-02/1550992813_22.jpeg";
const ListOfPosts = [
    {
        name: "Iron Man",
        photo: ironMan,
        nickname: "@Litle",
        content: "This is my team, they are the best, I respect you a lot",
        image: team,
        date: new Date().toDateString(),
    },
    {
        name: "Tanos",
        photo: tanos,
        nickname: "@Big-Star",
        content: "I will destroy you all",
        image: team,
        date: new Date().toDateString(),
    },
    {
        name: "Petya",
        photo: tanos,
        nickname: "@Petro",
        content: "ШОО сказав??",
        image: team,
        date: new Date().toDateString(),
    },
];
debugger;
let GetListOfPosts = ListOfPosts.map((post, index) => {
    return <Post key={`${post}${index}`} name={post.name} photo={post.photo} nickname={post.nickname} content={post.content} image={post.image} date={post.date} />;
});
export default GetListOfPosts;
