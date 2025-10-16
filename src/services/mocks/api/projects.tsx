export type Projects = {
    id: string | number;
    label: string;
    to: string;
    colorDot: string;
}

const mockProjects: Projects[] = [
    {
    id: 1,
    label:'Syntra',
    to:'syntra',
    colorDot:'#4593F9',
    },
    {
    id: 2,
    label:'BlockNex',
    to:'block-nex',
    colorDot:'#B4FF86',
    },
    {
    id: 3,
    label:'FinChain',
    to:'fin-chain',
    colorDot:'#8291FF',
    },
    {
    id: 4,
    label:'Good Villa',
    to:"good-villa",
    colorDot:'#FF84E6',
    },
]

export function fakeFetchProjects(): Promise<Projects[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockProjects), 100);
    });
}