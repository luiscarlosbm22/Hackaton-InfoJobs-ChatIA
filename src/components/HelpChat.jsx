
import Accordion from "./Accordion";


const HelpChat = () => {

  const accordionData = [
    {
      question: '¿Cuales son las estadisticas laborales de mi carrera?',
      answer: 'Los graduados en Desarrollo de Software tienen una amplia gama de oportunidades laborales en empresas de tecnología',
    },
    {
      question: '¿ChatGPT me quitara mi trabajo como desarrollador de software?',
      answer: 'No, ChatGPT no te quitará tu trabajo como desarrollador de software. Como modelo de lenguaje AI, mi objetivo es proporcionar información y asistencia basada en el conocimiento que he adquirido. .',
    },
    {
      question: '¿Qué habilidades son importantes para los desarrolladores de software?',
      answer: 'Las habilidades clave para los desarrolladores de software incluyen conocimientos sólidos de programación, comprensión de algoritmos y estructuras de datos, capacidad de resolución de problemas, capacidad de trabajo en equipo, habilidades de comunicación y capacidad para aprender y adaptarse a nuevas tecnologías.',
    },
    {
      question: '¿Cuáles son los lenguajes de programación más utilizados?',
      answer: 'Algunos lenguajes de programación populares en el desarrollo de software son Java, Python, JavaScript, C++, C#, Ruby, PHP y Swift, entre otros. La elección del lenguaje de programación depende del tipo de proyecto y los requisitos específicos.',
    },
    // Agrega más preguntas y respuestas aquí
  ];
  return (
    <>
      <div className="relative p-2 w-full">
        <input type="text" className=" p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded  border border-gray-300  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Ingresa un tema de tu profesion" />
        <button type="submit" className="absolute top-2 right-0 p-2.5 text-sm font-medium text-white bg-sky-700 rounded-r-lg border border-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span className="sr-only">Search</span>
        </button>
      </div>

      <div className="container mx-auto p-4">
      <h1 className="text-md text-sky-800 font-bold mb-4">Preguntas frecuentes sobre tu Profesión</h1>
      <Accordion data={accordionData} />
    </div>

    </>
  )
}

export default HelpChat