import { Link } from 'react-router-dom';
import scss from './IconLinkedIn.module.scss';

export const IconLinkedIn = () => {
  return (
    <>
      <Link
        className={scss.link}
        to="https://www.linkedin.com/company/fundacja-na-rzecz-pomocy-chorym-na-bia%C5%82aczki/"
        target="_blank"
      >
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="skill-icons:linkedin" clipPath="url(#clip0_910_2143)">
            <g id="Group">
              <path
                id="Vector"
                d="M23.4688 0H7.53125C3.648 0 0.5 3.148 0.5 7.03125V22.9688C0.5 26.852 3.648 30 7.53125 30H23.4688C27.352 30 30.5 26.852 30.5 22.9688V7.03125C30.5 3.148 27.352 0 23.4688 0Z"
                fill="white"
              />
              <path
                id="Vector_2"
                d="M23.4688 0H7.53125C3.648 0 0.5 3.148 0.5 7.03125V22.9688C0.5 26.852 3.648 30 7.53125 30H23.4688C27.352 30 30.5 26.852 30.5 22.9688V7.03125C30.5 3.148 27.352 0 23.4688 0Z"
                fill="#0A66C2"
              />
              <path
                id="Vector_3"
                d="M22.1463 25.51H25.5764C25.7007 25.51 25.8199 25.4606 25.9078 25.3727C25.9957 25.2848 26.0451 25.1656 26.0451 25.0413L26.0469 17.7942C26.0469 14.0064 25.2307 11.0948 20.8041 11.0948C19.1214 11.0323 17.5346 11.8997 16.6783 13.3481C16.6741 13.3552 16.6678 13.3606 16.6602 13.3637C16.6526 13.3668 16.6442 13.3673 16.6363 13.3651C16.6284 13.363 16.6214 13.3583 16.6164 13.3519C16.6114 13.3454 16.6087 13.3374 16.6086 13.3293V11.9133C16.6086 11.789 16.5592 11.6697 16.4713 11.5818C16.3834 11.4939 16.2642 11.4445 16.1398 11.4445H12.8847C12.7604 11.4445 12.6412 11.4939 12.5533 11.5818C12.4654 11.6697 12.416 11.789 12.416 11.9133V25.0406C12.416 25.1649 12.4654 25.2842 12.5533 25.3721C12.6412 25.46 12.7604 25.5094 12.8847 25.5094H16.3146C16.4389 25.5094 16.5581 25.46 16.646 25.3721C16.7339 25.2842 16.7833 25.1649 16.7833 25.0406V18.5516C16.7833 16.7168 17.1314 14.9399 19.4061 14.9399C21.6485 14.9399 21.6775 17.0394 21.6775 18.6704V25.0412C21.6775 25.1655 21.7269 25.2848 21.8148 25.3727C21.9027 25.4606 22.022 25.51 22.1463 25.51ZM4.95312 6.98766C4.95312 8.37797 6.0977 9.52195 7.48813 9.52195C8.8782 9.52184 10.0221 8.37715 10.0221 6.98707C10.0218 5.59699 8.87785 4.45312 7.48766 4.45312C6.09711 4.45312 4.95312 5.59734 4.95312 6.98766ZM5.76863 25.51H9.20305C9.32737 25.51 9.4466 25.4606 9.5345 25.3727C9.62241 25.2848 9.6718 25.1655 9.6718 25.0412V11.9133C9.6718 11.789 9.62241 11.6697 9.5345 11.5818C9.4466 11.4939 9.32737 11.4445 9.20305 11.4445H5.76863C5.64431 11.4445 5.52508 11.4939 5.43718 11.5818C5.34927 11.6697 5.29988 11.789 5.29988 11.9133V25.0412C5.29988 25.1655 5.34927 25.2848 5.43718 25.3727C5.52508 25.4606 5.64431 25.51 5.76863 25.51Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_910_2143">
              <rect
                width="30"
                height="30"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </>
  );
};
