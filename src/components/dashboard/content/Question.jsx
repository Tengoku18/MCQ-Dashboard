import React from 'react'
import MessageIcon from '../../UI/MessageIcon';
import Card from "../../UI/Card";

const Question = () => {
    const Question = [
        {
          image: "NBL",
          title: "NBL",
          number: "20",
        },
        {
          image: "Civil",
          title: "Civil sub-Engineer",
          number: "50",
        },
        {
          image: "Bank",
          title: "Private Bank|TA and MT",
          number: "30",
        },
        {
          image: "SN",
          title: "STAFF Nurse",
          number: "50",
        },
        {
          image: "ANM",
          title: "ANM",
          number: "30",
        },
        {
          image: "AHB",
          title: "Aa.He.BA",
          number: "20",
        },
        {
          image: "NRB",
          title: "NRB 4 & 5",
          number: "30",
        },
        {
          image: "ADBL",
          title: "ADBL 4 & 5",
          number: "20",
        },
        {
          image: "NRB",
          title: "NRB 4 & 5",
          number: "40",
        },
        {
          image: "RBB",
          title: "RBB 4 & 5",
          number: "50",
        },
      ];
    
      return (
        <div className="m-8">
          <div className="text-xl font-bold">Questions</div>
          <div className='overflow-x-auto  overscroll-contain'>
            <div className='flex items-center w-screen'>
            {Question.map((items) => {
              return (
                <Card>
                  <div className="grid bg-primary-purple h-32 w-32 my-2 mx-auto p-0 border rounded-full ">
                    <div className="text-center m-auto text-lg font-extrabold text-white">{items.image}</div>
                  </div>
                  <div className="bg-slate-50 h-10 w-[100%] ">
                    <div className="text-sm">{items.title}</div>
                  </div>
                  <div>{items.number} sets</div>
                </Card>
              );
            })}
            </div>
          </div>
           
          <MessageIcon/>
        </div>
      );
    };


export default Question
