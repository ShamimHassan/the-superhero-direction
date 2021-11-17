import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar, faUserCheck} from '@fortawesome/free-solid-svg-icons';
import DisplaySidebar from './DisplaySidebar/DisplayCard';
import "./Sidebar.css"

const Sidebar = props => {
  const dollarselectIcon = <FontAwesomeIcon icon={faSearchDollar} />;
  const userCircle = <FontAwesomeIcon icon={faUserCheck} />;
  /* 
    scientists theke add kora id er array and scientists der array ta props 
    diye recieve korlam, with distructuring

  */
  const {selected, scientist} = props;
  // selected scientist rakhar jonno ekta empty array declar korlam
  const mathcedScientist = [];
  /* 
    id array er opor loop kore selected secientist ke uporer array te push kore dilam
  */
    selected.forEach( id => {
      //  id diye filter kore secientist ber korlam
      const matched = scientist.filter(singleScientist => singleScientist.id === id);
      if(matched){
        // id match korle seita new arrya te add korbo
        /* jehetu filter akta array return dey rr eikhane ekta matro element return dibe tai 0 index er
          element ke add kortesi that's why oporer array ta simple thake
        */
        mathcedScientist.push(matched[0]);
      }
  });
  /* oporer new array er opor reduce kora selected scientists der salary add kori */
  const addSalary =(prev, current) => prev + current.salary;
  const totalSalary = mathcedScientist.reduce(addSalary, 0);
  return (
    <div className="sidebar-container">
      <div className="card-status">
        <h4>{userCircle} Selected Scientists: {selected?.length}</h4>
        <h4 className="total-salary">Total Salary: {dollarselectIcon} {totalSalary}</h4>
      </div>
      <div className="selected-all-cards">
        {
          /* matched or selected scientist der map kore DisplaySidber component er moddhe pass kortesi
            sekhan theke image and name display and desing kora hobe...
          */
          mathcedScientist?.map(selectedScientist => <DisplaySidebar key={selectedScientist.id} scientist={selectedScientist} />)
        }
        
      </div>
    </div>
  );
};

export default Sidebar;