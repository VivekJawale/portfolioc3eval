import React from "react";

const Page = ({ data }) => {
  return (
    <div className="projectgrid">
      <h1>Projects</h1>
      <div>
        {data.items.map((e) => {
          return (
            <div className="project" key={e.node_id}>
              <h3>{e.name}</h3>
              <p>{e.description}</p>
              <p> {e.stargazers_count}</p>
              <p> {e.forks}</p>
              <p>{e.language}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  let response = await fetch(
    "https://api.github.com/search/repositories?q=user:VivekJawale+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let data = await response.json();

  return {
    props: { data },
  };
}

export default Page;
