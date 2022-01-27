import { FunctionComponent } from "react";
import {IServices} from '../type';

const ServiceCard:FunctionComponent<{services:IServices}> = ({services:{Icon,title,about}}) => {
  return (
    <div className="flex items-center space-x-4 p-2">
        <Icon className='w-36 h-20 md:h-16 md:w-16 lg:h-12 lg:w-12 text-blue-400'/>
        <div>
            <h4 className="font-bold text-blue-400">{title}</h4>
            <p>{about}</p>
        </div>
    </div>
  ) 
};

export default ServiceCard;
