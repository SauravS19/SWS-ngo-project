import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiFillCloseCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Carousel from './Carousel';
import image2 from '../../assets/gallery/img0.jpg';

import './About.css';
import './home.css';

Modal.setAppElement('#root'); // Ensures accessibility by attaching modal to the root element

const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage('');
  };

  return (
    <div className='container body flex mt-28 flex-col w-screen items-center gap-10'>
      <div className='header h-20 pb-20 w-auto bg-transparent text-6xl sm:text-7xl md:text-8xl font-serif'>
        About Us
      </div>

      <div className='text text-4xl italic text-violet-800'>from the Director</div>

      <div className="flex flex-col h-auto md:flex-row w-10/12 md:flex-1 mb-20 gap-5">
        <div className='flex flex-col h-auto w-full'>
          <div className='h-auto w-auto text-center'>
            "Protecting nature is not just a choice; it's our responsibility. Together, let's safeguard our planet for a sustainable future."
            Established in 2012, Samarpit Media Society (SMS) stands as a beacon of hope and progress in Uttarakhand, weaving a tapestry of transformative initiatives across environmental conservation, tourism promotion, and social empowerment.
            With unwavering dedication, SMS employs a symphony of creative mediums—from captivating audio-visual productions to soul-stirring musical compositions and vibrant community events—to illuminate minds and ignite change.
            WHAT WE DO (MISSION)
            Mission: Samarpit Media Society (SMS) strives to foster an enlightened and responsible society by addressing social, environmental, and cultural challenges through creative initiatives, raising awareness, inspiring action, and empowering communities.
            Vision: SMS envisions a future where Uttarakhand thrives as a model of sustainable progress, achieved through inclusive development, community empowerment, and global inspiration, paving the way for a brighter tomorrow for all.
          </div>
        </div>

        <div className='w-full flex md:items-center justify-center md:w-2/4'>
          <div className='h-64 w-2/4 md:w-full md:items-center'>
            <Carousel />
          </div>
        </div>
      </div>

      <div className='h-auto w-full flex flex-col items-center second gap-20'>
        <div className='bg-gray-500 w-full h-16'></div>

        <div className='h-auto w-10/12 flex flex-col'>
          <div className='w-full flex h-72 gap-5'>
            <div className='h-auto w-3/6 md:w-3/6 lg:w-3/6'>
              <img
                src={image2}
                className='h-full w-full rounded-3xl cursor-pointer'
                alt='Description'
                onClick={() => openModal(image2)}
              />
            </div>
            <div className='slide-left flex flex-col flex-wrap w-3/6 md:w-3/6 lg:w-4/6 text-center justify-center overflow-x-auto'>
              kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkd
              bfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
              slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsd
              hfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldjs
              fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfk
              jsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
            </div>
          </div>
        </div>

        <div className='h-auto w-10/12 flex flex-col'>
          <div className='w-full flex h-72 gap-5'>
            <div className='slide-right flex flex-col flex-wrap w-3/6 md:w-3/6 lg:w-4/6 text-center justify-center overflow-x-auto'>
              kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkd
              bfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
              slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsd
              hfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldjs
              fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfk
              jsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
            </div>
            <div className='h-auto w-3/6 md:w-3/6 lg:w-3/6'>
              <img
                src={image2}
                className='h-full w-full rounded-3xl cursor-pointer'
                alt='Description'
                onClick={() => openModal(image2)}
              />
            </div>
          </div>
        </div>

        <div className='h-auto w-10/12 flex flex-col'>
          <div className='w-full flex h-72 gap-5'>
            <div className='h-auto w-3/6 md:w-3/6 lg:w-3/6'>
              <img
                src={image2}
                className='h-full w-full rounded-3xl cursor-pointer'
                alt='Description'
                onClick={() => openModal(image2)}
              />
            </div>
            <div className='slide-left flex flex-col flex-wrap w-3/6 md:w-3/6 lg:w-4/6 text-center justify-center overflow-x-auto'>
              kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkd
              bfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
              slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsd
              hfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldjs
              fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfk
              jsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
            </div>
          </div>
        </div>

        <div className='flex flex-col flex-wrap w-full h-auto items-center bg-cover bg-top mt-20 pb-10'>
          <div className='flex flex-col md:flex-row items-center w-10/12 h-auto gap-10'>
            <div className='relative rounded-3xl w-3/12 flex-1 flex h-fit'>
              <div className='h-fit flex flex-col w-auto gap-5'>
                <div className='text-left text-xl md:text-4xl'>Programs</div>
                <div className='relative flex flex-col gap-2 md:gap-5'>
                  <div className='text-left text-sm sm:text-lg xl:text-xl'>Yoga</div>
                  <div className='text-left text-sm sm:text-lg xl:text-xl'>Dance</div>
                  <div className='text-left text-sm sm:text-lg xl:text-xl'>Singing</div>
                </div>
              </div>
            </div>
            <div className='relative rounded-3xl w-3/12 flex-1 flex h-fit'>
              <div className='h-fit flex flex-col w-auto gap-5'>
                <div className='text-left text-xl md:text-4xl'>What We Do</div>
                <div className='relative flex flex-col gap-2 md:gap-5'>
                  <div className='text-left text-sm sm:text-lg xl:text-xl'>Tourism</div>
                  <div className='text-left text-sm sm:text-lg xl:text-xl'>Social Empowerment</div>
                  <div className='text-left text-sm sm:text-lg xl:text-xl'>Environment Conservation</div>
                </div>
              </div>
            </div>
            <div className='relative rounded-3xl w-3/12 flex-1 flex h-fit'>
              <div className='h-fit flex flex-col w-6/12 items-center'>
                <div className='text-9xl'>SWS</div>
                <div className='text-lg'>Samarpit NGO</div>
                <div className='flex justify-center gap-10 mt-5'>
                  <AiFillFacebook className='h-10 w-10' />
                  <AiFillLinkedin className='h-10 w-10' />
                  <AiFillInstagram className='h-10 w-10' />
                  <AiFillYoutube className='h-10 w-10' />
                </div>
              </div>
            </div>
            <div className='relative rounded-3xl w-3/12 flex-1 flex h-fit'>
              <div className='h-fit flex flex-col w-auto gap-5'>
                <div className='text-left text-xl md:text-4xl'>Contact Us</div>
                <div className='relative flex flex-col gap-2 md:gap-5'>
                  <div className='text-left text-sm sm:text-lg xl:text-xl'>5343434545</div>
                  <div className='text-left text-sm sm:text-lg xl:text-xl'>djhgsjghhad@email.com</div>
                  <div className='text-left text-sm sm:text-lg xl:text-xl'>Ganesh Vihar Padampur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='Modal' overlayClassName='Overlay'>
        <button onClick={closeModal} className='close-button'>
          <AiFillCloseCircle size={40} color='white' />
        </button>
        <img src={modalImage} className='h-full w-full' alt='Full Size' />
      </Modal>
    </div>
  );
};

export default About;