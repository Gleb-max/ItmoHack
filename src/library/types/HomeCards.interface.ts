export type PetCard = {
  name: string;
  breed: string;
  age: string;
  photo: string;
};

export type FastHomeCard = {
  main: string;
  description: string;
};

export type HomeFastAccessCard = PetCard | FastHomeCard;
