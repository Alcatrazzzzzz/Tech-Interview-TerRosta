export interface NavLinkProps {
  heading: string;
  iconFileName: string;
}

export interface AdressPageState {
  loading: boolean;
  error: boolean | string;
  data: null | { suggestions: { value: string }[] };
}
