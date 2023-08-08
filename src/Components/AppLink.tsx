import { NavigateOptions, To } from 'react-router-dom';
import { Link, LinkProps, useNavigate } from 'react-router-dom';

export const linkBasename = '/ansible/seats-administration';
export const mergeToBasename = (
  to: To,
  basename: string = linkBasename
): To => {
  if (typeof to === 'string') {
    // replace possible "//" after basename
    return `${basename}${to}`.replace(`^${basename}//`, '/');
  }

  return {
    ...to,
    pathname: `${basename}${to.pathname}`.replace(`^${basename}//`, '/'),
  };
};

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const appNavigate = (to: string, props?: NavigateOptions) => {
    return navigate(mergeToBasename(to), props);
  };
  return appNavigate;
};

export const AppLink = (props: LinkProps) => (
  <Link {...props} to={mergeToBasename(props.to, linkBasename)} />
);
