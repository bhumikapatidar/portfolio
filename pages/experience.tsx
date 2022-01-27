import { useState } from "react";
import ExpDetails from "../components/ExpDetails";
import ExpWPButtons from "../components/ExpWPButtons";
import { exp as expData } from "../data";
import { Category, IExp } from "../type";

const experience = () => {

  const [exp, setExps] = useState<IExp[]>([{
    workplace: 'IEEE',
    position: 'Game Developer',
    duration: 'June 2020 - Feb 2021',
    description: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        'Blanditiis commodi, cupiditate eaque velit placeat nam dolores aliquid distinctio ',
        'Ratione sint ducimus in cumque soluta consectetur a iste possimus cum aliquam.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        'Blanditiis commodi, cupiditate eaque velit placeat nam dolores aliquid distinctio ',
        'Ratione sint ducimus in cumque soluta consectetur a iste possimus cum aliquam.',
    ],
    category:["IEEE"]
}]);
  const [active, setActive] = useState('IEEE');

  const handleCategory = (category:Category) => {
    const newArray = expData.filter(e => e.category.includes(category));
    setExps(newArray);
    setActive(category);
    return;
  }

  return (
    <div className="flex items-center flex-col lg:flex-row">
      <ExpWPButtons handleCategory={handleCategory} active={active}/>
      <div>
        {
          exp.map(e => (
            <div className="p-2">
              <ExpDetails expd={e} key={e.workplace} />
            </div>
          ))
        }
      </div>
    </div>

  )
};

export default experience;
