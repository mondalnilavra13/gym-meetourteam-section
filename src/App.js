import React from "react";
import "./style.css";



const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Fitness Trainer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac volutpat arcu. Proin sit amet nulla id neque varius dapibus.',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg'
    },
    {
      name: 'Jane Doe',
      role: 'Nutritionist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac volutpat arcu. Proin sit amet nulla id neque varius dapibus.',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg'
    },
    {
      name: 'Jane Doe',
      role: 'Nutritionist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac volutpat arcu. Proin sit amet nulla id neque varius dapibus.',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg'
    },
    {
      name: 'Jane Doe',
      role: 'Nutritionist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac volutpat arcu. Proin sit amet nulla id neque varius dapibus.',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg'
    },
    // add more team members here
  ];

  return (
    <section className="team-section">
      <h2 className="team-section-title">Meet Our Team</h2>
      <div className="team-member-list">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.imageUrl} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
