import { IProject } from "../type";
import { FunctionComponent } from "react";
import { AiFillGithub } from 'react-icons/ai';
import Image from "next/image";

const ProjectDetails: FunctionComponent<{ proj: IProject }> = ({ proj: { name, desc, image_path, key_tech, github_url } }) => {
    return (
        <div className="grid lg:grid-cols-3 gap-5 justify-center items-center">
            <div className="lg:col-span-2">
                <Image width='496px' height='372px' layout="responsive" className="rounded-lg" src={image_path} alt={name} />
            </div>
            <div className="col-span-1 flex flex-col">
                <div className="flex gap-x-5">
                    <h1 className="text-xl lg:text-2xl text-blue-400 font-bold">{name}</h1>
                    <a href={github_url} target="_blank" className='cursor-pointer mt-2'><AiFillGithub className='w-5 h-5' /></a>
                </div>
                <div>
                    <p className="bg-slate-100 text-slate-600 rounded-md px-3 py-1 my-3 lg:text-md">{desc}</p>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 my-1">{
                    key_tech.map(e => (
                        <span className="text-slate-400" key={e}>{e}</span>
                    ))
                }
                </div>
            </div>
        </div>
    )

};

export default ProjectDetails;
