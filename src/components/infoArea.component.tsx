import { h, Fragment } from 'preact';
import { useEffect } from 'preact/hooks';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  alertType: string;
  titleValue: string;
  messageValue: string;
  children: any;
}

/* -----------------------------------
 *
 * Button
 *
 * -------------------------------- */

function InfoArea({ messageValue, titleValue, children }: IProps) {
  useEffect(() => {
    console.log('<info-area /> -> mounted');

    return () => {
      console.log('<info-area /> -> unmounted');
    };
  }, []);

  return (
    <Fragment>
      <h3 class="title">{titleValue}</h3>
      {children}
      <div class="slot">{messageValue}</div>
    </Fragment>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { InfoArea };
