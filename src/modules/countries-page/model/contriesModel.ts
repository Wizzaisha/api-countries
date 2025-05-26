export interface ContriesModel {
  flags: Flags;
  name: Name;
  capital: string[];
  region: string;
  population: number;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  ara: Ara;
  eng: Ara;
  tir: Ara;
}

export interface Ara {
  official: string;
  common: string;
}
