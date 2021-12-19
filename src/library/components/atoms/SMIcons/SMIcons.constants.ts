/* eslint-disable prettier/prettier */
//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Icons} from 'library/types';

type IconsDataMapItem = {
  d: string;
  evenOdd?: boolean;
};

type CommonIconsDataMap = Record<Icons.CommonIconName, IconsDataMapItem[]>;
type TabBarIconsDataMap = Record<Icons.TabBarIconName, IconsDataMapItem[]>;
type IconsDataMap = Record<Icons.SMIconsName, IconsDataMapItem[]>;

const commonIcons: CommonIconsDataMap = {
  ic_wrong_icon: [
    {
      d: 'M3 3h26v26H3V3z',
    },
  ],
  ic_arrow_right: [
    {
      d: 'M14.586 12L7.293 4.707l1.414-1.414L17.414 12l-8.707 8.707-1.414-1.414L14.586 12z',
      evenOdd: true,
    },
  ],
  ic_next: [
    {
      d: 'M17.5858 13H3V11H17.5858L11.2929 4.70711L12.7071 3.29289L21.4142 12L12.7071 20.7071L11.2929 19.2929L17.5858 13Z',
      evenOdd: true,
    },
  ],
  ic_clear: [
    {
      d: 'M10 13.0044L3.00442 20L0 16.9956L6.99558 10L0 3.00442L3.00442 0L10 6.99558L16.9956 0L20 3.00442L13.0044 10L20 16.9956L16.9956 20L10 13.0044Z',
      evenOdd: true,
    },
  ],
  ic_visible: [
    {
      d: 'M12 4C14.7276 4 17.3357 5.43062 19.7663 7.78115C20.5955 8.58305 21.3457 9.43916 22.0061 10.2956C22.4046 10.8124 22.6875 11.219 22.8425 11.4612L23.1871 12L22.8425 12.5388C22.6875 12.781 22.4046 13.1876 22.0061 13.7044C21.3457 14.5608 20.5955 15.417 19.7663 16.2189C17.3357 18.5694 14.7276 20 12 20C9.27247 20 6.66434 18.5694 4.23373 16.2189C3.40451 15.417 2.65433 14.5608 1.99393 13.7044C1.59543 13.1876 1.3125 12.781 1.15759 12.5388L0.812988 12L1.15759 11.4612C1.3125 11.219 1.59543 10.8124 1.99393 10.2956C2.65433 9.43916 3.40451 8.58305 4.23373 7.78115C6.66434 5.43062 9.27247 4 12 4ZM20.4223 11.5169C19.8176 10.7327 19.1302 9.9482 18.376 9.21885C16.2825 7.19438 14.1051 6 12 6C9.89495 6 7.71751 7.19438 5.62406 9.21885C4.86986 9.9482 4.18241 10.7327 3.57777 11.5169C3.44718 11.6862 3.32651 11.8478 3.21619 12C3.32651 12.1522 3.44718 12.3138 3.57777 12.4831C4.18241 13.2673 4.86986 14.0518 5.62406 14.7811C7.71751 16.8056 9.89495 18 12 18C14.1051 18 16.2825 16.8056 18.376 14.7811C19.1302 14.0518 19.8176 13.2673 20.4223 12.4831C20.5529 12.3138 20.6735 12.1522 20.7839 12C20.6735 11.8478 20.5529 11.6862 20.4223 11.5169ZM8.00002 12C8.00002 14.2091 9.79088 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8C9.79088 8 8.00002 9.79086 8.00002 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12Z',
      evenOdd: true,
    },
  ],
  ic_invisible: [
    {
      d: 'M2.70713 1.29291L1.29292 2.70712L5.35774 6.77194C4.97908 7.08575 4.60434 7.42277 4.23373 7.78116C3.40451 8.58306 2.65433 9.43917 1.99393 10.2956C1.59543 10.8125 1.3125 11.219 1.15759 11.4612L0.812988 12L1.15759 12.5388C1.3125 12.781 1.59543 13.1876 1.99393 13.7044C2.65433 14.5609 3.40451 15.417 4.23373 16.2189C6.66434 18.5694 9.27247 20 12 20C13.7209 20 15.3943 19.4305 17.0056 18.4198L21.2929 22.7071L22.7071 21.2929L2.70713 1.29291ZM15.5447 16.9589L14.032 15.4462C13.4365 15.7981 12.7418 16 12 16C9.79088 16 8.00002 14.2092 8.00002 12C8.00002 11.2582 8.20195 10.5636 8.55384 9.96805L6.77974 8.19395C6.39235 8.50636 6.0068 8.84874 5.62406 9.21886C4.86986 9.94822 4.18241 10.7327 3.57777 11.5169C3.44718 11.6862 3.32651 11.8478 3.21619 12C3.32651 12.1522 3.44718 12.3138 3.57777 12.4831C4.18241 13.2673 4.86986 14.0518 5.62406 14.7812C7.71751 16.8056 9.89495 18 12 18C13.1682 18 14.3586 17.6322 15.5447 16.9589ZM10.0678 11.482C10.0236 11.6472 10 11.8209 10 12C10 13.1046 10.8955 14 12 14C12.1792 14 12.3528 13.9765 12.5181 13.9323L10.0678 11.482ZM20.0981 15.891L18.6838 14.4767C19.318 13.8357 19.9009 13.1593 20.4223 12.4831C20.5529 12.3138 20.6735 12.1522 20.7839 12C20.6735 11.8478 20.5529 11.6862 20.4223 11.5169C19.8176 10.7327 19.1302 9.94822 18.376 9.21886C16.2825 7.19439 14.1051 6.00001 12 6.00001C11.4777 6.00001 10.951 6.07354 10.4221 6.21503L8.84017 4.63306C9.87262 4.22139 10.9271 4.00001 12 4.00001C14.7276 4.00001 17.3357 5.43064 19.7663 7.78116C20.5955 8.58306 21.3457 9.43917 22.0061 10.2956C22.4046 10.8125 22.6875 11.219 22.8425 11.4612L23.1871 12L22.8425 12.5388C22.6875 12.781 22.4046 13.1876 22.0061 13.7044C21.4349 14.4451 20.7966 15.1856 20.0981 15.891Z',
      evenOdd: true,
    },
  ],
  ic_star: [
    {
      d: 'M6.17022 14.8942L4.794 22.9182L12 19.1298L19.206 22.9182L17.8297 14.8942L23.6595 9.21159L15.603 8.04091L12 0.740448L8.39699 8.04091L0.340454 9.21159L6.17022 14.8942ZM15.6808 14.196L16.5497 19.2622L12 16.8702L7.45026 19.2622L8.31918 14.196L4.63838 10.6081L9.72512 9.86892L12 5.25955L14.2748 9.86892L19.3616 10.6081L15.6808 14.196Z',
      evenOdd: true,
    },
  ],
  ic_scissors: [
    {
      d: 'M17.8065 1.44153L19.4655 2.55847L13.2055 11.8568L15.5552 15.3469C16.0033 15.1732 16.4905 15.078 17 15.078C19.2091 15.078 21 16.8689 21 19.078C21 21.2871 19.2091 23.078 17 23.078C14.7909 23.078 13 21.2871 13 19.078C13 18.1023 13.3494 17.2081 13.9298 16.5139L12 13.6474L10.0702 16.5139C10.6506 17.2081 11 18.1023 11 19.078C11 21.2871 9.20914 23.078 7 23.078C4.79086 23.078 3 21.2871 3 19.078C3 16.8689 4.79086 15.078 7 15.078C7.50946 15.078 7.99667 15.1732 8.44481 15.3469L10.7945 11.8568L4.53448 2.55847L6.19352 1.44153L12 10.0662L17.8065 1.44153ZM9 19.078C9 20.1826 8.10457 21.078 7 21.078C5.89543 21.078 5 20.1826 5 19.078C5 17.9734 5.89543 17.078 7 17.078C8.10457 17.078 9 17.9734 9 19.078ZM19 19.078C19 20.1826 18.1046 21.078 17 21.078C15.8954 21.078 15 20.1826 15 19.078C15 17.9734 15.8954 17.078 17 17.078C18.1046 17.078 19 17.9734 19 19.078Z',
      evenOdd: true,
    },
  ],
  ic_phone: [
    {
      d: 'M10.8565 8.33796C11.3746 7.63975 11.5604 6.9039 10.9744 6.25437C9.65949 4.41439 8.77515 3.27655 8.22044 2.7286C7.16589 1.68687 5.43112 1.82778 4.51779 2.72771C4.02723 3.21107 3.86116 3.37706 3.35747 3.88867C0.551816 6.69583 2.26285 12.6301 6.81139 17.1831C11.3589 21.7351 17.2926 23.447 20.1041 20.6339C20.5689 20.1858 20.9624 19.7921 21.2728 19.464C22.1678 18.518 22.3037 16.8598 21.2669 15.7825C20.7354 15.2302 19.6503 14.3885 17.7329 13.017C17.1457 12.4919 16.4494 12.6057 15.811 13.0245C15.504 13.226 15.2805 13.4297 14.8585 13.8521L14.0923 14.6188C13.9914 14.7198 12.621 14.0335 11.2907 12.7019C9.95972 11.3696 9.2739 9.99912 9.37435 9.89868L10.1411 9.13148C10.275 8.99748 10.339 8.9326 10.4211 8.84633C10.5921 8.6666 10.7337 8.5035 10.8565 8.33796ZM15.5057 16.033L16.2721 15.2662C16.5044 15.0337 16.6549 14.8908 16.7773 14.7923C18.457 15.9985 19.4297 16.7569 19.8271 17.1698C20.0656 17.4176 20.0286 17.8699 19.8212 18.0891C19.5342 18.3924 19.1613 18.7655 18.7037 19.2069C16.8857 21.0257 12.0959 19.6437 8.22513 15.7692C4.35315 11.8934 2.97188 7.10285 4.7762 5.29755C5.27786 4.78804 5.4368 4.62918 5.92035 4.15271C6.10166 3.97407 6.59552 3.93395 6.81608 4.15182C7.24314 4.5737 8.03534 5.58805 9.20071 7.21139C9.14038 7.28629 9.06503 7.37093 8.97333 7.4673C8.90603 7.53804 8.84996 7.59488 8.72738 7.71758L7.96136 8.48402C6.65821 9.78706 7.76802 12.0048 9.87697 14.1158C11.9845 16.2254 14.203 17.3364 15.5057 16.033Z',
      evenOdd: true,
    },
  ],
  ic_chicken: [
    {
      d: 'M11.1793 10.0089C9.38577 9.80868 7.073 10.6085 5.47667 12.2077C3.48343 14.2045 3.5488 16.686 5.42669 18.5672C7.30458 20.4484 9.78165 20.5139 11.7749 18.5171C13.3509 16.9383 14.1492 14.6599 13.9769 12.8732C13.8987 12.0623 13.6206 11.3527 13.1245 10.8557C12.6425 10.3728 11.9601 10.0961 11.1793 10.0089ZM15.1811 10.2502L16.9944 8.43361L17.6758 8.88587C18.2647 9.27671 19.0564 9.20139 19.563 8.69387C20.1488 8.10704 20.1488 7.15561 19.563 6.56878C19.3296 6.33489 19.0345 6.18917 18.7154 6.14373L17.9717 6.03785L17.866 5.29287C17.8207 4.97316 17.6752 4.67757 17.4417 4.44368C16.8559 3.85685 15.9062 3.85685 15.3204 4.44368C14.8138 4.95119 14.7386 5.74433 15.1287 6.33424L15.5802 7.01688L13.7754 8.82495C14.0491 9.00103 14.3046 9.20556 14.5381 9.43955C14.7849 9.68672 14.9988 9.95839 15.1811 10.2502ZM11.7107 8.05982L13.0836 6.68447C12.6398 5.43768 12.9293 4.00562 13.9062 3.02695C15.273 1.65768 17.4891 1.65768 18.8559 3.02695C19.2285 3.40017 19.5064 3.84476 19.6783 4.32823C20.1609 4.50038 20.6047 4.77883 20.9773 5.15205C22.3441 6.52131 22.3441 8.74134 20.9773 10.1106C20.0003 11.0893 18.5708 11.3792 17.3262 10.9347L15.9256 12.3378C16.2987 14.8359 15.2508 17.8643 13.1848 19.9339C10.394 22.7297 6.65438 22.6309 4.01232 19.9841C1.37027 17.3373 1.27159 13.5911 4.06245 10.7953C6.14656 8.70746 9.20466 7.65746 11.7107 8.05982Z',
      evenOdd: true,
    },
  ],
  ic_question: [
    {
      d: 'M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0003 16.9983C12.5528 16.9983 13.0007 16.5506 13.0007 15.9983C13.0007 15.4461 12.5528 14.9983 12.0003 14.9983C11.4479 14.9983 11 15.4461 11 15.9983C11 16.5506 11.4479 16.9983 12.0003 16.9983ZM11 14H13C13 13.2016 13.1254 13.0553 13.9472 12.6444C15.3754 11.9303 16 11.2016 16 9.5C16 7.32063 14.2843 6 12 6C9.79086 6 8 7.79086 8 10H10C10 8.89543 10.8954 8 12 8C13.2772 8 14 8.55641 14 9.5C14 10.2984 13.8746 10.4447 13.0528 10.8556C11.6246 11.5697 11 12.2984 11 14Z',
      evenOdd: true,
    },
  ],
  ic_account: [
    {
      d: 'M8 9C8 5.13401 11.134 2 15 2C18.866 2 22 5.13401 22 9C22 12.866 18.866 16 15 16H13V18H11V20H9V22H2V16.5858L8.14801 10.4378C8.04995 9.96847 8 9.48731 8 9ZM11 16V14H15C17.7614 14 20 11.7614 20 9C20 6.23858 17.7614 4 15 4C12.2386 4 10 6.23858 10 9C10 9.49863 10.0727 9.98638 10.2141 10.4529L10.3879 11.0263L4 17.4142V20H7V18H9V16H11ZM13 9C13 10.1046 13.8954 11 15 11C16.1046 11 17 10.1046 17 9C17 7.89543 16.1046 7 15 7C13.8954 7 13 7.89543 13 9Z',
      evenOdd: true,
    },
  ],
  ic_search: [
    {
      d: 'M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929L20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z',
      evenOdd: true,
    },
  ],
  ic_arrow_left: [
    {
      d: 'M6.41412 13L12.707 19.2929L11.2928 20.7071L2.58569 12L11.2928 3.29289L12.707 4.70711L6.41412 11H20.9999V13H6.41412Z',
      evenOdd: true,
    },
  ],
  ic_error: [
    {
      d: 'M16.5563 1L23 7.44365V16.5563L16.5563 23H7.44365L1 16.5563V7.44365L7.44365 1H16.5563ZM15.7279 3H8.27208L3 8.27208V15.7279L8.27208 21H15.7279L21 15.7279V8.27208L15.7279 3ZM8.70711 16.7071L12 13.4142L15.2929 16.7071L16.7071 15.2929L13.4142 12L16.7071 8.70711L15.2929 7.29289L12 10.5858L8.70711 7.29289L7.29289 8.70711L10.5858 12L7.29289 15.2929L8.70711 16.7071Z',
      evenOdd: true,
    }
  ],
  ic_flag: [
    {
      d: 'M7 23H5H4V21H5V12V4V1H7V2H21.1247L18.126 7.99991L21.126 14H7V21H8V23H7ZM7 12V4H17.8893L15.89 8.00009L17.89 12H7Z',
      evenOdd: true,
    }
  ],
  ic_notification: [
    {
      d: 'M19 10C19 5.94082 16.7616 3.1235 13.8654 2.27771C13.7605 2.00636 13.5948 1.7541 13.3695 1.54243C12.5997 0.81919 11.4003 0.81919 10.6305 1.54243C10.4057 1.75364 10.2402 2.00525 10.1353 2.27592C7.23535 3.11803 5 5.92919 5 10C5 12.6339 4.46898 14.1098 3.48596 15.1793C3.32161 15.3582 2.87632 15.7678 2.57468 16.0453L2.57465 16.0453L2.57465 16.0453L2.5745 16.0454C2.43187 16.1766 2.32138 16.2783 2.28796 16.3119L2 16.604V20.0141H8.08798C8.29384 21.0761 8.87009 21.7867 9.9122 22.4226C11.1941 23.2049 12.8059 23.2049 14.0878 22.4226C15.0075 21.8614 15.6241 20.9989 15.8743 20.0141H22V16.604L21.712 16.3119C21.6817 16.2812 21.5757 16.1834 21.437 16.0555C21.1363 15.7781 20.6823 15.3592 20.5154 15.1769C19.5317 14.1024 19 12.6246 19 10ZM13.7367 20.0141H10.1786C10.3199 20.2769 10.5607 20.4754 10.954 20.7154C11.5963 21.1073 12.4037 21.1073 13.046 20.7154C13.3434 20.5339 13.5758 20.2937 13.7367 20.0141ZM19.0402 16.5274C19.2506 16.7573 19.7016 17.1774 20 17.4519V18.0141H4V17.4524C4.29607 17.1811 4.74843 16.7613 4.95849 16.5327C6.29422 15.0794 7 13.1178 7 10C7 6.21989 9.33277 4.01238 12 4.01238C14.6597 4.01238 17 6.23129 17 10C17 13.1078 17.706 15.07 19.0402 16.5274Z',
      evenOdd: true,
    }
  ],
  ic_add: [
    {
      d: 'M13 11H22V13H13V22H11V13H2V11H11V2H13V11Z',
      evenOdd: true,
    }
  ],
  ic_natural: [
    {
      d: 'M19.6278 12C21.7206 15.4223 22.2462 18.7245 20.4853 20.4853C18.7245 22.2462 15.4223 21.7206 12 19.6278C8.57778 21.7206 5.2756 22.2462 3.51477 20.4853C1.75393 18.7245 2.27952 15.4223 4.37225 12C2.27952 8.57779 1.75393 5.2756 3.51477 3.51477C5.2756 1.75393 8.57779 2.27952 12 4.37225C15.4223 2.27952 18.7245 1.75393 20.4853 3.51477C22.2462 5.2756 21.7206 8.57778 19.6278 12ZM9.17162 9.17162C10.098 8.24524 11.0568 7.44249 12 6.77451C12.9433 7.44249 13.9021 8.24524 14.8285 9.17162C15.7549 10.098 16.5576 11.0568 17.2256 12C16.5576 12.9433 15.7549 13.9021 14.8285 14.8285C13.9021 15.7549 12.9433 16.5576 12 17.2256C11.0568 16.5576 10.098 15.7549 9.17162 14.8285C8.24524 13.9021 7.44249 12.9433 6.77451 12C7.44249 11.0568 8.24524 10.098 9.17162 9.17162ZM4.92898 4.92898C5.79046 4.0675 7.82056 4.36807 10.1707 5.63348C9.35217 6.26231 8.54125 6.97357 7.75741 7.75741C6.97357 8.54125 6.26231 9.35217 5.63348 10.1707C4.36807 7.82056 4.0675 5.79046 4.92898 4.92898ZM16.2427 7.75741C17.0265 8.54125 17.7378 9.35217 18.3666 10.1707C19.632 7.82056 19.9326 5.79046 19.0711 4.92898C18.2096 4.0675 16.1795 4.36807 13.8294 5.63348C14.6479 6.26231 15.4588 6.97357 16.2427 7.75741ZM16.2427 16.2427C17.0265 15.4588 17.7378 14.6479 18.3666 13.8294C19.632 16.1795 19.9326 18.2096 19.0711 19.0711C18.2096 19.9326 16.1795 19.632 13.8294 18.3666C14.6479 17.7378 15.4588 17.0265 16.2427 16.2427ZM5.63348 13.8294C6.26231 14.6479 6.97357 15.4588 7.75741 16.2427C8.54125 17.0265 9.35217 17.7378 10.1707 18.3666C7.82056 19.632 5.79046 19.9326 4.92898 19.0711C4.0675 18.2096 4.36807 16.1795 5.63348 13.8294ZM13 12C13 11.4478 12.5523 11 12 11C11.4478 11 11 11.4478 11 12C11 12.5523 11.4478 13 12 13C12.5523 13 13 12.5523 13 12Z',
      evenOdd: true,
    }
  ],
  ic_sport: [
    {
      d: 'M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM20.8678 13.5458C18.9343 13.0966 17.1266 12.981 15.4388 13.2017C16.2798 15.2769 16.892 17.3073 17.2746 19.2932C19.1353 17.9452 20.4598 15.9025 20.8678 13.5458ZM15.4278 20.3242C15.0688 18.1639 14.4112 15.9334 13.4539 13.6332C10.7665 14.4645 8.41445 16.2568 6.37025 19.0222C7.91178 20.2597 9.86943 21 12 21C13.2137 21 14.3713 20.7597 15.4278 20.3242ZM4.94537 17.5892C7.15165 14.6878 9.72193 12.7533 12.6326 11.7959C12.4449 11.4028 12.2487 11.0076 12.044 10.6105C11.5271 10.7486 10.9913 10.8678 10.4373 10.9691C8.20661 11.3769 6.2731 11.4563 3.13698 11.4115C3.09583 11.4109 3.05656 11.4103 3.01904 11.4098C3.00641 11.6049 3 11.8017 3 12C3 14.1119 3.72742 16.0539 4.94537 17.5892ZM3.3769 9.41451C4.09049 7.03114 5.76522 5.06297 7.9511 3.96001C9.11789 5.60237 10.1533 7.21462 11.0576 8.79662C10.7397 8.87209 10.413 8.94037 10.0776 9.00167C8.05998 9.37052 6.26498 9.451 3.3769 9.41451ZM9.89553 3.24738C11.0661 4.92295 12.1064 6.57259 13.016 8.19642C14.9327 7.4552 16.4205 6.35363 17.4343 4.82525C15.9243 3.67974 14.0415 3 12 3C11.2753 3 10.5706 3.08565 9.89553 3.24738ZM18.9011 6.22255C20.1159 7.67214 20.8825 9.51014 20.9876 11.5233C18.7255 11.0358 16.5982 10.9638 14.6121 11.3045C14.4063 10.8628 14.1904 10.4192 13.9645 9.97357C16.0254 9.13959 17.694 7.91484 18.9011 6.22255Z',
      evenOdd: true,
    }
  ],
  ic_humanities: [
    {
      d: 'M21 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H21V18C20.4477 18 20 18.4477 20 19C20 19.5523 20.4477 20 21 20V22ZM18 19C18 18.6494 18.0602 18.3128 18.1707 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H18.1707C18.0602 19.6872 18 19.3506 18 19ZM6 4H19V16H6C5.64936 16 5.31278 16.0602 5 16.1707V5C5 4.44772 5.44772 4 6 4Z',
      evenOdd: true,
    }
  ],
  ic_soft_skills: [
    {
      d: 'M2.74011 2.25203L4.10512 11.8071L4.87687 12L4.10512 12.1929L2.74011 21.748L22.236 12L2.74011 2.25203ZM5.89483 10.1929L5.25984 5.74796L17.7639 12L5.25984 18.252L5.89483 13.8071L13.1231 12L5.89483 10.1929Z',
      evenOdd: true,
    }
  ],
  ic_technial: [
    {
      d: 'M18.6562 20.897L20.8733 18.6798L20.0925 15.843L20.4327 15.0305L23 13.5818V10.4464L20.44 8.99173L20.1055 8.18067L20.8961 5.34235L18.6774 3.12683L15.8403 3.90748L15.0296 3.56758L13.5808 1H10.4454L8.99072 3.56004L8.17985 3.89446L5.34198 3.10281L3.1267 5.31809L3.90748 8.15567L3.56758 8.96634L1 10.4151V13.5496L3.55774 15.0076L3.89252 15.8193L3.10197 18.6572L5.31809 20.8733L8.15567 20.0925L8.96644 20.4325L10.4153 22.999H13.5498L15.0067 20.4412L15.8183 20.1065L18.6562 20.897ZM18.8527 13.6256L17.9809 15.7078L18.6362 18.0886L18.0678 18.657L15.692 17.9951L13.609 18.8542L12.3873 20.999H11.5829L10.3714 18.8529L8.29155 17.9808L5.90947 18.6362L5.34203 18.0688L6.00385 15.693L5.14482 13.6101L3 12.3876V11.583L5.1471 10.3715L6.0192 8.29155L5.36375 5.90947L5.93001 5.34321L8.30576 6.00595L10.3895 5.14655L11.6093 3H12.4129L13.6245 5.1471L15.7044 6.0192L18.087 5.36362L18.6558 5.93166L17.9941 8.30696L18.8534 10.3906L21 11.6103V12.4139L18.8527 13.6256ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z',
      evenOdd: true,
    }
  ],
  ic_purchases: [
    {
      d: 'M7.03367 6C7.32766 3.81519 9.51103 2 12.0001 2C14.4891 2 16.6725 3.81519 16.9665 6H19.8471C20.9516 6 21.8471 6.89543 21.8471 8C21.8471 8.09464 21.8404 8.18916 21.827 8.28284L20.1127 20.2828C19.9719 21.2681 19.1281 22 18.1328 22H5.86737C4.87207 22 4.02823 21.2681 3.88747 20.2828L2.17319 8.28284C2.01698 7.18937 2.77678 6.17631 3.87024 6.0201C3.96393 6.00672 4.05845 6 4.15309 6H7.03367ZM14.928 6C14.624 4.93808 13.3981 4 12.0001 4C10.602 4 9.37619 4.93808 9.0722 6H14.928ZM4.15309 8H7.00008V10H9.00008V8H15.0001V10H17.0001V8H19.8471L18.1328 20H5.86737L4.15309 8Z',
      evenOdd: true,
    }
  ]
};

const tabBarIcons: TabBarIconsDataMap = {
  ic_tabbar_rating: [
    {
      d: 'M13 19V17.9291C14.9835 17.6454 16.6988 16.5302 17.7813 14.9478C20.4954 14.5739 22 12.2228 22 9V6C22 4.89543 21.1046 4 20 4H18.7324C18.3866 3.4022 17.7403 3 17 3H7C6.25972 3 5.61337 3.4022 5.26756 4H4C2.89543 4 2 4.89543 2 6V9C2 12.2228 3.50458 14.5739 6.21866 14.9478C7.30124 16.5302 9.0165 17.6454 11 17.9291V19H10C8.89543 19 8 19.8954 8 21H16C16 19.8954 15.1046 19 14 19H13ZM4 6H5V11C5 11.4578 5.04394 11.9052 5.12783 12.3385C4.39028 11.6746 4 10.5313 4 9V6ZM19 6V11C19 11.4578 18.9561 11.9052 18.8722 12.3385C19.6097 11.6746 20 10.5313 20 9V6H19ZM7 11V5H17V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_rating_active: [
    {
      d: 'M13 19V17.9291C14.9835 17.6454 16.6988 16.5302 17.7813 14.9478C20.4954 14.5739 22 12.2228 22 9V6C22 4.89543 21.1046 4 20 4H18.7324C18.3866 3.4022 17.7403 3 17 3H7C6.25972 3 5.61337 3.4022 5.26756 4H4C2.89543 4 2 4.89543 2 6V9C2 12.2228 3.50458 14.5739 6.21866 14.9478C7.30124 16.5302 9.0165 17.6454 11 17.9291V19H10C8.89543 19 8 19.8954 8 21H16C16 19.8954 15.1046 19 14 19H13ZM4 6H5V11C5 11.4578 5.04394 11.9052 5.12783 12.3385C4.39028 11.6746 4 10.5313 4 9V6ZM19 6V11C19 11.4578 18.9561 11.9052 18.8722 12.3385C19.6097 11.6746 20 10.5313 20 9V6H19ZM7 11V5H17V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_field: [
    {
      d: 'M2 19.7208L9.10794 22.0901L16.0769 18.1078L22 20.477V4.32298L15.9231 1.89221L8.89206 5.90994L2 3.61259V19.7208ZM14 16.9911L10 19.2768V7.58033L14 5.29462V16.9911ZM16 15.923L20 17.523V5.67704L16.0769 4.10781L16 4.15176V15.923ZM4 18.2793L8 19.6126V7.72077L4 6.38744V18.2793Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_field_active: [
    {
      d: 'M2 19.7208L9.10794 22.0901L16.0769 18.1078L22 20.477V4.32298L15.9231 1.89221L8.89206 5.90994L2 3.61259V19.7208ZM14 16.9911L10 19.2768V7.58033L14 5.29462V16.9911ZM16 15.923L20 17.523V5.67704L16.0769 4.10781L16 4.15176V15.923ZM4 18.2793L8 19.6126V7.72077L4 6.38744V18.2793Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_shop: [
    {
      d: 'M7.03367 6C7.32766 3.81519 9.51103 2 12.0001 2C14.4891 2 16.6725 3.81519 16.9665 6H19.8471C20.9516 6 21.8471 6.89543 21.8471 8C21.8471 8.09464 21.8404 8.18916 21.827 8.28284L20.1127 20.2828C19.9719 21.2681 19.1281 22 18.1328 22H5.86737C4.87207 22 4.02823 21.2681 3.88747 20.2828L2.17319 8.28284C2.01698 7.18937 2.77678 6.17631 3.87024 6.0201C3.96393 6.00672 4.05845 6 4.15309 6H7.03367ZM14.928 6C14.624 4.93808 13.3981 4 12.0001 4C10.602 4 9.37619 4.93808 9.0722 6H14.928ZM4.15309 8H7.00008V10H9.00008V8H15.0001V10H17.0001V8H19.8471L18.1328 20H5.86737L4.15309 8Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_shop_active: [
    {
      d: 'M7.03367 6C7.32766 3.81519 9.51103 2 12.0001 2C14.4891 2 16.6725 3.81519 16.9665 6H19.8471C20.9516 6 21.8471 6.89543 21.8471 8C21.8471 8.09464 21.8404 8.18916 21.827 8.28284L20.1127 20.2828C19.9719 21.2681 19.1281 22 18.1328 22H5.86737C4.87207 22 4.02823 21.2681 3.88747 20.2828L2.17319 8.28284C2.01698 7.18937 2.77678 6.17631 3.87024 6.0201C3.96393 6.00672 4.05845 6 4.15309 6H7.03367ZM14.928 6C14.624 4.93808 13.3981 4 12.0001 4C10.602 4 9.37619 4.93808 9.0722 6H14.928ZM4.15309 8H7.00008V10H9.00008V8H15.0001V10H17.0001V8H19.8471L18.1328 20H5.86737L4.15309 8Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_profile: [
    {
      d: 'M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_profile_active: [
    {
      d: 'M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_events: [
    {
      d: 'M8 6H6V5H4V8H20V5H18V6H16V5H8V6ZM20 10H4V20H20V10ZM16 3H8V2H6V3H4C2.89543 3 2 3.89543 2 5V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V5C22 3.89543 21.1046 3 20 3H18V2H16V3ZM7 14V12H9V14H7ZM11 14H13V12H11V14ZM15 14V12H17V14H15ZM7 16V18H9V16H7ZM13 18H11V16H13V18Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_events_active: [
    {
      d: 'M8 6H6V5H4V8H20V5H18V6H16V5H8V6ZM20 10H4V20H20V10ZM16 3H8V2H6V3H4C2.89543 3 2 3.89543 2 5V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V5C22 3.89543 21.1046 3 20 3H18V2H16V3ZM7 14V12H9V14H7ZM11 14H13V12H11V14ZM15 14V12H17V14H15ZM7 16V18H9V16H7ZM13 18H11V16H13V18Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_cursor: [
    {
      d: 'M14.472 10.023H.4c3.753-3.06 9.85-9.4 14.072-9.4v9.4zM14.472 10.023h14.073c-3.753-3.06-9.85-9.4-14.073-9.4v9.4z',
    },
  ],
};

export const icons: IconsDataMap = {
  ...commonIcons,
  ...tabBarIcons,
};
