import { FC } from 'react';

interface MockProfilePictureProps {}

const MockProfilePicture: FC<MockProfilePictureProps> = ({}) => {
  return (
    <div className="bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-500 w-11 h-11 rounded-full p-[3px]">
      <img
        src="/pexels-cat.jpg"
        alt="test cat image"
        className="w-full h-full object-cover bg-gray-200 rounded-full"
      />
    </div>
  );
}

export default MockProfilePicture;