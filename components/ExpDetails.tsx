import { FunctionComponent } from "react";
import { IExp } from "../type";

const ExpDetails:FunctionComponent<{expd:IExp}> = ({expd:{workplace,position,duration,description}}) => {
    return (
        <div className="mx-2 lg:mx-6 my-3 bg-slate-100 rounded-lg py-3 lg:py-16 px-6">
            <h1 className="text-lg lg:text-2xl font-semibold">{position} at <span className="text-blue-400">{workplace}</span> </h1>
            <p className="text-md py-3">{duration}</p>
            <ul className="list-disc text-slate-700 px-4 lg:text-lg">
                {
                    description.map((desc) => (
                        <li key={desc}>
                            {desc}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default ExpDetails;
