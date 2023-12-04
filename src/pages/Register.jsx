import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import Button from "../components/atoms/Button";
import Navbar from "../components/Navbar";
import backIcon from "../assets/icons/back-icon.svg";
import computerGuyImg from "../assets/imgs/computer-guy.png";
import successfulManImg from "../assets/imgs/successful-man.png";
import successfullyDoneImg from "../assets/imgs/successfully-done.png";
import guyWalkingImg from "../assets/imgs/guy-walking.png";
import girlWalkingImg from "../assets/imgs/girl-walking.png";

const Register = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid bg-darkBlue font-montserrat text-white">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="container mx-auto grid max-w-[80%] md:grid-cols-2">
        <Button
          iconPath={backIcon}
          variant="icon"
          extraStyle="mt-11 md:hidden"
          onClick={goBack}
        />

        <h3 className="font-3xl mt-11 font-semibold text-lightPurple md:hidden">
          {" "}
          Register{" "}
        </h3>
        <img
          src={computerGuyImg}
          alt="computer-guy-image"
          className="mt-8 aspect-[4/5]"
        />
        <div>
          <div>
            <h3 className="font-3xl mt-11 hidden font-semibold text-lightPurple md:block">
              {" "}
              Register{" "}
            </h3>

            <span className="flex items-end text-xs">
              {" "}
              Be part of this movement!
              <span className="flex w-[90px] items-end justify-center border-b border-dashed border-lightPurple">
                <img
                  src={girlWalkingImg}
                  alt="girl-walking"
                  className="h-6 scale-x-[-1]"
                />
                <img
                  src={guyWalkingImg}
                  alt="guy-walking"
                  className="h-7 scale-x-[-1]"
                />
              </span>
            </span>
            <h3 className="mt-1.7 text-xl uppercase"> Create you account</h3>
          </div>
          <form className="mt-6 space-y-4 text-sm">
            <div className="grid space-y-4 md:grid-cols-2">
              <div className="grid">
                <span> Team's Name </span>
                <input
                  placeholder="Enter the name of your group"
                  className="rounded border border-white bg-transparent px-6 py-3 placeholder:text-gray"
                />
              </div>
              <div className="grid">
                <span> Phone </span>
                <input
                  placeholder="Enter your phone number"
                  className="rounded border border-white bg-transparent px-6 py-3 placeholder:text-gray"
                />
              </div>
              <div className="grid">
                <span> Email </span>
                <input
                  placeholder="Enter your email address"
                  className="rounded border border-white bg-transparent px-6 py-3 placeholder:text-gray"
                />
              </div>
              <div className="grid">
                <span> Project Topic </span>
                <input
                  placeholder="What is your group project topic"
                  className="rounded border border-white bg-transparent px-6 py-3 placeholder:text-gray"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 md:grid">
              <div className="grid">
                <label for="cars">Category</label>

                <select
                  name="cars"
                  id="cars"
                  className="rounded border border-white bg-transparent px-6 py-3"
                >
                  <option value="volvo">Select your category</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="grid">
                <label for="cars">Group Size</label>

                <select
                  name="cars"
                  id="cars"
                  className="rounded border border-white bg-transparent px-6 py-3"
                >
                  <option value="volvo">Select your category</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <span className="text-[9px] italic text-darkPink">
              Please review your registration details before submitting
            </span>
            <div className="flex items-start gap-2">
              <input type="checkbox" name="" id="" />
              <span className="text-[10px] ">
                I agreed with the event terms and conditions{" "}
                <br className="md:hidden" />
                and privacy policy
              </span>
            </div>
          </form>
          <Button
            name="submit"
            extraStyle="block self-center w-fit"
            onClick={showModal}
          />
        </div>
      </div>
      <Modal
        className="grid bg-transparent"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="relative aspect-[1/1] w-[70%]">
          <img
            src={successfullyDoneImg}
            alt="successfully-done-image"
            className="absolute"
          />
          <img
            src={successfulManImg}
            alt="successfully-done-image"
            className="absolute"
          />
        </div>
        <h3> Congratulations you have successfully Registered! </h3>
        <p>
          {" "}
          Yes, it was easy and you did it! check your mail box for next step{" "}
        </p>
        <Button name="Back" extraStyle="w-full" onClick={handleCancel} />
      </Modal>
    </div>
  );
};

export default Register;
