import { createEffect, mergeProps, Show } from 'solid-js';

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

const css = `
.solidjs-spinner-material {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 10px solid #333;
  box-sizing: border-box;
  -webkit-animation: rsm-sweep 1s linear alternate infinite, rsm-rotate 0.8s linear infinite;
          animation: rsm-sweep 1s linear alternate infinite, rsm-rotate 0.8s linear infinite;
}
@keyframes rsm-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rsm-rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rsm-sweep {
  0% {
    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
  }
}
@-webkit-keyframes rsm-sweep {
  0% {
    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
  }
}
`;

const ID = 'spinner_id_style';

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