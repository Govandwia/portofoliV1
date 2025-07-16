import { ExperienceCard } from '@/components/ExperienceCard';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    // --- Current Experiences ---
    {
      id: 'project-manager-fundation',
      title: 'Project Manager',
      company: 'FUNDation',
      period: '2024 - Present',
      location: 'Universitas Gadjah Mada',
      type: 'Project Leadership',
      description: 'Leading a team in the development of FUNDation, an application connecting event organizers with industry partners for sponsorship opportunities.',
      achievements: [
        'Managing the project timeline to ensure tasks are completed on time.',
        'Collaborating with various stakeholders, including sponsors and event organizers.'
      ],
      skills: ['Project Management', 'Team Leadership', 'Stakeholder Communication', 'Timeline Management']
    },
    {
      id: 'lab-assistant-algo',
      title: 'Lab Assistant for Algorithms and Data Structures',
      company: 'Universitas Gadjah Mada',
      period: '2025 - Present',
      location: 'Yogyakarta, Indonesia',
      type: 'Academic Role',
      description: 'Assisting lecturers and students in practical lab sessions for Algorithms and Data Structures.',
      achievements: [
        'Creating practical lab modules and programming assignments.',
        'Explaining fundamental programming concepts to students.',
        'Supervising lab sessions and providing constructive feedback on assignments.'
      ],
      skills: ['Data Structures', 'Algorithms', 'Mentoring', 'Problem Solving', 'Java', 'Python']
    },
    {
      id: 'sekjen-assets',
      title: 'Secretary General',
      company: 'ASSETS TRPL UGM',
      period: '2025 - Present',
      location: 'Universitas Gadjah Mada',
      type: 'Organizational Leadership',
      description: 'Tasked with assisting the chairman in strategic and operational decision-making for the organization.',
      achievements: [
        'Coordinating internal affairs of ASSETS to ensure smooth operations.',
        'Playing an active role in planning and structuring the organization\'s work programs.'
      ],
      skills: ['Leadership', 'Strategic Planning', 'Internal Coordination', 'Organizational Management']
    },
    {
      id: 'social-media-palpod',
      title: 'Social Media Specialist',
      company: 'PALPOD UGM',
      period: '2025 - Present',
      location: 'Universitas Gadjah Mada',
      type: 'Digital Marketing',
      description: 'Managing the social media presence and content strategy for PALPOD UGM.',
      achievements: [
        'Determining content schedules and information dissemination strategies.',
        'Gathering and responding to listener feedback.',
        'Conducting weekly evaluations for the design and publication team.'
      ],
      skills: ['Social Media Management', 'Content Strategy', 'Feedback Analysis', 'Team Evaluation']
    },
    {
      id: 'hustler-gdgoc',
      title: 'Hustler',
      company: 'GDGOC UGM',
      period: '2025 - Present',
      location: 'Universitas Gadjah Mada',
      type: 'Team Formation',
      description: 'Responsible for analyzing Sustainable Development Goals (SDGs) for team formation purposes.',
      achievements: [
        'Conducting SDGs analysis to establish effective teams.'
      ],
      skills: ['Analysis', 'Sustainable Development Goals (SDGs)', 'Team Building', 'Research']
    },
    // --- Past Experiences ---
    {
      id: 'humas-komatik',
      title: 'Vice Head of Public Relations (External)',
      company: 'KOMATIK UGM',
      period: '2024 - Now',
      location: 'Universitas Gadjah Mada',
      type: 'Public Relations',
      description: 'Managed communications and relationships with external parties to support KOMATIK\'s activities.',
      achievements: [
        'Executed external public relations work programs, including collaborative events.',
        'Managed the planning and production of KOMATIK merchandise.',
        'Built and maintained partnerships with various external parties.'
      ],
      skills: ['Public Relations', 'Partnership Management', 'Branding', 'Communication']
    },
    {
      id: 'lab-assistant-komputer',
      title: 'Lab Assistant for Computer Programming',
      company: 'Universitas Gadjah Mada',
      period: '2024',
      location: 'Yogyakarta, Indonesia',
      type: 'Academic Role',
      description: 'Responsible for supporting the implementation of basic programming labs for first-year students.',
      achievements: [
        'Developed modules and basic programming assignments.',
        'Explained programming concepts and assisted during lab sessions.',
        'Graded lab assignments and provided constructive feedback to students.'
      ],
      skills: ['Programming Fundamentals', 'Teaching', 'Code Reviewing', 'Mentoring']
    },
    {
      id: 'coordinator-series',
      title: 'Event Coordinator',
      company: 'SERIES 2024',
      period: '2024',
      location: 'Universitas Gadjah Mada',
      type: 'Event Management',
      description: 'Oversaw the entire event lifecycle from concept to completion for SERIES 2024.',
      achievements: [
        'Designed the core concept and flow of the event.',
        'Coordinated with multiple teams to ensure a smooth event execution.'
      ],
      skills: ['Event Planning', 'Conceptual Design', 'Team Coordination', 'Event Supervision']
    },
    {
      id: 'staff-ted-competition',
      title: 'Staff, Competition Division',
      company: 'TED 2024',
      period: '2024',
      location: 'Universitas Gadjah Mada',
      type: 'Competition Management',
      description: 'Managed the operational and regulatory aspects of the TED 2024 competition.',
      achievements: [
        'Arranged the event schedule.',
        'Collaborated with the team to draft competition rules and mechanics.',
        'Served as the main contact person for the competition.'
      ],
      skills: ['Competition Management', 'Rule Drafting', 'Scheduling', 'Participant Communication']
    },
    {
      id: 'staff-humpub-liga',
      title: 'Staff, Public Relations & Publications Division',
      company: 'LIGA TRPL 2024',
      period: '2024',
      location: 'Universitas Gadjah Mada',
      type: 'Public Relations',
      description: 'Responsible for managing public relations and live reporting during the LIGA TRPL event.',
      achievements: [
        'Managed the official Instagram account for LIGA TRPL.',
        'Executed live reports for every activity during the event.'
      ],
      skills: ['Social Media Management', 'Live Reporting', 'Public Relations', 'Content Creation']
    },
    {
      id: 'staff-kastrad-assets',
      title: 'Staff, Advocacy and Strategic Studies Division (Kastrad)',
      company: 'ASSETS TRPL UGM',
      period: '2023 - 2024',
      location: 'Universitas Gadjah Mada',
      type: 'Student Development',
      description: 'Executed key division programs aimed at fostering critical thinking skills among students.',
      achievements: [
        'Successfully ran the "Kastrad Think" and "Kastrad Talk" programs.'
      ],
      skills: ['Program Execution', 'Critical Thinking', 'Advocacy', 'Workshop Facilitation']
    },
    {
      id: 'expo-coordinator',
      title: 'Lead Coordinator for Campus Expo',
      company: 'SMA Unggulan CT ARSA Foundation',
      period: '2023 - 2024',
      location: 'Sukoharjo, Indonesia',
      type: 'Event Management',
      description: 'Held full responsibility for the execution of the Campus Expo event.',
      achievements: [
        'Communicated and coordinated with university alumni.',
        'Collaborated with students from various universities.',
        'Conducted public speaking and leadership skill training for the team.'
      ],
      skills: ['Event Management', 'Alumni Relations', 'Public Speaking', 'Leadership Training']
    },
    {
      id: 'yearbook-coordinator',
      title: 'Lead Coordinator for Yearbook Production',
      company: 'SMA Unggulan CT ARSA Foundation Cohort 3',
      period: '2023',
      location: 'Sukoharjo, Indonesia',
      type: 'Event Management',
      description: 'Responsible for the entire yearbook creation event for the 3rd cohort.',
      achievements: [
        'Authored and managed proposals and official letters according to institutional standards.',
        'Collaborated with various other organizations to achieve project goals.'
      ],
      skills: ['Event Management', 'Proposal Writing', 'Collaboration', 'Project Coordination']
    },
    {
      id: 'head-of-cohort',
      title: 'Head of Student Cohort 3',
      company: 'SMA Unggulan CT ARSA Foundation',
      period: '2021 - 2023',
      location: 'Sukoharjo, Indonesia',
      type: 'High School Leadership',
      description: 'Led and served as the representative for all students in the 3rd cohort.',
      achievements: [
        'Coordinated the student cohort in various school events.',
        'Acted as the liaison between the school administration and the students.'
      ],
      skills: ['Leadership', 'Coordination', 'Public Speaking', 'Representation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              My Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Leadership roles and technical experience that shaped my career
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-16">
                  <ExperienceCard experience={experience} />
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Key Skills Developed
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Leadership & Management
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Team Leadership</Badge>
                  <Badge variant="secondary">Project Management</Badge>
                  <Badge variant="secondary">Stakeholder Management</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Technical Analysis
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Requirements Analysis</Badge>
                  <Badge variant="secondary">System Design</Badge>
                  <Badge variant="secondary">Business Analysis</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Communication & Collaboration
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Teaching</Badge>
                  <Badge variant="secondary">Mentoring</Badge>
                  <Badge variant="secondary">Event Organization</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}