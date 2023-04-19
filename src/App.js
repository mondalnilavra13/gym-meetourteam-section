import React from 'react';
import './style.css';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Fitness Trainer',
      bio: 'With years of experience in the fitness industry and a passion for leading an active lifestyle, I specialize in creating customized workout plans and nutrition programs tailored to the unique needs of each individual.',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg',
    },
    {
      name: 'Samantha Lee',
      role: 'Personal trainer',
      bio: 'Samantha is a certified personal trainer with over 10 years of experience in the fitness industry. She specializes in high-intensity interval training (HIIT) and can create personalized workout plans to help you reach your fitness goals.',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg',
    },
    {
      name: 'Tyler',
      role: 'Athlete',
      bio: 'Tyler is a former professional athlete who has now turned his passion for fitness into a career as a personal trainer. He has expertise in strength training, mobility, and injury prevention',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg',
    },
    {
      name: 'Michael Doe',
      role: 'Nutritionist',
      bio: ' Michael is a fitness coach who believes in a holistic approach to health and wellness. He can help you not only with your physical fitness but also with stress management, sleep optimization, and nutrition.',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg',
    },
    // add more team members here
  ];

  return (
    <section className="team-section">
      <h2 className="team-section-title">Meet Our Team</h2>
      <div className="team-member-list">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              src={member.imageUrl}
              alt={member.name}
              className="team-member-image"
            />
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
