import React from "react";
import { motion } from "framer-motion";
import "./MemberCard.css";

const colors = {
  Male: "#6EC1E4",
  Female: "#F78FB3",
  Other: "#A78BFA",
};

export default function MemberCard({ member }) {
  return (
    <motion.div
      className="member-card"
      whileHover={{ scale: 1.05 }}
      style={{
        borderColor: colors[member.gender] || "#ccc",
        background: "white",
      }}
    >
      <h3>{member.name}</h3>
      <p>⚧️ {member.gender}</p>
      <p>🎂 {member.dob}</p>
    </motion.div>
  );
}
