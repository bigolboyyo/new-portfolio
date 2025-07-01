import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const ProjectsLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-screen px-4 sm:px-8 md:px-12 lg:px-20 gap-12 font-mono relative">
      <main className="w-full max-w-4xl flex flex-col items-center text-center sm:text-left gap-8">
        {children}
      </main>
    </div>
  );
};

export default ProjectsLayout;
