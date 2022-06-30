import React, { useContext } from "react";
import Navbar from "../views/Navbar";
import MemberListContext from "../context/MembersListContext";
import SingleMember from "./SingleMember";

const Home = () => {
  const { list } = useContext(MemberListContext);
  return (
    <div>
      <Navbar />
      {list &&
        list.map((member) => (
          <SingleMember
            key={member.id}
            name={member.name}
            img={member.img}
            role={member.role}
            id={member.id}
          />
        ))}
    </div>
  );
};

export default Home;
