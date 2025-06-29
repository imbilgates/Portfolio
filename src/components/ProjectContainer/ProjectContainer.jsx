import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    {/* Project Header */}
    <div className='project__header'>
      <h3>{project.name}</h3>
    </div>

    {/* Project Description */}
    <p className='project__description'>{project.description}</p>

    {/* Project Stack */}
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {/* Project Footer (GitHub and Live Preview Icons) */}
    <div className='project__footer'>
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  </div>
)

export default ProjectContainer
