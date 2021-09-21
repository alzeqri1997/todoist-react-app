import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useProjects } from '../hooks';

export const ProjectsContext = createContext();
export const ProjectProvider = ({ children }) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectValue = () => useContext(ProjectsContext);

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
