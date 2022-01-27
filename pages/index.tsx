// import { GetStaticProps, GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = () => {

  return (
    <div className="flex flex-col px-6 py-4">
      <h5 className="font-medium my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi enim libero! Quod fugit fuga nulla ad iste saepe iure voluptatibus aperiam aut quae totam quos, quasi ullam culpa praesentium?</h5>
      <div className="mt-5 ">
        <div className="grid gap-6 lg:grid-cols-2">
          {
            services.map(service => (
              <div className="bg-slate-100 rounded-lg lg:col-span-1 my-2 text-sm">
                <ServiceCard services={service} />
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
};

export default index;

// export const getStaticProps = async (context:GetStaticPropsContext) => {

//   const res = await  fetch('http://localhost:3000/api/services')
//   const data = await res.json();

//   return {
//     props: {
//         services: data.services
//     }
//   }

// }
