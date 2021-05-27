import React, { Children } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import Link, { LinkProps } from 'next/link';

type NavLinkProps = React.PropsWithChildren<LinkProps> & {
  activeClassName?: string;
  notActiveClassName?: string;
};

export const NavLink = ({
  children,
  activeClassName = 'active-item',
  notActiveClassName = 'item',
  ...props
}: NavLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as React.ReactElement;
  const childClassName = child.props.className || '';
  const matchedPath =
    asPath.split('/').indexOf(props.href.toString().substring(1)) === 1;
  const isActive = asPath === props.href || asPath === props.as || matchedPath;
  const className = cx(childClassName, {
    [activeClassName]: isActive,
    [notActiveClassName]: !isActive,
  });

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};
