import type { Meta, StoryObj } from '@storybook/angular';
import { LogoComponent } from './logo.component';

const meta: Meta<LogoComponent> = {
  title: 'Shared/Logo',
  component: LogoComponent,
  args: { inverse: false },
};
export default meta;

type Story = StoryObj<LogoComponent>;

export const Default: Story = {};

export const OnDarkBand: Story = {
  args: { inverse: true },
  render: (args) => ({
    props: args,
    template: `<div class="band" style="padding:32px;border-radius:14px"><or-logo [inverse]="inverse" /></div>`,
  }),
};
