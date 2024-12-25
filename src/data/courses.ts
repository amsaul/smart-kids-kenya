export const courses = [
    {
      id: 1,
      title: 'Scratch for Kids',
      description: 'Learn the basics of coding with fun, interactive projects. Perfect for beginners, this course introduces programming concepts through visual blocks.',
      imageUrl: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1000',
      duration: '8 weeks',
      price: 15000,
      level: 'Beginner',
      learningOutcomes: [
        'Create interactive stories and games',
        'Learn basic programming concepts',
        'Develop problem-solving skills',
        'Build creativity and logical thinking'
      ],
      curriculum: [
        {
          week: 1,
          title: 'Introduction to Scratch',
          topics: ['Understanding the Scratch interface', 'Creating your first sprite', 'Basic movements']
        },
        {
          week: 2,
          title: 'Animation Basics',
          topics: ['Sprite costumes', 'Simple animations', 'Adding sounds']
        }
      ],
      requirements: ['Computer with internet access', 'No prior coding experience needed'],
      tools: ['Scratch (web-based)', 'Headphones (recommended)']
    },
    {
      id: 2,
      title: 'HTML & CSS',
      description: 'Build beautiful websites from scratch with simple tools. Learn the fundamentals of web development in a fun and engaging way.',
      imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1000',
      duration: '10 weeks',
      price: 20000,
      level: 'Beginner',
      playgroundLink: 'https://codepen.io/pen/',
      learningOutcomes: [
        'Create responsive websites',
        'Master HTML5 and CSS3',
        'Learn modern web design principles',
        'Build portfolio-ready projects'
      ],
      curriculum: [
        {
          week: 1,
          title: 'HTML Fundamentals',
          topics: ['Basic HTML structure', 'Common HTML elements', 'Lists and tables']
        },
        {
          week: 2,
          title: 'CSS Basics',
          topics: ['Selectors and properties', 'Colors and typography', 'Box model']
        }
      ],
      requirements: ['Computer with internet access', 'Text editor (VS Code recommended)'],
      tools: ['Visual Studio Code', 'Web browser', 'CodePen']
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      description: 'Add interactivity to websites and learn the language of the web. Perfect for those who want to take their web development skills to the next level.',
      imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=1000',
      duration: '12 weeks',
      price: 25000,
      level: 'Intermediate',
      playgroundLink: 'https://codesandbox.io/s/vanilla',
      learningOutcomes: [
        'Master JavaScript fundamentals',
        'Build interactive web applications',
        'Learn modern ES6+ features',
        'Develop problem-solving skills'
      ],
      curriculum: [
        {
          week: 1,
          title: 'JavaScript Basics',
          topics: ['Variables and data types', 'Operators', 'Control structures']
        },
        {
          week: 2,
          title: 'Functions and Objects',
          topics: ['Function declarations', 'Object literals', 'Arrays and loops']
        }
      ],
      requirements: ['Basic HTML & CSS knowledge', 'Computer with internet access'],
      tools: ['Visual Studio Code', 'Web browser', 'CodeSandbox']
    },
    {
      id: 4,
      title: 'Python for Kids',
      description: 'Start your programming journey with Python, a beginner-friendly language perfect for young coders.',
      imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=1000',
      duration: '10 weeks',
      price: 20000,
      level: 'Beginner',
      learningOutcomes: [
        'Write basic Python programs',
        'Create simple games',
        'Learn data structures',
        'Develop algorithmic thinking'
      ],
      curriculum: [
        {
          week: 1,
          title: 'Introduction to Python',
          topics: ['Installing Python', 'Basic syntax', 'Variables and types']
        },
        {
          week: 2,
          title: 'Control Flow',
          topics: ['If statements', 'Loops', 'Basic functions']
        }
      ],
      requirements: ['Computer with internet access', 'No prior coding experience needed'],
      tools: ['Python 3', 'Visual Studio Code', 'Replit']
    },
    {
      id: 5,
      title: 'Artificial Intelligence Basics',
      description: 'Discover the fascinating world of AI through hands-on projects and interactive learning.',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      duration: '8 weeks',
      price: 30000,
      level: 'Intermediate',
      learningOutcomes: [
        'Understand AI concepts',
        'Create simple AI models',
        'Learn about neural networks',
        'Build AI-powered projects'
      ],
      curriculum: [
        {
          week: 1,
          title: 'Introduction to AI',
          topics: ['What is AI?', 'Types of AI', 'Real-world applications']
        },
        {
          week: 2,
          title: 'Machine Learning Basics',
          topics: ['Supervised learning', 'Classification', 'Simple predictions']
        }
      ],
      requirements: ['Basic Python knowledge', 'Computer with internet access'],
      tools: ['Python', 'Jupyter Notebook', 'Google Colab']
    },
    {
      id: 6,
      title: 'Machine Learning for Kids',
      description: 'Learn how computers can learn from data through fun and interactive projects.',
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
      duration: '10 weeks',
      price: 35000,
      level: 'Intermediate',
      learningOutcomes: [
        'Understand ML basics',
        'Create image recognition models',
        'Build text analysis projects',
        'Develop ML applications'
      ],
      curriculum: [
        {
          week: 1,
          title: 'ML Fundamentals',
          topics: ['What is Machine Learning?', 'Types of ML', 'Simple ML models']
        },
        {
          week: 2,
          title: 'Image Recognition',
          topics: ['Working with images', 'Training models', 'Building applications']
        }
      ],
      requirements: ['Python basics', 'Computer with internet access'],
      tools: ['Python', 'TensorFlow', 'Google Teachable Machine']
    }
  ];