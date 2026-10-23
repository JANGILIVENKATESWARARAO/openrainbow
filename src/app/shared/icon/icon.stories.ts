import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { IconComponent } from './icon.component';
import { ICON_NAMES } from './icons';

const meta: Meta<IconComponent> = {
  title: 'Shared/Icon',
  component: IconComponent,
  args: { name: 'shield' },
  argTypes: { name: { control: 'select', options: Object.keys(ICON_NAMES) } },
  render: (args) => ({
    props: args,
    template: `<span class="icon-tile"><or-icon [name]="name" /></span>`,
  }),
};
export default meta;

type Story = StoryObj<IconComponent>;

export const Single: Story = {};

/** Every icon in the set, as used in cards and menus. */
export const AllIcons: Story = {
  decorators: [moduleMetadata({ imports: [IconComponent] })],
  render: () => ({
    props: { names: Object.keys(ICON_NAMES) },
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:16px">
        @for (n of names; track n) {
          <div style="display:grid;justify-items:center;gap:8px;font-size:14px;color:var(--muted)">
            <span class="icon-tile"><or-icon [name]="n" /></span>{{ n }}
          </div>
        }
      </div>`,
  }),
};
