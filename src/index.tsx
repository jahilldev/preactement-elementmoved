import { define } from 'preactement';

/* -----------------------------------
 *
 * Assets
 *
 * -------------------------------- */

import '@/styles.scss';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { InfoArea } from '@/components/infoArea.component';

/* -----------------------------------
 *
 * Helper
 *
 * -------------------------------- */

const delay = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1e3))

/* -----------------------------------
 *
 * Define
 *
 * -------------------------------- */

define('info-area', () => InfoArea, { attributes: ['title-value', 'alert-type'] });

/* -----------------------------------
 *
 * Move
 *
 * -------------------------------- */

const root = document.querySelector('main');
const child = document.createElement('section');
const element = document.createElement('info-area');

element.innerHTML = '<div slot="messageValue">Slots are persisted</div><em>This is a child</em>';
element.classList.add('info');
element.setAttribute('title-value', 'Information');
element.setAttribute('alert-type', 'info');

root?.appendChild(element);

// Delay for visibility
(async () => {
  await delay(2);
  root!.innerHTML = '';
  await delay(1);
  root?.appendChild(child);
  child.appendChild(element);
})();