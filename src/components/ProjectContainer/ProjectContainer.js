import uniqid from 'uniqid'
import './ProjectContainer.css'
import { GitHub, Launch } from '@mui/icons-material'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target="_blank" rel="noopener noreferrer"
      >
        <GitHub />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target="_blank" rel="noopener noreferrer"
      >
        <Launch />
      </a>
    )}
  </div>
)

export default ProjectContainer
