import React from "react";
import Post from "./people";
const ironMan = "https://klike.net/uploads/posts/2022-05/1652790137_3.jpg";
const team = "https://klike.net/uploads/posts/2019-02/1550992713_2.jpg";
const tanos = "https://klike.net/uploads/posts/2019-02/1550992813_22.jpeg";

const App = () => {
    return (
        <div>
            <Post
                author={{
                    name: "Iron Man",
                    photo: ironMan,
                    nickname: "@Litle",
                }}
                content="This is my team, they are the best, I respect you a lot"
                image={team}
                date={new Date().toDateString()}
            />
            <Post
                author={{
                    name: "Tanos",
                    photo: tanos,
                    nickname: "@Big-Star",
                }}
                content="I will destroy you all"
                image={team}
                date={new Date().toDateString()}
            />
        </div>
    );
};

export default App;
