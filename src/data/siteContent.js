import profileImage from '../assets/profile1.jpg'

export const navigationItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  /*{ href: '#tecnologias', label: 'Tecnologías' },*/
  { href: '#contacto', label: 'Contacto' },
]

export const profile = {
  headline: 'Analista de Datos y Diseñadora de Soluciones Digitales',
  summary:
    'Enfocada en entomología agrícola y sistemas productivos basados en artrópodos.',
  githubUrl: 'https://github.com/Kdnastone?tab=repositories',
  email: 'kdnastone@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/sandracadena',
  image: profileImage,
}

export const profileStats = [
  { id: 'stack', label: 'Tecnologías principales', value: ['React+Vite', 'Pyhon','JavaScript', 'JSON', 'Netlify', 'HTML/CSS', 'Fetch API/Axios']},
  { id: 'focus', label: 'Enfoque', value: 'Análisis, trazabilidad y entomología aplicada' },
]

export const featuredProjects = [
  {
    id: 'proyecto-1',
    title: 'Insect Hub | Práctica académica',
    description:
      'Página web desplegada en Netlify para organizar y recopilar información técnica sobre especies de artrópodos con potencial en servicios ecosistémicos, que resultó en una plataforma clara y accesible para consulta técnica, usando principios de diseño web y estructuración de contenidos.',
    stack: ['React+Vite', 'JavaScript', 'JSON', 'Netlify', 'HTML/CSS', 'Fetch API/Axios'],
    repoUrl: 'https://github.com/Kdnastone/insect-hub',
    liveUrl: 'https://insect-hub.netlify.app/',
    status: 'Frontend',
  },
  {
    id: 'proyecto-2',
    title: 'Mortiverso',
    description:
      'Aplicación que consume la API de Rick and Morty para mostrar una galería de personajes en tarjetas con imagen y descripción. Además, permite añadir nuevos personajes mediante un formulario que los incorpora al inicio de la lista.',
    stack: ['React+Vite', 'JavaScript', 'JSON', 'Netlify', 'HTML/CSS', 'Fetch API/Axios'],
    repoUrl: 'https://github.com/Kdnastone/mortiverso',
    liveUrl: 'https://mortiverso.netlify.app/',
    status: 'Frontend',
  },
  {
    id: 'proyecto-3',
    title: 'Astrolunar',
    description:
      'Este proyecto permite a los usuarios acercarse a algunos de los registros de NASA e interactuar con su creatividad para crear nuevos planetas.',
    stack: ['React+Vite', 'JavaScript', 'JSON', 'Netlify', 'HTML/CSS', 'Fetch API/Axios'],
    repoUrl: 'https://github.com/Kdnastone/astrolunar',
    liveUrl: 'https://astrolunar.netlify.app/home',
    status: 'Frontend',
  },
  {
    id: 'proyecto-4',
    title: 'BiciStation',
    description:
      'Página de presentación con secciones claras, CTA definidos y diseño responsivo para validar una propuesta de valor.',
    stack: ['React+Vite', 'JavaScript', 'JSON', 'Netlify', 'HTML/CSS', 'Fetch API/Axios'],
    repoUrl: 'https://github.com/Kdnastone/bicistation',
    liveUrl: 'https://bicistation.netlify.app/',
    status: 'Frontend',
  },
  {
    id: 'proyecto-5',
    title: 'BiologicalWarriors',
    description:
      'Sitio dedicado a la venta de enemigos naturales para el control biológico de plagas. Ofrece especies útiles para implementar estrategias de manejo integrado de plagas en agricultura sostenible.',
    stack: ['React+Vite', 'JavaScript', 'JSON', 'Netlify', 'HTML/CSS', 'Fetch API/Axios'],
    repoUrl: 'https://github.com/Kdnastone/BiologicalWarriors',
    liveUrl: 'https://biologicalwarriors.netlify.app/',
    status: 'Frontend',
  },
]


export const contactLinks = [
  {
    id: 'email',
    title: 'Correo',
    description: 'Escríbeme para colaborar en un proyecto.',
    href: `mailto:${profile.email}`,
  },
]
