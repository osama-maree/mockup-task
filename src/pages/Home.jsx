import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { mockupData } from '../mockupData/mockData.js';
import MockupBox from '../component/MockupBox.jsx';
import MyButton from '../component/MyButton.jsx';

const Home = () => {
  return (
    <>
      <h4>Add members to Front-end development team</h4>
      <div className="searchItem">
        <AiOutlineSearch className="me-5" />
        <h5>Find members</h5>
      </div>
      <MockupBox mockupData={mockupData} />
      <footer>
        <MyButton text="Cancel" customClass="cancel" />
        <MyButton text="Save" customClass="save" />
      </footer>
    </>
  );
}

export default Home