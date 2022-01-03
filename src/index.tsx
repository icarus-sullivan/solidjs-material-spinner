import { createEffect, mergeProps, Show } from 'solid-js';

import './style.scss';

type VisibleProp = () => boolean;
interface Props {
  radius?: number | string,
  color?: string,
  stroke?: number | string,
  visible?: VisibleProp,
  [key: string]: any
}

const DEFAULT_PROPS = {
  color: '#333',
  radius: 80,
  stroke: 10,
  visible: () => true,
}

export default (props: Props) => {
  const { visible, color, stroke, radius } = mergeProps(DEFAULT_PROPS, props);

  createEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
  
    if (!document.getElementById(ID)) {
      const head = document.head || document.getElementsByTagName('head')[0];
      const sprc: any = document.createElement('style');
      sprc.id = ID;
      sprc.type = "text/css";
      if( sprc.styleSheet ) {
        sprc.styleSheet.cssText = css;
      } else {
        sprc.appendChild(document.createTextNode(css));
      }
      if( head ) {
        head.appendChild(sprc);
      }
    }
  })

  return (
    <Show when={visible()}>
      <div
          class="solidjs-spinner-material"
          style={{
            width: `${radius}px`,
            height: `${radius}px`,
            'border-color': color,
            'border-width': `${stroke}px`,
          }} 
        />
    </Show>
  );
}