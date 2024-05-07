export interface CatsApiResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface DogsApiResponse {
  message: string[];
  status: string;
}

export type { CatsApiResponse as CatsApiResponseType, DogsApiResponse as DogsApiResponseType };
