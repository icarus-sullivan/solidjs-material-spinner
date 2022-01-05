import { mergeProps, Show } from 'solid-js';

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