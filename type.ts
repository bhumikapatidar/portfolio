import { IconType } from 'react-icons/lib';

export interface IServices {
    title:string,
    about:string,
    Icon:IconType
}

export interface IExp {
    workplace:string,
    position:string,
    duration:string,
    description:string[],
    category:Category[]
}

export type Category = 'ABCXYZ' | 'LMNOPQR' | 'IEEE';

export interface IProject {
    name:string,
    desc:string,
    image_path:string,
    github_url:string,
    key_tech:string[]
}