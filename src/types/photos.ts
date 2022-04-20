export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPhotosState {
  photos: IPhoto[];
  activePhoto: number;
  isLoading: boolean;
  error: string;
}
