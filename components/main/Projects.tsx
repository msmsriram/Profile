import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/lipnet.jpg"
          title="LipReading AI"
          description="Designed law enforcement app to extract text from audiocorrupted videos and another use case like eyewear with lipreading AI, aiding the hearing-impaired."
        />
        <ProjectCard
          src="/stable.jpg"
          title="Stable Diffusion"
          description="This react application leverages the model trained by Stability AI and Runway ML to generate images using the Stable Diffusion Deep Learning model"
        />
        <ProjectCard
          src="/llama2 7b.png"
          title="ChatBot with LLAMA-2 7B"
          description="Developed a chatbot using LLAMA-2 7B, RAG(Retrival Augmented Generation), with an intuitive Gradio interface and in a local CPU machine.
          "
        />
      </div>
      <div
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10"
        style={{ marginTop: "20px" }}
      >
        <ProjectCard
          src="/bigdata.webp"
          title="FaceBook Data Analysis"
          description=" Handled 22 lakhs of Big data and Used Apache Spark and PySpark for demographic ,social network
          insights and sentiment analysis"
        />

        <ProjectCard
          src="/face.jpg"
          title="SMART ATTENDANCE SYSTEM"
          description="Facial recognition based attendance system utilizing Haar
          Cascade algorithm implemented in Python.
          Uses Flask for backend framework
          "
        />

        <ProjectCard
          src="/bert.jpg"
          title="SENTIMENT ANALYSIS"
          description=" utilizing BERT and Content was extracted from website using web scraping, I achieved the sentiment outputs like positive,
          negative,& neutral."
        />
      </div>
    </div>
  );
};

export default Projects;
