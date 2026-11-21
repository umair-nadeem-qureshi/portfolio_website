export interface Project {
    id: string;
    title: string;
    category: 'robotics' | 'cad' | 'control';
    badge: string;
    specs: string;
    summary: string;
    deliverables: string[];
    tags: string[];
    repoUrl?: string;
  }
  
  export const ENGINEER_PROFILE = {
    name: 'Your Name',
    role: 'Mechatronics & Robotics Engineer',
    headline: 'Designing Multi-Axis Robotics, CAD Systems & Industrial Automation',
    bio: 'Mechatronics Engineer specializing in articulated robotic arms, kinematics simulations, and CNC tending automation. Experienced in delivering production-ready 3D CAD assemblies, servo control architectures, and digital twins for remote teams.',
    email: 'engineer@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    availability: 'Available for Remote Engineering Roles',
  };
  
  export const PROJECTS: Project[] = [
    {
      id: '6dof-yaskawa-arm',
      title: 'Multi-Tool 6-Axis Articulated Robot Arm',
      category: 'robotics',
      badge: '6-DOF ARTICULATED ARM',
      specs: 'Yaskawa 100W AC Servos',
      summary:
        'Engineered a modular mechanical chassis and custom motor adapter plates driven by 100W Yaskawa SGMPH AC servo motors. Configured unified HAL/INI kinematics and G-code tool-change routines (M6) for 3D printing, laser cutting, and CNC routing.',
      deliverables: [
        'Parametric FreeCAD assembly & neutral STEP files',
        'Torque & gear-ratio sizing calculations',
        'LinuxCNC HAL/INI configuration & M6 tool-change macros',
      ],
      tags: ['FreeCAD / STEP', 'Yaskawa AC Servos', 'LinuxCNC', 'Kinematics'],
      repoUrl: 'https://github.com',
    },
    {
      id: '5axis-cnc-tending',
      title: '5-Axis CNC Machine Tending Robotic Arm',
      category: 'cad',
      badge: 'INDUSTRIAL AUTOMATION',
      specs: '5-Axis Reach & Collision Sim',
      summary:
        'Designed the complete 3D CAD assembly and joint kinematics for automated raw-stock insertion and finished-part extraction inside a CNC fixture. Validated reach envelopes and angular tolerances via 3D motion simulation.',
      deliverables: [
        'Full 3D CAD structural model & joint limit analysis',
        'Cycle-time and reach-envelope motion simulation',
        'Manufacturing Bill of Materials (BOM) & assembly drawings',
      ],
      tags: ['3D CAD Modeling', 'Motion Simulation', 'CNC Tending', 'DFM'],
      repoUrl: 'https://github.com',
    },
    {
      id: 'mesa-power-enclosure',
      title: 'FPGA Motion Controller & Power Enclosure',
      category: 'control',
      badge: 'EMBEDDED & HARDWARE',
      specs: 'Mesa 7I95T / Buck-Boost DC',
      summary:
        'Designed custom 3D-printable enclosures with active DC fan thermal management for buck-boost converters and Ethernet FPGA motion control boards in multi-axis robotic cells.',
      deliverables: [
        'Airflow-optimized STL/STEP enclosure files',
        'Wiring harness diagrams & EMI isolation layout',
        'C++ & CODESYS PLC diagnostic routines',
      ],
      tags: ['C++23', 'CODESYS', 'Mesa FPGA', '3D Printing'],
      repoUrl: 'https://github.com',
    },
  ];
  
  export const SKILL_GROUPS = [
    {
      title: '3D CAD & Mechanical',
      items: ['FreeCAD / SolidWorks', 'STEP / IGES Assemblies', 'Harmonic & Cycloidal Drives', 'DFM & Tolerance Analysis'],
    },
    {
      title: 'Robotics & Motion',
      items: ['5-Axis & 6-DOF Kinematics', 'AC Servo Sizing & Tuning', 'LinuxCNC / Mesa Hardware', 'End-Effector Tooling'],
    },
    {
      title: 'Programming & PLC',
      items: ['Modern C++ (C++20/23)', 'Python (Kinematics / Data)', 'CODESYS / IEC 61131-3', 'G-Code & HAL Scripting'],
    },
    {
      title: 'Remote Collaboration',
      items: ['Git / GitHub CAD Versioning', 'Async Technical Docs & BOMs', 'Simulation Video Walkthroughs', 'Cross-Timezone Overlap'],
    },
  ];
  