import React, { createContext, useState } from "react";

const TeamContext = createContext();

const infTeam = {
  team: [],
};

const TeamProvider = ({ children }) => {
  const [member, setMember] = useState(infTeam);

  const handleTeam = (id) => {
    if (member.team.length === 3) {
      alert("tu equipo esta lleno");
    }
    //  if (member.team.role ===){
    //   alert(`el ${role} ya hace parte de tu equipo`)
    //  }

    setMember({ ...member, team: [...member.team, id] });
  };

  const memberData = { member, handleTeam };

  return (
    <TeamContext.Provider value={memberData}>{children}</TeamContext.Provider>
  );
};
export { TeamProvider };
export default TeamContext;
