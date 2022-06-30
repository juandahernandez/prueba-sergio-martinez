import React, { useContext } from "react";
import TeamContext from "../context/TeamContext";
import "./SingleMember.css";
const SingleMember = ({ name, img, role, id }) => {
  const { handleTeam, member } = useContext(TeamContext);
  return (
    <div className="member-card">
      <p>name: {name}</p>
      <img src={img} alt={name} />
      <p>role: {role}</p>
      <button
        onClick={() => handleTeam(id)}
        disabled={member.team.some((idList) => idList === id)}
      >
        {member.team.some((idList) => idList === id)
          ? "add in team"
          : " add to team"}
      </button>
    </div>
  );
};

export default SingleMember;
