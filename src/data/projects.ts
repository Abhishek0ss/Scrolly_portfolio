export const PROJECTS = [

  { 
    id: "facial-recognition",
    title: "Adaptive Facial Recognition System", 
    desc: "Real-Time Attendance Monitoring using HOG and RBF-kernel SVM, achieving 92% accuracy with GPU-free real-time inference.",
    category: "Computer Vision",
    tech: "OpenCV, CLAHE, dlib, scikit-learn", 
    year: "Dec 2025", 
    url: "https://github.com/Abhishek0ss/Supervised_Face_Recognition_System_Using_Classification",
    image: "/facial_recognition.jpg",
    client: "Internal / Research",
    credits: "Developed by Abhishek S S",
    info: "This project presents an Adaptive Facial Recognition System designed to streamline real-time attendance monitoring. It addresses the challenge of facial recognition in varying edge scenarios by integrating robust feature descriptors with an RBF-kernel SVM, ensuring accurate processing without the need for expensive GPU accelerators.",
    whatIDid: [
      "Engineered a real-time face detection pipeline using HOG feature extraction and RBF-kernel SVM for classification achieving 92% accuracy.",
      "Implemented CLAHE image preprocessing to handle varying lighting conditions autonomously and optimize model performance.",
      "Designed a seamless inference workflow capable of running efficiently on standard consumer-grade CPUs in real time."
    ]
  },
  { 
    id: "genetic-disorder",
    title: "Genetic Disorder Prediction", 
    desc: "SVM-based prediction model reaching 92% accuracy via optimal SMOTE-balanced preprocessing.",
    category: "Predictive Analytics", 
    tech: "Python, scikit-learn, Pandas, Tkinter",
    year: "Apr 2025", 
    url: "https://github.com/Abhishek0ss/Support-Vector-Machine-for-Identification-of-Genetical-Disorders-in-Medical-Field",
    image: "/genetic_disorder.webp",
    client: "Internal / Research",
    credits: "Developed by Abhishek S S",
    info: "The Genetic Disorder Prediction model was developed to help medical practitioners identify potential genetic anomalies early. By processing imbalanced medical datasets dynamically, it utilizes machine learning techniques to flag health risks, facilitating timely intervention and specialized medical review.",
    whatIDid: [
      "Developed a reliable predictive classification model using Support Vector Machines optimized for clinical diagnostic datasets.",
      "Integrated SMOTE preprocessing techniques to balance target classes, substantially reducing false negatives and achieving 92% accuracy.",
      "Built a desktop GUI using Tkinter to allow medical professionals to input patient statistics effortlessly and receive immediate predictions."
    ]
  },
  { 
    id: "system-monitor",
    title: "Real-Time System Resource Monitor", 
    desc: "Desktop monitoring tool that tracks CPU, memory, disk usage, and running processes in real time with process management and resource hog detection.",
    category: "System Monitoring",
    tech: "Python, Tkinter, psutil",
    year: "May 2025",
    url: "https://github.com/Abhishek0ss/Real-Time-Process-Monitoring-Dashboard-Project",
    image: "/system_monitor.png",
    client: "Internal / Research",
    credits: "Developed by Abhishek S S",
    info: "Real-Time System Resource Monitor is a comprehensive utility designed to oversee desktop telemetry. It focuses on presenting live hardware metrics intuitively to ensure that users maintain an optimized software environment, quickly addressing system bottlenecks or rogue processes.",
    whatIDid: [
      "Architected a lightweight Python utility using the psutil library to extract real-time process, memory, CPU, and disk statistics.",
      "Designed a dynamic GUI dashboard with Tkinter, providing users with live visual feedback and health indicators for system resources.",
      "Implemented active process management controls allowing users to detect and gracefully terminate system-hogging applications on demand."
    ]
  }
];
