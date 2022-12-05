import React from "react";

const Page = ({ data, data2 }) => {
  return (
    <div>
      <div>
        <div>
          <img
            src={data.avatar_url}
            alt="vivekphoto"
            width={150}
            height={150}
          />
          <h3>name : {data.name}</h3>
          <h4>login : {data.login}</h4>
          <h3>{data.bio}</h3>
          <div>
            <button>Resume</button>
          </div>
          <div>
            <h3>Javascipt ,React JS, HTML, CSS</h3>
          </div>
          <div>
            <h3>MASAI SCHOOL</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  let response = await fetch("https://api.github.com/users/VivekJawale");
  let data = await response.json();
  let response2 = await fetch(
    "https://api.github.com/search/repositories?q=user:VivekJawale+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let data2 = await response2.json();

  return {
    props: { data, data2 },
  };
}

export default Page;
