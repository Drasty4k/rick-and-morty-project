export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export type GenderType = "Female" | "Male" | "Genderless" | "unknown";

export interface Character extends ResourceBase {
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: GenderType;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export type Details = "status" | "species" | "type" | "genders";
