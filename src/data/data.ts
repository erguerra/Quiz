import { Alternative } from "src/components";


interface IAlternative{
    text: string,
    rightAnswer: boolean,
}

interface IQuestion{
    question: string,
    alternatives: IAlternative[]
}


const questions : IQuestion[] = [
    {
        question: 'Com o desenvolvimento mobile você pode...',
        alternatives: [
            {
                text: 'mudar o seu bairro',
                rightAnswer: false,
            },
            {
                text: 'mudar a sua cidade',
                rightAnswer: false,
            },
            {
                text: 'mudar o seu país',
                rightAnswer: false,
            },
            {
                text: 'mudar o seu continente',
                rightAnswer: false,
            },
            {
                text: 'mudar o mundo',
                rightAnswer: true,
            },
        ]
    },
    {
        question: 'O mágico que faz os seus bugs desaparecerem é...',
        alternatives: [
            {
                text: 'David Copperfield',
                rightAnswer: false,
            },
            {
                text: 'Mister M',
                rightAnswer: false,
            },
            {
                text: 'Chris Angel',
                rightAnswer: true,
            },
            {
                text: 'Mágico de Oz',
                rightAnswer: false,
            },
            {
                text: 'Victor professor de mobile',
                rightAnswer: false,
            },
        ]
    }
]

export default questions;