import type { Meta, StoryObj } from '@storybook/angular';
import { CtaBandComponent } from './cta-band.component';

const meta: Meta<CtaBandComponent> = {
  title: 'Shared/CTA band',
  component: CtaBandComponent,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<CtaBandComponent>;

/** Uses the default text from site.json → cta. */
export const Default: Story = {};

export const CustomTitle: Story = { args: { title: 'Talk to us about hardware and software sales.' } };
