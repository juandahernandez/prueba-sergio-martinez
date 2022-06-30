import React, { createContext, useState } from "react";
import { listMembers } from "../helpers/listMembers";

const MemberListContext = createContext();

const MembersListProvider = ({ children }) => {
  const [list, setList] = useState(listMembers);

  const data = { list };
  return (
    <MemberListContext.Provider value={data}>
      {children}
    </MemberListContext.Provider>
  );
};
export { MembersListProvider };
export default MemberListContext;
