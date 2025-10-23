import React from "react";
import MemberCard from "./MemberCard";
import "./FamilyTree.css";

export default function FamilyTree({ members }) {
  // Recursive function to render each member and their children
  const renderMember = (member) => (
    <div className="member-block" key={member.id}>
      <div className="connector-line vertical"></div>
      <MemberCard member={member} />

      {member.children && member.children.length > 0 && (
        <div className="children">
          <div className="connector-line horizontal"></div>
          <div className="generation">
            {member.children.map((child) => renderMember(child))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="family-tree">
      {members.map((member) => renderMember(member))}
    </div>
  );
}
